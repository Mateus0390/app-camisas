import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
 
export class HomePage {

  vetor = ['Camisa do São Paulo', 'Camisa do Palmeiras', 'Camisa do Barcelona'];
  vetor2 = [
    { foto: 'https://th.bing.com/th/id/OIP.6KLqbE0tqBNqhe__PA9HJQHaJD?rs=1&pid=ImgDetMain', nome: 'Camisa do Ceará', numero: '14', preco: 'R$ 250,00' },
    { foto: 'https://th.bing.com/th/id/OIP.uPHaZFcak8_HB6uNrZyOHwHaHa?rs=1&pid=ImgDetMain', nome: 'Camisa do Barcelona', numero: '11', preco: '€ 164,99' },
    { foto: 'https://maltaesportes.com.br/wp-content/uploads/2023/01/Sem-titulo2-2.jpg', nome: 'Camisa do Al Nassr', numero: '7', preco: '﷼ 267,99' },
    { foto: 'https://cdn11.bigcommerce.com/s-mf8nk5mp4s/products/9455/images/12108/download__31610.1686509362.500.750.jpg?c=2', nome: 'Camisa do Inter Miami', numero: '10', preco: 'U$ 109,99' }
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar Camisa',
      message: 'Insira os detalhes da camisa',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome da camisa'
        },
        {
          name: 'numero',
          placeholder: 'Nº da camisa'
        },
        {
          name: 'preco',
          placeholder: 'Preço'
        },
        {
          name: 'foto',
          placeholder: 'URL da foto da camisa'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelado!');
          }
        },
        {
          text: 'Adicionar',
          handler: data => {
            console.log('Adicionado!', data);

            let novaCamisa = { foto: data.foto, nome: data.nome, numero: data.numero, preco: data.preco };
            this.vetor2.push(novaCamisa);
          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item) {
    console.log('Excluir', item);

    for (let i = 0; i < this.vetor2.length; i++) {
      const element = this.vetor2[i];

      if (element.nome == item.nome) {
        this.vetor2.splice(i, 1);
      }
    }
  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Tem certeza que deseja excluir esta camisa?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Não');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Sim');
            this.excluir(item);
          }
        }
      ]
    });
    confirm.present();
  }
}
