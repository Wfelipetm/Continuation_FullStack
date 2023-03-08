import Livro from "../modelo/Livro";

const livros : Array<Livro> = [{
    codigo: 1,
    codEditora: 1,
    titulo: "Pense em Python",
    resumo: "Se você quer aprender como programar, usar Python é uma ótima forma de começar. Este guia prático apresenta a linguagem passo a passo, começando com conceitos de programação básicos antes de chegar a funções, recursividade, estruturas de dados e design orientado a objeto. Esta edição e seu código de apoio foram atualizados para o Python 3.",
    autores: ["BAllen B. Downey "]
},{
    codigo: 2,
    codEditora: 2,
    titulo: "Use a Cabeça! Python",
    resumo: "O que você aprenderá com este livro? Deseja aprender a linguagem Python sem percorrer um longo caminho com manuais? Com o Use a Cabeça! Python, você entenderá rapidamente os fundamentos do Python trabalhando com estruturas de dados e funções predefinidas.",
    autores: ["Paul Barry"]
},{
    codigo: 3,
    codEditora: 3,
    titulo: "Código limpo",
    resumo: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software.",
    autores: ["Robert C. Martin"]
}];

export default class ControleLivro {
    incluir(livro: Livro) {
        livro.codigo = livros.length > 0
            ? livros.at(-1)!.codigo + 1
            : 1;
        livros.push(livro);
    }

    excluir(codigo: number) {
        const index = livros.findIndex(livro => livro.codigo == codigo);
        livros.splice(index, 1);
    }

    obterLivros() {
        return livros;
    }
}