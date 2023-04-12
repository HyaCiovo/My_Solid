import { Component, Show, createSignal } from 'solid-js';
import { A } from "@solidjs/router";

const Home: Component = () => {
  const [loggedIn, setLog] = createSignal<boolean>(false)
  const [number, setNumber] = createSignal<number>(0)
  const double = () => number() * 2
  return (
    <div>
      <h1>Home Page</h1>
      <A href="/about" replace={true}>To Aout</A>
      <div>
        这是Home页
      </div>
      <div>{number()}  double:{double()}</div>
      <button onClick={() => { setNumber(number() + 1) }}>plus</button>
      <div>
        {
          loggedIn() ?
            <button onClick={() => setLog(false)}>Log Out</button> :
            <button onClick={() => setLog(true)}>Log In</button>
        }
        <Show
          when={loggedIn()}
          fallback={<button onClick={() => setLog(true)}>Log In</button>}>
          <button onClick={() => setLog(false)}>Log Out</button>
        </Show>
      </div>
    </div>
  );
}
export default Home;