import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) =>{
    const {temp,condition} = props;
     
    const Temp = styled.h1`
        font-family: Arial, Helvetica, sans-serif;
        font-size: 2.5rem;
    `
    const State = styled.h3`
        font-family: 'Merriweather', sans-serif;
        font-size: 1.2rem;
    `

    
    return(
        <> 
        <Temp>{temp} C</Temp>
        <State>{condition}</State>
        </>
    );
}

export default Condition;