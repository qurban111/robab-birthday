// const roses = document.getElementById("roses");
// const hearts = document.getElementById("hearts");

// for(let i = 0; i < 20; i++){

//     const r = document.createElement("div");

//     r.className = "rose";

//     r.innerHTML = "🌹";

//     r.style.left = Math.random() * 100 + "%";

//     r.style.animationDuration = 6 + Math.random() * 8 + "s";

//     r.style.animationDelay = Math.random() * 5 + "s";

//     roses.appendChild(r);

// }



for(let i = 0; i < 15; i++){

    const h = document.createElement("div");

    h.className = "heart";

    h.innerHTML = "❤";

    h.style.left = Math.random() * 100 + "%";

    h.style.animationDuration = 5 + Math.random() * 5 + "s";

    h.style.animationDelay = Math.random() * 4 + "s";

    hearts.appendChild(h);

}




const startBtn = document.getElementById("startBtn");

const welcome = document.querySelector(".welcome");

const letterPage = document.querySelector(".letter-page");



startBtn.onclick = function(){

    welcome.style.opacity = "0";

    welcome.style.transform = "scale(.8)";


    setTimeout(()=>{

        welcome.style.display = "none";

        letterPage.classList.add("show");

    },1000);

};






const nextBtn = document.getElementById("nextBtn");

const cakePage = document.querySelector(".cake-page");



nextBtn.onclick = function(){

    letterPage.classList.remove("show");


    setTimeout(()=>{

        cakePage.classList.add("show");

    },1000);

};








const candle = document.querySelector(".candle");

const fire = document.querySelector(".fire");

const videoBtn = document.getElementById("videoBtn");

const warningBox = document.getElementById("warningBox");

const closeWarning = document.getElementById("closeWarning");


let candleOff = false;



if(candle){

    candle.onclick = function(){

        if(!candleOff){

            fire.style.animation = "none";

            fire.style.opacity = "0";

            candleOff = true;

        }

    };

}






videoBtn.onclick = function(){

    if(!candleOff){

        warningBox.classList.add("show");

        return;

    }


    cakePage.classList.remove("show");


    setTimeout(()=>{

        document.querySelector(".gift-page").classList.add("show");

    },1000);

};





if(closeWarning){

    closeWarning.onclick = function(){

        warningBox.classList.remove("show");

    };

}








const openGiftBtn = document.getElementById("openGiftBtn");

const giftPage = document.querySelector(".gift-page");

const videoPage = document.querySelector(".video-page");

const video = document.getElementById("giftVideo");





openGiftBtn.onclick = function(){


    giftPage.classList.remove("show");


    setTimeout(()=>{


        videoPage.classList.add("show");


        if(video){


            video.currentTime = 0;

            video.muted = false;

            video.volume = 1;


            video.play().catch(()=>{


                video.muted = true;

                video.play();


            });


        }


    },1000);


};