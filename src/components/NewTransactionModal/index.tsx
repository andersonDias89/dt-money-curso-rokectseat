import { Container, TransactionTypeContainer, RadioBox } from './styles'
import iconClose from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import inOut from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { useState } from 'react'


interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const [type, setType] = useState()

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

      <Container>
        <h2>Cadastratar Transação</h2>

        <input
          placeholder="Titulo"
        />

        <input
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
          >
            <img src={inOut} alt="Saida" />
            <span>Entrada</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
        />

        <input
          className='btn-modal'
          type="submit"
        />
      </Container>
    </Modal>
  )
}