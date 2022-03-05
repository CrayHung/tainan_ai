// **localStorage
// ==> 在 HTML5 前，最多只能在cookie存4K資料
// ==> HTML5 加入 Local Storage 作為local端的儲存
//     - 儲存資料方式: key value (value必須是String)
//     - 資料會一直存在, 不需要時需自行清除 (比較: sessionStorage會在browser關閉時被清除)
// ==> chrome browser local Storage 容量為5MB (其他瀏覽器不確定, 可能不一定是5MB)

// **透過對localStorage的操作來讀寫token/user訊息

const getAuth = () => {
  // 從localStorage取得isAuthenticated
  return localStorage.getItem("isAuthenticated");
}

const getStoreUser = () => {
  // 從localStorage取得token
  return localStorage.getItem("user");
}

const getStoreToken = () => {
  // 從localStorage取得token
  return localStorage.getItem("token");
}

const setAuth = (data) => {
  // 對localStorage寫入token
  localStorage.setItem("isAuthenticated", data);
}

const setStoreUser = (data) => {
  // 對localStorage寫入token
  localStorage.setItem("user", data);
}

const setStoreToken = (data) => {
  // 對localStorage寫入token
  localStorage.setItem("token", data);
}

const clearStore = () => {
  // 清除localStorage裡的token
  // localStorage.removeItem("token");
  localStorage.clear()
}


export {
  getAuth,
  getStoreUser,
  getStoreToken,
  setAuth,
  setStoreUser,
  setStoreToken,
  clearStore,
};
