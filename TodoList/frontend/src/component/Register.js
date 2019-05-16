import React, { Component } from 'react';
import {MDBBtn,MDBIcon} from 'mdbreact';
import axios from 'axios'
import {BASE_URL} from '../BASE_SETTING'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', password: '', password2: '',
            checked: false, 
        };  //checked id중복체크 
    }
    click(target) {   //재입력 하는 버튼 이벤트
        if (target === "username")
            this.setState({ ...this.state, checked: false, username: '' });
    }
    onChange(e, target) {   //select option change event
        this.setState({
            [target]: e.target.value
        })
    }
    
    checkIdAPI() {
        const mem = {
            username: this.state.username,
        }
        if (this.state.username === "") return alert("ID를 입력하세요")

        return axios.post(`${BASE_URL}/api/member/idCheck`, mem).then(
            (response) => {
                //js 는 빈 문자열 빈오브젝트 false 
                if (!response.data) alert("이미 존재하는 아이디입니다")
                else {
                    alert("사용 가능한 아이디입니다")
                    this.setState({ checked: true });
                }
            }
        )
    }
    registUserAPI() {
        const mem = {
            username: this.state.username,
            password: this.state.password,
        }
        console.log("mem:", mem)
        if (!this.state.checked) return alert("ID중복 검사를 먼저 하세요")
        if (this.state.password !== this.state.password2) return alert("비밀번호를 올바르게 입력하세요")
        return axios.post(`${BASE_URL}/api/member/register`,mem
        ).then(
            (response) => {
                //js 는 빈 문자열 빈오브젝트 false 
                if (!response.data) alert("등록에 에러가 생겼습니다.")
                else {
                    alert(response.data.name + " 등록 되었습니다")
                    window.location.href = "/";
                }
            }
        )
    }
    render() {
        return (
            <div className="card o-hidden border-0 shadow-lg">
                <div className="card-header text-center">
                    <h4 align="center" className="card-header text-primary"><MDBIcon icon="user-edit" className="mr-2" />신규 등록</h4>
                </div>
                <div className="card-body text-dark-2">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        {/* <div className="col-lg-6 d-none d-lg-block bg-login-image"></div> */}
                        <div className="col">
                            <div className="">
                                {/* <form className="User" action="" method="post"> */}
                                <div className="form-group row">
                                    <div className="col-7">
                                        <input type='text' disabled={this.state.checked} value={this.state.username} onChange={e => this.onChange(e, 'username')} type="text" className="form-control form-control-user" name="username" maxLength="10" placeholder="아이디" />
                                    </div>
                                    <div className="col-2">
                                        <input type='button' className=" btn-sm btn-primary mt-1 ml-1" value="중복검사" onClick={() => this.checkIdAPI()}></input>
                                    </div>
                                    <div className="col-2">
                                        <input type='button' className=" btn-sm btn-primary mt-1 ml-3" value="재입력" onClick={() => this.click('username')}></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.password} onChange={e => this.onChange(e, 'password')} type="password" className="form-control form-control-user" name="password" placeholder="비밀번호" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.password2} onChange={e => this.onChange(e, 'password2')} type="password" className="form-control form-control-user" name="password2" placeholder="비밀번호 확인" />
                                </div>  
                                </div>
                                {/* <input type="button" onClick={this.registUserAPI.bind(this)} className="btn btn-darkblue btn-user btn-block" value="등록" /> */}
                                <MDBBtn outline rounded size="sm" className="col" color="primary" onClick={this.registUserAPI.bind(this)}><MDBIcon icon="user" className="mr-2" />사원 등록</MDBBtn>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Register;