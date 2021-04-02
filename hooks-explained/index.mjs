import { render } from "./fakeReact.mjs";
import { Counter } from "./Counter.mjs";
import { ArthurDent, ZaphodBeeblebrox } from "./Greeter.mjs";

function App() {
  return [ArthurDent, ZaphodBeeblebrox, Counter];
}

render(App);
