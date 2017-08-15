import DashboardContainer from './DashboardContainer'
import ProductsContainer from './ProductsContainer'
import InDevelopmentContainer from './InDevelopmentContainer'

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter, Route, IndexRoute } from 'react-router-dom';
import ReactOnRails from 'react-on-rails';

const RootContainer = (_initialProps, context) => {
    const store = ReactOnRails.getStore('store');
    const { location, base, serverSide } = context;

    let Router;
    if (serverSide) {
        Router = (props) => (
            <StaticRouter basename={base} location={location} context={{}} >
                {props.children}
            </StaticRouter>
        )
    } else {
        Router = (props) => (
            <BrowserRouter basename={base + '/'}>
                {props.children}
            </BrowserRouter>
        )
    }
    return (<Provider store={store}>
        <Router>
            <div>
                <Route path={'/'} exact component={DashboardContainer}/>
                <Route path="/product">
                    <div>
                        <IndexRoute component={ProductsContainer} />
                        <Route path={'view/:id'} component={InDevelopmentContainer}/>
                    </div>
                </Route>
            </div>
        </Router>
    </Provider>)
}

export default RootContainer