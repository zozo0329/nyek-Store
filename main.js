let navList = document.getElementById("menuList");
document.querySelector("i").addEventListener("click", function () {
  if (navList.style.maxHeight === "700px") {
    navList.style.maxHeight = "0px";
  } else {
    navList.style.maxHeight = "700px";
  }
});
