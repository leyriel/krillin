import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'

class Root extends Component {

    render() {
        const {store} = this.props;
        return(
            <Provider store={store}>
                <Router>
                    <div>
                        <Route history={Router} path="/" component={App} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;