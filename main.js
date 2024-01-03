let keyframes1 = [
    {opacity: 0},
    {opacity: 1, transform: "translate(-250px, 0)"}
  ];
let options1 = {
        duration: 600,
        fill: "forwards"
  };
var list1 =document.getElementById('menu');
list1.addEventListener('click',function(event){
    document.getElementById('list').style.display='block';
    document.getElementById('list').animate(keyframes1, options1);
    setTimeout(()=>{},600);
})
  //list exit button
  let keyframes2 = [
    {opacity: 1},
    {opacity: 0, transform: "translate(0px, 0)"}
  ];
let options2 = {
        duration: 600,
        fill: "forwards"
  };
var list2 =document.getElementById('exit');
list2.addEventListener('click',function(event){
    document.getElementById('list').animate(keyframes2, options2);
    setTimeout(() => document.getElementById('list').style.display='none', 600);
})
function publication(){
  window.open('publicaiton.html')
}