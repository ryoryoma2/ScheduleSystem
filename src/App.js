import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewR from './NewRegistration';
import Login from './Login';
import ScheduleRegisterT from './ScheduleRegisterT';
import ScheduleRegisterS from './ScheduleRegisterS';
import TopScreenTeacher from './TopScreenTeacher';
import TopScreenStudent from './TopScreenStudent';
import ScheduleConfirmationT from './ScheduleConfirmationT';
import ScheduleConfirmationS from './ScheduleConfirmationS';
import ScheduleAdjustment from './ScheduleAdjustment';
import HomeworkEdit from './HomeworkEdit';
import Joho from './Joho';
import submitHomework from './submitHomework';
import confirmHomework from './ConfirmHomework';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: 'ここに入力',
            Password: 'ここに入力',
            loginlink: './Login'
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onTextAreaChange2 = this.onTextAreaChange2.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ usstate: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    onTextAreaChange(e) {
        this.setState({ ID: e.target.value });
    }

    onTextAreaChange2(e) {
        this.setState({ Password: e.target.value });
    }

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <Router>

                        <Route path={'/NewRegistration'} component={NewR} />
                        <Route path={'/TopScreenTeacher'} component={TopScreenTeacher} />
                        <Route path={'/TopScreenStudent'} component={TopScreenStudent} />
                        <Route exact path={'/'} component={Login} />
                        <Route path={'/ScheduleRegisterT'} component={ScheduleRegisterT} />
                        <Route path={'/ScheduleRegisterS'} component={ScheduleRegisterS} />
                        <Route path={'/ScheduleConfirmationT'} component={ScheduleConfirmationT} />
                        <Route path={'/ScheduleConfirmationS'} component={ScheduleConfirmationS} />
                        <Route path={'/ScheduleAdjustment'} component={ScheduleAdjustment} />
                        <Route path={'/HomeworkEdit'} component={HomeworkEdit} />
                        <Route path={'/Joho'} component={Joho} />
                        <Route path={'/submitHomework'} component={submitHomework} />
                        <Route path={'/confirmHomework'} component={confirmHomework} />
                    </Router>

                </header>
            </div >
        );
    }
}

export default App;