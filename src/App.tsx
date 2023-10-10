import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class='h-screen w-screen flex justify-center items-center bg-black text-white'>
      <div>
        <div class='text-xl'>Hey, my name is Ferdy 👋</div>
        <div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
          <a href='https://github.com/Ferdydh' target='_blank' class="i-grommet-icons-github w-10" />
          <a href='https://www.linkedin.com/in/ferdydh/' target='_blank' class="i-grommet-icons-linkedin w-10" />
          <a href='mailto:ferdydh.hadiwijaya@tum.de' target='_blank' class="i-grommet-icons-mail w-10" />
        </div>
      </div>
    </div>
  );
};

export default App;
