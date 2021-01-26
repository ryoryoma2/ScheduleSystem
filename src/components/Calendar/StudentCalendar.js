import React from 'react';
import Calendar from 'react-calendar';

//redux関係のインポート
/*
import { connect } from 'react-redux'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
*/

class Schedule_Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            //月のデータ
            month_days: {
            },
            studentAttendance: [
                {
                    date: '',
                    is_attendance: false,
                }
            ]
        };
        this.getTileClass = this.getTileClass.bind(this);
        this.getTileContent = this.getTileContent.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }



    //チェック状態を確認
    handleChange(e) {
        if (this.state.studentAttendance.includes(e.target.value)) {
            // チェックが外れたので要素を消す
            this.state.studentAttendance.splice(e.target.value, 1);
        } else {
            //チェックがついたので日付をセットし,is_attendanceをtrueにする
            this.setState({ ...this.state.studentAttendance, date: e.target.value });
            this.setState({ ...this.state.studentAttendance.date[e.target.value], is_attendance: true });
        }
    }

    // state の日付と同じ表記に変換
    getFormatDate(date) {
        return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
    }

    //日付のクラスを付与 (祝日用)
    getTileClass({ date, view }) {
        // 月表示のときのみ
        if (view !== 'month') {
            return '';
        }
        const day = this.getFormatDate(date);
        return (this.state.month_days[day] && this.state.month_days[day].is_holiday) ?
            'holiday' : '';
    }

    //日付の内容を出力
    getTileContent({ date, view }) {
        // 月表示のときのみ
        if (view !== 'month') {
            return null;
        }
        const day = this.getFormatDate(date);
        return (
            <p>
                <br />
                {(this.state.month_days[day] && this.state.month_days[day].text) ?
                    this.state.month_days[day].text : ''
                }
                <div>
                    <input
                        type="checkbox"
                        value={day}
                        onChange={this.handleChange}
                        //checked={this.state.studentAttendance.attendance.includes(day)}
                    />
                </div>
            </p>
        );
    }

    render() {
        return (
            <Calendar
                locale="ja-JP"
                value={this.state.date}
                tileClassName={this.getTileClass}
                tileContent={this.getTileContent}
            />
        );
    }
}

export default Schedule_Calendar;

// function mapStateToProps(state) {
//     return state;
// }

// function mapDispatchToProps() {
//     const dispatch = useDispatch();
//     return { dispatch1: () => { dispatch(()); } };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Schedule_Calendar)