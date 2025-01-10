class projectHeader extends HTMLElement {
    connectedCallback() {
        // Get the project title from the custom attribute
        const projectTitle = this.getAttribute('title') || 'Default Project';

        this.innerHTML = `
        <header class="header container">
            <nav>
                <ul class="header__menu">
                    <li>
                        <a class="header__link" href="../index.html">←back to lab</a>
                    </li>
                    <li>
                        <a class="header__link" href="../info/projects.html">index</a>
                    </li>
                    <li>
                        <a class="header__link" href="../info/about.html">about</a>
                    </li>
                </ul>
            </nav>
        </header>
        <header class="subheader container">
            <ul class="subheader__menu">
                <li>
                    <a class="header__link" href="#top">↑${projectTitle}</a>
                </li>
                <li>
                    <a class="header__link" href="#next">next project→</a>
                </li>
            </ul>
        </header>
        `;
    }
}

customElements.define('project-header', projectHeader);