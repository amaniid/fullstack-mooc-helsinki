import axios from 'axios'
const baseUrl = 'api/notes'

//palauttavat promiseja

const getAll = () => {
    console.log('promise fulfilled')
    console.log('THIS HAPPENS ONLY ONCE')

    const request = axios.get(baseUrl)
    return request.then(
        response =>
            response.data
    )
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    console.log('new submission through FORM')
    return request.then(
        response =>
            response.data
    )
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    console.log('updating importance!')
    return request.then(
        response =>
            response.data
    )
}

export default { getAll, create, update }