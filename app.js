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
const hiddenElements = document.querySelectorAll('h1, .content, #mymug, input, textarea, button, a#download-link');
hiddenElements.forEach((el)=>observer.observe(el));

let duration = 2500;
const morphing = KUTE.fromTo(
    '#blobby1',
    { path: '#blobby1' },
    { path: '#blobby2' },
    { repeat: 1000, duration: 2500, yoyo: true }
);
morphing.start();