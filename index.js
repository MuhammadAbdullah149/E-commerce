function saveTodos() {
        //timmer////////////////////////////////////////////
        const todos = { days, hours, minutes, seconds };
        sessionStorage.setItem("todos", JSON.stringify(todos))
}

function loadTodos() {
        //timer/////////////////////////////////////////////////
        const saved = JSON.parse(sessionStorage.getItem("todos"));
        if (saved) {
                days = saved.days;
                hours = saved.hours;
                minutes = saved.minutes;
                seconds = saved.seconds;
        }
}

/////////////////////////timer/////////////////////////////


let timer;
let days = 0,hours = 0,minutes = 0,seconds = 0;
days = parseInt(document.getElementById("day").innerHTML);
hours = parseInt(document.getElementById("hour").innerHTML);
minutes = parseInt(document.getElementById("min").innerHTML);
seconds = parseInt(document.getElementById("sec").innerHTML);

function updateDisplay() {
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("day").innerHTML = days;
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
        document.getElementById("hour2").innerHTML = hours;
        document.getElementById("day2").innerHTML = days;
        document.getElementById("min2").innerHTML = minutes;
        document.getElementById("sec2").innerHTML = seconds;
}

timer = setInterval(() => {

        seconds--;
        saveTodos()

        if (seconds < 0) {
                seconds = 59;
                minutes--;
                saveTodos()
        }

        if (minutes < 0) {
                minutes = 59;
                hours--;
                saveTodos()
        }

        if (hours < 0) {
                hours = 23;
                days--;
                saveTodos()
        }

        updateDisplay()

}, 1000);

loadTodos();

//////////////////////////////////////////////////////////////


let likebtn = document.querySelectorAll(".wish")
likebtn = Array.from(likebtn)
let i;

likebtn.forEach((like) => {
        like.addEventListener("click", (e) => {
                let ad = document.querySelectorAll(".ads")
                ad = Array.from(ad)
                i = likebtn.indexOf(e.target);
                const wishes = document.createElement("div")
                wishes.innerHTML =
                        `<li class="wishes">${ad[i].innerHTML}
                                <button class="addcart fa-solid fa-cart-shopping"></button>
                                <button class="delete fa-solid fa-trash" ></button>
                         </li>`
                
                let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

                const productHTML = wishes.innerHTML;
                if (!wishlist.includes(productHTML)) {
                        wishlist.push(productHTML);
                        localStorage.setItem("wishlist", JSON.stringify(wishlist));
                }         
                window.location.href = "wishlist.html"
                // localStorage.clear()
        });
});
//////////////////////////////////////////////////////////////

let viewbtn = document.querySelectorAll(".view")
viewbtn = Array.from(viewbtn)

viewbtn.forEach((vu)=>{
        vu.addEventListener("click" ,(e)=>{
                let ad = document.querySelectorAll(".ads")
                ad = Array.from(ad)
                i = viewbtn.indexOf(e.target);
                detproduct = products[i]
                localStorage.setItem("detproduct" , JSON.stringify(detproduct))
                window.location.href = 'details.html';
        })
})

//////////////////////////////////////////////////////////
let all = document.querySelectorAll(".all")
all.forEach((a) => {
        a.addEventListener("click" , 
                ()=>{window.location.href = 'viewall.html'}
        )
})

//////////////////////////////////////////////////////////
