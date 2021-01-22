// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/TeacherCalendar';


// ファイルの実質上の中身
class ScheduleAdjustment extends Component {

    // イベントハンドラー
    onClickHandler = () => {

        let nextVersion = parseInt(this.state.version, 10) + 1

        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="ScheduleAdjustment">
                <Calendar></Calendar>
                <Button buttonname={'Topに戻る'} linkname={"/TopScreenTeacher"} className="under_button"
                />

                {/* 講師と生徒の日程から授業日程を決定する */}
                <Button buttonname={'調整'} linkname={"/TopScreenTeacher"} className="under_button"
                />

            </div>
        );
    }
}

// エクスポート
export default ScheduleAdjustment;