import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  margin: 2%;
  background-color: #343535;
  border-radius: 0.5rem;
  box-shadow: 5px 5px #000000;
  width: 400px;
  height: 300px;
`

export const CardHeader = styled.h2`
  text-align: center;
  color: #e4dfdf;
  padding: 1%;
  margin: 1%;
  font-size: 1.5rem;
`

export const CardContent = styled.p`
  text-align: left;
  color: #e4dfdf;
  margin: 1% 3%;
`