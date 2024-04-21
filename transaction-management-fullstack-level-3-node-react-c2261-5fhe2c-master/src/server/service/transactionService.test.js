import transactionService from './transactionService';

describe('transactionService', () => {

    test('createTransaction creates a new transaction or updates an existing one', () => {
        // Creating a new transaction
        const req1 = {
            account_id: 'account1',
            amount: 100,
        };

        const transaction1 = transactionService.createTransaction(req1);

        expect(transaction1).toHaveProperty('transaction_id');
        expect(transaction1.transaction_id).toBeTruthy();
        expect(transaction1.account_id).toBe(req1.account_id);
        expect(transaction1.amount).toBe(req1.amount);
        expect(transaction1.balance).toBe(req1.amount);
        expect(transaction1.isWithdrawal).toBe(false);
        expect(transaction1.created_at).toBeTruthy();

        // Updating an existing transaction
        const req2 = {
            account_id: 'account1',
            amount: -50,
        };

        const transaction2 = transactionService.createTransaction(req2);

        expect(transaction2).toBe(transaction1); // Same transaction object
        expect(transaction2.amount).toBe(req2.amount);
        expect(transaction2.balance).toBe(req1.amount + req2.amount);
        expect(transaction2.isWithdrawal).toBe(true);

        // Adding a new transaction for a different account
        const req3 = {
            account_id: 'account2',
            amount: 200,
        };

        const transaction3 = transactionService.createTransaction(req3);

        expect(transaction3).not.toBe(transaction1); // Different transaction object
        expect(transactionService.getTransactions().length).toBe(2);
        expect(transactionService.getByTransactionId(transaction3.transaction_id)).toBe(transaction3);
        expect(transactionService.getByAccountId(req3.account_id)).toBe(transaction3);
    });

});
