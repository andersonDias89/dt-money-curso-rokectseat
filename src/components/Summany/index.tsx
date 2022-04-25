import {Container} from './styles'

import iconCome from '../../assets/income.svg'
import iconOut from '../../assets/outcome.svg'
import iconTotal from '../../assets/total.svg'


export const Summany = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={iconCome} alt="" />
                </header>

                <strong>R$ 1.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={iconOut} alt="" />
                </header>
                
                <strong>R$ - 100,00</strong>
            </div>

            <div className='highLight-background'>
                <header>
                    <p>Total</p>
                    <img src={iconTotal} alt="" />
                </header>
                
                <strong>R$ 900,00</strong>
            </div>
        </Container>  
    )
}