import React, { Component } from "react";

export default class challengeMap extends Component{
  state = {
    objetos: [
      {nome: 'Lucas', curso: 'Direito', cidade: 'Juiz de Fora'},
      {nome: 'Bruna', curso: 'Medicina', cidade: 'Campinas'},
      {nome: 'Danilo', curso: 'Artes Cênicas', cidade: 'São Paulo'},
      {nome: 'Bianca', curso: 'Dança', cidade: 'Rio de Janeiro'},
      {nome: 'Luiza', curso: 'Gastronomia', cidade: 'João Pessoa'},
      {nome: 'Thiago', curso: 'Turismo', cidade: 'Nova Xavantina'},
    ]
  }

  render() {
    return (
      <div>
        {this.state.objetos.map((item) =>
          <p>{item.nome} está estudando {item.curso} em {item.cidade}.</p>
        )} 
      </div>
    )
  }
}
