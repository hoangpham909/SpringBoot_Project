import http from "../index";

const TransactionRequests = {
    getTransactions : (bArchived) => {
        return http.get("/transactions");
    },

    createTransaction : (formData) => {
        return http.post("/transactions", formData);
    },

    getByTransactionId : (transactionId) => {
        return http.post("/transactions/", transactionId);
    },

    getByAccountId : (accountId) => {
        return http.post("/accounts/", accountId);
    },

}

export default TransactionRequests;