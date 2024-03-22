export const authUser = async () => {
    return fetch('http://10.0.5.76:3003/login', {
        method: "GET",
        headers: { Accept: "application/json", "content-type": "application/json"}
    }).then(res => res.json());
}