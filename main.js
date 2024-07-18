const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false  // Set to false if using nodeIntegration
    }
  });

  // Load a simple native GUI content using a data URL
  mainWindow.loadURL(`data:text/html;charset=utf-8,
    <html>
      <head>
        <title>First app</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          h1 {
            color: #333;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <h1>Hello from Electron!</h1>
      </body>
    </html>
  `);

  // Open DevTools (optional)
  // mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);
