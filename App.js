import React from 'react';
import './Login.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Button from './components/Button/Button';
import NewR from './New registration';
import Login from './Login';
import ScheduleRegisterT from './ScheduleRegisterT';
import TopScreenTeacher from './TopScreenTeacher';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: 'ここに入力',
            desc1: 'ここに入力'
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
        console.log("onSubmit");
        console.log(this.state);
    }

    onTextAreaChange(e) {
        this.setState({ desc: e.target.value });
    }

    onTextAreaChange2(e) {
        this.setState({ desc1: e.target.value });
    }

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            test
                        </p>
                        <Router>

                            <Route path='/New registration' component={NewR} />
                            <Route path='/TopScreenTeacher' component={TopScreenTeacher} />
                            <Route exact path='/' component={Login} />
                            <Route path='/ScheduleRegisterT' component={ScheduleRegisterT} />
                        </Router>

                    </form>
                </header>
            </div>
        );
    }
}

export default App;