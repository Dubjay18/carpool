
export const isStringEmpty = (rawData) => {
    return !rawData || rawData == ""
}

export const boolAnyEmptyInList = (listOfData) => {
    if (!Array.isArray(listOfData))
        return true; // should be an error but at this point, lol
    return listOfData.some((value) => isStringEmpty(value))
}
