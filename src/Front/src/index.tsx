import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import GlobalCss from './styles/global';

ReactDOM.render(
    <>
        <GlobalCss/>
        <App />
    </>,
    document.getElementById('root')
);
