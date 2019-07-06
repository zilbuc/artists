export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('artistReduxStore');
    if (serializedState === null) {
      return undefined;
    }
    console.log(JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch(e) {
    return undefined;
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('artistReduxStore', serializedState);
  } catch(e) {
    // ignore write errors
  }
}
