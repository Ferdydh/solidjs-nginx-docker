import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div
      class='min-h-screen w-full flex justify-center items-center m-0'
      bg="blue-100">
      <A
        class=""
        href="/about"
      >
        Check out my portfolio
      </A>
    </div>
  );
};

export default App;
