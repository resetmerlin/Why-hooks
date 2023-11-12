import { Component } from 'react';

export class Greeting extends Component {
  render() {
    return <h1>Hallo, {this.props.name}</h1>;
  }
}
