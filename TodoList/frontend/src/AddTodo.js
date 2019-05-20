import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { BASE_URL } from './BASE_SETTING'
import { MDBBtn } from "mdbreact";
import { MDBIcon } from "mdbreact";

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: 'MIDDLE',
            startDate: new Date(),
            endDate: new Date(),
            title: '', content: '',
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    onSelect(e, target) {
        this.setState({
            [target]: e.target.value
        })
    }
    handleChange(e, target) {
        this.setState({
            [target]: e.target.value
        })
    }

    handleStartChange(date) {
        this.setState({
            endDate: date,
        });
    }
    handleEndChange(date) {
        let day = new Date();
        day.setDate(new Date().getDate() - 1)
        if (date < day) {
            return alert("이미 지난 날짜입니다")
        }
        this.setState({
            endDate: date,
        });
    }
    addTodoAPI() {

        const todo = {
            title: this.state.title,
            content: this.state.content,
            deadline: this.state.endDate,
            priority: this.state.priority
        }
        if (todo.title === '') return alert("빈 제목입니다.")
        if (todo.content === '') return alert("빈 내용입니다.")

        return axios.post(`${BASE_URL}/api/todo/create`, todo
        ).then(
            (response) => {
                if (!response.data) return alert("오류입니다")
                else {
                    alert("새로운 Todo가 추가되었습니다.")
                    window.location.href = "./"
                }
            }
        )
    }

    render() {
        let i = 0
        let j = 0;
        const {closeModal} = this.props
        const priority = ["LOWEST", "LOW", "MIDDLE", "HIGH", "HIGHEST"]
        return (
            <div className="card">
                <div onClick={()=>closeModal('visible') } style={{textAlign:"right" ,width:"5",height:"5"}}>닫기</div>
                <div align="center" className="card-header">
                    <h3>새로운 할 일 추가</h3>
                </div>
                <div className="card-body">
                    <div className="form-group row">
                        <div className="col-2">
                            <div>제목 :</div>
                        </div>
                        <div className="col">
                            <input value={this.state.title} type="text" className="form-control" onChange={e => this.handleChange(e, 'title')} placeholder="제목"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-2">
                            내용 :
                                </div>
                        <div className="col">
                            <textarea value={this.state.content} cols="50" rows="3" className="form-control" onChange={e => this.handleChange(e, 'content')} placeholder="내용"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">마감 기한 :
                            {/* <div className="col"></div> */}
                            <DatePicker
                                className="form-control ml-2"
                                dateFormat="yyyy년 MM월 dd일"
                                selected={this.state.endDate}
                                onChange={this.handleEndChange}
                            >
                            </DatePicker>
                        </div>
                        <div className="col">
                            <div className="form-group row">
                                <div className="col-2.5">우선 순위:</div>
                                <select className="form-control col-3 ml-2" value={this.state.priority} onChange={e => this.onSelect(e, 'priority')}>
                                    {
                                        priority.map(pri => {
                                            return (
                                                <option key={++i} className="form-control" value={pri}>{pri}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-group row">
                        {/* <div className="col"></div> */}
                        {/* <input type="button" value="보내기" onClick={() => this.addTodoAPI()}></input> */}
                        <MDBBtn outline rounded size="sm" className="col" color="primary" onClick={() => this.addTodoAPI()}><MDBIcon icon="user" className="mr-2" />등록</MDBBtn>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddTodo;