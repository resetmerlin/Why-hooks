import { Component } from 'react';
import { createConnection } from './chat';

export default class ChatRoom extends Component {
  state = {
    serverUrl: 'http://localhost:1234',
  };

  componentDidMount() {
    this.setupConnection();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destoryConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destoryConnection();
  }

  setupConnection() {
    this.connection = createConnection(this.state.serverUrl, this.props.roomId);
    this.connection.connect();
  }

  destoryConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={(e) => {
              this.setState({
                serverUrl: e.target.value,
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}
