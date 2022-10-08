import React from 'react';
import * as S from './style';

export default function App() {

    return (
        <>
            <S.Table>
                <S.Thead>
                    <tr>
                        <S.Th>Classificação</S.Th>
                        <S.Th>IMC</S.Th>
                    </tr>
                </S.Thead>
                <tbody>
                    <tr>
                        <S.Td>Abaixo do peso</S.Td>
                        <S.Td>Abaixo de 18,5</S.Td>
                    </tr>
                    <tr>
                        <S.Td>Peso normal</S.Td>
                        <S.Td>Entre 18,5 e 24,9</S.Td>
                    </tr>
                    <tr>
                        <S.Td>Sobrepeso</S.Td>
                        <S.Td>Entre 25 e 29,9</S.Td>
                    </tr>
                    <tr>
                        <S.Td>Obesidade Grau I</S.Td>
                        <S.Td>Entre 30 e 34,9</S.Td>
                    </tr>
                    <tr>
                        <S.Td>Obesidade Grau II</S.Td>
                        <S.Td>Entre 35 e 39,9</S.Td>
                    </tr>
                    <tr>
                        <S.Td>Obesidade Mórbida</S.Td>
                        <S.Td>Acima de 40</S.Td>
                    </tr>
                </tbody>
            </S.Table>
        </>
    )
}