// インポート
import React, { Component } from 'react';
import './App.css';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import homeworkSample from './images/homeworkSample.jpeg';

const homework = [
    {
        homweworkID: 0,
        studentID: '00',
        kamoku: '数学',
        range: 'p,11-15',
        image: homeworkSample
    },
    {
        homweworkID: 1,
        studentID: '00',
        kamoku: '英語',
        range: 'p,11-15',
        image: homeworkSample
    }
];

function imageSubmit() {
    return (
        <p>
            <input type="file" name="datafile" />
            <input type="submit" value="送信する" />
        </p>)
}

class Homeworkedit extends Component {
    render() {
        return (
            <div className="Homeworkedit">
                <header className="App-header">
                    <BootstrapTable
                        version='4'
                        data={homework}
                        tableStyle={{ backgroundColor: '#FFFFFF' }}
                    >
                        <TableHeaderColumn dataField='kamoku' width="20%">科目</TableHeaderColumn>
                        <TableHeaderColumn dataField='range' width="20%">範囲</TableHeaderColumn>
                        <TableHeaderColumn dataField="image" dataFormat={imageSubmit} width="50%">提出物</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='homweworkID'
                            width="10%"
                            isKey={true}>
                            宿題ID
                        </TableHeaderColumn>
                    </BootstrapTable>
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