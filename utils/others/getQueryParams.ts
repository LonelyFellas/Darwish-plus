/**
 *
 * @param URL URL地址
 * @returns URL中所带的参数
 */
const getQueryParams: (URL: string) => string = (URL = '') => {
  try {
    return JSON.parse(
      '{"' +
        decodeURI(
          (URL.split('?')[1] || '').replace(/&/g, '","').replace(/=/g, '":"') +
            '"}'
        )
    );
  } catch {
    console.error('发生错误了🥵');
    return '';
  }
};

export default getQueryParams;
