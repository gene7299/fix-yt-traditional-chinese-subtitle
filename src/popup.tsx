import React from "react";
import { createRoot } from "react-dom/client";

const Popup = () => {
  return (
    <main>
      <img src="128.png" width={64} height={64} alt="icon" />
      <span className="title">
        Thanks for using Youtube 繁體自動翻譯修正 :)
      </span>
      <div className="btns">
        <a target="_blank" href="https://www.buymeacoffee.com/yuanchuang">
          請開發者喝杯咖啡
        </a>

        <a
          target="_blank"
          href="https://github.com/Frank0945/fix-yt-traditional-chinese-subtitle"
        >
          Github
        </a>
      </div>
      <div className="footer">
        <span>
          聯絡開發者：
          <br />
          yuanchuang940@gmail.com
        </span>
        <span className="version">v1.0.3</span>
      </div>
    </main>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
