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
});