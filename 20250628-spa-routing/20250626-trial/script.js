const routes = {
    '/index.html': { content: 'This is the home page' },
    '/about': { content: 'This is the about page' },
    '/contact': { content: 'This is the contact page' },
}

document.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const link = e.target.getAttribute('href');
        handleRoute(link);
        window.history.pushState({}, '', link);
    }
})

function handleRoute(link) {
    const route = routes[link];
    console.log(route);
    if (route) {
        document.getElementById('content').innerHTML = route.content;
    } else {
        document.getElementById('content').innerHTML = 'Page not found';
    }
}

window.addEventListener('popstate', () => {
    handleRoute(location.pathname);
})

handleRoute(location.pathname);
