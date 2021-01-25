import React from 'react';
import './Login.css';
import Button from './components/Button/Button';
import axios from 'axios';

class NewR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            ID: '',
            Password: '',
            PhoneNumber: '',
            Address: '',
            //ラジオ
            radio1: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaChange3 = this.onTextAreaChange3.bind(this);
        this.onTextAreaChange4 = this.onTextAreaChange4.bind(this);
        this.onTextAreaChange5 = this.onTextAreaChange5.bind(this);
        this.onTextAreaChange6 = this.onTextAreaChange6.bind(this);

        this.onRadioChange = this.onRadioChange.bind(this);//radio
        this.senddata = this.senddata.bind(this);
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
        this.setState({ Name: e.target.value });
    }

    onTextAreaChange3(e) {
        this.setState({ ID: e.target.value });
    }

    onTextAreaChange4(e) {
        this.setState({ Password: e.target.value });
    }

    onTextAreaChange5(e) {
        this.setState({ PhoneNumber: e.target.value });
    }

    onTextAreaChange6(e) {
        this.setState({ Address: e.target.value });
    }

    //radio
    onRadioChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    senddata() {

        var body = {
            data: [
                {
                    "isStudent": this.state.radio1,
                    "name": this.state.Name,
                    "userID": this.state.ID,
                    "passwd": this.state.Password,
                    "phonenumber": this.state.PhoneNumber,
                    "address": this.state.Address
                }
            ]
        }

        axios({
            method: 'post',
            url: ' http://4b03574bb538.ngrok.io/create',
            data: body
        })
            .then(function (response) {
                console.log(response.data);
                alert('登録が完了しました');
            })
            .catch(function (error) {
                console.log(error);
                alert('入力内容を確認してください')
            });
    }

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <div class="radio0">

                                <input type="radio"
                                    name="radio1"
                                    value="true"
                                    checked={this.state.radio1 == "true"}
                                    onChange={this.onRadioChange}
                                    placeholder="ここに入力" /> 生徒　<br />

                                <input type="radio"
                                    name="radio1"
                                    value="false"
                                    checked={this.state.radio1 == "false"}
                                    onChange={this.onRadioChange}
                                    placeholder="ここに入力" /> 講師　<br />
                            </div>


                            <p>氏名　　<input type="text" value={this.state.Name}
                                onChange={this.onTextAreaChange} placeholder="ここに入力" />
                            </p>

                            <p>ユーザID  <input type="text" value={this.state.ID}
                                onChange={this.onTextAreaChange3} placeholder="ここに入力" /></p>

                            <p>パスワード <input type="text" value={this.state.Password}
                                onChange={this.onTextAreaChange4} placeholder="ここに入力" /></p>

                            <p>電話番号<input type="text" value={this.state.PhoneNumber}
                                onChange={this.onTextAreaChange5} placeholder="ここに入力" /></p>

                            <p>住所　　<input type="text" value={this.state.Address}
                                onChange={this.onTextAreaChange6} placeholder="ここに入力" /></p>
                        </div>

                        <div>
                            <Button buttonname={'登録'} onClick={this.senddata} className="under_button" />
                        </div>
                        <div>
                            <Button buttonname={'TOPに戻る'} linkname={"/"} className="under_button" />
                        </div>
                    </form>
                </header>
            </div>
        );
    }
}

export default NewR;