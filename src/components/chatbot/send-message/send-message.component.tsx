import { useContext, useState } from "react"
import "./send-message.styles"
import Button from "../../shared/button/button.component"
import { SendMessageForm, SendMessageInput } from "./send-message.styles"
import { ChatbotContext } from "../../../contexts/chatbot/chatbot.context"

const defaultFormFields = {
  messageInput: ""
}

const SendMessage = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const { getChatbotResponse } = useContext(ChatbotContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    getChatbotResponse(formFields.messageInput)

    resetFormFields()
  }

  return (
    <div className="container">
      <SendMessageForm onSubmit={ handleSubmit }>
        <SendMessageInput name="messageInput" title="Enter message" type="text" value={ formFields.messageInput }
          onChange={ handleChange }></SendMessageInput>
        <Button type="submit">Send</Button>
      </SendMessageForm>
    </div>
  )
}

export default SendMessage