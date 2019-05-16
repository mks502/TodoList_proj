import React, { Component } from 'react';
import axios from 'axios';
import {BASE_URL} from '../BASE_SETTING'

class TodoListContainer extends Component {

    constructor(props) {
        super(props);
        
    }
    
    getAllTodos(){
        axios.get(`${BASE_URL}/api/todo/listAll`)
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default TodoListContainer;