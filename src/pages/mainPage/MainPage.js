import { useDispatch, useSelector } from "react-redux";
import { add, changeInputAction, changeTitle, clear, deleteTitle, withParams } from "../../store/titleSlice";


const MainPage = () => {

    const { title, inputValue } = useSelector(state => state.titleReducer)
    const dispatch = useDispatch()

    const changeTitleFunction = () => {
        dispatch(changeTitle())
    }

    const changeTitleWIthParams = () => {
        dispatch(withParams('hello geeks!'))
    }

    const changeInput = (event) => {
        dispatch(changeInputAction(event.target.value))
    }

    const addFunction = () => {
        dispatch(add(inputValue))
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <input type="text" value={inputValue} onChange={changeInput} />
            <button onClick={() => dispatch(clear())}>clear</button>
            <button onClick={addFunction}>add</button>
            <button onClick={() => dispatch(deleteTitle())}>delete title</button>

            {/* <button onClick={changeTitleFunction}>change title</button>
            <button onClick={changeTitleWIthParams}>change title with params</button> */}
        </div>
    )
}

export default MainPage;