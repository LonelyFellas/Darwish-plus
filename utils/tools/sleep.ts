/**
 * @desc 使用async await 进项进行延时操作
 */
export default async function sleep(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), time);
  });
}
