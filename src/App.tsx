import { A, Outlet, Route, Router, Routes } from '@solidjs/router';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <Router>
      <div class="bg-teal-200">
        <ul class="flex gap-2 bg-red-400">
          <li>
            <A href="/">Home</A>
          </li>
          <li>
            <A href="/dashboard">Dashboard</A>
          </li>
        </ul>
        <Routes>
          <Route
            path=""
            component={() => {
              return (
                <>
                  Default:
                  <Outlet />
                </>
              );
            }}
          >
            <Route
              path=""
              component={() => {
                return <>Home</>;
              }}
            ></Route>
          </Route>
          <Route
            path=""
            component={() => {
              return (
                <>
                  Auth:
                  <Outlet />
                </>
              );
            }}
          >
            <Route
              path="dashboard"
              component={() => {
                return <>Dashboard</>;
              }}
            ></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
