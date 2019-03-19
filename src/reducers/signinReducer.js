
export default (state, action) => {
	switch(action.type){
		case 'setUser':
			return {
				...state,
				user: action.user
			}
		default:
			return state
	}
}