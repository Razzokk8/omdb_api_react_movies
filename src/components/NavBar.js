import { Menu } from "./Menu";
import { SearchBar } from "./SearchBar";

export const NavBar = ({onSearchChange}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">MOVIES</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <Menu />
        <SearchBar onSearchChange={onSearchChange}/>
  </div>
</nav>
    ); 
};
