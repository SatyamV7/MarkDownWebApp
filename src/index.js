function readJSON(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    document.body.appendChild(script);
}

function loadStyle(url) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = url;
    document.head.appendChild(style);
}

readJSON("renderer.config.json", function (text) {
    const config = JSON.parse(text);
//    const AppIcon = config.AppIcon;
//    const AppTitle = config.AppTitle;
    const url = config.url;
    const OverrideDefaultCSS = config.OverrideDefaultCSS.OverrideDefaultCSS;
    const customJS = config.customJS.customJS;
    const customJSURL = config.customJS.customJSURL;
    const customCSS = config.customCSS.customCSS;
    const customCSSURL = config.customCSS.customCSSURL;
    const CSSURL = config.OverrideDefaultCSS.cssURL;
    const DarkModeOptions = config.DarkModeJS;
    const jQueryOptions = config.jQuery;
    const RocketLoader = config.RocketLoader;
    const PWAOptions = config.PWA;
    const manifestURL = config.PWAConfig.manifestURL;

    fetch(url)
        .then(function (res) {
            return res.text();
        })
        .then(function (data) {
            const parser = new markDownParser.Parser();
            parser.setFlavor('github');
            const html = parser.makeHtml(data);
            document.querySelector('#root').innerHTML = html;
        })
/*
    function createAppIcon() {
        const link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = AppIcon;
        document.head.appendChild(link);
        console.log('App icon set to ' + AppIcon);
    }

    if (AppIcon !== '') {
        createAppIcon();
    }

    function appTitle() {
        document.title = AppTitle;
        console.log('App title set to ' + AppTitle);
    }

    if (AppTitle !== '') {
        appTitle();
    }
*/
    function defaultCSS() {
        loadStyle('src/index.css');
    }

    function overrideDefaultCSS() {
        loadStyle(CSSURL);
    }

    if (OverrideDefaultCSS === true) {
        overrideDefaultCSS();
        console.log('Overriding default CSS with ' + CSSURL);
    } else {
        defaultCSS();
        console.log('Using default CSS');
    }

    function createCustomJS() {
        loadScript(customJSURL, function () { });
        console.log('Custom JS loaded from ' + customJSURL);
    }

    if (customJS === true) {
        if (customJSURL !== '') {
            createCustomJS();
        }
    }

    function createCustomCSS() {
        loadStyle(customCSSURL);
        console.log('Custom CSS loaded from ' + customCSSURL);
    }

    if (OverrideDefaultCSS === false && customCSS === true) {
        if (customCSSURL !== '') {
            createCustomCSS();
        }
    }

    function createDarkMode() {
        loadScript('lib/DarkMode.js', function () {
            darkMode('32px', '1rem', '0.65s', '0', '💡')
        });
        console.log('DarkModeJS loaded');
    }

    if (DarkModeOptions === true) {
        createDarkMode();
    }

    function createJQuery() {
        loadScript('lib/jquery.min.js', function () { });
        console.log('jQuery loaded');
    }

    if (jQueryOptions === true) {
        createJQuery();
    }

    function createRocketLoader() {
        loadScript('lib/rocket-loader.min.js', function () { });
        console.log('Rocket Loader loaded');
    }

    if (RocketLoader === true) {
        createRocketLoader();
    }

    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('service-worker.js').then(function (registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                }, function (err) {
                    console.log('Service Worker registration failed: ', err);
                });
            });
        }
    }

    function attachManifest() {
        const manifestTag = document.createElement('link');
        manifestTag.rel = 'manifest';
        manifestTag.href = manifestURL;
        document.head.appendChild(manifestTag);
    }


    if (PWAOptions === true) {
        registerServiceWorker();
        if (manifestURL !== '') {
            attachManifest();
        }
    }
})