import React, {useEffect, useState} from 'react';
import TransactionRegister from "./components/TransactionRegister";
import TransactionList from "./components/TransactionList";
import transactionRequests from "./api/requests/transactionRequests";

const App = () => {
    const[transactions, setTransactions] = useState([]);

    useEffect(() => {
        transactionRequests.getTransactions().then(response => {
            if(response.status === 200){
                setTransactions(response.data)
            }
        })
    },[])
    return (
        <div className="container">
            <TransactionRegister setTransactions={setTransactions} transactions={transactions}/>
            <TransactionList transactions={transactions}/>
        </div>
    );
};

export default App;

