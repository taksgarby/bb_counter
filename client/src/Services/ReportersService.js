const baseURL = 'http://localhost:9000/api/reporter/'

export const getReporters = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const reporterById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postReporters = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteReporters = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

export const updateReporters = (id, data) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

