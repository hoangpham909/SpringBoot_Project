import { v4 as uuid } from 'uuid';

let transactions = [];
let transactionMap_transactionID = new Map();
let transactionMap_accountID = new Map();

const addTransaction = (req) => {
    const transaction = {
        transaction_id: uuid() ,account_id: req.account_id, amount: req.amount,balance: req.amount, created_at: new Date().toISOString(), isWithdrawal: req.amount < 0
    }
    transactions.unshift(transaction)
    transactionMap_transactionID.set(transaction.transaction_id, transaction);
    transactionMap_accountID.set(transaction.account_id, transaction);
    return transaction;
};

const transactionService = {
    getTransactions: () => {
        return transactions;
    },
    createTransaction: (req) => {
        for(const transaction of transactions) {
            transaction.isWithdrawal = false
            if (transaction.account_id === req.account_id) {
                if (req.amount < 0) {
                    transaction.isWithdrawal = true;
                }
                transaction.amount = req.amount
                transaction.balance += req.amount;
                return transaction;
            }
        }
        return addTransaction(req)

    },
    getByTransactionId: (transaction_id) => {
        return transactionMap_transactionID.get(transaction_id)
    },
    getByAccountId: (account_id) => {
        return transactionMap_accountID.get(account_id);
    },
}

export default transactionService;