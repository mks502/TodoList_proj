import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from '../BASE_SETTING'
import { MDBBtn, MDBIcon } from 'mdbreact'
import { MDBDataTable } from 'mdbreact';
import TodosTable from '../component/TodosTable';
import Modal from 'react-awesome-modal'
import UpdateTodo from '../UpdateTodo'

class TodoListContainer extends Component {

    // componentDidMount() {
    //     this.getAllTodos();
    // }
    constructor(props) {
        super(props);
        this.state = {
            // todosList: []
        }
    }

    click(todo) {
        this.setState({
            visible:true,
            todo:todo
        })
        console.log("클릭이벤트",todo)
    } 
    closeModal(target) {
        this.setState({
            [target]: false,
        });
    }

    getAllTodos() {
        console.log("시도")
        return axios.get(`${BASE_URL}/api/todo/alltodos`).then(
            (response) => {
                this.setState({ todosList: response.data })
            }
        )
    }

    render() {
        console.log("props",this.props)
        console.log("state",this.state)
        const {todosList} =this.props
        const todo = this.state.todo
        return (
            <div>
                {/* <ul>
                    {
                        this.state.todosList.map((todo) => {
                            return (
                                <div className="row">
                                    <a className="col-9" onClick={()=>alert("누름")} style={{cursor:'pointer'}}>
                                        제목 : {todo.title} 내용 : {todo.content} 마감기한 : {todo.deadline}
                                     </a>
                                </div>
                            )
                        }
                        )
                    }
                    <li></li>
                </ul> */}
                <TodosTable todos={todosList} click={this.click.bind(this)}></TodosTable>
                <Modal visible={this.state.visible} width="800" height="400" effect="fadeInLeft" onClickAway={() => this.closeModal('visible')} >
                {
                    this.state.todo &&
                <UpdateTodo todo={todo}/>
                }
            </Modal>
                
            </div>
        );
    }
}

export default TodoListContainer;