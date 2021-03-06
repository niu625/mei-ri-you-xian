import Cookies from 'js-cookie';
/**
 *
 * @param {Object} info
 */
/**
 * 设置用户的cookie信息
 */
export function setCookie(info) {
  const arr = Object.entries(info); // 获取的用户信息转变为二维数组，遍历数组
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}
/**
 * 获取用户的cookie信息
 */
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    role: Cookies.get('role'),
    email: Cookies.get('email'),
  };
}
/**
 * 移除cookie
 */
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('role');
  Cookies.remove('email');
  return true;
}
