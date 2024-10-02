import styled from "styled-components";
import { COLOR_CODES } from "../../../utils/constants/shared.constants";

export const ChatbotResponseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ChatbotResponseText = styled.p`
  color: ${COLOR_CODES.text[0]};
  top: 20%;
  position: absolute;

  border-radius: 1.5rem;
  box-shadow: 1px 1px 1px 1px rgb(150, 150, 150);
  display: block;
  justify-content: center;
  align-items: center;
  padding: 3% 5% 3% 5%;
  margin-bottom: 3%;
  white-space: pre-line;
  text-align: left;
`