import React, { useState } from 'react';
import styled from 'styled-components';
import plus from '../img/plus.svg';
import minus from '../img/minus.svg';
function Questions({title, description}) {
    const [toggle, setToggle] = useState(false);
    
    const btnToggle = () => {
        setToggle(!toggle)
    }
    return (
    <QuestionsStyled>
        <div className="q-con">
            <div className="toggle-title">
                <h4>{title}</h4>
                <button onClick={btnToggle}>
                    {
                        !toggle ? <img src={plus} alt="" /> : <img src={minus} alt="" />
                    }
                </button>
            </div>
            {toggle && <p> {description} </p>}
        </div>
    </QuestionsStyled>
    );
}

const QuestionsStyled = styled.div`
background-color: #FFF;
margin: 1rem 0;
padding: 1.4rem 1rem;
border-radius: 24px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
h4{
    font-size: 1.3rem;
    color:var(--dark-primary);
}

.toggle-title{
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
        background: transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }
}

`;

export default Questions;
