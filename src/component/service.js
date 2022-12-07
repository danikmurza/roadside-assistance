import {scrollToTop} from "./Footer";

const _base = "http://localhost:5000/api/ticket/a"


function handleResponse(response) {
    return response.text().then(text => {
            const data = text && JSON.parse(text)
            if (!response.ok) {
                if (response.status === 401) {
                    logout()
                }
                const error = (data && data.message) || response.statusText
                return Promise.reject(error)
            }
            return data
        }
    )
}

const  myAccount = (body) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        }

        return fetch(`${_base}`, requestOptions)
            .then(res => console.log(res))
            .then(user => {
                    // localStorage.setItem('order', JSON.stringify(user))
                this.props.history.push('/request')
                scrollToTop()
                    return user
                }
            )
    }catch (e) {
        console.log(e)
    }
}


function logout() {
    localStorage.removeItem('user')
    window.location.reload()
}

async function deleteUser(_id) {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({_id})
    }

    return await fetch(`${_base}/auth/user`, requestOptions)
        .then(handleResponse)
        .then(user => {
                return user
            }
        )
}

export const userService = {
    logout,
    myAccount,
    deleteUser

}
