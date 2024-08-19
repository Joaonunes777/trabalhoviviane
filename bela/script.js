
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "De que maneira a IA pode personalizar a aprendizagem para adolescentes?"
        ,alternativas: [
            {
                texto: "A IA pode adaptar o conteúdo educacional com base nas necessidades individuais dos alunos, oferecendo atividades e exercícios personalizados.",
                afirmacao: "Essa alternativa destaca a capacidade da IA de fornecer uma experiência de aprendizagem mais adaptada às necessidades de cada estudante, o que pode melhorar a retenção e o engajamento."
            },
            {
                texto: "A IA substitui os professores na elaboração do currículo, deixando os educadores livres para outras atividades.",
                afirmacao: "Embora a IA possa ajudar na personalização do currículo, ela não substitui completamente o papel crucial dos professores em guiar e motivar os alunos."
            }
        ]
    },
    {
        enunciado: "Quais são os principais desafios da implementação da IA nas escolas para adolescentes?",
        alternativas: [
            {
                texto: " A falta de infraestrutura tecnológica adequada nas escolas.",
                afirmacao: "Muitas escolas ainda não possuem a infraestrutura necessária para integrar tecnologias avançadas como a IA, o que pode limitar seu uso e eficácia."
            },
            {
                texto: " A resistência dos professores em adotar novas tecnologias.",
                afirmacao: "A adoção de novas tecnologias requer treinamento e mudança de mentalidade, e a resistência por parte dos educadores pode ser um obstáculo significativo."
            }
        ]
    },
    {
        enunciado: "Quais benefícios a IA pode trazer para a gestão do tempo dos professores?",
        alternativas: [
            {
                texto: " A IA pode automatizar tarefas administrativas, permitindo que os professores se concentrem mais no ensino.",
                afirmacao: "Essa alternativa destaca um benefício importante da IA, que é a automação de tarefas repetitivas, liberando mais tempo para os professores se dedicarem ao ensino e à interação com os alunos."
            },
            {
                texto: "A IA pode criar e corrigir provas automaticamente, substituindo completamente o trabalho dos professores nessas áreas.",
                afirmacao: "Embora a IA possa ajudar na criação e correção de provas, a supervisão e a intervenção humana ainda são essenciais para garantir a qualidade e a justiça no processo educacional."
            }
        ]
    },
    {
        enunciado: "Como a IA pode ajudar na identificação de dificuldades de aprendizagem em adolescentes",
        alternativas: [
            {
                texto: "A IA pode analisar o desempenho dos alunos em tempo real e identificar padrões que indiquem dificuldades de aprendizagem.",
                afirmacao: "Essa alternativa enfatiza a capacidade da IA de monitorar e analisar dados, permitindo intervenções rápidas e direcionadas para ajudar os alunos a superar suas dificuldades."
            },
            {
                texto: " A IA pode substituir a necessidade de avaliações periódicas feitas por professores.",
                afirmacao: "Embora a IA possa complementar as avaliações periódicas, a intervenção e o julgamento dos professores continuam sendo fundamentais para uma compreensão completa das necessidades dos alunos."
            }
        ]
    },
    {
        enunciado: "Como a IA pode influenciar a motivação dos adolescentes na educação? ",
        alternativas: [
            {
                texto: "A IA pode fornecer feedback imediato e personalizado, incentivando os alunos a continuarem se esforçando e melhorando.",
                afirmacao: "O feedback imediato e específico pode aumentar a motivação dos estudantes, ajudando-os a ver rapidamente o impacto de seus esforços e a manterem-se engajados."
            },
            {
                texto: "A IA pode substituir a interação humana, diminuindo a conexão emocional entre alunos e professores.",
                afirmacao: "Embora a IA possa fornecer feedback útil, a interação humana e a conexão emocional são essenciais para a motivação e o desenvolvimento integral dos adolescentes. "
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
