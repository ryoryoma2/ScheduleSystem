// インポート
import React, { Component } from 'react';
import './Homeworkedit.css';
// import Button from './components/Button/Button';



// ファイルの実質上の中身
class Homeworkedit extends Component {

    // イベントハンドラー
    onClickHandler = () => {
        let nextVersion = parseInt(this.state.version, 10) + 1
        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="Homeworkedit">
                <header className="App-header">
                    <p>
                        <input type="search" name="studentIDSearch" placeholder="生徒IDを入力"></input>
                        <input type="submit" name="submit" value="検索"></input>
                    </p>
                    <table border="1" width="80%" cellspacing="0" cellpadding="5" bordercolor="#333333">
                        <tr>
                            <th bgcolor="#FFFFFF"><font color="#000000">科目</font></th>
                            <th bgcolor="#FFFFFF"><font color="#000000">範囲</font></th>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">英語</font></td>
                            <td bgcolor="#FFFFFF" align="center">
                                <p>
                                    <input type="text" name="宿題"></input>
                                    <input type="submit" value="設定する"></input>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap><font color="#000000">数学</font></td>
                            <td bgcolor="#FFFFFF" align="center">
                                <p>
                                    <input type="text" name="宿題"></input>
                                    <input type="submit" value="設定する"></input>
                                </p>
                            </td>
                        </tr>
                    </table>
                    <br></br>
                    <button type="button" name="returnTop" value="aaa" width="40%" style={{ width: '40%', padding: '10px' }}>
                        Topにもどる
                    </button>
                </header>
            </div>
        );
    }
}

// エクスポート
export default Homeworkedit;
