import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/state/createStore";
import { saveState } from './src/state/localStorage';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore();

  store.subscribe(() => saveState(store.getState()))

  return <Provider store={store}>{element}</Provider>
}
