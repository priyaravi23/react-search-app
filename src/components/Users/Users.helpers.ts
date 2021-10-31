// Types
import {UsersType} from './Users.types'

export const toggleList = (show: boolean, setShow: any) => {
    setShow(!show)
};

export const handleInputChange = (e: any, users: UsersType[], setFilteredUsers: any) => {
    const input = e.target.value;
    const re = new RegExp(input, 'i');

    const filteredUsers = users.filter((item: UsersType) => {
        return re.test(item.name)
    });

    setFilteredUsers(filteredUsers)
};