const route = event => {
    event = event || window.event;
    event.preventDefault();
    const href = event.target.href;
    window.history.pushState({}, '', href);
    handleLocation();
}

const routes = {
    "/": "/index.html",
    "/blog": "/blog.html",
    "/about": "/about.html",
    "/contact": "/contact.html",
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path];
    const html = await fetch(route).then(data => data.text());
    console.log(html);
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const mainContent = doc.querySelector('main');
    document.getElementById('content').innerHTML = mainContent.innerHTML;
}

window.onpopstate = handleLocation;
window.route = route;

handleLocation();