import React, { useState, createContext, FC } from "react";
import { ChatBotContextType, ChatBotProviderProps } from "./chatbot.types";
import { validateChatBotMessageInput } from "../../utils/validations/chatbot.validations";
import { getChatBotResponse } from "../../utils/api-requests/chatbot.requests";

// helper functions
const getChatbotResponseHelper = async (chatbotResponse: string, messageInput: string): Promise<string | undefined> => {
  if (validateChatBotMessageInput(messageInput)) return chatbotResponse

  const res = await getChatBotResponse(messageInput)
  return res
}

// initial state
export const ChatbotContext = createContext<ChatBotContextType>({
  chatbotResponse: "",
  getChatbotResponse: () => {}
})

// context provider
export const ChatbotProvider: FC<ChatBotProviderProps> = ({ children }) => {
  const [chatbotResponse, setChatbotResponse] = useState("")

  const getChatbotResponse = async (messageInput: string) => {
    const resChatbot = await getChatbotResponseHelper(chatbotResponse, messageInput)
    if (resChatbot) {
      setChatbotResponse(resChatbot)
    }
  }

  const value = { chatbotResponse, getChatbotResponse }

  return (
    <ChatbotContext.Provider value={ value }>
      { children }
    </ChatbotContext.Provider>
  )
}