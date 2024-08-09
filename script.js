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
        enunciado: "?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
