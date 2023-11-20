import * as OpenCC from "opencc-js";

setInterval(() => {
  hideAndAddMenuItems();
  convertSubtitle();
  changeReminderText();
  changeMenuItemText();
});

const hideAndAddMenuItems = () => {
  const menu = document.querySelector(".ytp-panel-menu");

  if (!menu) return;

  const items = menu.querySelectorAll(".ytp-menuitem");
  items.forEach((item) => {
    const span = item.querySelector(".ytp-menuitem-label")!;

    if (span.textContent === "中文（繁體）") {
      (item as HTMLElement).style.display = "none";
    }
    if (span.textContent === "中文（簡體）") {
      span.textContent = "[修復] 中文（繁體）";
    }
  });
};

const converter = OpenCC.Converter({ from: "cn", to: "twp" });
let lastSubtitle = new Array<string>();

const convertSubtitle = () => {
  const segments = document.querySelectorAll(".ytp-caption-segment");

  if (!segments) return;

  segments.forEach((segment, index) => {
    if (!segment.textContent) return;

    if (segment.textContent === lastSubtitle[index]) return;

    segment.textContent = replaceReminder(segment.textContent);

    const converted = converter(segment.textContent);
    segment.textContent = converted;
    lastSubtitle[index] = converted;
  });
};

const changeReminderText = () => {
  const contents = document.querySelectorAll(".ytp-menuitem-content");
  if (!contents) return;

  contents.forEach((content) => {
    content.textContent = replaceReminder(content.textContent);
  });
};

const changeMenuItemText = () => {
  const menu = document.querySelector(".ytp-panel-menu");

  if (!menu) return;

  const items = menu.querySelectorAll(".ytp-menuitem")!;
  items.forEach((item) => {
    const span = item.querySelector(".ytp-menuitem-label")!;

    span.textContent = replaceReminder(span.textContent);
  });
};

const reminder = ">> 中文（簡體）";

const replaceReminder = <T>(str: T) => {
  if (typeof str !== "string") return str;

  if (str.includes(reminder)) {
    return str.replace(reminder, ">> [修復] 中文（繁體）");
  }
  return str;
};

console.log("[fix-yt-traditional-chinese-subtitle]: Loaded successfully");
