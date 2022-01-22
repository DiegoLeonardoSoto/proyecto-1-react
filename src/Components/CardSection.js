import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts'
import card from '../img/creditcard.svg'

function CardSectiom() {
    return (
        <CardStyled>
            <InnerLayout>
                <div className="card-container">
                    <div className="card-left">
                    <h2 className="secondary-headeing">
                        one card for all your payments
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum similique 
                        facere iusto repellendus iure, pariatur voluptates obcaecati delectus ipsum fuga quasi quod totam voluptatum!
                    </p>
                    </div>

                    <div className="card-right">
                        <img src={card} alt="" />
                    </div>
                </div>
            </InnerLayout>
        </CardStyled>
    );
}

const CardStyled = styled.section`
.card-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);

        .card-right{
            display: flex;
            justify-content: flex-end;
        }

        .card-left{
            padding:1rem 0;
        }
}
`;

export default CardSectiom;
