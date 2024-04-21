import transactionService from "../service/transactionService.js";

const transactionController = {
    healthCheck : async (req,res) => {
        return res.status(200).json({msg: "The service is up and running."})
    },
    getTransactions: async (req, res) => {
        try {
            const data = transactionService.getTransactions()
            return res.json(data);
        }catch (err) {
            res.status(500).json({msg : err.message})
        }
    },
    createTransaction: async (req, res) => {
        try {
            const data = transactionService.createTransaction(req.body)
            return res.status(201).send(data)
        }catch (err) {
            res.status(500).json({msg : err.message})
        }
    },
    getByTransactionId : async (req, res) => {
        const transaction_id = req.params.transaction_id;
        try {
            const data = await transactionService.getByTransactionId(transaction_id)
            return res.send(data)
        } catch (err) {
            res.status(500).json({msg: err.message})
        }
    },
    getByAccountId : async (req, res) => {
        const account_id = req.params.account_id;
        try {
            const data = await transactionService.getByAccountId(account_id)
            return res.status(200).send(data)
        }catch (err) {
            res.status(500).json({msg : err.message})
        }
    }
}

export default transactionController;