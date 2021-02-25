import './App.css';
import styled from "styled-components";
import Form from './Components/Form'

const Wrapper = styled.section`
text-align:center;
  padding:2rem;
  margin:5rem;
  background-color:#ebe5e5;
`;

const H1 = styled.h1`
  color: black;
  font-size: ${props => props.primary ? "40px" : "15px"};
`;


function App() {
  return (
    <div className="App">
      <Wrapper>
        <H1 primary>Sign Up</H1>
        <Form/>
      </Wrapper>
    </div>
  );
}

export default App;
