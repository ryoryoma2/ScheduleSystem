import React from 'react';
import Calendar from 'react-calendar';

class Schedule_Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(2020, 12, 1),
            //月のデータ
            month_days: {
                20201206: { is_holiday: true },
                20201213: { is_holiday: true },
                20201220: { is_holiday: true },
                20201227: { is_holiday: true },
                20201214: { text: <input type="checkbox" /> },
                20201225: { text: 'バシャログ出稿' }
            }
        };
        this.getTileClass = this.getTileClass.bind(this);
        this.getTileContent = this.getTileContent.bind(this);
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
                    this.state.month_days[day].text : ' '
                }
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