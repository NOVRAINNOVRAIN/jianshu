import React from 'react'
import { connect } from 'react-redux'
import { changeInputValAction, addTodoItemAction, delTodoItemAction } from './store/actionCreators'

function TodoList(props) {    
  const { inputVal, list, changeInputVal, handleBtnClick, handleItemDel } = props
    return (
      <div>
        <div>
          <input value={inputVal} onChange={changeInputVal}/>
          <button onClick={handleBtnClick}>Subnit</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index} onClick={() => {handleItemDel(index)}}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
}


const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}

const mapDispatchTpProps = (dispatch) => {
  return {
    changeInputVal(e) {
      const action = changeInputValAction(e.target.value)
      dispatch(action)
    },
    handleBtnClick() {
      const action = addTodoItemAction()
      dispatch(action)
    },
    handleItemDel(index) {
      const action = delTodoItemAction(index)
      dispatch(action)
    }
  }
}

// TodoList是个UI组件，最终导出的是 用connect集成 TodoList UI组件、数据和业务逻辑 而 包装成的容器组件
export default connect(mapStateToProps, mapDispatchTpProps)(TodoList)