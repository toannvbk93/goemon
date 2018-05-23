import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';

import ToannvApp from './apps/toannv-app';

let win: any = window;
const props = win.__PRELOADED_STATE__;
ReactDOM.render(<ToannvApp { ...props } />, document.getElementById('app')); //
