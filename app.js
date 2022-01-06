const images = document.querySelectorAll(".Gallery-images");
const modal = document.getElementsByClassName("modal")[0];
const modalImg = document.getElementsByClassName("modalImg")[0];
const modalTxt = document.getElementsByClassName("modalTxt")[0];
const close = document.getElementById("close");
const boxImg = document.querySelectorAll(".box-img");
var galleryImg = ["galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg","galleryImg2.jpeg", "galleryImg3.jpeg","galleryImg1.jpeg", "galleryImg2.jpeg"];
var Content = document.getElementsByClassName("container__content")[0];

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
function reveal(){
    var reveals = document.querySelectorAll(".reveal")
for (var i=0; i< reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTOP = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTOP < windowHeight - revealPoint){
        reveals[i].classList.add("active");

    }
    else{
        reveals[i].classList.remove("active");
    }
}
}

function reveal2(){
    var reveals2 = document.querySelectorAll(".reveal2")
for (var i=0; i< reveals2.length; i++){
    var windowHeight = window.innerHeight;
    var revealTOP = reveals2[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTOP < windowHeight - revealPoint){
        reveals2[i].classList.add("active2");

    }
    else{
        reveals2[i].classList.remove("active2");
    }
}
};

console.log(galleryImg[0]);




images.forEach((image) => {
            image.addEventListener("click", () => {
                modalImg.src = image.src;
                modal.classList.add("appear");
                close.addEventListener("click", () =>{
                    modal.classList.remove("appear");
                    
                } );
                for (let i= 0; i<galleryImg.length; i++){
                    boxImg[i].src = galleryImg[i];
                };
            });

            
});


boxImg.forEach((img) => {
    img.addEventListener("click", () => {
        const modalSrc = modalImg.src;
        const boxSrc = img.src
        modalImg.src = boxSrc;
        img.src = modalSrc;
    });
});


document.addEventListener("click", function(event){
    if(event.target.id == "Gallery_images"){
        console.log("chiken dinner");
    };
});





