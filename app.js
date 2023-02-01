const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(!entry.isIntersecting){
            entry.target.style.opacity =  '0';
            entry.target.style.filter = 'blur(5px)';
            entry.target.style.transform = 'translateX(-100%)';
            entry.target.style.transition = 'all 1s';
        }    
        else {
            entry.target.style.opacity =  '1';
            entry.target.style.filter = 'blur(0)';
            entry.target.style.transform = 'translateX(0%)';
        }
    });
})
const hiddenElements = document.querySelectorAll('h1, p, img');
hiddenElements.forEach((el)=>observer.observe(el));
