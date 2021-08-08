var count = 0;
var riskFactor = 0;
var flag = false;
var que = document.getElementById("question");
var queNo = document.getElementById("questionNo");
var button1 = document.getElementById("buttonQue1Y");
var button2= document.getElementById("buttonQue1N");
var button = document.getElementById("button");


	function begin(){
		count++;
		if(count === 1){
			
			queNo.innerHTML = "Question no " + count;
			que.innerHTML = "Are you currently experiencing any of these issues?<br><ul><li>Severe difficulty breathing</li><li>Severe chest pain</li><li>Feeling confused or unsure of where you are</li><li>Losing consciousness</li></ul>";
			DeOpa();
			button.classList.add('opa0');
		}	
		
	}

function que1Y(){
			addOpa0();
			que.innerHTML = "You need Immediate Medical attention";
			queNo.innerHTML = "Self Assessment Test";	
			button.classList.remove('opa0');
			button.innerHTML = "Check hospitals nearby";
}

function que1N(){
	count++;
			//console.log("1-N");
			addOpa0();
			button1 = document.getElementById("buttonQue2Y");
			button2 = document.getElementById("buttonQue2N");
			DeOpa();
			que.innerHTML = "Are you 18 years or older?";
			queNo.innerHTML = "Question no " + count;	
}

function que2Y(){
			count++;
			que.innerHTML = "Are you experiencing any of these symptoms? <br> <ul> <li>Fever</li><li>Difficulty breathing</li><li>Cough</li><li>Sore throat</li><li>Body aches</li><li>Vomiting</li><li>Diarrhea</li> </ul>";
			queNo.innerHTML = "Question no " + count;	

			addOpa0();
			button1 = document.getElementById("buttonQue3Y");
			button2 = document.getElementById("buttonQue3N");
			DeOpa();
			button.innerHTML = "Check hospitals nearby";	

}

function que2N(){
	que.innerHTML = "This test is meant for people 18 years or older."
	queNo.innerHTML = "Self Assessment test";
	addOpa0();
	button.classList.remove('opa0');
	button.href = "/index.html";
	button.innerHTML = "Home Page"
	button.addEventListener('click',function(){
		window.location.href = "index.html";
	});

}

function que3Y(){
	count++;

	 addOpa0();
	 queNo.innerHTML = "Self Assessment Test ";
	 que.innerHTML = "It's time to visit your doctor and get a real diagnosis";
	 button.classList.remove('opa0');
	 button.innerHTML = "Check hospitals nearby"; 
	// button1 = document.getElementById("buttonQue4Y");
	// button2 = document.getElementById("buttonQue4N");
	// DeOpa();

}

function que3N(){
	count++;
	addOpa0();
	queNo.innerHTML = "Question no " + count;
	que.innerHTML = "Do you currently or plan to work or volunteer at a healthcare facility?"
	button1 = document.getElementById("buttonQue4Y");
	button2 = document.getElementById("buttonQue4N");
	DeOpa();

}

function que4Y(){
	count++;
	addOpa0();
	button1.innerHTML = "Hello";
	button1 = document.getElementById("buttonQue5Y");
	button2 = document.getElementById("buttonQue5N");
	DeOpa();
}

function que4N(){

}


















function addOpa0(){
	button1.parentNode.removeChild(button1);
	button2.parentNode.removeChild(button2);
}
function DeOpa(){
	button1.classList.remove('opa0');
	button2.classList.remove('opa0');
}