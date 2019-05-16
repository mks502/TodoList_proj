import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Modal from 'react-awesome-modal'
import Todo from './component/Todo';

class BaseTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, // Todo 추가 Modal 창 상태
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
        return (
            <div className="m-5 container border" style={{ width: '100%', height: '100%' }}>
                <div align="center" className="header">
                    <h2 className="text-primary">TodoList</h2>
                </div>
                <div className="body">
                    <div className="row">
                        <input className="col" type="button" value="추가" onClick={() => this.openModal('visible')}></input>
                        <input className="col" type="button" value="전체"></input>
                        <input className="col" type="button" value="전체"></input>
                    </div>
                    <Todo></Todo>
                </div>
                <Modal visible={this.state.visible} width="800" height="400" effect="fadeInLeft" onClickAway={() => this.closeModal('visible')} >
                    <AddTodo></AddTodo>
                </Modal>


            </div>
        );
    }
}
export default BaseTemplate;