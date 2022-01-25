import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts'
import lines from '../img/lines.svg'
import questions from '../questions';
import Questions from './Questions';

function FAQSection() {
return (
    <FAQSectionStyled>
        <InnerLayout>
            <h3 className="small-heading">
                Frequently <span>asked questions</span>
            </h3>
            <p className='c-para'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                consequuntur distinctio nobis nam deserunt adipisci optio eos,
                numquam .
            </p>

            <div className="lines">
                <img src={lines} alt="" />
            </div>

            <div className="questions-con">
                {
                    questions.map((q)=> { return <Questions key={q.id} {...q}/> } )
                        
                }
            </div>
        </InnerLayout>
    </FAQSectionStyled>
);
}

const FAQSectionStyled = styled.section`
.c-para{
    width: 60%;
    margin: 0 auto;
}

.lines{
    position:absolute;
    left:0;
    top: 300%;
    width: 100%;
    z-index: -1;
    img{
        width: 100%;
    }
}

.questions-con{
    padding-top: 4rem;
}
`;

export default FAQSection;
