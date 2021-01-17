// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';



// ファイルの実質上の中身
class TopScreenStudent extends Component {


  // イベントハンドラー
  onClickHandler = () => {


    let nextVersion = parseInt(this.state.version, 10) + 1

    this.setState({ version: nextVersion.toFixed(1) })
  }

  render() {


    return (
      <div className="TopScreenStudent">
        <header className="App-header">
          <div>
            <Button buttonname={'日程'} linkname={"/ScheduleRegisterS"} className="button"
            />

            <Button buttonname={'宿題提出'} linkname={"/SubmitHomework"} className="button"
            />

            <Button buttonname={'ログアウト'} linkname={"/"} className="button"
            />
          </div>
        </header>
      </div>
    );
  }
}

// エクスポート
export default TopScreenStudent;
