import axios from "axios";
import { getData } from "./api.storage";
import StorageConstants from "./constants.storage";

const baseURL = "https://tag-c5ba886bbc3c.herokuapp.com/api/v1"

const axiosInstance = axios.create({
    baseURL,
})

// could use interceptor but rushed
export const authAxiosInstance = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${getData(StorageConstants.Token).data}`
    }
})

export function logAxiosResponse(errorFromTrial) {
    if (!errorFromTrial instanceof Error) {
        alert(JSON.stringify(errorFromTrial))
        return { axiosError: false }
    }
    if (errorFromTrial.response) {
        const errResponse = errorFromTrial.response
        console.log(errResponse)
        alert(errResponse.data.message)
        return {
            axiosError: true,
            ...errResponse
        }
    }
    alert(errorFromTrial.message)
    return { axiosError: false }
}

export default axiosInstance
