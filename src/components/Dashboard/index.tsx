import { Summany } from '../Summany'
import { TransactionsTable } from '../TransactionTable'
import {Container} from './styles'

export const Dashboard = () => {
    return (
        <Container>
            <Summany />
            <TransactionsTable />
        </Container>
    )
}