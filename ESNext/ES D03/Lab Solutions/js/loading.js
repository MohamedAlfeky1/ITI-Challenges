const loadingIcon = document.createElement("img");
loadingIcon.src = "../assets/images/loading.gif";
loadingIcon.alt = "loading...";
loadingIcon.classList.add("loadingIcon");
document.body.appendChild(loadingIcon);

export function loading(loadingState) {
  if (loadingState) {
    document.body.appendChild(loadingIcon);
  } else {
    loadingIcon.remove();
  }
}
loading(true);
