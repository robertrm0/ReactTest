import React from 'react'
import styled from 'styled-components';


const ContenHeader = styled.header`
    width: 100%;
    height: 8vh;
    background-color: #6c5ce7;
    color: white;
    text-align: center;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: white;
    }
`

const Header = () => {
    return (
        <>
            <ContenHeader>
                    <h1>
                       <a href="/">  <i className="fab fa-github"></i> Github Users</a>
                    </h1>
            </ContenHeader>
        </>
    )
}

export default Header
