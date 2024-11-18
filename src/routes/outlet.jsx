import Main from "./main";
function Outlet() {
    const outlet = useOutlet()
    return (
    <div>
        <Frame>
            {outlet ?? <Main/>}
        </Frame>
    </div>
    );
  }
  
  export default Outlet;
  