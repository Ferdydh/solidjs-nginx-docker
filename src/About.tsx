import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const About: Component = () => {
  return (
    <div class='h-screen w-screen flex justify-center items-center bg-black text-white'>
      <div>
        <div class='text-xl'>Hey, my name is Ferdy 👋</div>
        <div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
          <A href='https://github.com/Ferdydh' target='_blank' class="i-grommet-icons-github w-10" />
          <A href='https://www.linkedin.com/in/ferdydh/' target='_blank' class="i-grommet-icons-linkedin w-10" />
          <a href='mailto:ferdydh.hadiwijaya@tum.de' target='_blank' class="i-grommet-icons-mail w-10" />

          {/* <div class="i-grommet-icons-linkedin?mask text-red-300" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
