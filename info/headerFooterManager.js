class projectHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <header class="header container">
            <nav>
                <ul class="header__menu">
                    <li>
                        <a class="header__link" href="../index.html#lab">←back to lab</a>
                    </li>
                    <li>
                        <a class="header__link" href="../index.html#index">index</a>
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
                    <a class="header__link" href="#top">↑False Windows</a>
                </li>
                <li>
                    <a class="header__link" href="#next">next project→</a>
                </li>
            </ul>
        </header>
        `
    }
}

customElements.define('project-header', projectHeader)