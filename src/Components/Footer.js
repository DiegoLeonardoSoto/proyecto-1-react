import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'
import logo from '../img/logo.svg'

function Footer() {
    return (
        <FooterStyled>
            <InnerLayout>
                <div className="footer-con">
                    <div className="logo-con">
                        <div className="logo-items">
                            <img src={logo} alt="" />
                            <p>
                                Copyright @2022 LoremIpsu. <br/>
                                All rights reserved
                            </p>
                        </div>
                    </div>
                    <ul className="botton-nav">
                        <div className="link1">
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Fees</a>
                            </li>
                        </div>
                        <div className="link2">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Affiliate</a>
                            </li>
                        </div>
                        <div className="link3">
                            <li>
                                <a href="#">Tearms of use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </InnerLayout>
        </FooterStyled>
);
}

const FooterStyled = styled.footer`
padding: 0 18rem;
background-color: #DCE2F0;

.footer-con{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.logo-con{
    display: flex;
    align-items: center;
    img{
        width:90px;
    }
}

.botton-nav{
    display: flex;
    justify-content: space-between;
    li{
        padding: 2rem 0;
        color: var(--dark-primary);
    }
}
`;



export default Footer;
