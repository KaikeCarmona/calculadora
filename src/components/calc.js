import React, {useState} from "react";

import './style.css'


export default function Calculator(){
    const [num, setNum] = useState(0) //variavel que recebe o ultimo valor inserido
    const [oldNum, setOldNum] = useState(0) //variavel que vai armazenar o primeiro valor inserido
    const [operator, setOperator] = useState(0)    



    //função que definira oque cada sinal ira executar
    function operationsResult(){
        //o parsFloat foi usado aqui para poder definir os valores como numeros, para que o JS não concatene os valores, ex sem parsFloat: 5 + 8 = 58                                                                                                               //ex com parsFloat: 5 + 8 = 13
        if(operator === "/"){
            setNum(parseFloat(oldNum) / parseFloat(num)); 
        }
        if(operator === "X"){
            setNum(parseFloat(oldNum) * parseFloat(num));
        }
        if(operator === "-"){
            setNum(parseFloat(oldNum) - parseFloat(num));
        }
        if(operator === "+"){
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
        
        console.log("calculou");
        console.log(oldNum);
        console.log(operator)
        console.log(num); 
    }




    //função que ira inserir os sinais de calculo(+,-,/,X,)
    function operations(e){
        var operatorInput = e.target.value
        setOldNum(num);
        setOperator(operatorInput);
        setNum(0);
    }

    //função responsavel por inserir os numeros 
    function insertNum(e){
        var input = e.target.value //variavel que armazena o value (valor) do elemento, nesse caso são os botões 
        
        //se o valor inicial for 0, ao clicar no botão esse valor sera substituido pelo valor do botão acionado
        if (num === 0 ){
            setNum(input);
        }
        //se o valor inicial já foi alterado, podera ser executado a inserção de mais valores 
        else {
            setNum(num + input);
        }
    }
    //função responsavel por executar os calculos de porcentagem
    function porcentCalc(){
        setNum(num / 100); //dividindo o valor de num por 100
    }

    //função que transforma o numero em negativo ou positivo
    function operadorHandler(){
        //se o valor da variavel for maior que zero(positivo), ao se acionar a função ele sera transformado em negativo 
        if (num > 0){
            setNum(-num)
        }
        //caso o valor da variavel já seja negativo, ao se acionar a função novamente ele sera transformado em positivo
        else{
            setNum(Math.abs(num))
        }
    }


    //função que limpa a caixa de resultado
    function clear(){
        setNum(0) //inserindo "nada" dentro da variavel num, assim ela ira zerar a caixa de resposta
    }

    return(
        <div class="fundo">
        <h1>Kaike Carmona</h1>
        <div class="calculadora">
            <p id="resultado">{num}</p>
            <table>
                <tr>
                    <td><button class="botao" onClick={operations} value="X">X</button></td>
                    <td><button class="botao" onClick={operations} value="/">/</button></td>
                    <td><button class="botao" onClick={porcentCalc}>%</button></td>
                    <td><button class="botao" onClick={clear}>C</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onClick={operations} value="-">-</button></td>
                    <td><button class="botao" onClick={insertNum} value={7}>7</button></td>
                    <td><button class="botao" onClick={insertNum} value={8}>8</button></td>
                    <td><button class="botao" onClick={insertNum} value={9}>9</button></td>
                </tr>
                <tr>
                    <td><button class="botao" onClick={operations} value="+">+</button></td>
                    <td><button class="botao" onClick={insertNum} value={4}>4</button></td>
                    <td><button class="botao" onClick={insertNum} value={5}>5</button></td>
                    <td><button class="botao" onClick={insertNum} value={6}>6</button></td>
                </tr>
                <tr>
                    {/* <td><button class="botao" onClick="insert('1')">1</button></td> */}
                    <td><button  class="botao" onClick={operadorHandler}>+/-</button></td>
                    <td><button class="botao" onClick={insertNum} value={1}>1</button></td>
                    <td><button class="botao" onClick={insertNum} value={2}>2</button></td>
                    <td><button class="botao" onClick={insertNum} value={3}>3</button></td>
                </tr>
                <tr>
                    <td colspan="2"><button class="botaoE" onClick={operationsResult}>=</button></td>
                    <td rowspan=""><button class="botaoZ" onClick={insertNum} value={0}>0</button></td>
                    <td ><button class="botao" onClick={insertNum} value={"."}>.</button></td>
                </tr>
            </table>
        </div>
    </div>

    );
}