import { Component } from 'solid-js';
import { A } from "@solidjs/router";

const About: Component = () => {
  return (
    <div>
      <h1>About Page</h1>
      <A href="/" replace={true}>To Home</A>
      <div>
        这是About页
      </div>
    </div>
  );
}
export default About;