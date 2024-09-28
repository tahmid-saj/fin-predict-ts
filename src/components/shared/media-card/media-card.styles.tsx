import styled from "styled-components";

export const CardMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  margin: 2%;
  background-color: #343535;
  border-radius: 0.5rem;
  box-shadow: 5px 5px #000000;
  width: 350px;
  height: 600px;
`;

export const CardMediaHeader = styled.h2`
  text-align: center;
  color: #e4dfdf;
  padding: 1%;
  margin: 1%;
  font-size: 1.5rem;
`;

export const CardMediaImage = styled.img`
  border-radius: 0.5rem;
  margin-bottom: 10px;
`;

export const CardMediaContent = styled.p`
  text-align: left;
  color: #e4dfdf;
  margin: 1% 3%;
`;

export const CardMediaButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;

  &:hover {
    background-color: #45a049;
  }
`;
