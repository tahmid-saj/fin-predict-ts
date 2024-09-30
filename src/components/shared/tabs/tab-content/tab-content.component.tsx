import "./tab-content.styles.js"
import { TabContentContainer } from "./tab-content.styles.js"

// renders the tab content with children inside

const TabContent = ({ children }) => {
  return (
    <TabContentContainer>
      { children }
    </TabContentContainer>
  )
}

export default TabContent