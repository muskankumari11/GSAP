var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv=document.querySelector("#image");

console.log(main);

main.addEventListener("mousemove", function (sets) {
    gsap.to(cursor,{
        x:sets.x,
        y:sets.y,
        duration:0.6,
        ease:"back.out"
    })
});

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"rgb(92, 82, 82)"
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"rgb(143, 105, 105)"
    })
})
