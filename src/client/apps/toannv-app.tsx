import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';
import ToannvView from '../views/components/toannv/toannv';

export default class ToannvApp extends React.Component {

  constructor(props) {
    super(props);
  }
  public render() {
    return (
        <div>
         <ToannvView />
        </div>
    );
  }
}
