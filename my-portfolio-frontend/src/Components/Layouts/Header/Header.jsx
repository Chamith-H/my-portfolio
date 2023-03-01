import "./Header.css"
// import Brand from "../../../Assests/Logo/Brand-Logo.jpg"

function Header() {
    return (
      <div className="Header sticky-top">
            <nav class="navbar navbar-expand-sm navbar-light px-3 py-3">
                <div class="navbar-brand Brand-Logo">
                    {/* <img src=""></img> */}
                </div>

                <button 
                        class="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent">
                            <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/education">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">My Ideas</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
  }
  
export default Header;