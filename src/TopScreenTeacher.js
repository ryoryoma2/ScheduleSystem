// インポート
import React from 'react';
import './App.css';
import Button from './components/Button/Button';


// ファイルの実質上の中身
class TopScreenTeacher extends React.Component {


  // イベントハンドラー
  onClickHandler = () => {

    let nextVersion = parseInt(this.state.version, 10) + 1

    this.setState({ version: nextVersion.toFixed(1) })
  }

  render() {


    return (
      <div className="TopScreenTeacher">
        <header className="App-header">
          <div>
            <Button buttonname={'日程'} linkname={"/ScheduleRegisterT"} className="button"
            />

            <Button buttonname={'宿題設定'} linkname={"/HomeworkEdit"} className="button"
            />

            <Button buttonname={'宿題閲覧'} linkname={"/ConfirmHomework"} className="button"
            />

            <Button buttonname={'生徒情報閲覧'} linkname={"/Joho"} className="button"
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
export default TopScreenTeacher;
