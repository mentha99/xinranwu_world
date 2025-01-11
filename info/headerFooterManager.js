class projectHeader extends HTMLElement {
    connectedCallback() {
        // Get the project title from the custom attribute
        const projectTitle = this.getAttribute('title') || 'Default Project';
        const nextProject = this.getAttribute('next');
        this.innerHTML = `
        <header class="header container">
            <nav>
                <ul class="header__menu">
                    <li>
                        <a class="header__link" href="../index.html#lab">←back to lab</a>
                    </li>
                    <li>
                        <a id="link-lab-list" class="header__link">view all projects</a>
                    </li>
                    <li>
                    <a class="header__link" href="${nextProject}">next project→</a>
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
                    <a id="link-about" class="header__link" href="">about</a>
                </li>
            </ul>
        </header>
        `;
    }
}

customElements.define('project-header', projectHeader);

