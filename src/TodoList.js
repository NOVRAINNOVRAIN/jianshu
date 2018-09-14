import React from  'react'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1,text: 'learn vue'},
                {id: 2,text: 'learn react'}
            ],
            inputVal: ''
        }
    }

    handleBtnClick(){
        let list = this.state.list;
        this.setState({
            list: [...this.state.list, {id: 3,text: this.state.inputVal}],
            inputVal: ''
        })
    }

    handleInputChange(event) {
        this.setState({
            inputVal: event.target.value
        })
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
                       this.state.list.map((item) => {
                           return (
                               <li key={item.id}>{item.text}</li>
                           )
                       })
                   }
                </ul>
            </div>
        )
    }
}

export default TodoList