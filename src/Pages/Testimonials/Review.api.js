import axios from "axios"
const fetchReview = async () => {



    try {

        const response = await axios.get("http://localhost:8080/api/v1/review/fetchReview");
        console.log("response of the review api ", response)
        return response;
    } catch (error) {
        console.log("error into the fetch review api ", error)
    }

}

const createReview = async (formData) => {
    try {
        return await axios.post('http://localhost:8080/api/v1/review/createReview', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },

        }).then(async (response) => {
            console.log("createReview function into review api ", response)

            return response;

        })
    } catch (error) {
        console.log("error into the create  review api ", error)

    }
}
const deleteReview = async (id) => {

    console.log("delete review id ", id)

    try {
        return await axios.post('http://localhost:8080/api/v1/review/deleteReview', { id }).then(async (response) => {
            console.log("createReview function into review api ", response)
            return response;

        })
    } catch (error) {
        console.log("error into the create  review api ", error)

    }

}


const updateReview = async (data) => {


    try {

        const response = await axios.post('http://localhost:8080/api/v1/review/updateReview', data);
        console.log("response of the update review", response.data);
        return response.data.success;
    } catch (error) {

        console.log("error into the udpate reivew api ", error)
    }

    // console.log("data into review api updateReview Function ", data)

}
export { fetchReview, createReview, deleteReview, updateReview }