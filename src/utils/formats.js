
export const formatStringSize = (string,size) => {
    return string.length > size ? string.substring(0,size-3) + '...' : string
}