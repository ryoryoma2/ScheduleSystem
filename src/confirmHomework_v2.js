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
    },
    {
        homweworkID: 2,
        studentID: '01',
        kamoku: '数学',
        range: 'p,11-15'
    },
    {
        homweworkID: 3,
        studentID: '01',
        kamoku: '英語',
        range: 'p,11-15'
    }
];

const columns = [{
    dataField: 'studentID',
    text: '生徒 ID',
    headerStyle: {
        backgroundColor: '#FFFFFF'
    }
}, {
    dataField: 'kamoku',
    text: '科目',
    editable: false,
    headerStyle: {
        backgroundColor: '#FFFFFF'
    }
}, {
    dataField: 'range',
    text: '範囲',
    headerStyle: {
        backgroundColor: '#FFFFFF'
    },
    searchable: false
}];

const cellEditProp = {
    mode: 'click'
};


function homeworkValidator(value) {
    const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
    if (!value) {
        response.isValid = false;
        response.notification.type = 'error';
        response.notification.msg = 'Value must be inserted';
        response.notification.title = 'Requested Value';
    } else {
        return response;
    }
}

const selectRowProp = {
    mode: 'checkbox'
};

function imageFormatter(cell, row) {
    if (cell) {return (<img style={{ width: 50 }} src={cell} />)}
    else return '未提出'
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
                        <TableHeaderColumn
                            dataField='studentID'
                            filter={{ type: 'TextFilter', delay: 1000, placeholder: "生徒IDを検索" }}
                        >
                            生徒 ID
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='kamoku'>科目</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='range'
                            editable={{ validator: homeworkValidator }}>
                            範囲
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="image" dataFormat={imageFormatter}>提出物</TableHeaderColumn>
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