import {useState} from "react";
import transactionRequests from "../api/requests/transactionRequests";

const TransactionRegister = ({setTransactions, transactions}) => {
    const [accountId, setAccountId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        transactionRequests.createTransaction({account_id: accountId,amount: parseFloat(amount)}).then(response => {
            if(response.status === 201){
                setTransactions(prevTransactions => [response.data,...prevTransactions]);
            }
        });
        setAccountId('');
        setAmount('');
    };
    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h2>Submit new transaction</h2>
                <div className="input-box">
                    <input
                        data-type="account-id"
                        type="text"
                        id="accountId"
                        value={accountId}
                        onChange={(e) => setAccountId(e.target.value)}
                        required={true}
                        placeholder={"Account ID"}
                        minLength={10}
                    />
                </div>
                <div className="input-box">
                    <input
                        data-type="amount"
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount((e.target.value))}
                        required={true}
                        placeholder={"Amount"}
                    />
                </div>
                <button data-type="transaction-submit" className="btn" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default TransactionRegister;