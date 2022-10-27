import React from 'react'
import styled from 'styled-components'


const Load = () => {
  return (
    <LoadContainer>
        <h1>
            S
        </h1>
        
        
        </LoadContainer>
  )
}

export default Load

const LoadContainer = styled.div`
    display:flex;
    width: 100%;
    height: 100vh;
    
    /* font-family: 'wifty'; */
    
    align-items: center;
    justify-content:center;
    background-color: var(--navy);

    h1{
        border-radius:10px;
        border: 2px solid white;
        /* line-height: ; */
        padding-top: -40px;
        padding-left: 20px;
        padding-bottom: 10px;
        padding-right: 20px;
        font-size: 200px;
        font-weight: 800;
        background: linear-gradient(45deg,var(--lightest-slate) 0%, var(--green) 20%, var(--navy) 40%, var(--lightest-slate) 60%, var(--green) 80% );
        color: var(--navy) 100%;
        text-shadow: -2px -2px 1px white, 2px 2px 1px white;
        -webkit-text-stroke: 2px black;
        animation: color-change 2s infinite, initLoad 2s, background-change 1s infinite;
         
    }
`