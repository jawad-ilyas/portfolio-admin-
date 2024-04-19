import axios from "axios"

const ShowWorkData = async () => {

    const response =  await axios.get("http://localhost:8080/api/v1/work/showWork").then((response) => {
        console.log("response of the show Work Data", response?.data?.data)
        return  { data: response.data.data, loading: false }
       
    }).catch((error) => {
        console.log("Error into show response data", error)
    })
    // console.log(response)
    return response
}


export { ShowWorkData }