const url = "https://ctd-todo-api.herokuapp.com/v1";
const usersPath = "/users";
const userLogin = "/users/login";

async function signUp(endpoint, settings) {
    try {
        const response = await fetch(endpoint, settings);
        const data = await response.json();
    } catch(err) {
        console.log(err);
    }
}

async function login(endopoint, email, password) {
    const bodyObject = {
        email: email,
        password: password,
    }
    
    const settings = {
        method: "POST",
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify(bodyObject),
    }
    
    try {
        const response = await fetch(endpoint, settings);
        const data = await response.json();
        return data.jwt;
    } catch(err) {
        console.log(err);
    }
}

async function getMe(endopoint, token) {
    const settings = {
        method: "GET",
        headers: {
            Authorization: token,
        },
    }
    
    try {
        const response = await fetch(endpoint, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function createTask(endopoint, description, completed, token) {
    const bodyObject = {
        description: description,
        completed: completed,
    }
    
    const settings = {
        method: "POST",
        headers: {
            Authorization: token,
            'Content-type': "application/json",
        },
        body: JSON.stringify(bodyObject),
    }
    
    try {
        const response = await fetch(endpoint, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function getTasks(endopoint, token) {
    const settings = {
        method: "GET",
        headers: {
            Authorization: token,
        },
    }
    
    try {
        const response = await fetch(endpoint, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function getTask(endopoint, taskId, token) {
    const settings = {
        method: "GET",
        headers: {
            Authorization: token,
        },
    }
    
    try {
        const response = await fetch(endpoint + `/${taskId}`, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function createTask(endopoint, taskId, description, completed, token) {
    const bodyObject = {
        description: description,
        completed: completed,
    }
    
    const settings = {
        method: "PUT",
        headers: {
            Authorization: token,
            'Content-type': "application/json",
        },
        body: JSON.stringify(bodyObject),
    }
    
    try {
        const response = await fetch(endpoint + `/${taskId}`, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

async function deleteTask(endopoint, taskId, token) {
    const settings = {
        method: "DELETE",
        headers: {
            Authorization: token,
        },
    }
    
    try {
        const response = await fetch(endpoint + `/${taskId}`, settings);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}