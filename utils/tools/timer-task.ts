export interface TimerTaskOptions<T> {
  type: T;
  maxAttempts?: number;
  timeout?: number;
  attempts?: number;
  onSuccess?: () => void;
  onFailure?: () => void;
}

/**
 * 用户定时检查handler 的计时器任务
 * 一旦handler返回true，则停止计时器 调用onSuccess
 * 否则， attempts + 1， 直到达到最大尝试次数，则调用onFailure
 * @param callback 检查函数
 * @param options 计时器任务配置
 */
export default function timerTask(
  callback: () => boolean,
  options: TimerTaskOptions<"check">
): void;
/**
 * 用户定时任务的计时器任务
 * 一旦handler执行次数达到maxAttempts，则停止计时器 调用onSuccess
 * @param callback 执行函数
 * @param options 计时器任务配置
 */
export default function timerTask(
  callback: () => void,
  options: TimerTaskOptions<"action">
): void;
export default function timerTask(
  callback: () => boolean | void,
  options: TimerTaskOptions<"check" | "action">
): void {
  const {
    type = "action",
    maxAttempts = 5,
    timeout = 1000,
    onSuccess,
    onFailure,
  } = options;
  let attempts = options.attempts ?? 0;

  const intervalId = setInterval(() => {
    if (type === "check") {
      const result = callback() as boolean;
      if (result) {
        clearInterval(intervalId);
        onSuccess?.();
        return;
      } else if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        onFailure?.();
        return;
      }
    } else {
      callback() as void;
      if (attempts >= maxAttempts) {
        clearInterval(intervalId);
        onSuccess?.();
        return;
      }
    }
    attempts++;
  }, timeout);
}
