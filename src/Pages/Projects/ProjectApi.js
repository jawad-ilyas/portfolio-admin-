import axios from "axios"



// ! Api Design for the Add Project Category 

const createProjectCategory = async (data) => {

    try {
        return await axios.post("http://localhost:8080/api/v1/projectCategory/addProjectCategrory", data)
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

// ! Api Design for the Fetch Project Category

const fetchProjectCategory = () => {

    try {

        return axios.get("http://localhost:8080/api/v1/projectCategory/showProjectCategrory")
            .then((response) => {

                console.log("response data ", response.data.data)
                return response.data.data
            })
            .catch((error) => {
                console.log("Error into the fetch product category api ", error)

            })

    } catch (error) {
        console.log('error into fetch project api ', error)
    }
}

// ! Api Design for the delete project Category

const deleteProjectCategory = async (_id) => {



    try {

        return await axios.post("http://localhost:8080/api/v1/projectCategory/deleteProjectCategory", { _id: _id }).then((response) => {

            console.log("response of the delete project Category", response)
            return response;
        }).catch((error) => {

            console.log("Error into the delete project categroyr ", error)
        })
    } catch (error) {

        console.log("erro into adpi delete project category ", error)
    }

}


const createProjects = async (data) => {


    // console.log("data into create project api call function ", data)

    try {

        return await axios.post("http://localhost:8080/api/v1/project/createProjects", data)
            .then((response) => {
                return response
            })
            .catch((error) => {

                console.log("Error into project creation ", error)
            })
    } catch (error) {
        console.log("Error into project creation ", error)
    }
}

export { fetchProjectCategory, deleteProjectCategory, createProjectCategory, createProjects }