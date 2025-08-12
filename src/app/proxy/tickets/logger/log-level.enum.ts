import { mapEnumToOptions } from '@abp/ng.core';

export enum LogLevel {
  None = 0,
  Error = 1,
  Warn = 2,
  Log = 3,
  Info = 4,
}

export const logLevelOptions = mapEnumToOptions(LogLevel);
