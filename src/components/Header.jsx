import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex bg-red-700 text-white justify-around items-center h-14">
                <div>
                    <h1>Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/movies">Filmes</NavLink></li>
                        <li><NavLink to="/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}