export function showConfirmModal(message = "Are you sure?") {
  return new Promise((resolve) => {
    // Overlay
    const overlay = document.createElement("div");
    overlay.classList.add("confirm-overlay");

    // Modal box
    const modal = document.createElement("div");
    modal.classList.add("confirm-modal");

    // Message
    const msg = document.createElement("h2");
    msg.textContent = message;
    msg.classList.add("confirm-message");

    // Buttons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("confirm-buttons");

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes";
    yesBtn.classList.add("confirm-yes");

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("confirm-cancel");

    buttonsDiv.append(yesBtn, cancelBtn);
    modal.append(msg, buttonsDiv);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Events
    yesBtn.addEventListener("click", () => {
      overlay.remove();
      resolve(true);
    });

    cancelBtn.addEventListener("click", () => {
      overlay.remove();
      resolve(false);
    });
  });
}
