import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
        <header className="header">
            <div className="logo-container">
                My logo
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/car">
                            Cars
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}