import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({...action.payload, id: Date.now(), completed: false })
        },
        deleteTask: (state,action)=> {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        changeStatus: (state, action) => {
            state.tasks = state.tasks.map((item) => {
                if (item.id === action.payload) {
                    if (item.completed === true) {
                        item.completed = false
                    }else if (item.completed === false) {
                        item.completed = true
                    }
                }
                return item
            })
        }
    }
})

export const {changeStatus, deleteTask,addTask } = taskSlice.actions

export default taskSlice.reducer