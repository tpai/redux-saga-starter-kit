import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Display from 'components/Display';
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
    setActive,
    setInactive,
    stepChange,
    initValueChange,
    reset
}) => {
    return (
        <div>
            <Display {...{ timer, T, value }} />
            <Row>
                <Field>Initial Value:</Field>
                <FieldInput><Input type="number" value={initValue} onChange={e => initValueChange(e.target.value)} /></FieldInput>
            </Row>
            <Row>
                <Field>Step:</Field>
                <FieldInput><Input type="number" value={step} onChange={e => stepChange(e.target.value)} /></FieldInput>
            </Row>
            {timer === 'Inactive' && <Button onClick={() => setActive()}>Start</Button>}
            {timer === 'Active' && <DisabledButton>Start</DisabledButton>}
            {timer === 'Inactive' && <DisabledButton>Pause</DisabledButton>}
            {timer === 'Active' && <Button onClick={() => setInactive()}>Pause</Button>}
            <Button onClick={() => reset(initValue)}>Reset</Button>
        </div>
    );
};

Panel.propTypes = {
    timer: PropTypes.string,
    T: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.number,
    initValue: PropTypes.number,
    setActive: PropTypes.func,
    setInactive: PropTypes.func,
    stepChange: PropTypes.func,
    initValueChange: PropTypes.func,
    reset: PropTypes.func
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...initValueActions,
        ...stepActions,
        ...timerActions,
        ...tActions,
        ...resetActions
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Panel);

const Row = styled.div`
    padding-top: 1rem;
    display: flex;
    flex-direction: row;
`;

const Field = styled.div`
    width: 30%;
`;

const FieldInput = styled.div`
    width: 70%;
`;

const Input = styled.input`
    border: 1px solid black;
    outline: none;
`;

const Button = styled.button`
    border: 0;
    border-radius: 10px;
    background-color: #0071ff;
    color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    margin: 1rem;
    box-shadow: none;
    outline: 0;
    outline-offset: 0;
    cursor: pointer;
    &:hover {
        background-color: #0065e4;
    }
`;

const DisabledButton = styled(Button)`
    cursor: not-allowed;
    opacity: .5;
    background-color: #0071ff;
    &:hover {
        background-color: #0071ff;
    }
`;
