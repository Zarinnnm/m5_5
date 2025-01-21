import { useDispatch, useSelector } from "react-redux";
import {changeStatus, deleteTask} from "../../store/taskSlice";


const TaskList = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.taskReducer.tasks)
    const status = useSelector(state => state.filterReducer.status)

    console.log(tasks, status);
    

    const filteredTasks = tasks.filter(task => {
        if (status === 'completed') return task.completed;
        if (status === 'uncompleted') return !task.completed
        return true;

    })
    console.log(123)

    return (
        <div>
            {filteredTasks.map(task => (
                <div key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={(e) => { dispatch(changeStatus(task.id))

                        }}
                    />
                    <span>{task.title}</span>
                    <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
                </div>
            ))}
        </div>
    )
}

export default TaskList;