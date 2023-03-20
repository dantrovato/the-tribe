import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Header from "./components/Header";

function App() {
  const backgroundStyle = {
    backgroundImage: "url(./tribe_logo.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <>
      <BrowserRouter>
        <div style={backgroundStyle}>
          <Header />

          {/* Use the Switch component to only render one Route */}
          <Switch>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
