
const initialState = {
	user: {}
}

export const loginReducer = (state = initialState, action) => {
	switch(action.type){
		case 'SINGIN':
			return {
				...state,
				user: action.value
			}
		default:
			return state
	}
}

export default loginReducer