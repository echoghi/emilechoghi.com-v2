import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavBrand } from './styles';

const Brand = (props: { onClick: () => void }) => {
    return (
        <NavBrand {...props}>
            <NavLink to="/">
                <i className="icon-brand" />
            </NavLink>
        </NavBrand>
    );
};

export default Brand;
