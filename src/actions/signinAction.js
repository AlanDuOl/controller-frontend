
export const signinAction = user => {
    return {
        type: "setUser",
        newUser: user
    }
}