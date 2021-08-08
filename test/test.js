count = 0;
var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");
var queNo   = document.getElementById("questionNo");
var que     = document.getElementById("question");
function begin() {
// alert(1);
	count++;
	var button = document.getElementById("button");
	button.parentNode.removeChild(button);
	button1.classList.remove('opa0');
	button2.classList.remove('opa0');
	queNo.innerHTML = "Question no "+ count;
	que.innerHTML = "Are you currently experiencing any of these issues?<br><ul><li>Severe difficulty breathing</li><li>Severe chest pain</li><li>Feeling confused or unsure of where you are</li><li>Losing consciousness</li></ul>"

	button1.addEventListener('click',function(){
		window.location.href = "getHelp1.html";
	});
	button2.addEventListener('click',function(){
		window.location.href = "Q2.html"
	})

};
function Q2Y(){
	window.location.href = "Q3.html";
}

function Q2N() {
	var button1 = document.getElementById("btn1");
	var button2 = document.getElementById("btn2");
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "This test is meant for people 18 years or older."
	button2.classList.add("opa0");
	button1.innerHTML = "Go back"
	button1.addEventListener('click',function(){
	window.location.href = "../index.html";
	});
}

function Q3Y(){
//	window.location.href = "getHelp2.html";
	window.location.href = "Q3-a1.html"
}

function Q3N() {
	var button1 = document.getElementById("btn1");
	var button2 = document.getElementById("btn2");
	window.location.href = "Q4.html";
}

function Q3a1Y(){
	window.location.href = "q3-b.html";	
}

function Q3b1Y(){
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Contact your facility <br> Self isolate <br> Contact your provider if symptoms worsen"; 
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
	window.location.href = "../index.html";
	});
}

function Q3b1N(){
	window.location.href = "Q3-c1.html";
}

function Q3c1Y(){
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Testing recommended <br> Contact your occupational health <br> Contact your provider if symptoms worsen <br> Self-Isolation recommended";
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
		window.location.href = "../index.html"
	});
}

function Q3c1N(){

}

function Q4Y(){
	window.location.href = "Q5-a.html";
}

function Q4N() {
	var button1 = document.getElementById("btn1");
	var button2 = document.getElementById("btn2");
	window.location.href = "Q5-b.html";
}

function Q5aY(){
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Testing is not recommended at this time. <br> You may be asked to wear a mask <br> Practice Social Distancing <br> Monitor Symptoms / Check temperature twice daily(14 days)<br>Contact your doctor if symptoms worsen";
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
		window.location.href = "../index.html";	
	});
}

function Q5aN() {
	window.location.href = "Q6-a.html";
}

function Q5bY(){
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Testing is not recommended at this time. <br> Home Quarantine <br> Monitor Symptoms / Check temperature twice daily(14 days)<br>Contact your doctor if symptoms worsen";
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
		window.location.href = "../index.html";	
	});
}

function Q6aN() {
	window.location.href = "Q7-a.html";
}

function Q7aY(){
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Testing is not recommended at this time. <br>Practice Social Distancing <br>If you are more than 65 years old or have any chronic conditions, obtain 30 day supply of medications from your doctor";
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
		window.location.href = "../index.html";	
	});
}

function Q7aN() {
	queNo.innerHTML = "Self-Assessment Test";
	que.innerHTML = "Testing is not recommended at this time. <br>Practice Social Distancing<br> Wear a mask whenever going out";
	button2.classList.add("opa0");
	button1.innerHTML = "Go back";
	button1.addEventListener('click',function(){
		window.location.href = "../index.html";	
	});
}



function nearbyHospitals(){
	alert("line 57, 2/test.js")
}



// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAEsZCLqikfAQJtPz9wJQ56jzBtn_Z40nk&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
};

function getHelp(){
	window.location.href = "map.html";
}

// Append the 'script' element to 'head'
document.head.appendChild(script);
      