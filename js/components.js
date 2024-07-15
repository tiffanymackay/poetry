document.addEventListener("DOMContentLoaded", function() {
    // Header component
    const headerHTML = `
        <nav class="navbar navbar-expand-lg pt-3">
            <div class="container-fluid">
                <a class="navbar-brand mr-auto logo-name" href="/index.html">Tiffany Mackay</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse navlinks" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="/index.html">home</a>
                        <a class="nav-link" href="/poetry.html">poetry</a>
                        <a class="nav-link" href="/about.html">about</a>
                        <a class="nav-link" href="/blog.html">blog</a>
                        <a class="nav-link" href="https://www.goodreads.com/user/show/151699012-tiffany-mackay" target="_blank">goodreads</a>
                        <a class="nav-link" href="https://www.amazon.com/stores/author/B0D9CPLS4T/about?ingress=0&visitId=d81b554d-c3e4-4b00-ba51-df32a7d00137&ref_=ap_rdr" target="_blank">amazon</a>
                    </div>
                </div>
            </div>
        </nav>
        <hr>
    `;

    // Footer component
    const footerHTML = `
        <div class="footer container">
            <div class="text-center py-3">
                <h3>Let's Connect</h3>
                <p>Subscribe to my newsletter for exclusive content, event updates, and a peek into my creative process.</p>
                <form action="https://tiffanylizmackay.podia.com/email_lists/846618/subscriptions" accept-charset="UTF-8" method="post" class="newsletter-form">
                    <input type="text" name="name" placeholder="Name" class="form-control mb-2" />
                    <input type="email" name="email" required="required" placeholder="Email" class="form-control mb-2" />
                    <input type="submit" value="Join" class="btn btn-primary" />
                </form>
            </div>
            <ul class="list-inline text-center py-3">
                <li class="list-inline-item">
                    <a class="nav-link" href="/poetry.html">poetry</a>
                </li>
                <li class="list-inline-item">
                    <a class="nav-link" href="/about.html">about</a>
                </li>
                <li class="list-inline-item">
                    <a class="nav-link" href="https://www.goodreads.com/user/show/151699012-tiffany-mackay" target="_blank">goodreads</a>
                </li>
                <li class="list-inline-item">
                    <a class="nav-link" href="https://www.amazon.com/stores/author/B0D9CPLS4T/about?ingress=0&visitId=d81b554d-c3e4-4b00-ba51-df32a7d00137&ref_=ap_rdr" target="_blank">amazon</a>
                </li>
            </ul>
            <div class="footer_text text-center">
                <small class="py-5">
                © <span id="currentYear"></span> Tiffany Mackay
                </small>
            </div>
        </div>
    `;

    // Insert header and footer into the document
    document.querySelector("header").innerHTML = headerHTML;
    document.querySelector("footer").innerHTML = footerHTML;

    // Dynamically update the year
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    // Blog posts component
    const blogPosts = [
        {
            title: "Exciting News: Pre-Order <i>Caught in a Hazy Dream</i> Now!",
            date: "July 14, 2024",
            content: "I'm excited to share that my debut poetry collection is available for pre-order!",
            link: "/blog-posts/july-blog-post.html",
            image: "/images/cover_feature.png"
        },
        {
            title: "Another Day, Another Post",
            date: "February 15, 2023",
            content: "Here's another blog post. Stay tuned for more updates!",
            link: "/blog-posts/another-day-another-post.html",
            image: "/images/blog_post_2.jpg"
        }
    ];

    const blogHTML = blogPosts.map(post => `
        <div class="col-12 mb-4">
            <div class="card">
                <img src="${post.image}" class="card-img-top img-small" alt="${post.title}">
                <div class="card-body">
                    <h2 class="card-title"><a href="${post.link}">${post.title}</a></h2>
                    <p class="card-text"><small class="text-muted">${post.date}</small></p>
                    <p class="card-text">${post.content.substring(0, 100)}...</p>
                    <a href="${post.link}" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    `).join('');

    if (document.getElementById("blog-posts")) {
        document.getElementById("blog-posts").innerHTML = blogHTML;
    }
});