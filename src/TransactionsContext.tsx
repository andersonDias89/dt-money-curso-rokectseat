import {createContext, useEffect, useState, ReactNode} from 'react'
import {api} from './servers/api'


export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createAt: string
}

interface TransactionsContextData {
    transactions: Transaction[]
    creteTransaction: (transaction: TransactionInput) => Promise<void>
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsProvider = ({children}: TransactionsProviderProps ) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

     const creteTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date()
        })
        const {transaction} = response.data

        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{transactions, creteTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

