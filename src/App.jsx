import {useDispatch, useSelector} from "react-redux";

import {addCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch(); //получить наш диспатч, чтоб поменять состояние
  const cash = useSelector(state => state.cash.cash); // получить состояние
  const customers = useSelector(state => state.customers.customers); // получить состояние

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  };

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  };

  const addCustomer = (name) => {
    const customer = {
      id: Math.random(),
      name: name,
    };
    // dispatch({type: 'ADD_CUSTOMER', payload: customer });
    //
    dispatch(addCustomerAction(customer));
  };

  const deleteCustomer = (id) => {
    dispatch({type: 'DELETE_CUSTOMER', payload: id})
  };

  console.log(cash);
  console.log(customers);
  return (
    <div className="App">
      <div>{cash}</div>
      <div style={{display: "flex"}}>
        <button onClick={() => addCash(+prompt())}> Пополнить счёт</button>
        <button onClick={() => getCash(+prompt())}> Снять со счёта</button>

        <button onClick={() => dispatch(fetchCustomers())}> Получить клиентов из базы</button>
        <button onClick={() => addCustomer(prompt())}> Добавить клиента</button>
        <button onClick={() => deleteCustomer(prompt())}> Удалить клиента</button>
      </div>


      {/* work with array customers */}
      {customers.length > 0 ?
          customers.map((customer) => {
          return (
            <div key={customer.id}>
              <div>{customer.name}</div>
              <button onClick={() => deleteCustomer(customer.id)}> Удалить клиента</button>
            </div>)
          })
        :
        <div>
        Clients not exist
      </div>
      }
    </div>
  );
}

export default App;
