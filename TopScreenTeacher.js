// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';


// ファイルの実質上の中身
class TopScreenTeacher extends Component {


  // イベントハンドラー
  onClickHandler = () => {

    let nextVersion = parseInt(this.state.version, 10) + 1

    this.setState({ version: nextVersion.toFixed(1) })
  }

  render() {


    return (
      <div className="TopScreenTeacher">
        <header className="App-header">

          <Button buttonname={'日程'} className="button"
          >日程
         </Button>

          <Button buttonname={'宿題設定'} className="button"
          >宿題設定
         </Button>

          <Button buttonname={'宿題閲覧'} className="button"
          >宿題閲覧
         </Button>

          <Button buttonname={'ログアウト'} className="button"
          >ログアウト
         </Button>


        </header>

      </div>
    );
  }
}

// エクスポート
export default TopScreenTeacher;
