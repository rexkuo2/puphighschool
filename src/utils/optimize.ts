export const optimizeImage = (image: string, quality: number): string => {
    // Logic to optimize the image based on the provided quality
    return `${image}?quality=${quality}`;
};

export const lazyLoad = (selector: string): void => {
    const images = document.querySelectorAll(selector);
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    images.forEach(image => {
        observer.observe(image);
    });
};