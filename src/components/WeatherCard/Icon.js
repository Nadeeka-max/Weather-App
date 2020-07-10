import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) =>{
    
    const Icon = styled.img`
        width: 40%;
       
    `
    var icon  = '';
    switch(props.condition)
    {
        case 'Clear' :
            icon = `sun.png`;
            break;
        case 'Clouds' :
            icon = `clouds.png`;
            break;
        case 'Haze':
            icon = `sun.png`;
            break;
        case 'Hail':
            icon = `sun.png`;
            break;
        case 'Fog':
            icon = `sun.png`;
            break;
        case 'Tonado':
            icon ='sun.png';
            break;
        case 'Dust':
            icon ='sun.png';
            break;
        case 'Mist':
            icon ='sun.png';
            break;
        case 'Snow':
            icon ='sun.png';
            break;
        case 'Rain':
            icon ='sun.png';
            break;
        case 'Drizzle':
            icon ='sun.png';
            break;
        case 'Thunderstorm':
            icon ='sun.png';
            break;
        default:
            icon = 'w1.png';
            break;
    }
    
    return(
       <Icon 
       src={icon} 
       alt="Weather Icon"/>
    );
}

export default Icon;