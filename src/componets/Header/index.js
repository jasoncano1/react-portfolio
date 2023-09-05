import './header.css';

const Header = props =>
    <header>
        <nav>
            <h1>Jason Cano</h1>

            <div>
                <button onClick={() => props.setpage('about')}>About Me</button>
                <button onClick={() => props.setpage('portfolio')}>Portfolio</button>
                <button onClick={() => props.setpage('contact')}>Contact</button>
                <button onClick={() => props.setpage('resume')}>Resume</button>

            </div>
        </nav>
    </header>

export default Header;