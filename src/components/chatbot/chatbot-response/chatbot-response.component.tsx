import { useContext } from "react"
import "./chatbot-response.styles"
import { ChatbotResponseContainer, ChatbotResponseText } from "./chatbot-response.styles"
import { ChatbotContext } from "../../../contexts/chatbot/chatbot.context"

const ChatbotResponse = () => {
  const { chatbotResponse } = useContext(ChatbotContext)

  return (
    chatbotResponse && chatbotResponse !== "" &&
    <ChatbotResponseContainer>
      <ChatbotResponseText>
        { chatbotResponse }
      </ChatbotResponseText>
    </ChatbotResponseContainer>
  )
}

export default ChatbotResponse