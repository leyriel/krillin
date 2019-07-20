import React, {Component} from 'react';
import {CardElement, Elements, StripeProvider} from 'react-stripe-elements';

//Components
import Navigation from './navigation';
import Footer from './footer';
import Institute from './institute';
import School from './school';
import User from './user';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="dashboard">
                  <Navigation />
                  <p>Je suis le dashboard</p>
                  <div className="content" style={{display:'flex', flexDirection:'column'}}>
                  <Institute />
                  <School />
                  <User />
                  </div>
                  <Footer />

          </div>
        );
    }
}

export default Main;
