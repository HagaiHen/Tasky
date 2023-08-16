import { postMessage, getMessage } from "./APIController";
import User from '../model/user';

export const getUser = async (userId) => {
    const user = await getMessage(`/user/getUser/${userId}`)
    return User.fromJSON(user);
}

export const getAllUsers = async () => {
    const users = await getMessage(`/user/getAllUsers`)
    return users.map(user => User.fromJSON(user));
}

export const updateUser = async (userInstance) => {
    const user = userInstance;
    const response = await postMessage(`/user/updateUser`, user)
    return response;
}