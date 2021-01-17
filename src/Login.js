import React from 'react';
import './Login.css';
import Button from './components/Button/Button';
import axios from 'axios';



class Login extends React.Component {
  //const consolelog = () => console.log(this.state.loginlink);
  constructor(props) {
    super(props);
    this.state = {
      ID: 'ここに入力',
      Password: 'ここに入力',
      loginlink: '/',
      rooms: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
    this.determine_ID = this.determine_ID.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
    this.setState({ usstate: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  onTextAreaChange(e) {
    this.setState({ ID: e.target.value });
  }

  onTextAreaChange2(e) {
    this.setState({ Password: e.target.value });
  }

  determine_ID(e) {//idから生徒か講師か判別する
    if (this.state.ID.match("^t")) {
      this.setState({ loginlink: '/TopScreenTeacher' })
      console.log("ID: " + this.state.ID);
      console.log("PassWord: " + this.state.Password);
    } else if (this.state.ID.match("^s")) {
      this.setState({ loginlink: '/TopScreenStudent' })
      console.log("ID: " + this.state.ID);
      console.log("PassWord: " + this.state.Password);
    } else {
      console.log("ログインできませんでした");
    }
  }

  componentWillMount() {
    const URL = 'http://localhost:8080/api/sample/getBirthStone'
    fetch(URL, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {
        this.setState({
          month: json['ID'],
          name: json['Password'],
        })
      });
  }



  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <div>
            <div>

              <p>ユーザID　<input type="text" value={this.state.ID}
                onChange={this.onTextAreaChange} /></p>

              <p>パスワード<input type="text" value={this.state.Password}
                onChange={this.onTextAreaChange2} /></p>
            </div>

            month: {this.state.month} <br />
            name: {this.state.name} <br />

            <Button buttonname={'新規登録'} linkname={"/New registration"} className="Login_under_button"
            />

            <Button buttonname={'ログイン'} onClick={this.determine_ID} linkname={this.state.loginlink} className="Login_under_button"
            />
          </div>
        </header>
      </div >
    );
  }
}

export default Login;