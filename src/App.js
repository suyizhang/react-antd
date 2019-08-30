import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './App.less';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">

      </div>
    </ConfigProvider>
  );
}

export default App;
