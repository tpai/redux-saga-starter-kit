import React from 'react';
import styled from 'styled-components';

import Panel from 'containers/Panel';

const App = () => (
    <Cover>
        <Container>
            <Panel />
        </Container>
    </Cover>
);

const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const Container = styled.div`
    width: 400px;
    @media(max-width: 480px) {
        width: 100%;
    }
`;

export default App;
