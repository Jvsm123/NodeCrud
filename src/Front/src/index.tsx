import ReactDOM from "react-dom"

import GlobalCss from "./Styles/global"

import { App } from "./App"

ReactDOM.render(
  <>
    <GlobalCss />
    <App />
  </>,
  document.getElementById("root")
)
