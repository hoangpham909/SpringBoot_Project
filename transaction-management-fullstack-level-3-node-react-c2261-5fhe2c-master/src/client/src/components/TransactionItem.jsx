const TransactionItem = ({index, item}) => {
    return (
        item && (
            <div className="transaction-item"
                 data-type="transaction"
                 data-account-id="${transaction-account-id}"
                 data-amount="${transaction-amount}"
                 data-balance="${current-account-balance}">
                <h3 style={{color:"black"}}>
                    Transaction amount ({item.isWithdrawal ? "withdrawal" : "deposit"})
                </h3>
                <p style={{color:"black"}}> Transferred <span style={{ color: "red" }}>{item.amount} USD</span> from account <span style={{ color: "red" }}>{item.account_id}</span></p>
                {index === 0 && (<p style={{color:"black"}}> The current account balance is <span style={{ color: "red" }}>{item.balance} USD</span></p>)}
            </div>
        ));
};

export default TransactionItem;