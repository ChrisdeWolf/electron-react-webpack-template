import React from "react";
import textStyles from "../styles/text.module.css";

export default function AppContainer() {
  return (
    <div>
      <span className={textStyles.title}>
        Your Electron app is up and running!
      </span>
    </div>
  );
}
