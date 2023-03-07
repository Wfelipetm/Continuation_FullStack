import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objectos (OO) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Progamar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      autores: ['Paul Deitel','HarveyDeitel']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Core Java for the Impatient',
      resumo: 'eaders familiar with Horstmanns original, two-volume "Core Java” books Addison Wesley who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.',
      autores: ['CayHorstmann']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0
      ? this.livros[this.livros.length -1].codigo + 1
      : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
