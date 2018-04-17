import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './stores/configure-store';
import { createClientApp } from '../client/base/react/material-ui-app-creator';
import { GuestApp, theme } from './apps/guest-app';

const win: any = window;
const preloadedState = win.__PRELOADED_STATE__;

const store = configureStore(preloadedState);
const app = createClientApp(<GuestApp />, theme, store);

ReactDOM.hydrate(app, document.getElementById('app'));
