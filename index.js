//Inverted Cursor
//by _pumpke :D
//credit me if u used that pls.

//variables
const cursor = document.getElementById("cursor");

//custom cursor chasing mouse
document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});