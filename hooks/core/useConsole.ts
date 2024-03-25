import { useAuthLog } from "./utils/auth-console";

export interface UseConsoleOption {
  env?: "development" | "production" | "test";
  isAuth?: boolean;
}
export default function useConsole(options?: UseConsoleOption) {
  const defaultOptions = options || {
    env: process.env.NODE_ENV,
    isAuth: false,
  };
  const { env } = defaultOptions;

  const isAuth = useAuthLog() || false;
  const originalConsoleLog = console.log;
  const originalConsoleWarn = console.warn;
  const originalConsoleError = console.error;
  const originalConsoleDir = console.dir;
  const isStartDisplay =
    (env !== "development" && (isAuth || defaultOptions.isAuth)) ||
    env === "development";

  const log = function (...data: any[]) {
    // 添加自定义行为，比如增加时间戳
    const timestamp = new Date().toISOString();
    /**
     * log 在开发模式下会忽略权限，同正常log一样打印
     * log 在其他模式下则会考虑权限的
     */
    if (isStartDisplay) {
      originalConsoleLog(timestamp, ...data);
    }
  };

  const warn = function (...data: any[]) {
    // 添加自定义行为，比如增加时间戳
    const timestamp = new Date().toISOString();
    if (isStartDisplay) {
      originalConsoleWarn(timestamp, ...data);
    }
  };

  const error = function (...data: any[]) {
    // 添加自定义行为，比如增加时间戳
    const timestamp = new Date().toISOString();
    if (isStartDisplay) {
      originalConsoleError(timestamp, ...data);
    }
  };

  const dir = function (...data: any[]) {
    // 添加自定义行为，比如增加时间戳
    const timestamp = new Date().toISOString();
    if (isStartDisplay) {
      originalConsoleDir(timestamp, ...data);
    }
  };

  return {
    log,
    warn,
    error,
    dir,
  };
}
