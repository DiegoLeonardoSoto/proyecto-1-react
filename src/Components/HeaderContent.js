import React from 'react';
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'

function HeaderContent() {
return (
    <HeaderContentStyled>
        <div className="left-content">
            <div className="left-text-container">
                <h1>Smart banking for freelancers</h1>
                    <p className="white">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eveniet non reiciendis aut eos obcaecati officiis repudiandae voluptas, animi, maxime provident suscipit. 
                        Cupiditate tenetur libero voluptatum aspernatur iusto. Rerum, vero.
                    </p>
                <SecondaryButton name={'Register Now'} />
            </div>
        </div>

        <div className="right-content">
            <img src={phone} alt="" className='phone'/>
            <img src={ring1} alt="" className='ring1' />
            <img src={message1} alt="" className='message1' />
            <img src={message2} alt="" className='message2' />
        </div>

    </HeaderContentStyled>
)
}

const HeaderContentStyled = styled.div`
display: grid;
grid-template-columns: repeat(2,1fr);
padding-top:3rem;

.left-content{
    display: flex;
    align-items: center;
    padding-right: 3rem;

        .white{
            color:white;
        }
}

h1{
    font-size: 4rem;
    font-weight: 600;
}

.white{
    padding: 1.4rem 0;
    line-height: 1.8rem;
}

.right-content{
    display: flex;
    justify-content: center;
    position: relative;

    .phone{
        width: 80%;
    }

    .ring1{
        position: absolute;
        bottom: 10%;
        right: 0;
        left: auto;
    }

    .message1{
        position: absolute;
        top: 0;
        right: 0;
        left: auto;
    }

    .message2{
        position: absolute;
        left: 0;
        bottom:15%
    }
}
`;

export default HeaderContent;
