import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../../store/actions/index';

const logout = props => {
    // this will be the first thing we do when we rendering this component.
    const { onLogout } = props;
    
    useEffect(() => {
        onLogout();
    }, [onLogout]);

    return <Redirect to="/"/>;
}

const mapDispatchToProps = dispatch => {
    return { onLogout: () => dispatch(actions.logout()) }
}

export default connect(null, mapDispatchToProps)(logout);