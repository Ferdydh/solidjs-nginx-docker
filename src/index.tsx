import 'uno.css';
import { render } from 'solid-js/web';
import { Route, Router, Routes } from "@solidjs/router";
import { lazy } from 'solid-js';

const App = lazy(() => import("./App"));
const About = lazy(() => import("./About"));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router>
    <Routes>
      <Route path="/" component={App} /> {/* 👈 Define the home page route */}
      <Route path="/about" component={About} /> {/* 👈 Define the home page route */}
    </Routes>
  </Router>
),
  root!
);
