import React from 'react';
import './Joho.css';

class Joho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: 'ここに入力',
            desc2: 'ここに入力',
            desc3: 'ここに入力',
            desc4: 'ここに入力',
            desc5: 'ここに入力',
            desc6: 'ここに入力',
            desc7: 'ここに入力',
            desc8: 'ここに入力'
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
    onTextAreaCharge7(e) {
        this.setState({ desc7: e.target.value });

    }
    onTextAreaCharge8(e) {
        this.setState({ desc7: e.target.value });

    }
    render() {
        return (
            <div className="Joho">
                <header className="Joho-header">
                    <form onSubmit={this.onSubmit}>
                        <br/>
                        <br/>
                        <header className="Login-header">
                            <div>
                                <p>右のバーに生徒番号を入力して検索することができます。
                                    <input type="text" value={this.state.desc7}
                                        onCharge={this.onTextAreaCharge7} />
                                    <header className="upgraded-button">
                                        <div>
                                            <button type="submit">検索</button>
                                        </div>
                                    </header>
                                </p>ㅤ
                            <p>生徒番号<input type="text" value={this.state.desc}
                                    onChange={this.onTextAreaChange} />
                                    <input type="text" value={this.state.desc2}
                                        onChange={this.onTextAreaChange2} />
                                </p>
                                <br />

                                <p>氏名<input type="text" value={this.state.desc3}
                                    onChange={this.onTextAreaChange3} /></p>

                                 ㅤ <p>住所<input type="text" value={this.state.desc4}
                                    onChange={this.onTextAreaChange4} /></p>
                                <br />
                                <p>電話番号<input type="text" value={this.state.desc5}
                                    onChange={this.onTextAreaChange5} /></p>
                                <br />

                                <p>授業日数<input type="text" value={this.state.desc6}
                                    onChange={this.onTextAreaChange6} /></p>

                            </div>
                            <header className="upgraded-button">
                                <div>
                                    <button type="submit">登録</button>
                                </div>
                            </header>
                            <p>右のバーに生徒番号を入力して削除することができます。
                                <input type="text" value={this.state.desc7}
                                    onCharge={this.onTextAreaCharge7} />
                                <header className="upgraded-button">
                                    <div>
                                        <button type="submit">削除</button>
                                    </div>
                                </header>
                            </p>
                            <header className="upgraded-button">
                                <div>
                                    <button type="submit">戻る</button>
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

