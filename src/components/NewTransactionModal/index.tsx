import Modal from "react-modal";
import { FormEvent, useState } from "react";
import InCome from '../../assets/income.svg'
import OutCome from '../../assets/outcome.svg'
import CloseImg from '../../assets/close.svg'
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { api } from "../../Services/api";


interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;


}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState("deposit");

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>


                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}

                />


                <input
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                < TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={InCome} alt="Entrada" />
                        <span>
                            Entrada
                        </span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('widthdraw'); }}
                        isActive={type === 'widthdraw'}
                        activeColor="red"
                    >
                        <img src={OutCome} alt="Saída" />
                        <span>Saída</span>

                    </RadioBox>


                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}

                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>
    )
}