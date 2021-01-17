// インポート
import React, { Component } from 'react';
import './SubmitHomework.css';
import Button from './components/Button/Button';

// ファイルの実質上の中身
class SubmitHomework extends Component {

    // イベントハンドラー
    onClickHandler = () => {
        let nextVersion = parseInt(this.state.version, 10) + 1
        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="SubmitHomework">
                <header className="SubmitHomework-header">
                    <table border="1" width="80%" cellSpacing="0" cellPadding="5" bordercolor="#333333">
                        <tr>
                            <th bgcolor="#FFFFFF"><font color="#000000">科目</font></th>
                            <th bgcolor="#FFFFFF"><font color="#000000">範囲</font></th>
                            <th bgcolor="#FFFFFF"><font color="#000000">提出</font></th>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">英語</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">p.11-15</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%">
                                <input type="file" name="syukudaigazou"></input>
                                <input type="submit" value="送信"></input>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap><font color="#000000">数学</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">p.11-15</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%">
                                <input type="file" name="syukudaigazou" color="#000000"></input>
                                <input type="submit" value="送信"></input>
                            </td>
                        </tr>
                    </table>
                    <br></br>
                    <Button buttonname={'TOPに戻る'} linkname={"/TopScreenTeacher"} className="under_button" />
                </header>
            </div>
        );
    }
}

// エクスポート
export default SubmitHomework;