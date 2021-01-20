import React from 'react';
import './Login.css';
import Button from './components/Button/Button';

class NewR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: '',
            desc2: '',
            desc3: '',
            desc4: '',
            desc5: '',
            desc6: '',
            //チェックボックス
            check1: true,
            check2: false,
            //ラジオ
            radio1: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
        this.onTextAreaChange3 = this.onTextAreaChange3.bind(this);
        this.onTextAreaChange4 = this.onTextAreaChange4.bind(this);
        this.onTextAreaChange5 = this.onTextAreaChange5.bind(this);
        this.onTextAreaChange6 = this.onTextAreaChange6.bind(this);

        this.onRadioChange = this.onRadioChange.bind(this);//radio
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
        this.setState({ desc2: e.target.value });
    }

    onTextAreaChange3(e) {
        this.setState({ desc3: e.target.value });
    }

    onTextAreaChange4(e) {
        this.setState({ desc4: e.target.value });
    }

    onTextAreaChange5(e) {
        this.setState({ desc5: e.target.value });
    }

    onTextAreaChange6(e) {
        this.setState({ desc6: e.target.value });
    }

    //radio
    onRadioChange(e) {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="Login">
                <header className="Login-header">

                    <div>
                        <div class="radio0">

                            <input type="radio"
                                name="radio1"
                                value="生徒"
                                checked={this.state.radio1 === "生徒"}
                                onChange={this.onRadioChange}
                                placeholder="ここに入力"/> 生徒　<br />

                            <input type="radio"
                                name="radio1"
                                value="講師"
                                checked={this.state.radio1 === "講師"}
                                onChange={this.onRadioChange}
                                placeholder="ここに入力"/> 講師　<br />
                        </div>


                        <p>氏名　　　<input type="text" value={this.state.desc}
                            onChange={this.onTextAreaChange} placeholder="ここに入力"/>
                            <input type="text" value={this.state.desc2}
                                onChange={this.onTextAreaChange2} placeholder="ここに入力"/>
                        </p>

                        <p>ユーザID　<input type="text" value={this.state.desc3}
                            onChange={this.onTextAreaChange3} placeholder="ここに入力"/></p>

                        <p>パスワード<input type="text" value={this.state.desc4}
                            onChange={this.onTextAreaChange4} placeholder="ここに入力"/></p>

                        <p>電話番号　<input type="text" value={this.state.desc5}
                            onChange={this.onTextAreaChange5} placeholder="ここに入力"/></p>

                        <p>住所　　　<input type="text" value={this.state.desc6}
                            onChange={this.onTextAreaChange6} placeholder="ここに入力"/></p>
                    </div>

                    <div>
                        <Button buttonname={'登録'} linkname={"/"} className="under_button"/>
                    </div>
                </header>
            </div>
        );
    }
}

export default NewR;