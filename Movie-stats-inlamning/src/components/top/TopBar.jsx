import "./topBar.css";
const TopBar = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="topBar-container">
            <div className="title-topbar">
                <h2>
                    <span className="moviz-span">Moviz</span>Statz
                </h2>
            </div>
            <div>
                <ul className="top-bar-link">
                    <li onClick={() => scrollToSection("LanguageChart")}>Film-Språk</li>
                    <li onClick={() => scrollToSection("PrimiereChart")}>Antal premiere</li>
                    <li onClick={() => scrollToSection("FilmLengthChart")}>Filmernas längd</li>
                    <li onClick={() => scrollToSection("GenreChart")}>Genre</li>
                </ul>
            </div>
        </div>
    );
};
export default TopBar;
