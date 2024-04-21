import express from "express";
import transactionController from "../controller/transactionController.js";
const router = express.Router();

router.get('/transactions', transactionController.getTransactions)
router.post('/transactions', transactionController.createTransaction)
router.get('/transactions/:transaction_id', transactionController.getByTransactionId)
router.get('/accounts/:account_id', transactionController.getByAccountId)

export default router;
