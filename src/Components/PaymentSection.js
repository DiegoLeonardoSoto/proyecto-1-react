import styled from "styled-components";
import { InnerLayout } from '../styles/Layouts'
import Card from "./Card.js"
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkDisabled from '../img/check-disabled.svg'

function PaymentSection() {
return (
    <PaymentStyled>
        <InnerLayout>
            <h3 className="small-heading">
            An exceptional service, <span>at the right price</span>
            </h3>
            <p className="c-para">Start with our free plan and switch to premium as you grow</p>
            <div className="card-container">

                <Card
                account={'Free'} 
                amount={'$0'} 
                cardText={'Manage your business with a simple and efficient account.'}
                button={'Get Started'}
                card={card}
                active={active}
                inactive={inactive}
                check={check}
                checkDis={checkDisabled}
                textList={[
                    [true,'10 Free local transfers'],
                    [true,'Free ATM withdrawals in Dollar up to $250 per month'],
                    [true,'Free payments to other Draft accounts'],
                    [true,'Prepaid debit cards'],
                    [true,'Virtual cards'],
                    [false,'Priority 24/7 support'],
                    [false,'Exchange 24 currencies'],
                    [false,'Multi-user access']
                    ]}
                />

                <Card
                account={'Premium'} 
                amount={'$10'} 
                cardText={'Manage your business with a simple and efficient account.'}
                button={'Get Started'}
                card={card}
                active={active}
                inactive={inactive}
                check={check}
                checkDis={checkDisabled}
                textList={[
                    [true,'10 Free local transfers'],
                    [true,'Free ATM withdrawals in Dollar up to $250 per month'],
                    [true,'Free payments to other Draft accounts'],
                    [true,'Prepaid debit cards'],
                    [true,'Virtual cards'],
                    [true,'Priority 24/7 support'],
                    [true,'Exchange 24 currencies'],
                    [true,'Multi-user access']
                    ]}
                />
            </div>
        </InnerLayout>
    </PaymentStyled>
);
}

const PaymentStyled = styled.section`
.card-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 3rem;
    padding-top: 7.5rem;
}

.c-para{
    text-align:center;
}
`;

export default PaymentSection;
