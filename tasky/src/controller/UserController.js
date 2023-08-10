import { postMessage, getMessage } from "./APIController";
import User from '../model/user';

export const getUser = async (userId) => {
    const user = await getMessage(`/user/getUser/${userId}`)
    return User.fromJSON(user);
}
