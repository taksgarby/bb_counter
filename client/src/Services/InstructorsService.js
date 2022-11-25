const baseURL = 'http://localhost:9000/api/instructor/'

export const getInstructors = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const instructorById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postInstructors = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteInstructors = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

export const updateInstructors = (id, data) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

