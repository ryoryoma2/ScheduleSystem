// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CheckBoxList from './components/CheckBox/checkBox';
import checkBox from './components/CheckBox/checkBox';
import UnderButton from './components/UnderButton/UnderButton';
import Calendar from './components/Calendar/Calendar';


// ファイルの実質上の中身
class ScheduleRegisterT extends Component {


    // イベントハンドラー
    onClickHandler = () => {

        let nextVersion = parseInt(this.state.version, 10) + 1

        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="ScheduleRegisterT">
                <Calendar></Calendar>
                <UnderButton ubuttonname={'TOPに戻る'} ulinkname="./TopScreenStudent.js" 
                />


                <UnderButton ubuttonname={'日程登録'}
                />

                <UnderButton ubuttonname={'日程調整'}
                />

                <UnderButton ubuttonname={'日程確認'}
                />
                



            </div>
        );
    }
}

// エクスポート
export default ScheduleRegisterT;

