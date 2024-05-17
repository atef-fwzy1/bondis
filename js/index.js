
// start header
let list = document.querySelector("header div.active");
// let lis = document.getElementById("header div.active");
// lis.innerHTML


list.addEventListener("click",function(e){
   e.currentTarget.classList.toggle("active");
   
   if(!list.classList.contains("active"))
    document.querySelector(".landing .box").classList.add("active");
    else
    document.querySelector(".landing .box").classList.remove("active");
   
    
})

let links = document.querySelectorAll("header ul li a");


links.forEach((ele)=>{

    ele.addEventListener("click",(ele)=>{
        links.forEach((e)=>{
             e.classList.remove("active")
        })
           ele.currentTarget.classList.add("active")
    })

})

document.querySelector("header ul li.login ").addEventListener("click",(ele)=>{
  !ele.currentTarget.classList.toggle("ON")?document.querySelector(".modal-body").classList.toggle("start"):document.querySelector(".modal-body").classList.toggle("start");

})
document.querySelector(".modal-body div[value='close']").addEventListener("click",()=>{
document.querySelector(".modal-body").classList.toggle("start")
})
// end header

//start  our work
let Design =["./imegas/work-08.jpg","./imegas/work-04.jpg","./imegas/work-03.jpg","./imegas/work-07.jpg","./imegas/work-02.jpg"];
let Code = ["./imegas/work-01.jpg","./imegas/work-05.jpg","./imegas/work-08.jpg","./imegas/work-04.jpg","./imegas/work-08.jpg","./imegas/work-04.jpg","./imegas/work-05.jpg"]
let Photo = ["./imegas/work-02.jpg","./imegas/work-04.jpg","./imegas/work-06.jpg","./imegas/work-08.jpg","./imegas/work-04.jpg"]
let App = ["./imegas/work-03.jpg","./imegas/work-07.jpg","./imegas/work-08.jpg","./imegas/work-04.jpg","./imegas/work-02.jpg","./imegas/work-05.jpg","./imegas/work-03.jpg"];
document.querySelectorAll(".work ul.filter li").forEach((ele)=>{
     ele.addEventListener("click",(e)=>{
        document.querySelectorAll(".work ul.filter li").forEach((ele)=>{
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        document.querySelector(".work .container .gallery").innerHTML =""
              if(e.currentTarget.textContent == "Design" )
                addimg(Design)
             if(e.currentTarget.textContent =="Code" )
                addimg(Code) 
            if(e.currentTarget.textContent =="Photo" )
                addimg(Photo)
             if(e.currentTarget.textContent =="App" )
                addimg(App)
                if(e.currentTarget.textContent =="All" ){
                    let all = Design.concat(Code);
                    addimg(all);
                }

             
    })
})
function addimg(type){
        for(let i = 0 ; i < type.length ;i++){
              let img =document.createElement("img");
              img.setAttribute("src",type[i]);
              img.setAttribute("alt","ertror");
              let parntimg = document.createElement("div");
              parntimg.classList.add("photo");
                parntimg.appendChild(img)
                document.querySelector(".work .container .gallery").appendChild(parntimg)
            }

            }
// end our work