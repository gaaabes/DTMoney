import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  //as condiçoes passadas abaixo, significam que "se o modal estiver aberto, será considerado true, e em seguida a função que trocará o valor da variável".
//ele starta como "false" porque o modal por padrão vem fechado
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen (true);
  }

  function handleCloseNewTransactionModal () {
    setIsNewTransactionsModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={ handleOpenNewTransactionModal } />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}