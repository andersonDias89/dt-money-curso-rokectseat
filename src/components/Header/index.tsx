import { Container, Content } from "./styles"
import logoImg from "../../assets/logo.svg"
import { useState } from "react"

import Modal from "react-modal"

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt=" dt money" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}