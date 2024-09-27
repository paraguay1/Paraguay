const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.queryselector(".caixa-perguntas");
const caixaPerguntas = document.querySelector(".caixa-alternativas);
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado:"O que é desmatamento?",
        alternativa: [
          "O desmatamento é o processo de remoção ou destruição de áreas florestais, geralmente para dar lugar à agricultura, pecuária, urbanização ou exploração
          de recursos naturais, como madeira e minerais."
        ]
        },
        {
            enunciado: "Quais são as principai causas do desmatamento?",
            alternativa: [
                "As principais causas do desmatamento incluem a expansão da agricultura e pecuária, a extração de madeira, a mineração, a construção de infraestrutura, e o crecimento urbano."
                  ]
             },
             {
                enunciado: "Quais são as consequências do desmatamento?",
                alternativa: [
                    "O destamento tem várias consequências negativas, incluindo a perda de habitat para muitas espécies, o aumento das emissões de dióxido de carbono, a alteração dos"
                    "ciclos de água e do clima, e a degradação dos solos."
                    ]
            },
];

let atual 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
     perguntaAtual perguntas [atual];
     caixaPerguntas.textContent perguntaAtual.enunciado;
     mostraAlternativas();
}

function mostraAlternativas(){
    for(fconst alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas document.createElement("button");
        botaoAlternativas.text.Content alternativa.texto;
        botaoAlternativas.addEventListener("click", () respostaselecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada (opcaoSelecionada) [
     const afirmacoes opcaoSelecionada.afirmacoes;
     historiaFinal afirmacoes;
     atual++;
     mostraPergunta();
}

mostraPergunta();