import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import GlobaStyled from './style/global'



export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobaStyled />
    </>
  );
}


