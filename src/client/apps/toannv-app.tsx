import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';
import ToannvView from '../views/components/toannv/toannv';
interface IState {
  text: any;
}
export default class ToannvApp extends React.Component {
  state: IState = {
    text: ''
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }
  public onChange(e) {
    this.setState({ text: e.target.value });
  }

  public onClickAdd(e) {
    this.setState(this.state);
  }
  public render() {
    const item = this.state.text;
    console.log('Toannv ahihih');
    return (
      <div>
        <div className="main">
          <h1>Page toannv</h1>
          <p>{item}</p>
          <div className="header">
            <input type="text" name="input" onChange={e => this.onChange} value={this.state.text}  />
            <button onClick={this.onClickAdd} >Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
