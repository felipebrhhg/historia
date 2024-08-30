const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você estava voltando da escola e resolveu comer uma bala o que você ira fazer com o papel da bala?",
        alternativas: [
            {
                texto: "Vai jogar no chão!",
                afirmacao: "Voltando da escola para sua casa jogou o papel da bala no châo. "
            },
            {
                texto: "Vai guardar até chegar em casa!",
                afirmacao: "Voltando da escola para sua casa, você guardou um papel de bala no bolso."
            }
        ]
    },
    {
        enunciado: "Durante a tarde vocé assiste a um jornal, que fez uma reportagem sobre o lixo descartado inadequadamente, e vocé se lembra do papel de bala!",
        alternativas: [
            {
                texto: "Lembro-me de ter guardado o papel para fazer o descarte adequadamente.",
                afirmacao: "Fica feliz de ter feito a escolha correta para o meio ambiente."
            },
            {
                texto: "Lembro-me de ter jogado o papel no chão.",
                afirmacao: "Sentiu um pouco de culpa por sua ação anterior."
            }
        ]
    },
    {
        enunciado: "No dia seguinte sua professora pergunta para a turma qual a opimião deles sobre o descarte inadequado de lixo?",
        alternativas: [
            {
                texto: "Você respondeu que é algo muito errado de se fazer.",
                afirmacao: "Você está sendo uma pessoa consciente."
            },
            {
                texto: "Você respondeu que não vê nada de errado no descarte inadequado.",
                afirmacao: "Você é uma pessoa muito ignorante."
            }
        ]
    },
    {
        enunciado: "Daqui a alguns dias sua turma vai fazer um debate sobre o descarte inadequado de lixo, e qual lado você ira defender?",
        alternativas: [
            {
                texto: "Vai explicar o porqué isso é errado.",
                afirmacao: "Está se mostrando uma pessoa de caráter."
            },
            {
                texto: "Quer explicar que isso não é algo tão alarmante.",
                afirmacao: "Você não é uma boa pessoa."
            }
        ]
    },
    {
        enunciado: "Após o debate vocé tem que falar se mudou de opinião perante as afirmações do outro grupo.",
        alternativas: [
            {
                texto: "Continua achando que é algo errado.",
                afirmacao: "Manteve o seu pensamento correto."
            },
            {
                texto: "Continua achando algo não tão grave.",
                afirmacao: "Continua sendo uma má pessoa. "
            },
            {
                texto: "Mudou seu pensamento e começou a perceber o quão grave isso é.",
                afirmacao: "No final se mostrou uma pessoa de bem."
            },
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
