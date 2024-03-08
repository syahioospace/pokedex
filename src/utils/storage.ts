export const storage = {
  getToken: () =>
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("token") || "null")
      : null,
  setToken: (token: string) =>
    typeof window !== "undefined"
      ? window.localStorage.setItem("token", JSON.stringify(token))
      : null,
  clearToken: () =>
    typeof window !== "undefined"
      ? window.localStorage.removeItem("token")
      : null,
  getDataUser: () =>
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("user") || "null")
      : null,
  setDataUser: (token: string) =>
    typeof window !== "undefined"
      ? window.localStorage.setItem("user", JSON.stringify(token))
      : null,
  clearDataUser: () =>
    typeof window !== "undefined"
      ? window.localStorage.removeItem("user")
      : null,
};
