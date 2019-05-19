import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Modal from 'react-awesome-modal';
import UpdateTodo from '../UpdateTodo'
class TodosTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }
    openModal(target) {
        this.setState({
            [target]: true,
        });
    }
    closeModal(target) {
        this.setState({
            [target]: false,
        });
    }
    
    render() {
        const {click} = this.props 
        const todos= this.props.todos
        let rowsData=[]
        if(todos){
            todos.map((todo) => {
                const temp ={
                    tid:todo.tid,
                    title:todo.title,
                    content:todo.content,
                    startDate:todo.startDate,
                    deadline:todo.deadline,
                    priority:todo.priority,
                    finish:todo.finish ? "완료" : "미완료"
                    ,
                    clickEvent: ()=>click(todo),
                }
                rowsData.push(temp)
            })
        }

        const data = {
            columns: [
                {
                    label: '번호',
                    field: 'tid',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: '제목',
                    field: 'title',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: '내용',
                    field: 'content',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: '등록일',
                    field: 'startDate',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '마감 기한',
                    field: 'deadline',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: '우선순위',
                    field: 'priority',
                    sort: 'asc',
                    width: 100
                },
                {
                    label: '상태',
                    field: 'finish',
                    sort: 'asc',
                    width: 150
                },
            ],
            rows: rowsData
        };
        return (
            <div>
            <MDBDataTable
                striped
                bordered
                hover
                data={data}
            />
            </div>
        );
    }
}
export default TodosTable;