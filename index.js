const popUp = document.querySelector(".pop-up");
let animationTime = getComputedStyle(document.documentElement).getPropertyValue("--animation-time");
const time = animationTime.split("s");

setTimeout(() => {
	popUp.classList.remove("show-pop-up");
	document.body.style.background = "none";
}, `${Number(time[0])}000`);
popUp.classList.add("show-pop-up");
document.body.style.background = "rgba(0, 0, 0, 0.4)";
