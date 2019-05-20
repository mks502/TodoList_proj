import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Modal from 'react-awesome-modal'
import Todo from './component/Todo';
import TodoListContainer from './container/TodoListContainer'
import EmptyView from './component/EmptyView'
import axios from 'axios'
import { BASE_URL } from './BASE_SETTING'
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
class BaseTemplate extends Component {
    constructor(props) {
        super(props);
        this.addNotification = this.addNotification.bind(this);
        this.notificationDOMRef = React.createRef();
        this.state = {
            visible: false, // Todo 추가 Modal 창 상태
            view: 1, //보여지는 view 단계
        }
        console.log("state", this.state)
    }
    componentDidMount() {
        this.getAllTodos()
        this.getTodayTodos()
        this.getLateTodos()
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
    changeView(target, opt) {
        this.setState({
            [target]: opt,
        });
    }
    getAllTodos() {
        return axios.get(`${BASE_URL}/api/todo/alltodos`).then(
            (response) => {
                this.setState({ todosList: response.data })
            }
        )
    }
    getLateTodos() {  // 완료하지 못하고 마감기한이 지난 투두리스트를 알림해주기
        return axios.get(`${BASE_URL}/api/todo/latetodos`).then(
            (response) => {
                const lateTodos = response.data
                lateTodos.map(todo => {
                    this.addNotification(todo.title)
                })
            }
        )
    }
    getTodayTodos() {
        return axios.get(`${BASE_URL}/api/todo/todaytodos`).then(
            (response) => {
                this.setState({ todayTodos: response.data })
            }
        )
    }
    addNotification(msg) {
        console.log(this.state.todosList)
        this.notificationDOMRef.current.addNotification({
            title: "마감기한이 지났습니다.\n",
            message: msg,
            type: "info",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 5000 },
            dismissable: { click: true }
        });
    }

    render() {
        console.log("오늘", this.state.todayTodos)
        return (
            <div>
                <ReactNotification ref={this.notificationDOMRef} />
                <div align="center" className="header">
                    {/* <!-- Navigation --> */}
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                        <div class="container">
                            <div class="navbar-brand" href="#">DIY TodoList</div>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarResponsive">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="./">Home
            <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" onClick={() => this.changeView('view', 1)} href="#">오늘 할일!</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" onClick={() => this.changeView('view', 2)} href="#">모든 리스트</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" onClick={() => this.openModal('visible')} href="#">할일 추가</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="body">
                    {/* <div className="row">
                        <input className="col" type="button" value="추가" onClick={() => this.openModal('visible')}></input>
                        <input className="col" type="button" value="오늘" onClick={() => this.changeView('view',1)}></input>
                        <input className="col" type="button" value="전체" onClick={() => this.changeView('view',2)}></input>
                    </div> */}
                    {
                        this.state.view === 1 && <h2>오늘의 할일!</h2>
                    }
                    {
                        this.state.view === 2 && <h2>모든 리스트</h2>
                    }
                    {
                        //view 레벨이 오늘투두리스트 이면서 오늘 투두리스트의 데이터가 있을 때 
                        (this.state.view === 1 && (this.state.todayTodos && this.state.todayTodos[0])) &&

                        <TodoListContainer todosList={this.state.todayTodos}></TodoListContainer>
                    }
                    {
                        //view 레벨이 전체 투두리스트 이면서 전체투두리스트의 데이터가 있을 때 
                        (this.state.view === 2 && (this.state.todosList && this.state.todosList[0])) &&
                        <TodoListContainer todosList={this.state.todosList}></TodoListContainer>
                    }
                    {
                        //view레벨에 해당되는 데이터가 비어 있을 때
                        ((this.state.view === 1 && !(this.state.todayTodos && this.state.todayTodos[0]))
                            ||
                            (this.state.view === 2 && !(this.state.todosList && this.state.todosList[0])))
                        && <EmptyView openModal={this.openModal.bind(this)} ></EmptyView>
                    }
                </div>
                <Modal visible={this.state.visible} width="800" height="400" effect="fadeInLeft" onClickAway={() => this.closeModal('visible')} >
                    <AddTodo></AddTodo>
                </Modal>
            </div>
        );
    }
}
export default BaseTemplate;