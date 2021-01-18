// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/StudentCalendar';


// ファイルの実質上の中身
class ScheduleConfirmationS extends Component {

    // イベントハンドラー
    onClickHandler = () => {

        let nextVersion = parseInt(this.state.version, 10) + 1

        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="">
                <Calendar></Calendar>
                <Button buttonname={'戻る'} linkname={"/ScheduleRegisterS"} className="under_button"
                />
            </div>
        );
    }
}

// エクスポート
export default ScheduleConfirmationS;