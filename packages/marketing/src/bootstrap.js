import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

//mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: [initialPath] });

  //run this not in isolation
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);

  return {
    //this function allows to sent sth from the container
    onParentNavigate({ pathname: nextPathname }) {
      //memory history object
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

//if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    //createBrowserHistory -> use browser history in dev, to make development easier and see url changes
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

//we are running through container and we should export the mount function
export { mount };
