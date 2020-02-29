// export const LOGINFUNCTIONALITY = 'LOGINFUNCTIONALITY';

export const loginFunctionality = (name, password) => {
    return { type: 'LOGINFUNCTIONALITY', payload: { userName: name, password: password } }
    
}