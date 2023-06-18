// get both pupils
const pupils = document.querySelectorAll(".eye .pupil");

console.log(pupils)
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
  console.log(pupil)
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    if ((e.pageY - rect.top) < 845) {var y = (e.pageY - rect.top) / 70 + "px";} else {var y = (e.pageY - rect.top) / 100 + "px";}
    var x = (e.pageX - rect.left) / 50 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});
