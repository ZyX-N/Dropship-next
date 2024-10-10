export const getLoginToken = () => {
    return localStorage.getItem("dropship") || "";
}

export const setLoginToken = (token) => {
    return localStorage.setItem("dropship", token);
}