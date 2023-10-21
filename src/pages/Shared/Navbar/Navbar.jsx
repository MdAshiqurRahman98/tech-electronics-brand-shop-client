import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    return (
        <div>
            <nav className="flex justify-between pb-1 mb-3 items-center">
                <figure><img className="w-[300px] h-[150px] -ml-11 mt-2" src="https://i.ibb.co/0tFR2j1/Logo.png" alt="Logo" /></figure>
                <ul className="flex gap-5 flex-1 items-center justify-start lg:ml-52">
                    <li className="text-lg">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>

                    <li className="text-lg">
                        <NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "text-[#FF444A] text-lg font-bold"
                                        : ""
                            }
                        >
                            My Cart
                        </NavLink>
                    </li>
                </ul>
                <ul>
                    <li className="text-lg">
                        {
                            user ? <div className="flex items-center">
                                <span className="mr-5">{user.displayName}</span>
                                <span className="mr-5"><img className="rounded-full w-9 h-9" src={user.photoURL} alt="" /></span>
                                <NavLink
                                    onClick={handleLogOut}
                                >
                                    <button className="btn btn-sm normal-case text-white bg-[#FF444A] hover:bg-[#FF444A]">Logout</button>
                                </NavLink>
                            </div>
                                : <NavLink
                                    to="/login"
                                >
                                    <button className="btn btn-sm normal-case text-white bg-[#FF444A] hover:bg-[#FF444A]">Login</button>
                                </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;