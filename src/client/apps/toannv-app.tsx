import * as React from 'react';
import * as ReactRouter from 'react-router';
import * as ReactRouterDom from 'react-router-dom';

import Button from 'material-ui/Button';

export interface IMainState {
  text: string;
  result: string;
}

export default class ToannvApp extends React.Component<IMainState> {

  state: IMainState = {
    text: '',
    result: 'Ask something'
  };
  arrayAsks = ['what are you doing', 'how are you', 'what this mean', 'good morning'];
  arrayAnwsers = ['I am coding', 'I am fine thanks you', 'What do you want to ask?', 'good morning'];

  constructor(props) {
    super(props);

    // this binds
    this.onChange = this.onChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  public onChange(e) {
    this.setState({ text: e.target.value });
  }

  public onClickAdd(e) {
    // this.arrayKey.find(x => x === this.state.text
    if (this.arrayAsks.indexOf(this.state.text) !== null) {
      let i = this.arrayAsks.indexOf(this.state.text);
      this.setState({result: this.arrayAnwsers[i]});
    } else {
      this.setState({result: 'we are so sorry! we can not anwser with your question!'});
    }
  }

  public render() {
    const { text, result } = this.state;

    return (
      <div>
          <div className="form-group">
            <input onChange={this.onChange} value={this.state.text} className="form-control" />
          </div>
          <button onClick={this.onClickAdd} type="submit" className="btn btn-default">Ask me</button>
          <br/>
          <br/>
          <br/>
          <p>{result}</p>
      </div>
    );
  }
}
