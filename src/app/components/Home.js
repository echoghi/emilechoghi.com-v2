import React from 'react';
import { connect } from 'react-redux';
// Components
import Footer from './Footer';
import Lottie from 'react-lottie';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import * as eData from '../assets/animations/e.json';
import * as mData from '../assets/animations/m.json';
import * as iData from '../assets/animations/i.json';
import * as lData from '../assets/animations/l.json';
import * as cData from '../assets/animations/c.json';
import * as hData from '../assets/animations/h.json';
import * as oData from '../assets/animations/o.json';
import * as gData from '../assets/animations/g.json';
// Images
import homeImg from '../assets/images/home.png';

const mapStateToProps = state => ({
    width: state.portfolioState.width
});

const Header = styled.h2`
    font-size: 30px;

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initialLoad: true,
            duration: 1000,
            loading: true,
            error: null,
            firstName: 'emile',
            lastName: 'choghi',
            e1: false,
            m: false,
            i: false,
            l: false,
            e2: false
        };
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        if (NODE_ENV === 'production') {
            ReactGA.ga('send', 'pageview', '/');
        }
    }

    renderLottie(letter, index) {
        // prettier-ignore
        const durationSwitch = letter =>
            ({
                'e': {
                	data: eData,
                	width: 40
                },
                'm': {
                	data: mData,
                	width: 50
                },
                'i': {
                	data: iData,
                	width: 40
                },
                'l': {
                	data: lData,
                	width: 40
                },
                'c': {
                	data: cData,
                	width: 50
                },
                'h': {
                	data: hData,
                	width: 50
                },
                'o': {
                	data: oData,
                	width: 50
                },
                'g': {
                	data: gData,
                	width: 50
                }
            })[letter];

        const { data, width } = durationSwitch(letter);

        const options = {
            loop: false,
            autoplay: true,
            animationData: data,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
                progressiveLoad: true
            }
        };

        return <Lottie options={options} height={100} width={width} key={index} />;
    }

    stopAnimation() {
        if (this.state.initialLoad) {
            this.setState({ duration: 0, initialLoad: false });
        }
    }

    renderFooter() {
        if (this.props.width > 800) {
            return <Footer fixed />;
        }
    }

    render() {
        const { firstName, lastName } = this.state;

        return (
            <div>
                <div className="home">
                    <div className="jumbotron">
                        <div className="jumbotron__container">
                            <div className="jumbotron__content">
                                {/* First Name */}
                                <section>
                                    {_.map(firstName.split(''), (letter, index) => {
                                        return this.renderLottie(letter, index);
                                    })}
                                </section>
                                {/* Last Name */}
                                <section>
                                    {_.map(lastName.split(''), (letter, index) => {
                                        return this.renderLottie(letter, index);
                                    })}
                                </section>
                                <Header>Frontend Engineer</Header>
                            </div>
                        </div>
                    </div>
                    <img src={homeImg} />
                </div>

                {this.renderFooter()}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);
