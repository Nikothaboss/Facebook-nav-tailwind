import "./index.css"
import DropdownMenu from "./components/navbar/dropdownMenu/DropdownMenu";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/navItem/NavItem";



function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon="😊" />
        <NavItem icon="😊" />
        <NavItem icon="😊" />

        <NavItem icon="😎">
          <DropdownMenu></DropdownMenu>
        </NavItem>

      </Navbar>
    </div>
  );
}

export default App;
