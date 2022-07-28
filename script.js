const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// 點選下一步
next.addEventListener('click' , ()=>{
    currentActive ++;
    if(currentActive > circles.length){
        currentActive = circles.length ;
    }
    updateActivities();
    
})

// 點選上一步
prev.addEventListener('click' , ()=>{
    currentActive --;
    if(currentActive < 1){
        currentActive = 1 ;
    }
    updateActivities();
    
})

// 共用程式
function updateActivities (){
    circles.forEach((circle , index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })
    // progress bar
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    //上一步/ 下一步 按鈕
    if(currentActive === circles.length){
        next.disabled = true;
    } else if (currentActive === 1){
        prev.disabled = true;
    } else {
        next.disabled = false;
        prev.disabled = false;
    }

}

