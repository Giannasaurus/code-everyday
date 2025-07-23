const routes = {
    '': 'index.html',
    '#home': 'templates/home.html',
    '#blog': 'templates/blog.html',
    '#about': 'templates/about.html',
    '#contact': 'templates/contact.html'
};

const navLinks = document.querySelectorAll('a[href]');

// (1) updates the hash only
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        // console.log(link); // <a href="#about">About</a>
        window.location.hash = link.getAttribute('href'); // gets the href value and appends it to the URL
    });
});

// (3) swaps content for every nav link click
async function handleRoute() {
    const location = window.location.hash;
    const route = routes[location];
    const content = document.getElementById('content');
    if (!route) {
        content.innerHTML = '<p>404 not found</p>';
        return;
    }
    const txt = await fetch(route).then(res => res.text());
    const doc = new DOMParser().parseFromString(txt, 'text/html');
    console.log(doc); // whole ass dom document
    content.innerHTML = doc.querySelector('main').innerHTML;
}

// (2) this runs before handleRoute()
// listens for url hash change when nav link is clicked
window.addEventListener('hashchange', handleRoute);
// run on page load (displays nothing)
handleRoute();