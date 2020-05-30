import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl'
import { MuiThemeProvider } from '@material-ui/core'
import messagesFr from './translations/fr.json'
import messagesEn from './translations/en.json'
import * as serviceWorker from './serviceWorker';
import { theme } from './utils'

const messages: Record<string, Record<string, string>> = {
  en: messagesEn,
  fr: messagesFr,
}

const language: string = navigator.language.split(/[-_]/)[0]

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
