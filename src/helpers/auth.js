export const token = (token) => localStorage.getItem(token)

export const setToken = (token) => localStorage.setItem("token", token)

export const deleteToken = () => localStorage.removeItem("token")

export const clearLocal = () => localStorage.clear()
