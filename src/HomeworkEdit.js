// インポート
import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const homework = [
    {
        homweworkID: 0,
        studentID: '00',
        subject: '数学',
        range: 'p,11-15'
    },
    {
        homweworkID: 1,
        studentID: '00',
        subject: '英語',
        range: 'p,11-15'
    },
    {
        homweworkID: 2,
        studentID: '01',
        subject: '数学',
        range: 'p,11-15'
    },
    {
        homweworkID: 3,
        studentID: '01',
        subject: '英語',
        range: 'p,11-15'
    }
];

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

class Homeworkedit extends Component {
    render() {
        return (
            <div className="Homeworkedit">
                <header className="App-header">
                    <BootstrapTable
                        version='4'
                        data={homework}
                        cellEdit={cellEditProp}
                        insertRow={true}
                        tableStyle={{ backgroundColor: '#FFFFFF' }}
                        deleteRow={true} selectRow={selectRowProp}
                    >
                        <TableHeaderColumn
                            dataField='studentID'
                            filter={{ type: 'TextFilter', delay: 1000, placeholder: "生徒IDを検索" }}
                        >生徒 ID</TableHeaderColumn>
                        <TableHeaderColumn dataField='subject'>科目</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='range'
                            editable={{ validator: homeworkValidator }}
                        >範囲</TableHeaderColumn>
                        <TableHeaderColumn
                            dataField='homweworkID'
                            width="10%"
                            isKey={true}
                            autoValue={ true }
                        >宿題ID</TableHeaderColumn>
                    </BootstrapTable>
                    <br></br>
                    <Button buttonname={'TOPに戻る'} linkname={"/TopScreenTeacher"} className="under_button" />
                </header>
            </div>
        );
    }
}

// エクスポート
export default Homeworkedit;