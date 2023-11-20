import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return (
    <div
      style={{ minWidth: "300px", display: "flex", flexDirection: "column" }}
    >
      Thanks for using Youtube 繁體自動翻譯修正 :)
      <a
        style={{ marginTop: "12px" }}
        target="_blank"
        href="https://github.com/Frank0945/fix-yt-traditional-chinese-subtitle"
      >
        Github
      </a>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
