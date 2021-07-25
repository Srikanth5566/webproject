// (function() {

var preload = document.getElementsByClassName("preload")[0];


//     var loading =0;
//     var id =setInterval(frame, 64);

//     function frame(){
//         if(loading == 100){
//             clearInterval(id);
//             // window.open("chava.html","_self");
//         }else{
//             loading = loading +1;
//             if(loading == 90) {

//                 preload.style.animation = "fadeout is ease";
//             }
//         }
//     }
//     })();


window.onload=()=>{
    setTimeout(()=>{
        preload.remove();
        // window.location = 'file:///D:/srikanth/Srikanthhoudary.Html/chava.html'
    },2000)
}