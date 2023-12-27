var button = document.querySelector("#read-more");
var extraBoxes = document.querySelectorAll(".extra");
var screenWidth =
	window.innerWidth ||
	document.documentElement.clientWidth ||
	document.body.clientWidth;

var cover = document.querySelector(".cover");
var services = document.querySelector(".my-services");
var aboutMe = document.querySelector(".about-me");
var projectsA = document.querySelector(".projects");

var dropdown = document.querySelector(".navbar-nav");
var dropdownBtn = document.querySelector(".navbar-toggler");

function scrollServices() {
	var targetPosition =
		services.getBoundingClientRect().top + window.scrollY - 50;
	// Scroll to the calculated target position
	window.scrollTo({
		top: targetPosition,
		behavior: "smooth",
	});
}

function scrollAboutMe() {
	var targetPosition =
		aboutMe.getBoundingClientRect().top + window.scrollY - 50;

	window.scrollTo({
		top: targetPosition,
		behavior: "smooth",
	});
}

function scrollProjects() {
	var targetPosition =
		projectsA.getBoundingClientRect().top + window.scrollY - 50;
	window.scrollTo({
		top: targetPosition,
		behavior: "smooth",
	});
}

function showMessage() {
	var messageBox = document.getElementById("messageBox");

	messageBox.style.display = "block";
	window.setTimeout(function () {
		messageBox.style.display = "none";
	}, 3000); // The message box will disappear after 3 seconds
}

function setDropdown() {
	dropdown.style.display = "none";
}

document
	.querySelector(".navbar-toggler")
	.addEventListener("click", function () {
		// Simulate a click on the navbar toggle button after 1 second (1000 milliseconds)
		setTimeout(function () {
			// Wait for the collapse animation to complete (adjust as needed)
			setTimeout(function () {
				// Hide the navbar-collapse after 3 seconds (3000 milliseconds)
				document
					.querySelector(".navbar-collapse")
					.classList.remove("show");
			}, 3000);
		}, 1000);
	});

document.addEventListener("DOMContentLoaded", ()=> {
	document.body.classList.add("loaded");
});

/*
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(() => {
		document.body.classList.add("loaded");
		document.body.classList.add.remove(".intro");
	}),
		3000;
});
*/
//     console.log("cover"+ cover.classList);
/*
if (screenWidth <= 1100) {
	cover.classList.remove("flex-row");
     cover.classList.add("flex-column");
     
     document.querySelector('.cover>div:nth-child(2)').classList.add('add-radius');

	services.classList.remove("flex-row");
	services.classList.add("flex-column");

	document.querySelector(".service-box").classList.add("mt-5");
}
*/

// fix bug of no more read more after first time
button.addEventListener("click", () => {
	if (button.classList.contains("read-more")) {
		console.log("qer");

		button.innerText = "Read Less";

		button.classList.add("read-less");
		button.classList.remove("read-more");

		extraBoxes.forEach((element) => {
			element.style.display = "block";
		});
	}
	button.style.display = "none";
	document.querySelector(".projects").classList.add("mb-5");

	/*
	button.addEventListener("click", () => {
		if (button.classList.contains("read-less")) {
			console.log("if");

			button.innerText = "Read More";

			button.classList.remove("read-less");
			button.classList.add("read-more");

			extraBoxes.forEach((element) => {
				element.style.display = "none";
			});
		}
		
     });
*/
	console.log(button.classList);
});

/*
function readMore() {

     button.removeEventListener("click", () => {});
     
     button.classList.add('read-more');
     
     if (button.classList.contains('read-more')) {
          console.log('qer');

          button.innerText = "Read Less";

	     button.classList.add("read-less");
	     button.classList.remove("read-more");

	     extraBoxes.forEach((element) => {
		element.style.display = "block";
          });
     }

     button.addEventListener('click', () => {
          if (button.classList.contains("read-less")) {
               console.log("if");

               button.innerText = "Read More";

               button.classList.remove("read-less");
               button.classList.add("read-more");

               extraBoxes.forEach((element) => {
                    element.style.display = "none";
               });
          }
           button.removeEventListener("click", () => {});

     });
}

/*
function readLess() {
console.log('readless')

	readLessbutton.innerText = "Read More";
	readLessbutton.classList.remove("read-less");
	readLessbutton.classList.add("read-more");

	extraBoxes.forEach((element) => {
		element.style.display = "none";
	});
}

var readMorebutton = document.querySelector(".read-more");
readMorebutton.addEventListener("click", readMore);
readMorebutton.removeEventListener("click", () => {});

/*
var readLessbutton = document.querySelector(".read-less");
if (readLessbutton != null) {
     console.log('if');

	readLessbutton.addEventListener("click", readLess);
	readLessbutton.removeEventListener("click", () => {});
}*/
