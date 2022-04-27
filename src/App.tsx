import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import GlobaStyled from './style/global'
import { useState } from 'react'

import { TransactionsProvider } from './TransactionsContext'

import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal'
Modal.setAppElement('#root')


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true)

  }

  const handleCloseTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobaStyled />
    </TransactionsProvider>
  );
}


