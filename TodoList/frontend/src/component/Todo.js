import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Todo extends Component {
    constructor(props) {
        super(props);
        const {todo} =this.props;
        this.state = {
            priority: '보통',
            startDate: new Date(),
            endDate: new Date(),
            title: '', content: '',
            mode: true,
        }
        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }
    onToggle(target) {
        this.setState({
             [target]: !this.state.mode
        })
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
        if (date < new Date()) {
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
            Deadline: this.state.endDate,
            priority: this.state.priority
        }
        if (todo.title === '') return alert("빈 제목입니다.")
        if (todo.content === '') return alert("빈 내용입니다.")
    }

    render() {
        let i = 0
        let j = 0;
        const priority = ["가장 낮음", "낮음", "보통", "높음", "가장높음"]
        return (
            <div className="container">
                <div className="card">
                    <div align="center" className="card-header">
                        <h1>새로운 할 일 추가</h1>
                    </div>
                    <div className="card-body">
                        <div className="form-group row">
                            <div className="col-1">
                                <div>제목 :</div>
                            </div>
                            <div className="col">
                                <input value={this.state.title} type="text" className="form-control" disabled={this.state.mode} onChange={e => this.handleChange(e, 'title')} placeholder="제목"></input>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-1">
                                내용 :
                                </div>
                            <div className="col">
                                <textarea value={this.state.content} cols="50" rows="3" className="form-control" disabled={this.state.mode} onChange={e => this.handleChange(e, 'content')} placeholder="내용"></textarea>
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
                                    disabled={this.state.mode}
                                >
                                </DatePicker>
                            </div>
                            <div className="col">
                                <div className="form-group row">
                                    <div className="col-2.5">우선 순위:</div>
                                    <select className="form-control col-3 ml-2" value={this.state.priority} disabled={this.state.mode} onChange={e => this.onSelect(e, 'priority')}>
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
                            <input type="button" value="변경" onClick={() => this.onToggle('mode')}></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todo;