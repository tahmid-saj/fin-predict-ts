import Card from "../../shared/simple-card/simple-card.component"
import "./advice-cards.styles"
import { AdviceContainer } from "./advice-cards.styles"

const cardStyles: any = {
  width: 360,
  height: 350,
  marginBottom: "6%"
}

const AdviceCards = () => {
  const adviceCardContent: any = {
    budget: {
      header: "Create a Budget",
      content: "Track Your Income and Expenses: Record all sources of income and track your spending to see where your money goes." +
                        "Set Spending Limits: Allocate specific amounts for categories like housing, groceries, entertainment, and savings." +
                        "Adjust as Needed: Regularly review and adjust your budget to reflect changes in income or expenses."
    },
    emergencyFund: {
      header: "Build an emergency fund",
      content: "Aim for 3-6 Months of Expenses: Save enough to cover essential expenses for several months in case of unexpected events like job loss or medical emergencies." +
                        "Keep It Accessible: Store this money in a high-yield savings account where it’s easily accessible but still earns some interest."
    },
    manageDebt: {
      header: "Manage debt wisely",
      content: "Prioritize High-Interest Debt: Focus on paying off high-interest debts first, such as credit cards, to reduce the amount of interest you pay over time." +
                        "Consider Debt Consolidation: If you have multiple debts, consolidating them into a single loan with a lower interest rate can simplify payments and reduce costs."
    },
    saveForRetirement: {
      header: "Save for retirement",
      content: "Start Early: The earlier you start saving for retirement, the more you can benefit from compound interest." +
                        "Contribute to Retirement Accounts: Use tax-advantaged accounts like a 401(k) or IRA. Contribute at least enough to get any employer match, if available."
    },
    investWisely: {
      header: "Invest wisely",
      content: "Diversify Your Portfolio: Spread your investments across different asset classes (stocks, bonds, real estate) to manage risk." +
                        "Understand Your Risk Tolerance: Choose investments that match your risk tolerance and time horizon."
    },
    planExpenses: {
      header: "Plan for major expenses",
      content: "Save for Big Purchases: Plan and save for major expenses like buying a home, car, or funding education to avoid taking on excessive debt." +
                        "Consider Future Needs: Think about long-term goals and how they impact your financial planning, such as children’s education or a major life event."
    },
    protectAssets: {
      header: "Protect your assets",
      content: "Get Insurance: Ensure you have adequate insurance coverage for health, life, disability, home, and auto to protect against unexpected financial burdens." +
                        "Create a Will: Establish a will and other estate planning documents to ensure your assets are distributed according to your wishes."
    },
    review: {
      header: "Review and adjust regularly",
      content: "Monitor Your Financial Health: Regularly review your financial situation, track your progress towards goals, and make adjustments as needed." +
                        "Seek Professional Advice: Consider consulting with a financial advisor for personalized advice, especially for complex financial situations."
    },
  }

  return (
    <div className="container">
      <AdviceContainer>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.budget.header }
              content={ adviceCardContent.budget.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.emergencyFund.header }
              content={ adviceCardContent.emergencyFund.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.manageDebt.header }
              content={ adviceCardContent.manageDebt.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.saveForRetirement.header }
              content={ adviceCardContent.saveForRetirement.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.investWisely.header }
              content={ adviceCardContent.investWisely.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.planExpenses.header }
              content={ adviceCardContent.planExpenses.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.protectAssets.header }
              content={ adviceCardContent.protectAssets.content }/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <Card styles={ cardStyles } header={ adviceCardContent.review.header }
              content={ adviceCardContent.review.content }/>
          </div>
        </div>
      </AdviceContainer>
    </div>
  )
}

export default AdviceCards