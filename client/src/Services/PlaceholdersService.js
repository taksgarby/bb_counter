const baseURL = 'http://localhost:9000/api/placeholder/'

export const getPlaceholders = () => {
    return fetch(baseURL)
    .then(res => res.json())
}

export const placeholderById = (id) => {
    return fetch(baseURL + id)
    .then(res => res.json())
    
}

export const postPlaceholders = (data) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deletePlaceholders = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    }
        )
}

export const updatePlaceholders = (id, data) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

