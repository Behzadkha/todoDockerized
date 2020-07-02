import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Todo = props => (//classname checks if todo_completed is true then puts a line on it. it is in index.css 
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
    </tr>
)
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {listoftodos: []};
        this.helpTodoList = this.helpTodoList.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:9000/todos/')
            .then(res => {
                this.setState({listoftodos: res.data});
            })
            .catch((err) => {
                console.log(err);
            });
    }
    helpTodoList(){
        return this.state.listoftodos.map((current, i)=>{
            return <Todo todo={current} key={i} />;//we are calling the Todo component and passing each todo tasks with its index in the listoftodos array 
            //and this Todo component has to return the rows for our table.
        })
    }
    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.helpTodoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
