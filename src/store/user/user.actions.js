import  * as Api from "../../services/Auth.service"

const requestLogin = () => ({
    type: "REQUEST_LOGIN"
})

const successLogin = user => ({
    type: "SUCCESS_LOGIN",
    payload: {user}
})

const errorLogin = error => ({
    type: "ERROR_LOGIN",
    payload: { error }
})

export const login = body => async (dispatch, getState) => {
        dispatch(requestLogin())

        try{
            const response = await Api.login(body)
            dispatch(successLogin(response))
        } catch(error){
            dispatch(errorLogin(error))
        }
    
}
