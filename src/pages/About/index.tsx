import { Component, onMount } from 'solid-js';
import { A } from "@solidjs/router";
import { fromEvent, take } from 'rxjs';

const About: Component = () => {
  onMount(() => {
    fromEvent(document.getElementById("btn") as HTMLElement, "click").pipe().subscribe(console.log)
  })
  return (
    <div>
      <h1>About Page</h1>
      <A href="/" replace={true}>To Home</A>
      <div>
        这是About页
      </div>
      <button id="btn">click</button>
    </div>
  );
}
export default About;