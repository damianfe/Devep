import React from 'react';

const Paragraph = () => {
    
    const date = new Date();
    const day = date.getDate();
    const dia = "martes" +  day;
    return (
        <p>Que {dia} lluvioso!!</p>
    );
}

export default Paragraph;
