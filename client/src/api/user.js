export async function createUser(user) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API}/users`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        
        if (response.status === 201) {
            console.log("Request status: ", response.status);
            console.log("New user resource location: ", response.headers.get('Location'));
        }

        return "OK";

    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getUser(id) {
    try {
        const response = await fetch(
            `${import.meta.env.VITE_API}/users/${id}`
        );
        
        if (response.status === 200) {
            const user = response.json();
            return user;
        }

        if (response.status === 404) {
            return undefined;
        }
    } catch(error) {
        console.error(error);
    }
}