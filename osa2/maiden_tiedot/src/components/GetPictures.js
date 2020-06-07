import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetPictures = ({ lat, long }) => {
    //const [url, setUrl] = useState('')
    const [photoData, setPhotoData] = useState([])


    const apilink = "http://api-pic4carto.openstreetmap.fr/search/around?lat="
        .concat(lat)
        .concat("&lng=")
        .concat(long)
        .concat("&radius=1000")

    // setUrl("http://api-pic4carto.openstreetmap.fr/search/around?lat="
    // .concat(lat)
    // .concat(".0&lng=")
    // .concat(long)
    // .concat(".0&radius=1000"))

    // const hook = (link) => {
    //     axios
    //       .get(link)
    //       .then(response => {
    //         console.log('promise doned')
    //         setUrlData(response.data)
    //       })
    //   }

//     axios
//     .get(url)
//     .then(response => {
//         console.log('promise doned')
//         setPhotoData(response.data)
//     })
// }

    useEffect(() => {
        const fetchData = async () => {
            console.log('Promise at GetPictures')
            const result = await axios(apilink, )
            setPhotoData(result.data)
        }
        fetchData()
    }, [apilink])

    // try {
    //     // Load async data from an inexistent endpoint.
    //     let urlData = axios.get(apilink).then(response => )
    // } catch (e) {
    //     console.log(`😱 Axios request failed: ${e}`);
    // }

    if (photoData.status === "OK") {
        console.log("JOOO")
        if(photoData.pictures.length > 0) {
            return (
                <img alt={photoData.pictures[0].date}
                className="mappic"
                src={photoData.pictures[0].pictureUrl}/>
            )
        }
        return (
           <div>{photoData.status}</div> 
        )
    }

    return (
        <div>
            [{lat}, {long}]
            {/* <img src="
"/> */}
        </div>
    )
}

export default GetPictures