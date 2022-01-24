import React from "react";
import styled from "styled-components";

function Card(
    {account,amount,cardText,button,card,active,inactive,check,checkDis,textList}
) {


return (
    <CardStyled>
        <h4 className="card-title">
            {account}
        </h4>
        <h4 className="card-title">
            {amount} <span>/ m</span>
        </h4>
        <p className="c-para">
            {cardText}
        </p>
        <div className="button-con">
            <button>{button}</button>
        </div>

        <div className="card-image-cont">
            <img src={card} alt="" />
        </div>
            <div className="plan-con">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-cont">

            {
            textList.map((text) =>  text[0] ? 
            <p className="text-check" > <img src={check} alt="" /> {text[1]} </p> 
            : 
            <p className="text-checkDis" > <img src={checkDis} alt="" /> {text[1]} </p>)
            }
            
            </div>

    </CardStyled>
);
}

const CardStyled = styled.section`
background-color: white;
padding: 3rem 4rem;
border-radius: 50px;
width: 90%;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

.card-title{
    font-size: 2rem;
    color: #000;
    text-align:center;
    padding: 1.5rem 0;
    span{
        font-size: 1.5rem;
    }
}

.button-con{
    text-align:center;
    padding: 1.5rem 0;
    button{
        border: 2px solid #16194F;
        padding: .8rem 1.4rem;
        outline: none;
        cursor: pointer;
        background: transparent;
        border-radius: 20px;
        font-size: inherit;
        color: #16194F;
    }
}

.card-image-cont{
    display: flex;
    justify-content: center;
    img{
        width: 70%;
    }
}

.plan-con{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;

    img{
        padding: 0.3rem;
    }
}

.text-check, .text-checkDis{
    display: flex;
    align-items: center;
    padding: .4rem 0;
    img{
        padding-right: .5rem;
    }
}

.text-checkDis{
    color: #B7B7B7;
}

`;

export default Card;
