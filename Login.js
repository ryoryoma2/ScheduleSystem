import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './components/Button/Button';
import NewR from './New registration';
import TopScreenTeacher from './TopScreenTeacher';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: 'ここに入力',
      desc1: 'ここに入力'
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ usstate: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit");
    console.log(this.state);
  }

  onTextAreaChange(e) {
    this.setState({ desc: e.target.value });
  }

  onTextAreaChange2(e) {
    this.setState({ desc1: e.target.value });
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <form onSubmit={this.onSubmit}>

            <div>
              <p>ユーザID　<input type="text" value={this.state.desc}
                onChange={this.onTextAreaChange} /></p>

              <p>パスワード<input type="text" value={this.state.desc1}
                onChange={this.onTextAreaChange2} /></p>
            </div>

            <Router>
              <div>
                <Button buttonname={'新規登録'} linkname={"/New registration"} className="under_button"
                />

                <Button buttonname={'ログイン'} linkname={"/TopScreenTeacher"} className="under_button"
                />

              </div>
              <Route path='/New registration' component={NewR} />
              <Route path='/TopScreenTeacher' component={TopScreenTeacher} />
            </Router>
          </form>
        </header>
      </div>
    );
  }
}

export default Login;