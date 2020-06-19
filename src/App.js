import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  state = {
    name: '',
    age: '',
    breed: '',
    pets: [],
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let pets = JSON.parse(JSON.stringify(this.state.pets));
    pets.push({
      name: this.state.name,
      age: this.state.age,
      breed: this.state.breed,
    });
    this.setState({
      pets,
      name: '',
      age: '',
      breed: '',
    });
  };

  render() {
    return (
      <>
        <Form
          name={this.state.name}
          age={this.state.age}
          breed={this.state.breed}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.pets.map((pet) => (
          <Card pet={pet} />
        ))}
      </>
    );
  }
}

export default App;
