const versionFile = "?version=1.0.0";

function loadResource(type, url, callback) {
    let element;
    
    if (type === 'css') {
        element = document.createElement('link');
        element.rel = 'stylesheet';
        element.href = url;
    } else if (type === 'js') {
        element = document.createElement('script');
        element.src = url;
        element.async = false; // загружаем скрипты синхронно
    }

    element.onload = callback;
    element.onerror = () => console.error(`Ошибка загрузки: ${url}`);
    document.head.appendChild(element);
}

function loadResources(resources, onComplete) {
    let loaded = 0;
    
    resources.forEach(resource => {
        loadResource(resource.type, resource.url, () => {
            loaded++;
            if (loaded === resources.length) {
                onComplete();
            }
        });
    });
}

const resourcesToLoad = [
    { type: 'css', url: '/source/style/bootstrap.min.css' },
    { type: 'css', url: '/source/style/bootstrap-icons.min.css' },
    { type: 'css', url: '/source/style/animation.css' + versionFile },
    { type: 'js', url: '/source/script/bootstrap.min.js' },
    { type: 'js', url: '/source/script/error.js' + versionFile },
    { type: 'js', url: '/source/script/main.js' + versionFile }
];

window.addEventListener("load", () => {
    loadResources(resourcesToLoad, () => {
        setTimeout(() => {
            document.getElementById("preloaderContent").style.display = "none";
        }, 500);
    });
});
