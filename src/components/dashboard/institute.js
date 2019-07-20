import React, {Component} from 'react';
import axios from 'axios';

class Institute extends Component {
  state = {
    institutes: []
  }

  componentDidMount() {
    axios.get(`http://sandstorm-api-dev.src-creative.net/api/institutes.json`)
      .then(res => {
        const institutes = res.data;
        this.setState({ institutes });
      })
  }

  render() {
    return (
      <div style={{border:'1px solid #6959b0', display:'flex'}}>
      <h2>Liste des institus</h2>
      <ul>
        { this.state.institutes.map(institute => <li>{institute.name} - {institute.city}</li>)}
      </ul>
      </div>
    )
  }
}


export default Institute;
