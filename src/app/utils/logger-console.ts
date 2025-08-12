import { ConfigStateService } from "@abp/ng.core";
import { LoggerService, LogLevel, UserLoggerStatus } from "@proxy/tickets/logger";
import { catchError } from "rxjs";

export class LoggerConsole {
    private static instance: LoggerConsole;
    private realInfo: (...data: any[]) => void = () => { };
    private realLog: (...data: any[]) => void = () => { };
    private realWarn: (...data: any[]) => void = () => { };
    private realError: (...data: any[]) => void = () => { };
    private realTrace: (...data: any[]) => void = () => { };
    private logStatus: UserLoggerStatus = {
        enabled: false,
        logLevel: LogLevel.None
    };

    private constructor(console: Console, private logService: LoggerService,
        configState: ConfigStateService
    ) {
        this.realInfo = console.info;
        this.realLog = console.log;
        this.realWarn = console.warn;
        this.realError = console.error;
        this.realTrace = console.trace;
        console.info = this.info.bind(this);
        console.log = this.log.bind(this);
        console.warn = this.warn.bind(this);
        console.error = this.error.bind(this);
        console.trace = this.trace.bind(this);

        if (configState.getOne('currentUser').isAuthenticated){
            this.loadStatusInstance();
        }
    }

    static initialize(console: Console, logService: LoggerService, configState: ConfigStateService): void {
        if (!LoggerConsole.instance) {
            LoggerConsole.instance = new LoggerConsole(console, logService, configState);
        }
    }

    static loadStatus(): void {
        if (LoggerConsole.instance) {
            LoggerConsole.instance.loadStatusInstance();
        } else {
            console.error("LoggerConsole is not initialized.");
        }
    }

    private loadStatusInstance(): void {
        this.logService.getUserLogger().subscribe(status => this.logStatus = status);
    }

    private jsonFriendlyErrorReplacer(key, value) {
        if (value instanceof Error) {
            return {
                // Pull all enumerable properties, supporting properties on custom Errors
                ...value,
                // Explicitly pull Error's non-enumerable properties
                name: value.name,
                message: value.message,
                stack: value.stack.slice(0, 1024),
            }
        }

        return value
    }

    private sendLog(level: LogLevel, data: any[]): void {
        this.logService.log(level, JSON.stringify(data, this.jsonFriendlyErrorReplacer))
            .pipe(catchError(err => {
                this.realError("Error sending log to server", err);
                return [];
            }))
            .subscribe();
    }

    info(...data: any[]): void {
        if (!this.logStatus.enabled || this.logStatus.logLevel < LogLevel.Info) return;
        this.realInfo(...data);
        this.sendLog(LogLevel.Info, data);
    }
    log(...data: any[]): void {
        if (!this.logStatus.enabled || this.logStatus.logLevel < LogLevel.Log) return;
        this.realLog(...data);
        this.sendLog(LogLevel.Log, data);
    }
    warn(...data: any[]): void {
        if (!this.logStatus.enabled || this.logStatus.logLevel < LogLevel.Warn) return;
        this.realWarn(...data);
        this.sendLog(LogLevel.Warn, data);
    }
    error(...data: any[]): void {
        if (!this.logStatus.enabled || this.logStatus.logLevel < LogLevel.Error) return;
        this.realError(...data);
        this.sendLog(LogLevel.Error, data);
    }
    trace(...data: any[]): void {
        if (!this.logStatus.enabled || this.logStatus.logLevel < LogLevel.Error) return;
        this.realTrace(...data);
        this.sendLog(LogLevel.Error, data);
    }
}