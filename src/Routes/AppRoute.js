import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ErrorPage from '../Components/Error/ErrorPage';

import App from '../App';

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Route 
                path={`${process.env.PUBLIC_URL}/:user_id/:pool_id`}
                render={props => 
                    <App user_id={props.match.params.user_id} 
                    route_id={props.match.params.route_id} /> 
                } 
            />
            <Route exact path={`${process.env.PUBLIC_URL}/*`} component={ErrorPage} />
        </div>
    </BrowserRouter>
);

export default AppRoutes;