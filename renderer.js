/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
// const IIFE = (() => {
//   console.log("IIFE");
// })();
// IIFE();

versions = window.versions;
darkMode = window.darkMode;

const bindPing = () => {
  document.getElementById("button-ping").addEventListener("click", async () => {
    const res = await versions.ping();

    console.log("handleOnClickBtn res ----- " + res);
  });
};

const bindDarkMode = () => {
  document
    .getElementById("toggle-dark-mode")
    .addEventListener("click", async () => {
      const isDarkMode = await darkMode.toggle();
      document.getElementById("theme-source").innerHTML = isDarkMode
        ? "Dark"
        : "Light";
    });

  document
    .getElementById("reset-to-system")
    .addEventListener("click", async () => {
      await darkMode.system();
      document.getElementById("theme-source").innerHTML = "System";
    });
};

const IIFE = (() => {
  const information = document.getElementById("info");
  information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`;

  bindPing();
  bindDarkMode();
})();
