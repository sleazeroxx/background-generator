const css = document.querySelector("h3");
const c1 = document.querySelector(".color1");
const c2 = document.querySelector(".color2");
const body = document.querySelector("body");

const rand = document.getElementById("rand");

body.style.background = "linear-gradient(" + "to right," + c1.value + "," + c2.value + ")"
/*css.innerHTML = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")"*/
css.textContent = body.style.background + ";" ;

const colorChange = () => {
	body.style.background = "linear-gradient(" + "to right," + c1.value + "," + c2.value + ")";
	/*css.innerHTML = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")"; this worked*/
	css.textContent = body.style.background + ";" ;
};


/*Instead of adding listeners here it's called in HTML using "oninput="function()"*/
c1.addEventListener('input', colorChange);
c2.addEventListener('input', colorChange);

const random = () => {
	c1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	c2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	body.style.background = "linear-gradient(" + "to right," + c1.value + "," + c2.value + ")";
}

rand.addEventListener("click", random);