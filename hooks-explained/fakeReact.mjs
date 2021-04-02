let rerender = false;

export function useState(initialState) {
  const hookState = findStateForThisHookInCurrentComponent(initialState);

  function setState(value) {
    hookState.memoizedState = value;
    rerender = true;
  }

  return [hookState.memoizedState, setState];
}

export function render(component) {
  rerender = false;

  renderComponent(component);

  if (rerender) {
    setTimeout(() => render(component), 1000);
  }
}

/**
 *
 * Internals
 *
 */

const globalComponentState = new WeakMap();
let stateForCurrentComponent = null;

function findStateForThisHookInCurrentComponent(initialState) {
  try {
    const hookState =
      stateForCurrentComponent.hooksStates[stateForCurrentComponent.hooksIndex];
    if (hookState) {
      return hookState;
    } else {
      const newHookState = { memoizedState: initialState };
      stateForCurrentComponent.hooksStates[
        stateForCurrentComponent.hooksIndex
      ] = newHookState;
      return newHookState;
    }
  } finally {
    stateForCurrentComponent.hooksIndex++;
  }
}

function findStateComponentForComponentToRender(component) {
  const existingComponentState = globalComponentState.get(component);
  if (existingComponentState) {
    existingComponentState.hooksIndex = 0;
    return existingComponentState;
  } else {
    const newComponentState = { hooksStates: [], hooksIndex: 0 };
    globalComponentState.set(component, newComponentState);
    return newComponentState;
  }
}

function renderComponentWithState(component) {
  try {
    stateForCurrentComponent = findStateComponentForComponentToRender(
      component
    );
    const children = component();
    return children;
  } finally {
    stateForCurrentComponent = null;
  }
}

function renderComponent(component) {
  const children = renderComponentWithState(component);
  children.forEach((child) => renderComponent(child));
}
