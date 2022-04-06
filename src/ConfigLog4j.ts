import { LogLevel } from 'typescript-logging';
import {Log4TSProvider, Logger} from "typescript-logging-log4ts-style";

const provider = Log4TSProvider.createProvider("Provider", {
  groups: [{
    expression: new RegExp(".+"),
    level: LogLevel.Info
  }],
});

const getLogger = (name: string): Logger => {
  return provider.getLogger(name);
}

export default getLogger;
