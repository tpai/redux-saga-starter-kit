import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = ({
    initValue,
    step,
    timer,
    initValueChange,
    stepChange,
    setActive,
    setInactive,
    reset
}) => (
    <div>
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

Form.propTypes = {
    initValue: PropTypes.number,
    step: PropTypes.number,
    timer: PropTypes.string,
    initValueChange: PropTypes.func,
    stepChange: PropTypes.func,
    setActive: PropTypes.func,
    setInactive: PropTypes.func,
    reset: PropTypes.func
};

export default Form;

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
