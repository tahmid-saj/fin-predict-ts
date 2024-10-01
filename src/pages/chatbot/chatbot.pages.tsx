import "./chatbot.styles"
import SendMessage from "../../components/chatbot/send-message/send-message.component"
import ChatbotResponse from "../../components/chatbot/chatbot-response/chatbot-response.component"
import { ChatbotContainer } from "./chatbot.styles"

const Chatbot = () => {
  return (
    <ChatbotContainer>
      <SendMessage/>
      <ChatbotResponse/>
    </ChatbotContainer>
  )
}

export default Chatbot