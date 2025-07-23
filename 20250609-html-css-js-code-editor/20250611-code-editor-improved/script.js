const tabLinks = document.querySelectorAll(".tab-link");
const codeEditors = document.querySelectorAll(".code-editor");

tabLinks.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    codeEditors.forEach(editor => editor.classList.remove("active"));
    tabLinks.forEach(tab => tab.classList.remove("active"));

    tab.classList.add("active");
    target.classList.add("active");

    console.log("Switched to tab: ", tab.textContent);
    });
  });

const htmlEditor = document.getElementById("htmlEditor");
const cssEditor = document.getElementById("cssEditor");
const jsEditor = document.getElementById("jsEditor");
const output = document.getElementById("code-output");

function updateOutput() {
  const htmlCode = htmlEditor.value;
  const cssCode = `<style>${cssEditor.value}</style>`;
  const jsCode = `<script>${jsEditor.value}<\/script>`;

  output.srcdoc = htmlCode + cssCode + jsCode;
  console.log("Output updated!");
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);