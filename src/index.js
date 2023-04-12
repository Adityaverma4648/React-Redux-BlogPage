import { createRoot } from "react-dom/client";
import {StateProvider} from "./redux/StateProvider";
import reducer , {initialState} from "./redux/reducer.js";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
       <App />
  </StateProvider>
);
