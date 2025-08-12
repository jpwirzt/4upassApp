import type { LogLevel } from './log-level.enum';

export interface UserLoggerStatus {
  enabled: boolean;
  logLevel: LogLevel;
}
