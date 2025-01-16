import TaskList from "../components/tasks/TaskList";
import FilterBar from '../components/filters/FilterBar'
import TaskForm from "../components/tasks/TaskForm";

const HomePage = () => {

    return (
        <div>
            <h1>Менеджер задач</h1>
            <TaskForm />
            <FilterBar />
            <TaskList />
        
        </div>
    )
}

export default HomePage;