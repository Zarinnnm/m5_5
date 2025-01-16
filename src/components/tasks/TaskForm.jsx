import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from '../../store/taskSlice'


const TaskForm = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.taskReducer.tasks)
    const status = useSelector(state => state.filterReducer.status)

    console.log(tasks);
    console.log(status);
    
    

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({title}))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название задачи"
            />
            <button>Добавить задачу</button>
        </form>
    )
}

export default TaskForm;