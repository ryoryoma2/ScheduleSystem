// インポート
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Button from './components/Button/Button';
import TopScreenTeacher from './TopScreenTeacher';
import ScheduleRegisterT from './ScheduleRegisterT';


// ファイルの実質上の中身
class TopScreenTeacherScreenStudent extends Component {


  // イベントハンドラー
  onClickHandler = () => {


    let nextVersion = parseInt(this.state.version, 10) + 1

    this.setState({ version: nextVersion.toFixed(1) })
  }

  render() {


    return (
      <div className="App">
          <Router>
            <div>
              <Button buttonname={'日程'} linkname={"/ScheduleRegisterT"} className= "button"
              />
         
              <Button buttonname={'宿題提出'} linkname={"/TopScreenTeacher"} className = "button"
              />

              <Button buttonname={'ログアウト'} className="button"
              />
         
              <Route path='/TopScreenTeacher' component={TopScreenTeacher} />
              <Route path='/ScheduleRegisterT' component={ScheduleRegisterT} />
            </div>
          </Router>

      </div>
    );
  }
}

// エクスポート
export default TopScreenTeacher;
