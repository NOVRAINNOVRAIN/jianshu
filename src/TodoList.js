import React, {Component, Fragment} from  'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['learn vue', 'learn react'],
            inputVal: ''
        }
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBtnClick = this.handleBtnClick.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    handleBtnClick= () =>{
        let list = this.state.list;
        this.setState({
            list: [...list, this.state.inputVal],
            inputVal: ''
        })
    }

    handleInputChange = (eve) => {
        this.setState({
            inputVal: eve.target.value
        })
    }

    handleDelete = (index) => {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({list})
    }

    getTodoItems () {
       return (
        this.state.list.map((item,index) => {  
            return (
                <TodoItem 
                    key={index} 
                    content={item} 
                    index={index} 
                    del={this.handleDelete}
                />
            )
        })
       )
    }

    render () {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputVal} type="text" onChange={this.handleInputChange}/>
                    {/* <button style={{backgroundColor:'red', color: '#fff'}} onClick={this.handleBtnClick}>add+</button> */}
                    <button className='red-btn' onClick={this.handleBtnClick}>add+</button>
                </div>
                <ul>
                   {this.getTodoItems()}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList