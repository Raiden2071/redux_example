const defaultState = {
	customers: [
		{
			"id": 0.08197663092758711,
			"name": "slava"
		},
		{
			"id": 0.6048308527872606,
			"name": "Diana"
		}
	],
};

const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export const customerReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS:
			console.log(action);
			return {...state, customers: [...state.customers, ...action.payload]};
		case ADD_CUSTOMER:
			return {...state, customers: [...state.customers, action.payload]};
		case DELETE_CUSTOMER:
			return {...state, customers: state.customers.filter(({ id }) => id !== action.payload )};
		default:
			return state;
	}
};

export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const deleteCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
