// main.js
const { app, BrowserWindow } = require('electron');
const path = require("path");

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载 Vue 应用的 index.html
//   win.loadFile('http://localhost:8081');
  win.loadFile(path.join(__dirname, './dist/index.html'));
}

app.whenReady().then(createWindow);