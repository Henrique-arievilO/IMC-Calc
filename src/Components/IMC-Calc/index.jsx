import React, { useState } from "react";
import * as S from './style';

export default function App() {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [result, setResult] = useState(0);

    function calc() {
        console.log(weight / (height * height));
        setResult(weight / (height * height));

        /*if (setHeight || setWeight === '') {
            alert('Dados inválidos! Digite os parâmetros.');
        }*/
    }

    function clear() {
        setHeight('');
        setWeight('');
        setResult(0);
    }
    function Submited(e) {
        e.preventDefault();
    }

    return (
        <>
            <S.Title>Calcule seu IMC</S.Title>
            <S.Form onSubmit={Submited}>
                <S.Label>
                    Peso em kg:
                    <S.Input
                        value={weight}
                        onChange={(e) => {
                            setWeight(e.target.value);
                        }}
                        placeholder='Ex: 68.5'
                        type='number'
                        inputMode='numeric'
                    />
                </S.Label>
                <br></br>
                <S.Label>
                    Altura em m:
                    <S.Input
                        value={height}
                        onChange={(e) => {
                            setHeight(e.target.value);
                        }}
                        placeholder='Ex: 1.67'
                        type='number'
                        inputMode='numeric'
                    />
                </S.Label>
                <S.BtnContainer>
                    <S.Button
                        onClick={() => {
                            calc();
                        }}
                    >
                        Calcular
                    </S.Button>
                    <S.Button
                        onClick={() => {
                            clear();
                        }}
                    >
                        Limpar
                    </S.Button>
                </S.BtnContainer>
            </S.Form>
            <S.P>Seu IMC é: {result.toFixed(1)}</S.P>
        </>
    );
}