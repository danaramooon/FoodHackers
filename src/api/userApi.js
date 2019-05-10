export const getUser = (url) => (
    fetch(
        "http://localhost:8000/users/me",
        {
            method: 'GET',
        }
    )
)

export const login = (user) => (
    fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            // Accept: 'application/json',
        },
        body: JSON.stringify(user)
    }).then(resp => resp.json())
)


export const register = (user) => (
    fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(user)
    })
        .then(resp => resp.json())
)