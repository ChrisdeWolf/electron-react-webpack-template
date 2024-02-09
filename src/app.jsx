import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./renderer/components/AppContainer.jsx";

const root = createRoot(document.body);
root.render(<AppContainer />);
