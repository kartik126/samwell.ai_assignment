import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 36px;
  font-weight: 300;
`;

const Heading2 = styled.h6`
color: #000;
font-size: 17px;
font-weight: 300;
`

const Container = styled.div`
  background: #fff;
  border: 10px solid rgba(51, 51, 51, 0.02);
  border-radius: 34px;
  box-sizing: content-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 50px 30px -20px;
  width: 720px;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    margin:0 10px
  }
`;

const Input = styled.input`
  border-bottom: 3px solid #333;
  padding: 8px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 73%;
  &:focus {
    border-bottom: 3px solid #000;
  }
`;
const EmailInput = styled.input`
  border-bottom: 2px solid #333;
  padding: 8px;
  padding-left:70px;
  font-size:16px;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  width: 25%;
  padding-top: 2em;
  &:focus {
    border-bottom: 2px solid #000;
  }
  @media (max-width: 768px) {
  font-size:12px;
  padding-left:20px;

    
  }
`;

const CheckboxContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:0 55px;
  width:50%
  @media (max-width: 768px) {
  padding:0 0px;
  }

}}`;


const Button = styled.button`
  background: linear-gradient(
    80.89deg,
    rgb(231, 54, 243) 7.11%,
    rgb(123, 97, 255) 75.32%
  );
  color: rgb(255, 255, 255);
  font-size: 17px;
  height: 44px;
  padding: 0px 24px;
  border: none;
  border-radius: 100px;
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 768px) {
   width:100%;
   flex-direction: column-reverse;
   justify-content: center;
   align-items: center;
  }
`;

const Description = styled.div`
  border: 1px solid rgb(221, 221, 221);
  width: 72%;
  border-radius: 24px;
  padding: 15px;
  line-height: 22px;
  margin-top: 20px;
  height: 100px;
`;

const EssayText = styled.input`
display: inline;
width: 80%;
font-size: 15px;
color:rgb(221, 221, 221)
line-height: 1.1;
outline: none;
resize: none;
border: none;
white-space:pre-line;
overflow: hidden;
&::before {
  content: '\\A'; /* Insert a line break */
}
`;
const DropDownContainer = styled.div`
  width: 5em;
`;

const DropDownHeader = styled.div`
  margin-bottom: 0em;
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 300;
  font-size: 1rem;
  color:gray;
  background: #ffffff;
  border-bottom: 1px solid #000
`;

const DropDownListContainer = styled.div``;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  padding-right: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #000;
  font-size: 1rem;
  font-weight: 300;
  position:absolute;
  cursor: pointer;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`;
const options = ["500", "1000", "2000","4000","8000"];

function EssayInput() {
  const [isChecked, setIsChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const onOptionClicked = (value:any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Main>
      <Container>
        <Heading>I need an essay about:</Heading>
        <Input type="text" placeholder="Your input text" />
        <Row>
          <CheckboxContainer
        
          >
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgb(150, 150, 150)",
                fontSize: "14px",
                paddingTop: "30px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  position: "absolute",
                  opacity: 0,
                  cursor: "pointer",
                  color: "rgb(150, 150, 150)",
                }}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#fff",
                  border: "2px solid #333",
                  borderRadius: "4px",
                  textAlign: "center",
                  lineHeight: "24px",
                  color: "rgb(150, 150, 150)",
                  marginRight: "10px",
                }}
              >
                {isChecked && "\u2713"}
              </span>
              add instructions
            </label>
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                color: "rgb(150, 150, 150)",
                paddingTop: "20px",
              }}
            >
              <input
                type="checkbox"
                style={{
                  position: "absolute",
                  opacity: 0,
                  cursor: "pointer",
                  color: "rgb(150, 150, 150)",
                }}
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span
                style={{
                  display: "inline-block",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#fff",
                  border: "2px solid #333",
                  borderRadius: "4px",
                  textAlign: "center",
                  lineHeight: "24px",
                  marginRight: "10px",
                }}
              >
                {isChecked && "\u2713"}
              </span>
              in-text citation
            </label>
          </CheckboxContainer>
          <div style={{ width: "37%",display:"flex",flexDirection:"row",alignItems:"center"}}>
            <Heading2>With</Heading2>
            <DropDownContainer>
              <DropDownHeader onClick={toggling}>
                {selectedOption || "500"}
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options.map((option) => (
                      <ListItem
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
            <Heading2>Words</Heading2>

          </div>
        </Row>
        {isChecked && (
          <Description>
            <EssayText
              type="text"
              placeholder={`Help Samwell get you the best results by including instructions and\nrequirements of the essay`}
            />
          </Description>
        )}
        <EmailInput type="text" placeholder="Your@email.com" />
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            fill="none"
          >
            <path
              fill="#fff"
              d="M14.027 11.637a.999.999 0 0 0 .759-.759l.886-3.986c.232-1.044 1.72-1.044 1.952 0l.886 3.986c.084.38.38.675.759.76l3.986.885c1.044.232 1.044 1.72 0 1.952l-3.986.886a.999.999 0 0 0-.76.76l-.885 3.985c-.232 1.044-1.72 1.044-1.952 0l-.886-3.986a.999.999 0 0 0-.76-.759l-3.985-.886c-1.044-.232-1.044-1.72 0-1.952l3.986-.886ZM8.713 19.823a.999.999 0 0 0 .759-.759l.27-1.22c.098-.438.722-.438.819 0l.27 1.22c.085.38.38.675.76.76l1.22.27c.438.097.438.721 0 .818l-1.22.271a.999.999 0 0 0-.76.76l-.27 1.22c-.097.437-.721.437-.818 0l-.271-1.22a.999.999 0 0 0-.76-.76l-1.22-.27c-.437-.098-.437-.722 0-.819l1.22-.27Z"
            ></path>
          </svg>
          Write my Essay
        </Button>
      </Container>
    </Main>
  );
}

export default EssayInput;
