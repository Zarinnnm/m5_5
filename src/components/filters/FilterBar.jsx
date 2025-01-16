import { useDispatch, useSelector } from "react-redux"
import {setFilter} from '../../store/filterSlice'

const FilterBar = () => {
    const dispatch = useDispatch()
    const status = useSelector(state => state.filterReducer.status)

    return (
        <div>
            <button onClick={() => dispatch(setFilter('all'))} disabled={status === 'all'}>Все </button>
            <button onClick={() => dispatch(setFilter('completed'))} disabled={status === 'completed'}>Выполненные</button>
            <button onClick={() => dispatch(setFilter('uncompleted'))} disabled={status === 'uncompleted'}>Невыполненные</button>
        </div>
    )
}

export default FilterBar;