## 安裝
```
npm i
```

## 啟動 
```
npm start
```

## Nodejs Express

啟動服務
```
node tainan-react-express.js
```

## 開機啟動

用 pm2 管理，可以參考 `tainan-react.config.js` ：

```javascript
module.exports = {
  name: "react",
  script: "./tainan-react-express.js"
}
```

執行：
```
pm2 start <name>.config.js
```
> 你可以自己命名設定檔，結尾是 .config.js 即可。