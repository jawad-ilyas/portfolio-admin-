import axios from "axios";

const fetchNewsLetterAdmin = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/v1/mewsletter/fetchnewsletter");
        // console.log("fetch api response of the newsletter api", response.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.log("Error fetching newsletter:", error);
        return null; // or handle the error in a way that makes sense for your application
    }
};

const deleteNewsLetter = async (id) => {
    console.log(id)
    try {
        const response = await axios.post("http://localhost:8080/api/v1/mewsletter/deletenewsnetter", { id });
        // console.log("fetch api response of the newsletter api", response.data?.data);
        return response?.success;
    } catch (error) {
        console.log("Error fetching newsletter:", error);
        return null; // or handle the error in a way that makes sense for your application
    }
}
export { fetchNewsLetterAdmin, deleteNewsLetter };
