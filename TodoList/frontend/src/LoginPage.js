import React, { Component } from 'react';
import Register from './component/Register';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import {BASE_URL} from './BASE_SETTING'

var fullScreen = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0, left: 0
};

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',password:'',
            visible:false
        }
    }
    handleChange(e, target) {   // input onChange
        this.setState({
            [target]: e.target.value
        })
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
    loginAPI(){
        const mem={
            username:this.state.username,
            password:this.state.password
        }
        console.log(mem)
        return axios.post(`${BASE_URL}/api/member/login`, mem)
        .then(
            (response) =>{
                console.log(response)
            }
        )
    }
    
    render() {
        return (
            <div className="bg-white" style={fullScreen}>

                <div className="container">
                    {/* <!-- Outer Row --> */}
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    {/* <!-- Nested Row within Card Body --> */}
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="p-5">
                                                <hr />
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-700 mb-4">나만의 투두리스트</h1>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user" value={this.state.username} onChange={e => this.handleChange(e, 'username')} placeholder="아이디" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user" value={this.state.password} onChange={e => this.handleChange(e, 'password')} placeholder="비밀번호" />
                                                </div>
                                                <div className="form-group">
                                                </div>
                                                <input type="button" onClick={e=>this.loginAPI(e)} className="btn btn-primary btn-user btn-block" value="Login" />
                                                <input type="button" className="btn btn-primary btn-user btn-block" onClick={()=>this.openModal('visible') } value="Register" />
                                                <hr />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal visible={this.state.visible} width="800" height="400" effect="fadeInLeft" onClickAway={() => this.closeModal('visible')} >
                    <Register></Register>
                    </Modal>


                </div>

                {/* <!-- Bootstrap core JavaScript--> */}
                <script src="vendor/jquery/jquery.min.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                {/* <!-- Core plugin JavaScript--> */}
                <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

                {/* <!-- Custom scripts for all pages--> */}
                <script src="js/sb-admin-2.min.js"></script>

            </div>
        );
    }
}

export default LoginPage;