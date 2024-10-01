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
`