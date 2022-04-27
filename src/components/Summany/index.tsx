import { Container } from './styles'

import iconCome from '../../assets/income.svg'
import iconOut from '../../assets/outcome.svg'
import iconTotal from '../../assets/total.svg'
import { useContext } from 'react'
import { TransactionsContext } from '../../TransactionsContext'


export const Summany = () => {
    const { transactions } = useContext(TransactionsContext)

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit') {
    //         return acc + transaction.amount
    //     }
    //     return acc
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={iconCome} alt="" />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={iconOut} alt="" />
                </header>

                <strong>
                    -
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highLight-background'>
                <header>
                    <p>Total</p>
                    <img src={iconTotal} alt="" />
                </header>

                <strong>
                    {new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}