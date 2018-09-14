import React from  'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['learn vue', 'learn react'],
            inputVal: ''
        }
    }

    handleBtnClick(){
        let list = this.state.list;
        this.setState({
            list: [...this.state.list, this.state.inputVal],
            inputVal: ''
        })
    }

    handleInputChange(event) {
        this.setState({
            inputVal: event.target.value
        })
    }
    handleItemClick(index) {
        const list = this.state.list;
        list.splice(index,1);
        this.setState({list});
    }

    render () {
        return (
            <div>
                <div>
                    <input value={this.state.inputVal} type="text" onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>add+</button>
                </div>
                <ul>
                   {
                       this.state.list.map((item,index) => {
                           return (
                               <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                           )
                       })
                   }
                </ul>
            </div>
        )
    }
}

export default TodoList