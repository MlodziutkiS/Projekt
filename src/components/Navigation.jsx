import { Link } from "react-router-dom";
function Navi() {
    return (
      <div className="navigation">
        <Link to="/"><button>Main</button></Link>
        <Link to="/about"><button>About</button></Link>
      </div>
    );
  }
  
  export default Navi;
  