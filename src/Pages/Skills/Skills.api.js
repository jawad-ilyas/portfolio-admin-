import axios from "axios"



// ! Api Design for the Add Work Experience 

const createWorkExperience = async (data) => {

    try {
        return await axios.post("http://localhost:8080/api/v1/experience/createworkexperience", data)
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log("error into project catagory axios", error)
            })

    } catch (error) {
        console.log("error into create project category ", error)
    }
}
// ! Api Design for the Add Work 

const createWork = async (data) => {

    console.log("create data into create work api function " , data)
    try {
        return await axios.post("http://localhost:8080/api/v1/experience/creatework", data)
            .then((response) => {
                console.log(response)
                return response
            })
            .catch((error) => {
                console.log("error into project catagory axios", error)
            })

    } catch (error) {
        console.log("error into create project category ", error)
    }
}

export { createWorkExperience, createWork }