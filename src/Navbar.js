import { Link } from "react-router-dom"; 

const NavBar=()=>{
    return (
        <>
        <nav>
        <div class="brand">
            <h3>MyBrand</h3>
        </div>
        <div class="navigation">
            <ul class="menu">
                <li>
                <Link to="/">All</Link>
                </li>
                <li>
                <Link to="/yours">Yours</Link>
                </li>
                <li>
                    <Link to="/blocked">Blocked</Link>
                </li>
            </ul>
            <div class="search">
                <div class="search-content">
                    <button class="search-button"><i class="fa fa-search"></i></button>
                    <input type="text" class="search-input" placeholder="Search here..." />
                </div>
            </div>
        </div>
    </nav>

    </>

    );
}
export default NavBar;