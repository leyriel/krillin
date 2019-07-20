import React, {Component} from 'react';
import axios from 'axios';

class School extends Component {
  state = {
    schools: []
  }

  componentDidMount() {
    axios.get(`http://sandstorm-api-dev.src-creative.net/api/schools.json`)
      .then(res => {
        const schools = res.data;
        this.setState({ schools });
      })
  }

  render() {
    return (
      <div style={{border:'1px solid #6959b0', display:'flex'}}>
      <h2>Liste des écoles</h2>
      <ul>
        { this.state.schools.map(school => <li>{school.name} - {school.city}</li>)}
      </ul>
      </div>
    )
  }
}


export default School;
