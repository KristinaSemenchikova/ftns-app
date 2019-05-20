import React from "react";
import styled from "styled-components";

const CalcWrapper = styled.main`
  color: white;
  grid-area: m;
  display : flex;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const PCF = styled.div``;
const Form = styled.form``;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Comment = styled.input`
  padding: 1em;
  size: 90px;
  margin: 0.5em;
  color: "palevioletred";
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Calculator: React.FC = () => {
  return (
    <CalcWrapper>
      <Form>
        <Div>
          <span> Product</span>
          <Input type="text" />
        </Div>
        <Div>
          <span> Weight in gramms</span>
          <Input type="number" />
        </Div>

        <PCF>
          <Div>
            <span>Proteins</span>
            <Input type="number" />
          </Div>
          <Div>
            <span>Carbohydrates</span>
            <Input type="number" />
          </Div>
          <Div>
            <span>Fats</span>
            <Input type="number" />
          </Div>
        </PCF>
        <Div>
          <span> My comment</span>
          <Comment type="text" />
        </Div>
      </Form>
    </CalcWrapper>
  );
};

export default Calculator;
