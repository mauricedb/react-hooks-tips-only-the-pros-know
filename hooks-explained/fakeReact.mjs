let rerender = false;

/**
 *
 * Public API
 *
 */
export function useState(initialState) {
  const hook = mountWorkInProgressHook(initialState);

  function setState(value) {
    hook.memoizedState = value;
    rerender = true;
  }

  return [hook.memoizedState, setState];
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
 * Internal functions
 *
 */

const workInProgressForComponents = new WeakMap();
let currentlyRenderingFiber = null;

function mountWorkInProgressHook(initialState) {
  try {
    const hook =
      currentlyRenderingFiber.hooksStates[currentlyRenderingFiber.hooksIndex];
    if (hook) {
      return hook;
    } else {
      const newHook = { memoizedState: initialState };
      currentlyRenderingFiber.hooksStates[
        currentlyRenderingFiber.hooksIndex
      ] = newHook;
      return newHook;
    }
  } finally {
    currentlyRenderingFiber.hooksIndex++;
  }
}

function findWorkInProgress(component) {
  const existingComponentState = workInProgressForComponents.get(component);
  if (existingComponentState) {
    existingComponentState.hooksIndex = 0;
    return existingComponentState;
  } else {
    const newComponentState = { hooksStates: [], hooksIndex: 0 };
    workInProgressForComponents.set(component, newComponentState);
    return newComponentState;
  }
}

function renderWithHooks(component) {
  try {
    currentlyRenderingFiber = findWorkInProgress(component);
    const children = component();
    return children;
  } finally {
    currentlyRenderingFiber = null;
  }
}

function renderComponent(component) {
  const children = renderWithHooks(component);
  children.forEach((child) => renderComponent(child));
}
