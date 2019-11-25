import React, { Component } from 'react';

import api from '../../services/api';

import { Text } from './styles';

export default class Main extends Component {
  state = {
    topicos: [],
  };

  async componentDidMount() {
    const topicos = await api.get("/topicos/1");
    this.setState({ topicos: JSON.parse(topicos) });
  }

  // async componentDidMount() {
  //   api.get('/topicos').then(response => {console.log(response.data);});
  // }
  
  render() {
    const { topicos } = this.state;

    return (
      <Text>
        <h1>Hello World 2!</h1>
        {topicos.map(topico => (
          <li key={topico.titulo}>
            <span>{topico.titulo}</span>
          </li>
        ))}
      </Text>
    )
  }
}