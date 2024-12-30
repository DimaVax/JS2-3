const images = document.querySelectorAll('[data-src]');
const observerCallback = (enteries) => {
    enteries.forEach(entery => {  
        if(entery.isIntersecting){
            const elem = entery.target;
            elem.src = elem.dataset.src;
        }
    });  
};
const observer = new IntersectionObserver(observerCallback);
images.forEach(img => {
    observer.observe(img);
});
