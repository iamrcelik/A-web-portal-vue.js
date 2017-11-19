export const HTTPAuth = axios.create({
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
});

export const HTTP = axios.create();