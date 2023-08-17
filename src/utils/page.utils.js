import { getData } from "./api.storage"
import StorageConstants from "./constants.storage"

export function userIsDriver() {
    const IsDriverRaw = getData(StorageConstants.IsDriver)

    return IsDriverRaw.success && IsDriverRaw.data == true
}
