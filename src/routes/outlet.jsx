import Main from "./main";
import Navi from "../components/Navigation";
import Foot from "../components/Footer";
import { useOutlet } from "react-router-dom";
function OutletFill() {
    const outlet = useOutlet()
    return (
    <div>
        <Navi/>
            {outlet ?? <Main/>}
        <Foot/>
    </div>
    );
  }
  
  export default OutletFill;
  