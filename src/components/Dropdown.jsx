import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropDown }) => {
    return (
      <ul className={`${dropDown ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-secondary z-10 transition-opacity duration-500 absolute text-white text-base font-semibold w-max`}>
        {submenus.map((submenu, index) => (
          <li key={index} className="ps-3 pe-16 py-3 hover:bg-primary transition-colors duration-300 cursor-pointer">
            <Link className="mb-4" to={submenu.url}>{submenu.title}</Link>
          </li>
        ))}
      </ul>
    );  
  };
  
  export default Dropdown;