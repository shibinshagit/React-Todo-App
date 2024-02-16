import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const EditTodoForm = ({editTodo , task}) => {
    const [value , setValue] = useState(task.task)
    const handleSubmit = e =>{
        e.preventDefault();

        editTodo(value, task.id)
         
        setValue("")
    }
  return (
<form className='TodoForm' onSubmit={handleSubmit}>

    <input value={value} type='text' className='todo-input' placeholder='update task' onChange={(e) => setValue(e.target.value)} />
    <button type='submit' className='todo-btn' > <FontAwesomeIcon icon={faCheck} /></button>

</form>
  )
}

export default EditTodoForm
