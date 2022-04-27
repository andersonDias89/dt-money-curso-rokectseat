import { Container, TransactionTypeContainer, RadioBox } from './styles'
import iconClose from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import inOut from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { FormEvent, useContext, useState } from 'react'

import {api} from '../../servers/api'
import { TransactionsContext } from '../../TransactionsContext'


interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const {creteTransaction} = useContext(TransactionsContext)

  const [title, setTitle] = useState('')
  const [amount, setAmout] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await creteTransaction({
      title,
      amount,
      category,
      type
    })
    
    setTitle('')
    setAmout(0)
    setCategory('')
    setType('deposit')
    onRequestClose()

  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        className='react-modal-close'
        type="button"
        onClick={onRequestClose}
      >
        <img src={iconClose} alt="fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastratar Transação</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmout(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => setType('withdraw')}
            type='button'
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={inOut} alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <input
          className='btn-modal'
          type="submit"
        />
      </Container>
    </Modal>
  )
}