// eslint-disable-next-line simple-import-sort/imports
import 'reflect-metadata';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';

import '@radix-ui/themes/styles.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
