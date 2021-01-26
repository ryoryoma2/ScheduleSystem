// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/TeacherCalendar';


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
                {/* データベースに日程を登録 */}
                <Button buttonname={'日程登録'} className="under_button" />
                <Button buttonname={'日程調整'} linkname={"/ScheduleAdjustment"} className="under_button" />
                <Button buttonname={'日程確認'} linkname={"/ScheduleConfirmationT"} className="under_button" />

                <Button buttonname={'Topに戻る'} linkname={"/TopScreenTeacher"} className="under_button" />
            </div>
        );
    }
}

// エクスポート
export default ScheduleRegisterT;