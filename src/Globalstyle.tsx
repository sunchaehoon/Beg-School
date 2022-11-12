import { createGlobalStyle } from "styled-components";
import React from 'react';

const Globalstyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        user-select: none;
    }

    body {
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }
`;

export default Globalstyle;