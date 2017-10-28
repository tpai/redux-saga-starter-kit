import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const App = ({ timer, T, value }) => (
    <div>
        <div>Current Mode: {timer}</div>
        <div>Current Value: {value}</div>
        <div>Current T: {T}</div>
    </div>
);

const mapStateToProps = state => state;

App.propTypes = {
    timer: PropTypes.string,
    T: PropTypes.number,
    value: PropTypes.number
};

export default connect(mapStateToProps)(App);
