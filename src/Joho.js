import React from 'react';
import './Joho.css';
import Button from './components/Button/Button';
import axios from 'axios';


class Joho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: 'ここに入力',
            Name: 'ここに入力',
            Address: 'ここに入力',
            PhoneNumber: 'ここに入力',
            classdays: 'ここに入力',
            Register: 'ここに入力',
            Search: 'ここに入力',
            Delete: 'ここに入力'

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
        this.onTextAreaChange3 = this.onTextAreaChange3.bind(this);
        this.onTextAreaChange4 = this.onTextAreaChange4.bind(this);
        this.onTextAreaChange5 = this.onTextAreaChange5.bind(this);
        this.onTextAreaChange6 = this.onTextAreaChange6.bind(this);
        this.onTextAreaCharge7 = this.onTextAreaCharge7.bind(this);
        this.onTextAreaCharge8 = this.onTextAreaCharge8.bind(this);
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
        this.setState({ ID: e.target.value });
    }

    onTextAreaChange2(e) {
        this.setState({ Name: e.target.value });
    }

    onTextAreaChange3(e) {
        this.setState({ Address: e.target.value });
    }

    onTextAreaChange4(e) {
        this.setState({ PhoneNumber: e.target.value });
    }

    onTextAreaChange5(e) {
        this.setState({ Days: e.target.value });
    }

    onTextAreaChange6(e) {
        this.setState({ Register: e.target.value });
    }
    onTextAreaCharge7(e) {
        this.setState({ Search: e.target.value });

    }
    onTextAreaCharge8(e) {
        this.setState({ Delete: e.target.value });

    }

    componentDidMount() {
        const url = "http://40ac26238e00.ngrok.io/?q=1";
        axios.get(url).then((res) => {
            console.log(res.data.data[0]);
            this.setState({
                id: res.data.data[0].iD,
                name: res.data.data[0].name,
                address: res.data.data[0].address,
                phonenumber: res.data.data[0].phonenumber,
                classdays: res.data.data[0].classdays
            });
        });
    }

    render() {
        return (
            <div className="Joho">
                <header className="Joho-header">
                    <form onSubmit={this.onSubmit}>

                        <br />
                        <br />
                        <header className="Login-header">
                            <div>
                                <p>右のバーに生徒番号を入力して検索することができます。ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
                                <input type="text" value={this.state.desc7}
                                        onCharge={this.onTextAreaCharge7} />
                                    <header className="upgraded-button">
                                        <div>
                                            <button type="submit">検索</button>
                                        </div>
                                    </header>
                                </p>ㅤ
                            <p>生徒ID　<input type="text" value={this.state.id}
                                    onChange={this.onTextAreaChange} />
                                </p>
                                <br />

                                <p>氏名　　　<input type="text" value={this.state.name}
                                    onChange={this.onTextAreaChange2} /></p>

                                 ㅤ <p>住所　　　<input type="text" value={this.state.address}
                                    onChange={this.onTextAreaChange3} /></p>
                                <br />
                                <p>電話番号　<input type="text" value={this.state.phonenumber}
                                    onChange={this.onTextAreaChange4} /></p>
                                <br />

                                <p>授業日数　<input type="text" value={this.state.classdays}
                                    onChange={this.onTextAreaChange5} /></p>

                            </div>
                            <header className="upgraded-button">
                                <div>
                                    <button type="submit">登録</button>
                                </div>
                            </header>
                            <p>右のバーに生徒番号を入力して削除することができます。ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ

                            <input type="text" value={this.state.desc8}
                                    onCharge={this.onTextAreaCharge8} />
                                <header className="upgraded-button">
                                    <div>
                                        <button type="submit">削除</button>
                                    </div>
                                </header>
                            </p>

                            <header>
                                <div>
                                    <Button buttonname={'戻る'} linkname={"/TopScreenTeacher"} className="under_button"
                                    />
                                </div>
                            </header>

                        </header>

                    </form>
                </header>
            </div>
        );
    }
}

export default Joho;