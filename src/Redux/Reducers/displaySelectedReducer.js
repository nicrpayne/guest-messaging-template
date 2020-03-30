

const displaySelectedReducer = (state = { company: '', guest: '', template: '' }, action) => {
    console.log('in displaySelectedReducer', action.payload);
    if (action.type === 'COMPANY_SELECTED') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            company: action.payload
        }
    }
    if (action.type === 'GUEST_SELECTED') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            guest: action.payload
        }
    }
    if (action.type === 'TEMPLATE_SELECTED') {
        //whatever is returned will be saved in redux
        return {
            ...state,
            template: action.payload
        }
    }
    return state;
}

export default displaySelectedReducer; 