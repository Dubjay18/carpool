
function responseFormat(status, data) {
    return {
        message: status,
        data: data,
        success: status == "Success"
    }
}

export function storeData(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
    return responseFormat(value)
}

export function getData(key) {
    const data = localStorage.getItem(key)
    if (!data)
        return responseFormat("Failed")
    return responseFormat("Success", JSON.parse(data))
}

export function removeItem(key) {
    const data = getData(key).data
    localStorage.removeItem(key)
    return responseFormat("Success", JSON.parse(data))
}

export function clearAllStorage() {
    localStorage.clear()
    return responseFormat("Success")
}
