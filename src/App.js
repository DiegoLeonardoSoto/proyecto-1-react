import styled from 'styled-components';
import CardSection from './Components/CardSection';
import ChartSection from './Components/ChartSection';
import Header from './Components/Header';
import MessagingSection from './Components/MessagingSection';
import PaymentSection from './Components/PaymentSection';
import {OuterLayout} from './styles/Layouts';

function App() {
  return (
    <div className="App">
      <Header />
      <OuterLayout>
        <MainStyled>
          <CardSection/>
          <ChartSection/>
          <MessagingSection/>
          <PaymentSection/>
        </MainStyled>
      </OuterLayout>  
    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;
