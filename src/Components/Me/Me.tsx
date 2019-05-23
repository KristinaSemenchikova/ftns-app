import React from "react";
import styled from "styled-components";

const MeWrapper = styled.main`
  color: white;
  grid-area: m;
  display : flex;
  height : 100vh;
`;

const Div = styled.div``;
const Form = styled.form``;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const MePage: React.FC = () => {
  return (
    <MeWrapper>
      <Form>
        <Div>
        <Input type = 'text'/>
          </Div>
      </Form>
    </MeWrapper>
  );
};

export default MePage;
