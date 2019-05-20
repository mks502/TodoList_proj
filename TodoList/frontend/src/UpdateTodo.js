import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { BASE_URL } from './BASE_SETTING'

class UpdateTodo extends Component {
    constructor(props) {
        super(props);
        const {todo} = this.props
        this.state = {
            tid:todo.tid,
            priority: todo.priority,
            startDate:new Date(todo.startDate),
            deadline: new Date(todo.deadline),
            title: todo.title, content: todo.content,
            finish:todo.finish
        }
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
    
    toggle(e){
        console.log(e.target.value)
        console.log(this.state.finish)
        this.setState({
            finish: !this.state.finish
        })

        console.log(this.state.finish)
    }



    handleEndChange(date) {
        let day=new Date();
        day.setDate(new Date().getDate()-1)
        if (date < day) {
            return alert("이미 지난 날짜입니다")
        }
        console.log("남은 일자", date)
        this.setState({
            deadline: date,
        });
    }
    updateTodoAPI() {
        const todo = {
            tid: this.state.tid,
            title: this.state.title,
            content: this.state.content,
            deadline: this.state.deadline,
            priority: this.state.priority,
            finish:this.state.finish
        }
        if (todo.title === '') return alert("빈 제목입니다.")
        if (todo.content === '') return alert("빈 내용입니다.")

        return axios.put(`${BASE_URL}/api/todo/update`, todo
        ).then(
            (response) => {
                if (!response.data) return alert("오류입니다")
                else {
                    alert("Todo가 변경 되었습니다.")
                    window.location.href = "./"
                }
            }
        )
    }
    deleteTodoAPI() {
        const todo = {
            tid: this.state.tid,
        }

        return axios.delete(`${BASE_URL}/api/todo/delete`, {data:todo}
        ).then(
            (response) => {
                // console.log("체크",response.data)
                if (!response.data) return alert("오류입니다")
                else {
                    alert("삭제 되었습니다.")
                    window.location.href = "./"
                }
            }
        )
    }
    componentWillReceiveProps(nextProps) {
        // this.props 는 아직 바뀌지 않은 상태
        //선택된 tid가 달라졌으면 state상태 변경
        if(this.props.todo.tid!=nextProps.todo.tid){
            this.setState({
                tid:nextProps.todo.tid,
                title:nextProps.todo.title,
                content:nextProps.todo.content,
                deadline:new Date(nextProps.todo.deadline),
                priority:nextProps.todo.priority,
                finish:nextProps.todo.finish
            });
        }
      }

    render() {
        const {todo} = this.props
        const {closeModal} = this.props
        let i = 0
        let j = 0;
        const priority = ["LOWEST", "LOW", "MIDDLE", "HIGH", "HIGHEST"]
        return (
            <div className="card">
                <div align="center" className="card-header">
                <div onClick={()=>closeModal('visible') } style={{textAlign:"right" ,width:"5",height:"5"}}>닫기</div>
                    <h3>상세 정보</h3>
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
                                selected={this.state.deadline}
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
                        <div>완료 여부</div>
                        <input type="checkbox" className="ml-2" checked={this.state.finish} onChange={e => this.toggle(e)} style={{width:'25px',height:'25px'}}></input>
                    </div>

                    <div className="form-group row">
                        {/* <div className="col"></div> */}
                        <input type="button" className="btn btn-secondary" value="수정" onClick={() => this.updateTodoAPI()}></input>
                        <input type="button" className="btn btn-secondary ml-2" value="삭제" onClick={() => this.deleteTodoAPI()}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateTodo;