menu1 = document.querySelector("#menu-1");
menu2 = document.querySelector("#menu-2");
menu3 = document.querySelector("#menu-3");
menu4 = document.querySelector("#menu-4");

page1 = document.querySelector("#page-1");
page2 = document.querySelector("#page-2");
page3 = document.querySelector("#page-3");
page4 = document.querySelector("#page-4");

menu1.addEventListener("click", function () {
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  page4.style.display = "none";
});

menu2.addEventListener("click", function () {
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
    page4.style.display = "none";
  });

menu3.addEventListener("click", function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
  });

menu4.addEventListener("click", function () {
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "block";
  });
