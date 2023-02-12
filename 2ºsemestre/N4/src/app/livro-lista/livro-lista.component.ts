import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  template: `
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Título</th>
          <th>Editora</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let livro of livros">
          <td>{{ livro.codigo }}</td>
          <td>{{ livro.titulo }}</td>
          <td>{{ obterNomeEditora(livro.codEditora) }}</td>
          <td>
            <button (click)="excluir(livro.codigo)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
  }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number) => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNomeEditora = (codEditora: number) => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}