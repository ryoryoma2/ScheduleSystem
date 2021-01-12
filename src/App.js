import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewR from './New registration';
import Login from './Login';
import ScheduleRegisterT from './ScheduleRegisterT';
import ScheduleRegisterS from './ScheduleRegisterS';
import TopScreenTeacher from './TopScreenTeacher';
import TopScreenStudent from './TopScreenStudent';
import ScheduleConfirmationT from './ScheduleConfirmationT';
import ScheduleConfirmationS from './ScheduleConfirmationS';
import ScheduleAdjustment from './ScheduleAdjustment';

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
        this.determine_ID = this.determine_ID.bind(this);
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({ usstate: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("onSubmit");
        console.log(this.state);
    }

    onTextAreaChange(e) {
        this.setState({ ID: e.target.value });
    }

    onTextAreaChange2(e) {
        this.setState({ Password: e.target.value });
    }

    determine_ID() {//idから生徒か講師か判別する
        //this.setState({linkname: LoginProcessing } );
        if (this.state.ID.match("^t")) {
            this.setState({ loginlink: '/TopScreenTeacher' })
            // this.setState({component: TopScreenTeacher  })
        } else if (this.state.ID.match("^s")) {
            this.setState({ loginlink: '/TopScreenStudent' })
            // this.setState({component: TopScreenStudent })
        } else {

        }
    }

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <form onSubmit={this.onSubmit}>
                        <Router>

                            <Route path='/New registration' component={NewR} />
                            <Route path='/TopScreenTeacher' component={TopScreenTeacher} />
                            <Route path={'/TopScreenStudent'} component={TopScreenStudent} />
                            <Route exact path='/' component={Login} />
                            <Route path='/ScheduleRegisterT' component={ScheduleRegisterT} />
                            <Route path='/ScheduleRegisterS' component={ScheduleRegisterS} />
                            <Route path={'/ScheduleConfirmationT'} component={ScheduleConfirmationT} />
                            <Route path={'/ScheduleConfirmationS'} component={ScheduleConfirmationS} />
                            <Route path={'/ScheduleAdjustment'} component={ScheduleAdjustment} />
                        </Router>

                    </form>
                </header>
            </div>
        );
    }
}

export default App;