class projectsList extends HTMLElement {
    connectedCallback() {
        // Get the project title from the custom attribute
        // const projectTitle = this.getAttribute('title') || 'Default Project';
        // const nextProject = this.getAttribute('next');
        this.innerHTML = `
            <header>
                <div id="list-window" class="U_FixWindow">
                    <div class="list__grid">
                        <div id="works-text" class="works__container U_bgWhiteGradient">
                            <ul>
                                <li id="SitDown" class="index__work WIP">
                                    <a href="./project/SitDown.html">Sit Down, My Stranger (WIP)</a>
                                    <p>, VR Experience and Performance, United States & China, 2024.9-</p>
                                </li>
                                <li id="IntoBirth" class="index__work">
                                    <a href="../project/IntoBirth.html">Into Birth</a>
                                    <p>, Immersive Website, Beijing, China, United States, 2024.12</p>
                                </li>
                                <li id="PHS" class="index__work WIP">
                                    <a href="../project/PHS.html">PHS (WIP)</a>
                                    <p>, Music Video VFX, Sichuan, China, 2024.9-</p>
                                </li>
                                <li id="FalseWindows" class="index__work">
                                    <a href="../project/FalseWindows.html">False Windows</a>
                                    <p>, Animated Short Film, Shanghai, China, 2024.8</p>
                                </li>
                                <li id="CoupleOfSingles" class="index__work">
                                    <a href="../project/CoupleOfSingles.html">Couple of Singles</a>
                                    <p>, VR Experience, Shaanxi & Beijing, China, 2024.7-</p>
                                </li>
                                <li id="CoveredBridge" class="index__work">
                                    <a href="../project/CoveredBridge.html">Covered Bridge on Aqueduct</a>
                                    <p>, Architectural Renovation, Fengwu Village, Anhui, China, 2023</p>
                                </li>
                                <li id="TrilogyOfTrees" class="index__work">
                                    <a href="../project/TheVine.html">Trilogy of Trees</a>
                                    <p>, Photography and Installation, Beijing, China & Europe, 2022-2023</p>
                                </li>
                                <li id="NovelOfTriviality" class="index__work">
                                    <a href="../project/NovelOfTriviality.html">Novel of Triviality</a>
                                    <p>, Photography, Shanghai, China, 2021</p>
                                </li>
                                <li id="TheRiver" class="index__work">
                                    <a href="../project/TheRiver.html">The River</a>
                                    <p>, Architectural Proposal, Shanghai, China, 2021</p>
                                </li>
                                <li id="FoldingBeijing" class="index__work">
                                    <a href="../project/FoldingBeijing.html">Folding Beijing</a>
                                    <p>, Popular Science Book, Beijing, China, 2020-2021</p>
                                </li>
                                <li id="FloodedTeaHouse" class="index__work">
                                    <a href="../project/FloodedTeaHouse.html">Flooded Tea House</a>
                                    <p>, Architectural Proposal, Shandong, China, 2020</p>
                                </li>
                            </ul>
                        </div>
                        <div class="thoughts__container">
                            <div id="thought-text1" class="thoughts__text U_bgWhiteGradient">
                                <p class="">
                                    I create research-based <span id="word_1">art</span> and <span id="word_2">design</span>
                                    projects, driven by an obsession with
                                    <span id="word_3">individual</span> and <span id="word_4">collective</span> memory which
                                    <span id="word_6">shaped</span> and <span id="word_7">shaping</span> during the <span
                                        id="word_5">modernization</span> process in
                                    <span id="word_8">contemporary China</span> and its <span id="word_9">connections to the
                                        world</span>.
                                </p>
                                <p class="indent">
                                    At a <span id="word_10">macro</span> scale, I am fascinated by how collective memory anchors
                                    itself in the shifting
                                    <span id="word_11">urban spaces</span> and <span id="word_12">rural landscapes</span>.
                                </p>
                                <p class="indent">
                                    At a <span id="word_13">micro</span> scale, I’m interested in how individual memory is <span
                                        id="word_14">formed</span>,
                                    <span id="word_15">transmitted</span>, and <span id="word_16">stored</span> through
                                    <span id="word_17">sensory process</span> and <span id="word_18">neural mechanisms</span>.
                                </p>
                            </div>
                            <div id="thought-text2" class="thoughts__text U_bgWhiteGradient">
                                <p class="">
                                    I experiment with technical pipelines bridging the physical and digital worlds to faithfully
                                    <span id="word_19">record</span>, immersively <span id="word_20">represent</span>, and
                                    critically <span id="word_21">recall</span> memories with
                                    <span id="word_22">individuals</span> and a <span id="word_23">broader audience</span>.
                                </p>
                                <p class="indent">
                                    In the physical world, I collect moments with 3D scanning technologies from <span
                                        id="word_24">photogrammetry</span>,
                                    <span id="word_25">LiDAR</span>, to <span id="word_26">Gaussian Splatting</span>, alongside
                                    2D recording methods such as
                                    <span id="word_27">illustration</span>, <span id="word_28">photography</span>, and <span
                                        id="word_29">documentary</span>.
                                </p>
                                <p class="indent">
                                    In the digital world, I blend realistic collections with surreal <span
                                        id="word_30">animation</span>
                                    and <span id="word_31">game</span> environments
                                    to craft narratives through interactive media, including <span id="word_32">websites</span>,
                                    <span id="word_33">installations</span>, and
                                    <span id="word_34">VR</span>/<span id="word_35">AR</span> experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about-window" class="U_FixWindow">
                    <div id="about-text" class="about_container U_bgWhiteGradient">
                        <div class="about_text">
                            <p>
                                Xinran Wu is a researcher and artist with a deep interest in the hybridization of the physical
                                present and fictional world-building. As a former architect, her research focuses on the intangible
                                shaping from urbanization process on collective memory, while also examining the tangible influence
                                of neural mechanisms on individual memory. Obsessed with experimental pipelines that combine
                                cutting-edge 3D scanning technolog with CGI software, game engines and generative AI, she creates
                                immersive and interactive experiences to record, represent, and critically reflect on memory.
                            </p>
                        </div>
                        <div class="about_text">
                            <p>
                                Xinran holds a Bachelor of Architecture, graduating as the Outstanding Graduate of Shanghai from
                                Tongji University, and participated in an exchange program at the University of Innsbruck in
                                Austria. Her architectural practice spans Tokyo, Beijing, and rural China, contributing to projects
                                that have received the 2024 Dezeen Award and the UNESCO Global Awards for World Heritage. Currently,
                                she is pursuing a Master of Science in Fiction and Entertainment at SCI-Arc, beginning her journey
                                as a new media artist in Los Angeles.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('projects-list', projectsList);

