import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand } from './Nav.styles';

const Brand = ({ handleMenu }) => (
    <NavBrand onClick={() => handleMenu(false)}>
        <NavLink to="/">
            <i className="icon-brand" />
        </NavLink>
    </NavBrand>
);

export default Brand;
