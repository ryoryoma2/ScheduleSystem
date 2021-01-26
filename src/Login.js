import React from 'react';
import './Login.css';
import Button from './components/Button/Button';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ID: '',//入力ID
      Password: '',//入力パスワード
      loginlink: '/',
      iD: '',//database上のID
      passwd: ''//database上のpasswd
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
    this.determine_ID = this.determine_ID.bind(this);
    this.onBlur = this.onBlur.bind(this);
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

<<<<<<< HEAD
  onBlur() {
=======
  onBlur(){
>>>>>>> c562e244f36585a6974e70180360e03d5ad78c69
    const url = "http://69ab7befd210.ngrok.io/?id=1"
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var newURL = "";
    additionalURL = this.state.ID;
    newURL = baseURL + "?id=" + additionalURL;
    axios.get(newURL).then((res) => {
      console.log(res.data.data);
      this.setState({
        id: res.data.data[0].iD,
        name: res.data.data[0].name,
        passwd: res.data.data[0].passwd,
        isStudent: res.data.data[0].isStudent
      });
    });
    if (this.state.ID == this.state.id && this.state.isStudent == true && this.state.Password == this.state.passwd) {
      this.setState({ loginlink: '/TopScreenStudent' })
    } else if (this.state.ID == this.state.id && this.state.isStudent == false && this.state.Password == this.state.passwd) {
      this.setState({ loginlink: '/TopScreenTeacher' })
    } else {
    }
  }

  determine_ID(e) {//idから生徒か講師か判別する
    if (this.state.ID == this.state.id && this.state.isStudent == true && this.state.Password == this.state.passwd) {
      this.setState({ loginlink: '/TopScreenStudent' })
    } else if (this.state.ID == this.state.id && this.state.isStudent == false && this.state.Password == this.state.passwd) {
      this.setState({ loginlink: '/TopScreenTeacher' })
    } else {
      alert("ログインできませんでした\nIDかパスワードを間違えていないか確認してください");
    }
  }


  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <div>
            <div>

              <p>ユーザID　<input type="text" value={this.state.ID}
                onChange={this.onTextAreaChange} onBlur={this.onBlur} placeholder="ここに入力" /></p>

              <p>パスワード<input type="password" value={this.state.Password}
                onChange={this.onTextAreaChange2} onBlur={this.onBlur} placeholder="ここに入力" /></p>
            </div>

            <Button buttonname={'新規登録'} linkname={"/NewRegistration"} className="Login_under_button"
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