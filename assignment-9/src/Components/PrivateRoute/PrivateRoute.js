import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedinuser, setloggedinuser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            loggedinuser.email || loggedinuser.displayName? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;