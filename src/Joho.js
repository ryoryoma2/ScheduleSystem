import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import axios from 'axios';



class Joho extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            address: '',
            phonenumber: '',
            classdays: '',
            searchID: '',
            deleteID: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
        this.onTextAreaChange3 = this.onTextAreaChange3.bind(this);
        this.onTextAreaChange4 = this.onTextAreaChange4.bind(this);
        this.onTextAreaChange5 = this.onTextAreaChange5.bind(this);
        this.onTextAreaChange6 = this.onTextAreaChange6.bind(this);
        this.onTextAreaChange7 = this.onTextAreaChange7.bind(this);
        this.search_ID = this.search_ID.bind(this);
        this.update_ID = this.update_ID.bind(this);
        this.delete_ID = this.delete_ID.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ usstate: e.target.value });
    } s

    onSubmit(e) {
        e.preventDefault();
        // console.log("onSubmit");
        console.log(e.target.state);
    }

    onTextAreaChange(e) {
        this.setState({ id: e.target.value });
    }

    onTextAreaChange2(e) {
        this.setState({ name: e.target.value });
    }

    onTextAreaChange3(e) {
        this.setState({ address: e.target.value });
    }

    onTextAreaChange4(e) {
        this.setState({ phonenumber: e.target.value });
    }

    onTextAreaChange5(e) {
        this.setState({ classdays: e.target.value });
    }

    onTextAreaChange6(e) {
        this.setState({ searchID: e.target.value });
    }
    onTextAreaChange7(e) {
        this.setState({ deleteID: e.target.value });
    }

    search_ID(e) {//idから生徒か講師か判別する
        const url = "http://4b03574bb538.ngrok.io/?id=1";
        var tempArray = url.split("?");
        var baseURL = tempArray[0];
        var additionalURL = tempArray[1];
        var newURL = "";
        additionalURL = this.state.searchID;
        console.log(this.state.searchID);
        newURL = baseURL + "?id=" + additionalURL;
        axios.get(newURL).then((res) => {
            console.log(res.data.data);
            this.setState({
                id: res.data.data[0].iD,
                name: res.data.data[0].name,
                address: res.data.data[0].address,
                phonenumber: res.data.data[0].phonenumber,
                isStudent: res.data.data[0].isStudent,
                classdays: res.data.data[0].classdays
            });
        });
        axios.get(newURL).catch((error) => {
            console.log(error);
            alert('生徒が見つかりませんでした');
            this.setState({
                id: "",
                name: "",
                address: "",
                phonenumber: "",
                isStudent: "",
                classdays: ""
            });
        });
    }

    update_ID(e) {//idから生徒か講師か判別する
        var body = {
            data: [
                {
                    "classdays": this.state.classdays,
                    "name": this.state.name,
                    "userID": this.state.id,
                    "phonenumber": this.state.phonenumber,
                    "address": this.state.address
                }
            ]
        }

        axios({
            method: 'post',
            url: ' http://4b03574bb538.ngrok.io/update',
            data: body
        })
            .then(function (response) {
                console.log(response.data);
                alert('情報を更新しました');
            })
            .catch(function (error) {
                console.log(error);
                alert('更新できませんでした。\n入力内容を確認してください');
            });
    }

    delete_ID(e) {//idから生徒か講師か判別する
        var result = window.confirm("本当に削除してもよろしいですか？")
        if (result) {
            const url = "http://4b03574bb538.ngrok.io/delete?id=1";
            var tempArray = url.split("?");
            var baseURL = tempArray[0];
            var additionalURL = tempArray[1];
            var newURL = "";
            additionalURL = this.state.deleteID;
            console.log(this.state.deleteID);
            newURL = baseURL + "?id=" + additionalURL;
            axios.get(newURL).then((res) => {
                console.log(res.data.data);
                alert('ID:' + this.state.deleteID + 'を削除しました')
                /*
                this.setState({
                    id: res.data.data[0].iD,
                    name: res.data.data[0].name,
                    address: res.data.data[0].address,
                    phonenumber: res.data.data[0].phonenumber,
                    isStudent: res.data.data[0].isStudent,
                    classdays: res.data.data[0].classdays
                });*/
            });
        }
        else {
            alert('削除をキャンセルしました');
        }

    }

    render() {
        return (
            <div className="Joho">
                <header className="Joho-header">
                    <header className="Login-header">

                        <div className="flex">
                            <p>右のバーにIDを入力して検索 <input type="text" value={this.state.searchID} onChange={this.onTextAreaChange6} placeholder="ここに入力" />
                                <Button buttonname={'検索'} onClick={this.search_ID} className="small_button"
                                />
                            </p>
                        </div>
                        <div>
                            <p>生徒ID　 <input type="text" value={this.state.id}
                                onChange={this.onTextAreaChange} placeholder="ここに入力" /></p>
                            <p>氏名　　　<input type="text" value={this.state.name}
                                onChange={this.onTextAreaChange2} placeholder="ここに入力" /></p>
                             ㅤ <p>住所　　　<input type="text" value={this.state.address}
                                onChange={this.onTextAreaChange3} placeholder="ここに入力" /></p>
                            <p>電話番号　<input type="text" value={this.state.phonenumber}
                                onChange={this.onTextAreaChange4} placeholder="ここに入力" /></p>
                            <p>授業日数　<input type="text" value={this.state.classdays}
                                onChange={this.onTextAreaChange5} placeholder="ここに入力" /></p>
                        </div>
                        <Button buttonname={'更新'} onClick={this.update_ID} className="small_button" />
                        <div className="flex">
                            <p>右のバーにIDを入力して削除 <input type="text" value={this.state.deleteID} onChange={this.onTextAreaChange7} placeholder="ここに入力" />
                                <Button buttonname={'削除'} onClick={this.delete_ID} className="small_button"
                                />
                            </p>
                        </div>
                        <div>
                            <Button buttonname={'戻る'} linkname={"/TopScreenTeacher"} className="small_button"
                            />
                        </div>
                    </header>
                </header>
            </div>
        );
    }
}

export default Joho;