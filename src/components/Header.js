import React from 'react';
import Images from './Images';
import Links from './Links';
import Paragraph from './paragraph';

const Header = () => {
    return (
        <header className="App-header">
        <Images/>
        <Paragraph/>
        <Links/>
      </header>
    );
}

export default Header;
