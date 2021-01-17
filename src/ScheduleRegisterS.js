// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import UnderButton from './components/UnderButton/UnderButton';
import Calendar from './components/Calendar/Calendar';


// ファイルの実質上の中身
class ScheduleRegisterS extends Component {

    // イベントハンドラー
    onClickHandler = () => {

        let nextVersion = parseInt(this.state.version, 10) + 1

        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="ScheduleRegisterS">
                <Calendar></Calendar>
                <Button buttonname={'Topに戻る'} linkname={"/TopScreenStudent"} className="under_button"
                />

                {/* データベースに登録する操作 */}
                <Button buttonname={'日程登録'} linkname={"/TopScreenStudent"} className="under_button"
                />

                <Button buttonname={'日程確認'} linkname={"/ScheduleConfirmationS"} className="under_button"
                />

            </div>
        );
    }
}

// エクスポート
export default ScheduleRegisterS;