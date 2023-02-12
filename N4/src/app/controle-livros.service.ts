import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do livro A', autores: ['Autor A'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do livro B', autores: ['Autor B'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do livro C', autores: ['Autor C'] }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    this.livros.push({ ...livro, codigo });
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    this.livros.splice(index, 1);
  }
}