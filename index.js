const dialog = document.querySelector(".dialog");
const closeButton = document.querySelector(".close-button");
const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

function showDialog(modalText = "Are you sure you want to continue?") {
  return new Promise((resolve, reject) => {
    const dialogText = document.getElementById("dialog-text");
    dialogText.innerHTML = `<h3>${
      modalText || "Are you sure you want to continue?"
    }</h3>`;
    dialog.classList.add("show-dialog");
    yesButton.addEventListener("click", () => {
      dialog.classList.remove("show-dialog");
      resolve("yes");
    });
    noButton.addEventListener("click", () => {
      dialog.classList.remove("show-dialog");
      resolve("no");
    });
  });
}

const init = () => {
  closeButton.addEventListener("click", () => {
    dialog.classList.remove("show-dialog");
  });
};

const insertButtons = (buttonCount = 1) => {
  for (let i = 1; i <= buttonCount; i++) {
    const mainSection = document.getElementById("main-section");
    const button = document.createElement("button");
    button.className = "button";
    button.appendChild(
      document.createTextNode(buttonCount === 1 ? "Click Me" : "Click Me_" + i)
    );
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    const resultSection = document.createElement("div");
    resultSection.className = "result-section";
    button.onclick = async () => {
      let res = await showDialog("Hello Dialog_" + i);
      if (res === "yes") {
        resultSection.innerHTML = `You just clicked "Yes".`;
      } else {
        resultSection.innerHTML = `You just clicked "No".`;
      }
    };
    buttonContainer.append(button, resultSection);

    mainSection.append(buttonContainer);
  }
};

init();
insertButtons(5);
