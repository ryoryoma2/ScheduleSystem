import React from 'react';
import Calendar from 'react-calendar';

class Schedule_Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(2021, 7, 1),
            //月のデータ
            month_days: {
                20211206: { is_holiday: true },
                20211213: { is_holiday: true },
                20211220: { is_holiday: true },
                20211227: { is_holiday: true },
                20210726: { text: <input type="checkbox" /> },
                20210727: { text: <input type="checkbox" /> },
                20210728: { text: <input type="checkbox" /> },
                20210729: { text: <input type="checkbox" /> },
                20210730: { text: <input type="checkbox" /> },
                20210731: { text: <input type="checkbox" /> },
                20210801: { text: <input type="checkbox" /> },
                20210802: { text: <input type="checkbox" /> },
                20210803: { text: <input type="checkbox" /> },
                20210804: { text: <input type="checkbox" /> },
                20210805: { text: <input type="checkbox" /> },
                20210806: { text: <input type="checkbox" /> },
                20210807: { text: <input type="checkbox" /> },
                20210808: { text: <input type="checkbox" /> },
                20210809: { text: <input type="checkbox" /> },
                20210810: { text: <input type="checkbox" /> },
                20210811: { text: <input type="checkbox" /> },
                20210812: { text: <input type="checkbox" /> },
                20210813: { text: <input type="checkbox" /> },
                20210814: { text: <input type="checkbox" /> },
                20210815: { text: <input type="checkbox" /> },
                20210816: { text: <input type="checkbox" /> },
                20210817: { text: <input type="checkbox" /> },
                20210818: { text: <input type="checkbox" /> },
                20210819: { text: <input type="checkbox" /> },
                20210820: { text: <input type="checkbox" /> },
                20210821: { text: <input type="checkbox" /> },
                20210822: { text: <input type="checkbox" /> },
                20210823: { text: <input type="checkbox" /> },
                20210824: { text: <input type="checkbox" /> },
                20210825: { text: <input type="checkbox" /> },
                20210826: { text: <input type="checkbox" /> },
                20210827: { text: <input type="checkbox" /> },
                20210828: { text: <input type="checkbox" /> },
                20210829: { text: <input type="checkbox" /> },
                20210830: { text: <input type="checkbox" /> },
                20210831: { text: <input type="checkbox" /> },
                20210901: { text: <input type="checkbox" /> },
                20210902: { text: <input type="checkbox" /> },
                20210903: { text: <input type="checkbox" /> },
                20210904: { text: <input type="checkbox" /> },
                20210905: { text: <input type="checkbox" /> },
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