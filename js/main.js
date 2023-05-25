

let circularProgress = document.querySelector('.circular-progress'),
    progressValue = document.querySelector('.progress-value'),
    circularProgressTwo = document.querySelector('.two'),
    progressValueTwo = document.querySelector('.two1'),
    circularProgressThree = document.querySelector('.three-1'),
    progressValueThree = document.querySelector('.three-2'),
    circularProgressFour = document.querySelector('.four-1'),
    progressValueFour = document.querySelector('.four-2'),
    circularProgressFive = document.querySelector('.five-1'),
    progressValueFive = document.querySelector('.five-2'),
    circularProgressSix = document.querySelector('.six-1'),
    progressValueSix = document.querySelector('.six-2'),
    circularProgressSeven = document.querySelector('.seven-1'),
    progressValueSeven = document.querySelector('.seven-2'),
    circularProgressEight = document.querySelector('.eight-1'),
    progressValueEight = document.querySelector('.eight-2');

const footerYear = document.querySelector('.year');



const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()
// 1 
let progressStartValue = 0.
    progressEndValue = 90,
    speed = 50;

let progress = setInterval(() => {
    progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#5baeb4 ${progressStartValue * 3.6}deg, #23272d 0deg)`

    if (progressStartValue == progressEndValue) {
        clearInterval(progress)
    }
}, speed);
// 2 
let progressStartValueTwo = 0.
    progressEndValueTwo = 90,
    speed = 50;

let progressTwo = setInterval(() => {
    progressStartValueTwo++;

progressValueTwo.textContent = `${progressStartValueTwo}%`
circularProgressTwo.style.background = `conic-gradient(#5baeb4 ${progressStartValueTwo * 3.6}deg, #23272d 0deg)`

    if (progressStartValueTwo == progressEndValueTwo) {
        clearInterval(progressTwo)
    }
}, speed);
// 3 
let progressStartValueThree = 0.
    progressEndValueThree = 75,
    speed = 50;

let progressThree = setInterval(() => {
    progressStartValueThree++;

progressValueThree.textContent = `${progressStartValueThree}%`
circularProgressThree.style.background = `conic-gradient(#5baeb4 ${progressStartValueThree * 3.6}deg, #23272d 0deg)`

    if (progressStartValueThree == progressEndValueThree) {
        clearInterval(progressThree)
    }
}, speed);
// 4 
let progressStartValueFour = 0.
    progressEndValueFour = 50,
    speed = 50;

let progressFour = setInterval(() => {
    progressStartValueFour++;

progressValueFour.textContent = `${progressStartValueFour}%`
circularProgressFour.style.background = `conic-gradient(#5baeb4 ${progressStartValueFour * 3.6}deg, #23272d 0deg)`

    if (progressStartValueFour == progressEndValueFour) {
        clearInterval(progressFour)
    }
}, speed);
// 5 
let progressStartValueFive = 0.
    progressEndValueFive = 70,
    speed = 50;

let progressFive = setInterval(() => {
    progressStartValueFive++;

progressValueFive.textContent = `${progressStartValueFive}%`
circularProgressFive.style.background = `conic-gradient(#5baeb4 ${progressStartValueFive * 3.6}deg, #23272d 0deg)`

    if (progressStartValueFive == progressEndValueFive) {
        clearInterval(progressFive)
    }
}, speed);
// 6 
let progressStartValueSix = 0.
    progressEndValueSix = 65,
    speed = 50;

let progressSix = setInterval(() => {
    progressStartValueSix++;

progressValueSix.textContent = `${progressStartValueSix}%`
circularProgressSix.style.background = `conic-gradient(#5baeb4 ${progressStartValueSix * 3.6}deg, #23272d 0deg)`

    if (progressStartValueSix == progressEndValueSix) {
        clearInterval(progressSix)
    }
}, speed);
// 7 
let progressStartValueSeven = 0.
    progressEndValueSeven = 80,
    speed = 50;

let progressSeven = setInterval(() => {
    progressStartValueSeven++;

progressValueSeven.textContent = `${progressStartValueSeven}%`
circularProgressSeven.style.background = `conic-gradient(#5baeb4 ${progressStartValueSeven * 3.6}deg, #23272d 0deg)`

    if (progressStartValueSeven == progressEndValueSeven) {
        clearInterval(progressSeven)
    }
}, speed);
// 8 
let progressStartValueEight = 0.
    progressEndValueEight = 80,
    speed = 50;

let progressEight = setInterval(() => {
    progressStartValueEight++;

progressValueEight.textContent = `${progressStartValueEight}%`
circularProgressEight.style.background = `conic-gradient(#5baeb4 ${progressStartValueEight * 3.6}deg, #23272d 0deg)`

    if (progressStartValueEight == progressEndValueEight) {
        clearInterval(progressEight)
    }
}, speed);


var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}



var typed = new Typed('.multiple-text', {
    strings: ["Fronted Developer", "UX/UI Designer"],
    typeSpeed: 200,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

navbar = document.querySelector('.header').querySelectorAll('a');
navbar.forEach(element => {
    element.addEventListener('click', function(){
        navbar.forEach(nav=>nav.classList.remove('active'))
        this.classList.add('active');
    })
});

// contact 
function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };
    const serviceID = 'service_6uwaey4';
    const templateID = 'template_wd3hfui';
    
    emailjs
    .send(serviceID, templateID, params)
    .then(
        (res) =>{
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            console.log(res);
            alert('Your message sent successfully');
        }
    )
    .catch((err) => console.log(err));
}
// /contact 