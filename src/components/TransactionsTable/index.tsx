import { Container } from "./styles";


export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento bla</td>
                        <td>R$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2001</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento bla</td>
                        <td>R$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2001</td>
                    </tr>

                    <tr>
                        <td>Desenvolvimento bla</td>
                        <td>R$12.0000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2001</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}