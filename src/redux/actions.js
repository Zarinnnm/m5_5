import { types } from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function asyncFunctionAction() {
    return function () {
        setTimeout(() => {
            alert("hello")
        }, 2000)
    }
}

export function getUsersAction (data) {
    return {
        type: types.USERS,
        payload: data
    }
}

export function fetchUsersAction() {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        dispatch(getUsersAction(data))
    }
}

export function changeLoading() {
    return {
        type: 'LOAD_TRUE'
    }
}

export function falseLoading() {
    return {
        type: 'LOAD_FALSE'
    }
}

export function addUserAction(user) {
    return async function (dispatch) {
        try {
            dispatch(changeLoading())
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }

            const response = await fetch('https://jsonplaceholder.typicode.com', options)
            if (response.status >= 200 && response.status <= 204 ) {
                alert('success')
                dispatch(falseLoading())
            } else if (response.status === 404) {
                alert('404 No')
                dispatch(falseLoading())
            }
        } catch {
        }
        
    }
}