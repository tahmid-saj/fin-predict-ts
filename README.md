# [financeprediction.io](https://www.financeprediction.io/)

Finance prediction app to view historical and current market data, weekly predictions on BTC / stocks / forex, and get support from AI driven services. Developed with TypeScript, React, Django, AWS, GCP, Docker, MySQL.

The models used by the application can be found <a href="https://github.com/tahmid-saj/ml-repository">here</a>.

The structure of the codebase is as follows:

```
fin-predict-ts/
├── index.html
├── package-lock.json
├── package.json
├── public/
│   └── finpredict.svg
├── README.md
├── src/
│   ├── App.css
│   ├── App.tsx
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── advice/
│   │   │   └── advice-cards/
│   │   │       ├── advice-cards.component.tsx
│   │   │       └── advice-cards.styles.tsx
│   │   ├── chatbot/
│   │   │   ├── chatbot-response/
│   │   │   │   ├── chatbot-response.component.tsx
│   │   │   │   └── chatbot-response.styles.tsx
│   │   │   └── send-message/
│   │   │       ├── send-message.component.tsx
│   │   │       └── send-message.styles.tsx
│   │   ├── home/
│   │   │   ├── home.component.tsx
│   │   │   └── home.styles.tsx
│   │   ├── market/
│   │   │   ├── market-data-form/
│   │   │   │   ├── market-data-form.component.tsx
│   │   │   │   └── market-data-form.styles.tsx
│   │   │   ├── market-data-graph/
│   │   │   │   ├── market-data-graph.component.tsx
│   │   │   │   └── market-data-graph.styles.tsx
│   │   │   └── market-data-table/
│   │   │       ├── market-data-table.component.tsx
│   │   │       └── market-data-table.styles.tsx
│   │   ├── predictor/
│   │   │   ├── daily-prediction/
│   │   │   │   ├── daily-prediction.component.tsx
│   │   │   │   └── daily-prediction.styles.tsx
│   │   │   └── two-week-predictions/
│   │   │       ├── two-week-predictions-graph/
│   │   │       │   ├── two-week-predictions-graph.component.tsx
│   │   │       │   └── two-week-predictions-graph.styles.tsx
│   │   │       └── two-week-predictions-table/
│   │   │           ├── two-week-predictions-table.component.tsx
│   │   │           └── two-week-predictions-table.styles.tsx
│   │   └── shared/
│   │       ├── button/
│   │       │   ├── button.component.tsx
│   │       │   └── button.styles.tsx
│   │       ├── drop-button/
│   │       │   └── drop-button.styles.tsx
│   │       ├── form-input/
│   │       │   ├── form-input.component.tsx
│   │       │   └── form-input.styles.tsx
│   │       ├── info-paper/
│   │       │   ├── info-paper.component.tsx
│   │       │   └── info-paper.styles.tsx
│   │       ├── media-card/
│   │       │   ├── media-card.component.tsx
│   │       │   └── media-card.styles.tsx
│   │       ├── simple-card/
│   │       │   ├── simple-card.component.tsx
│   │       │   └── simple-card.styles.tsx
│   │       └── tabs/
│   │           ├── tab-content/
│   │           │   ├── tab-content.component.tsx
│   │           │   └── tab-content.styles.tsx
│   │           └── tab-headers/
│   │               ├── tab-headers.component.tsx
│   │               └── tab-headers.styles.scss
│   ├── contexts/
│   │   ├── chatbot/
│   │   │   ├── chatbot.context.tsx
│   │   │   └── chatbot.types.tsx
│   │   ├── market/
│   │   │   ├── market.context.tsx
│   │   │   └── market.types.tsx
│   │   └── predictor/
│   │       ├── predictions.context.tsx
│   │       └── predictions.types.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── pages/
│   │   ├── advice/
│   │   │   ├── advice.pages.tsx
│   │   │   └── advice.styles.tsx
│   │   ├── chatbot/
│   │   │   ├── chatbot.pages.tsx
│   │   │   └── chatbot.styles.tsx
│   │   ├── home/
│   │   │   ├── home.pages.tsx
│   │   │   └── home.styles.tsx
│   │   ├── market/
│   │   │   ├── market.pages.tsx
│   │   │   └── market.styles.tsx
│   │   └── predictor/
│   │       ├── predictions.pages.tsx
│   │       └── predictions.styles.tsx
│   ├── routes/
│   │   ├── advice/
│   │   │   └── advice.routes.tsx
│   │   ├── chatbot/
│   │   │   └── chatbot.routes.tsx
│   │   ├── home/
│   │   │   └── home.routes.tsx
│   │   ├── market/
│   │   │   └── market.routes.tsx
│   │   ├── navigation/
│   │   │   ├── navigation.routes.tsx
│   │   │   └── navigation.styles.scss
│   │   └── predictor/
│   │       └── predictions.routes.tsx
│   ├── utils/
│   │   ├── api-requests/
│   │   │   ├── chatbot.requests.ts
│   │   │   ├── market.requests.ts
│   │   │   └── predictions.requests.ts
│   │   ├── constants/
│   │   │   ├── market.constants.ts
│   │   │   ├── predictions.constants.ts
│   │   │   └── shared.constants.ts
│   │   ├── errors/
│   │   │   ├── chatbot.errors.ts
│   │   │   ├── market.errors.ts
│   │   │   └── predictions.errors.ts
│   │   ├── helpers/
│   │   └── validations/
│   │       ├── chatbot.validations.ts
│   │       └── market.validations.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.app.tsbuildinfo
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.node.tsbuildinfo
└── vite.config.ts
```
