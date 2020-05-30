import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { IntlProvider } from 'react-intl'
import messagesFr from './translations/fr.json'
import messagesEn from './translations/en.json'

const messages: Record<string, Record<string, string>> = {
  en: messagesEn,
  fr: messagesFr,
}

const language: string = navigator.language.split(/[-_]/)[0]

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
