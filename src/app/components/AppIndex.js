import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './Loading';

// Components
import NavBar from './NavBar';

const Loader = ({ error }) => {
    if (error) {
        return 'Error! Please refresh the page.';
    } else {
        return <Loading />;
    }
};

const SocialLinks = Loadable({
    loader: () => import('./SocialLinks'),
    loading: Loader
});

const About = Loadable({
    loader: () => import('./About'),
    loading: Loader
});

const Portfolio = Loadable({
    loader: () => import('./Portfolio'),
    loading: Loader
});

const Contact = Loadable({
    loader: () => import('./Contact'),
    loading: Loader
});

const AppIndex = () => (
    <Fragment>
        <NavBar />
        <SocialLinks />
        <Fragment>
            <Route exact path="/" component={About} />
            <Route path="/portfolio" component={Portfolio} name="Portfolio" />
            <Route path="/contact" component={Contact} name="Contact" />
        </Fragment>
    </Fragment>
);

export default AppIndex;
