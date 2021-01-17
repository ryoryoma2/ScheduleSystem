// インポート
import React, { Component } from 'react';
import './App.css';
import homeworkSample from './images/homeworkSample.jpeg';

const style = {
    width: '100%',
    height: '30rem',
    backgroundImage: `url(${homeworkSample})`
};

// ファイルの実質上の中身
class confirmHomework extends Component {

    // イベントハンドラー
    onClickHandler = () => {
        let nextVersion = parseInt(this.state.version, 10) + 1
        this.setState({ version: nextVersion.toFixed(1) })
    }

    render() {
        return (
            <div className="confirmHomework">
                <header className="App-header">
                    <p>
                        <input type="search" name="studentIDSearch" placeholder="生徒IDを入力"></input>
                        <input type="submit" name="submit" value="検索"></input>
                    </p>
                    <table border="1" width="80%" cellspacing="0" cellpadding="5" bordercolor="#333333">
                        <tr>
                            <th bgcolor="#FFFFFF"><font color="#000000">科目</font></th>
                            <th bgcolor="#FFFFFF"><font color="#000000">範囲</font></th>
                            <th bgcolor="#FFFFFF"><font color="#000000">提出済</font></th>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">英語</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">p.11-15</font></td>
                            <td bgcolor="#FFFFFF" align="center">
                                <img style={style} />
                            </td>
                        </tr>
                        <tr>
                            <td bgcolor="#FFFFFF" align="center" nowrap><font color="#000000">数学</font></td>
                            <td bgcolor="#FFFFFF" align="center" nowrap width="0%"><font color="#000000">p.11-15</font></td>
                            <td bgcolor="#FFFFFF" align="center"><font color="#000000">未提出</font></td>
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
export default confirmHomework;