import { Component } from '@angular/core';
// import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  listaProdutos = [
    {
      imagem: 'assets/banana.jpg',
      descricao: 'Banana'
    },
    {
      imagem: 'assets/abacate.jpg',
      descricao: 'Abacate'
    },
    {
      imagem: 'assets/maca.jpg',
      descricao: 'Maça'
    },
    {
      imagem: 'assets/mamao.jpg',
      descricao: 'Mamão'
    },
    {
      imagem: 'assets/pera.jpg',
      descricao: 'Pera'
    },
    {
      imagem: 'assets/uva.jpg',
      descricao: 'Uva'
    }
  ];
  textoPesquisa: string | undefined;
  listaProdutosFiltro = this.listaProdutos;

  pesquisar() {
    if(!this.textoPesquisa) {
      this.listaProdutosFiltro = this.listaProdutos;
    } else {
      this.listaProdutosFiltro = this.listaProdutos.filter(item => item.descricao === this.textoPesquisa);
    }
  }
}
