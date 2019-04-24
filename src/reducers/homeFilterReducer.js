export default (state, action) => {
	switch(action.type){
		case 'setFilter':
			return {
				...state,
				filter: action.filter
			}
		default:
			return state
	}
}