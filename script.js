const title = document.querySelector(".title");
const logobox = document.querySelector('.logobox');
const logoboxP = document.querySelector("#logop");
const btnlogo = document.querySelector('#logoimg');
const changebtn = document.getElementById("change");
const mainbtn = document.querySelectorAll('.mainbtn');
const statbox = document.querySelectorAll('.statbox');
const rem = document.querySelectorAll('.rem');
const statTit = document.querySelectorAll('.stat-title');
const on = document.querySelectorAll('.on');
const circ = document.querySelectorAll('.circle');
const allBtn = document.querySelector('#all');
const activBtn = document.querySelector('#active');
const inactBtn = document.querySelector('#inactive');

let currentFilter = "all";

   
changebtn.addEventListener('click', () => {
    changebtn.classList.toggle('active');
    if (changebtn.classList.contains('active')) {
       
        document.body.style.backgroundColor = "#ebf4fb";
        title.style.color = "#0a1643";
        logobox.style.backgroundColor = '#fcfdff';
        logobox.style.border = 'none';
        logoboxP.style.color = "#0a1643";
        btnlogo.src = 'icon-moon.svg';
        changebtn.style.backgroundColor = "#eeeeee";
        mainbtn.forEach(b => { b.style.backgroundColor = "#fbfdff"; b.style.color = "#0a1643"; b.style.border = "none"; });
        statbox.forEach(s => { s.style.backgroundColor = "#fcfdff"; s.style.border = "#eeeeee"; });
        rem.forEach(r => { r.style.color = '#1f2533'; r.style.backgroundColor = '#fff'; r.style.border = "2px solid #eeeeee"; });
        statTit.forEach(t => t.style.color = "#08163a");
        on.forEach(o => o.style.backgroundColor = "#c6c6c8");
        updateCollors()
    } else {
   
        document.body.style.backgroundColor = "#050a1e";
        title.style.color = "#ffffff";
        logobox.style.backgroundColor = '#222337';
        logobox.style.border = '1px solid black';
        logoboxP.style.color = "#ffffff";
        btnlogo.src = 'icon-sun.svg';
        changebtn.style.backgroundColor = "#2f354c";
        mainbtn.forEach(b => { b.style.backgroundColor = "#2f3449"; b.style.color = "#fff"; b.style.border = "1px solid #3d4252"; });
        statbox.forEach(s => { s.style.backgroundColor = "#1f2535"; s.style.border = "2px solid #3c4151"; });
        rem.forEach(r => { r.style.color = '#f5faff'; r.style.backgroundColor = '#1f2533'; r.style.border = "0.01px solid #fff"; });
        statTit.forEach(t => t.style.color = "#f5faff");
        on.forEach(o => o.style.backgroundColor = "#525866");
        updateCollors()
    }
    
});

 on.forEach(el => {
    el.addEventListener('click', () => {
     const circle = el.querySelector('.circle');
        const parentRem = el.closest('.statbox').querySelector('.rem');  
        const isActive = el.classList.toggle('active'); 
        if(isActive){
            circle.style.marginRight = '-0.3rem';
            el.style.justifyContent = "flex-end";
            el.style.backgroundColor =  '#c52924';
            parentRem.classList.add('active');
            parentRem.style.border = "0.01px solid red"
             
        }else{
             circle.style.marginLeft = '-0.3rem';
            el.style.justifyContent = "flex-start";
            el.style.backgroundColor =  '#525866';
            parentRem.classList.remove('active');
            parentRem.style.border = "0.2px solid #ffffff"
            if(btnlogo.src.includes("icon-moon.svg")){
                 el.style.backgroundColor =  '#c6c6c8';
                 parentRem.style.border = "0.2px solid #dad7d7";
            }
        }
         statbox.forEach(box => updateBox(box));
    })
})
 
 
 rem.forEach(r => {
    r.addEventListener('click', () =>{
            r.classList.add('active');
        const onbtn = r.closest(".statbox").querySelector(".on");
        const circle = onbtn.querySelector(".circle");
        if(btnlogo.src.includes("icon-moon.svg")){
            r.style.border = "0.2px solid #dad7d7";
            onbtn.style.backgroundColor =  '#c6c6c8';
        }else{
            r.style.border = "0.2px solid #c6c6c8";
            onbtn.style.backgroundColor =  '#525866';
        }
         circle.style.marginLeft = '-0.3rem';
         onbtn.style.justifyContent = "flex-start";
         onbtn.classList.remove("active");
          statbox.forEach(box => updateBox(box));
    })
      
 })

 
mainbtn.forEach(el => {
    el.addEventListener('click', () => {
    mainbtn.forEach(m => m.classList.remove('active'));
    el.classList.add('active');
       updateButtonColors()
    });
   
});


 
 function updateButtonColors(){
     mainbtn.forEach(m => {
        if(m.classList.contains('active')){
        m.style.color = "#fff";
        m.style.backgroundColor = "#c7231a";
    }else{
        m.style.backgroundColor = "#2f3449";
        if(btnlogo.src.includes("icon-moon.svg")){
            m.style.backgroundColor = "#fff";
            m.style.color = "#2f3449"
        }
    }
     });
 }


 function updateBox(box){
    const btn = box.querySelector('.on');
    const isActive = btn.classList.contains('active');

    if(currentFilter === "active"){
 
     box.style.display = isActive ? "block": "none";
    }else if( currentFilter === "inactive"){
       
         box.style.display = !isActive ? "block": "none";
    }else{
         
         box.style.display = "block";
    }
 }
 
 allBtn.addEventListener('click', () => {
    currentFilter = "all";
   
    statbox.forEach(box => updateBox(box));
 });

 activBtn.addEventListener('click', () => {
    currentFilter = "active";
 
    statbox.forEach(box => updateBox(box));
 })

 inactBtn.addEventListener('click', () => {
    currentFilter = "inactive";
 
    statbox.forEach(box => updateBox(box));
 })
 

 function updateCollors(){
     mainbtn.forEach(b => {
         if(b.classList.contains('active')){
  b.style.backgroundColor = "#c7231a";
  b.style.color = "#fff";
}
     })
 rem.forEach(r => {
    if(r.classList.contains('active')){
  r.style.border = "0.01px solid red";
}
 })

on.forEach(o => {
    if(o.classList.contains('active')){
  o.style.backgroundColor = '#c52924';
}
})

 }
