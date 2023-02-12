import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { NovProdComponent } from './nov-prod/nov-prod.component';
import { HomeComponent } from './home/home.component';
import { ProdutoService } from './produto.service';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleLivrosService } from './controle-livros.service';


@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  ProdutoComponent,
  NovProdComponent,
  LivroDadosComponent,
  LivroListaComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
  ],
  providers: [ProdutoService, ControleLivrosService],
  bootstrap: [AppComponent]
 })
 export class AppModule { }