import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://sandstorm-api-dev.src-creative.net/api/users.json`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div style={{border:'1px solid #6959b0', display:'flex'}}>
      <h2>Liste des utilisateurs</h2>
      <ul>
        { this.state.users.map(user => <li>{user.username} - {user.email}</li>)}
      </ul>
      </div>
    )
  }
}


export default User;
