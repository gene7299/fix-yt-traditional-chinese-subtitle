import * as OpenCC from "opencc-js";

setInterval(() => {
  const menu = document.querySelector(".ytp-panel-menu")!;
  const items = menu.querySelectorAll(".ytp-menuitem")!;
  items.forEach((item) => {
    const span = item.querySelector(".ytp-menuitem-label")!;

    if (span.textContent === "中文（繁體）") {
      (item as HTMLElement).style.display = "none";
    }
    if (span.textContent === "中文（簡體）") {
      span.textContent = "[修復] 中文（繁體）";
    }
  });
});

const converter = OpenCC.Converter({ from: "cn", to: "twp" });
let lastSubtitle = new Array<string>();

setInterval(() => {
  const segments = document.querySelectorAll(".ytp-caption-segment");

  if (!segments) return;

  segments.forEach((segment, index) => {
    if (!segment.textContent) return;

    if (segment.textContent === lastSubtitle[index]) return;

    if (segment.textContent === "英文 (自動產生) >> 中文（簡體）") {
      segment.textContent = "英文 (自動產生) >> [修復] 中文（繁體）";
      return;
    }

    const converted = converter(segment.textContent);
    segment.textContent = converted;
    lastSubtitle[index] = converted;
  });
});

setInterval(() => {
  const contents = document.querySelectorAll(".ytp-menuitem-content");
  if (!contents) return;

  contents.forEach((content) => {
    if (content.textContent === "英文 (自動產生) >> 中文（簡體）") {
      content.textContent = "英文 (自動產生) >> [修復] 中文（繁體）";
    }
  });
});

setInterval(() => {
  const menu = document.querySelector(".ytp-panel-menu")!;
  const items = menu.querySelectorAll(".ytp-menuitem")!;
  items.forEach((item) => {
    const span = item.querySelector(".ytp-menuitem-label")!;

    if (span.textContent === "英文 (自動產生) >> 中文（簡體）") {
      span.textContent = "英文 (自動產生) >> [修復] 中文（繁體）";
    }
  });
});
