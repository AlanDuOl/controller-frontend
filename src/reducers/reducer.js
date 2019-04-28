
export default (state, action) => {
	switch(action.type){
		case 'setUser':
			return {
				...state,
				user: action.user
			}
		case 'setFilter':
			return {
				...state,
				filter: action.filter
			}
		default:
			return state
	}
}