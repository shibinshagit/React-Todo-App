import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faCheck, faLockOpen, faPenToSquare, faT } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoForm = ({addTodo}) => {
    const [value , setValue] = useState("")
    const handleSubmit = e =>{
        e.preventDefault();

        addTodo(value)
         
        setValue("")
    }
  return (
<form className='TodoForm' onSubmit={handleSubmit}>

    <input value={value} type='text' className='todo-input' placeholder='can i remember for you..!' onChange={(e) => setValue(e.target.value)} />
    <button type='submit' className='todo-btn' ><FontAwesomeIcon icon={faAdd} /></button>
  

</form>
  )
}

export default TodoForm
