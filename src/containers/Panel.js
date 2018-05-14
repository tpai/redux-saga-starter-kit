import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Display from 'components/Display';
import Form from 'components/Form';
import * as initValueActions from 'redux/modules/initValue';
import * as stepActions from 'redux/modules/step';
import * as timerActions from 'redux/modules/timer';
import * as tActions from 'redux/modules/T';
import * as resetActions from 'redux/modules/reset';

const Panel = ({
    timer,
    T,
    step,
    value,
    initValue,
    actions,
    actions: {
        setActive,
        setInactive,
        stepChange,
        initValueChange,
        reset
    }
}) => {
    return (
        <div>
            <Display {...{
                timer,
                T,
                value
            }} />
            <Form {...{
                initValue,
                step,
                timer,
                initValueChange,
                stepChange,
                setActive,
                setInactive,
                reset
            }} />
        </div>
    );
};

Panel.propTypes = {
    timer: PropTypes.string,
    T: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    initValue: PropTypes.number,
    actions: PropTypes.shape()
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ...initValueActions,
        ...stepActions,
        ...timerActions,
        ...tActions,
        ...resetActions
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);

