import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk(
    'getPosts',
    async function (_, { dispatch }) {
    // dispatch({ type: 'pending' })
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        // dispatch(postsInfo(posts))
        // dispatch({type: 'fulfilled'})
    } catch (e) {
        // dispatch({type: 'rejected'})
    }
        
    }
)


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    reducers: {
        // postsInfo: (state, action) => {
        //     state.posts = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const {postsInfo} = postsSlice.actions

export default postsSlice.reducer