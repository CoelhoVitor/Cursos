import React, { Component } from 'react'

class TechList extends Component {
  /* States do React são imutáveis
   * para realizar mudanças é preciso usar o setState()
   * criando assim outros States
   */
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {/* {} para adicionar códigos javascript */}
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList
