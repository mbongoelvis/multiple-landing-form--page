const Name = document.querySelector(".name");
const Email = document.querySelector(".email");
const Numbers = document.querySelector(".number");
const back = document.querySelector(".back");
const back2 = document.querySelector(".back2");
const back3 = document.querySelector(".back3");
const circle = document.querySelector(".circle");
const year = document.querySelector("year");
const Next1 = document.querySelector(".next1");
const Next2 = document.querySelector(".next2");
const Next3 = document.querySelector(".next3");
const Confirm = document.querySelector(".confirm");
const next = document.querySelector(".next-final");


//Buttons
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");


//regular expressions for matching the form inputs
let email_exp = /@gmail.com/i
let number_exp = /[a-zA-Z]/


//forms 
let first_form = document.querySelector(".sec1")
let second_form = document.querySelector(".sec2")
let thirf_form = document.querySelector(".sec3")
let fourth_form = document.querySelector(".sec4")


//Circle selection event listener
circle.addEventListener("click", function(e) {
    circle.classList.toggle("move")
    year.classList.toggle("add")
})

//form validation
Next1.addEventListener("click",function(e) {
    Name.addEventListener("change", function(e) {})
    Email.addEventListener("change", function (e) { })
    Numbers.addEventListener("change", function (e) { })

    if (Name.value.length == "" || Name.value.length < 5) {
        Name.style.border = "1px solid red";
        e.preventDefault();
        }
    else {
        Numbers.style.border = "1px solid hsl(231, 11%, 63%)";
        e.preventDefault();
        }
    if (Email.value.length == "" || !email_exp.test(Email.value)) {
        Email.style.border = "1px solid red";
        e.preventDefault();
    }
    else {
        Email.style.border = "1px solid hsl(231, 11%, 63%)";
        e.preventDefault();
    }

    if (Numbers.value.length == "" || number_exp.test(Numbers.value) || Numbers.value.length <= 10) {
        Numbers.style.border = "1px solid red";
        e.preventDefault();
    }
    else {
        Numbers.style.border = "1px solid hsl(231, 11%, 63%)";
        e.preventDefault();
        first_form.style.display = "none";
        second_form.style.display = "flex";
        one.style.backgroundColor = "transparent";
        one.style.color = "white";
        two.style.backgroundColor = "hsl(229, 24%, 87%)";
        two.style.color = "black";
    }
    
});

back.addEventListener("click", function(e) {
    first_form.style.display = "block";
    second_form.style.display = "none";
    one.style.backgroundColor = "hsl(229, 24%, 87%)";
    one.style.color = "black";
    two.style.backgroundColor = "transparent";
    two.style.color = "white";
})
back2.addEventListener("click", function(e) {
    second_form.style.display = "flex"
    thirf_form.style.display = "none"
    two.style.backgroundColor = "hsl(229, 24%, 87%)";
    two.style.color = "black";
    three.style.backgroundColor = "transparent";
    three.style.color = "white";
});
Next2.addEventListener("click", function(e) {
    second_form.style.display = "none"
    thirf_form.style.display = "flex"
    three.style.backgroundColor = "hsl(229, 24%, 87%)";
    three.style.color = "black";
    two.style.backgroundColor = "transparent";
    two.style.color = "white";
});
Next3.addEventListener("click", function(e){
    thirf_form.style.display = "none"
    fourth_form.style.display = "flex"
    four.style.backgroundColor = "hsl(229, 24%, 87%)";
    four.style.color = "black";
    three.style.backgroundColor = "transparent";
    three.style.color = "white"; 
})
back3.addEventListener("click", function(e){
    thirf_form.style.display = "flex"
    fourth_form.style.display = "none"
    four.style.backgroundColor = "transparent";
    four.style.color = "white";
    three.style.backgroundColor = "hsl(229, 24%, 87%)";
    three.style.color = "black";
});
next.addEventListener("click", function(e) {
    fourth_form.style.display = "none";
    Confirm.style.display = "block";
});