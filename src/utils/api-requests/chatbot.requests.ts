import { errorOnGetChatBotResponse } from "../errors/chatbot.errors";

// chatbot api requests

// response
export const getChatBotResponse = async (messageInput: string): Promise<string | undefined> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL_CHATBOT}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain"
      },
      body: String(messageInput)
    })

    const { message } = await response.json()
    return message
  } catch (error) {
    
    errorOnGetChatBotResponse()
  }
}

