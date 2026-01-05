function showToast() {
  const toast = document.getElementById("toast");
  toast.style.visibility = "visible";

  setTimeout(() => {
    toast.style.visibility = "hidden";
  }, 3000);
}
