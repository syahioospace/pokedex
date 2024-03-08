export const getHeader = () => {
  return {
    multipart: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json"
    }
  }
}