import React from 'react';
import './Login.css';
import Button from './components/Button/Button';

class NewR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: 'ここに入力',
            ID: 'ここに入力',
            Password: 'ここに入力',
            PhoneNumber: 'ここに入力',
            Address: 'ここに入力',
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
        this.log = this.log.bind(this);
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

    log(e) {
        console.log(this.state.radio1);
        console.log("Name: " + this.state.Name);
        console.log("ID: " + this.state.ID);
        console.log("Password " + this.state.Password);
        console.log("PhoneNumber " + this.state.PhoneNumber);
        console.log("Address " + this.state.Address);
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
                                    value="生徒"
                                    checked={this.state.radio1 === "生徒"} onChange={this.onRadioChange} /> 生徒　<br />

                                <input type="radio"
                                    name="radio1"
                                    value="講師"
                                    checked={this.state.radio1 === "講師"} onChange={this.onRadioChange} /> 講師　<br />
                            </div>


                            <p>氏名　　　<input type="text" value={this.state.Name}
                                onChange={this.onTextAreaChange} />
                            </p>

                            <p>ユーザID　<input type="text" value={this.state.ID}
                                onChange={this.onTextAreaChange3} /></p>

                            <p>パスワード<input type="text" value={this.state.Password}
                                onChange={this.onTextAreaChange4} /></p>

                            <p>電話番号　<input type="text" value={this.state.PhoneNumber}
                                onChange={this.onTextAreaChange5} /></p>

                            <p>住所　　　<input type="text" value={this.state.Address}
                                onChange={this.onTextAreaChange6} /></p>
                        </div>

                        <div>
                            <Button buttonname={'登録'} onClick={this.log} linkname={"/"} className="under_button"

                            />
                        </div>
                    </form>
                </header>
            </div>
        );
    }
}

export default NewR;