export function selectUser(user){
    // selectUser is an actionCreator, it needs to return an actions,
    // an object with a type property.
    return {
        type: 'USER_SELECTED',
        payload: user
    };
}