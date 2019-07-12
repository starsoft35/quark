import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import config from './config';
import { App, rootReducer } from './page/app';
// import rootReducer from './page/App/reducer';
import { configStore } from './store';
import { indexDbInit } from './util';
import { StyledGlobal } from './component';
import * as serviceWorker from './serviceWorker';

// 防止表单提交导致页面刷新的统一处理
document.addEventListener('submit', (e) => {
  e.preventDefault();
});

if (config.useVconsole) {
  import('vconsole').then((m) => {
    const VConsole = m.default;
    const vconsole = new VConsole();
    console.info(`vconsole init, version is ${vconsole.version}.`);
  });
}

indexDbInit();

const store = configStore(rootReducer);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <>
      <StyledGlobal />
      <App />
    </>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

serviceWorker.unregister();
