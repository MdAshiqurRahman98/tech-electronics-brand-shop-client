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
            <nav className="flex justify-between py-1 mb-3 items-center">
                <figure><img className="w-[300px] h-[100px] -ml-14 mt-2" src="https://i.ibb.co/sqGzrrM/logo.png" alt="" /><span>Brand Shop</span></figure>
                <ul className="flex gap-5 flex-1 items-center justify-end">
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

                    <li className="text-lg">
                        {
                            !user && <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "text-[#FF444A] text-lg font-bold"
                                            : ""
                                }
                            >
                                Login
                            </NavLink>
                        }
                    </li>

                    <li className="text-lg">
                        {
                            !user && <NavLink
                                to="/register"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                            ? "text-[#FF444A] text-lg font-bold"
                                            : ""
                                }
                            >
                                Register
                            </NavLink>
                        }
                    </li>
                </ul>
                <ul>
                    <li className="text-lg ml-60">
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
                                    <button className="btn btn-sm normal-case text-white bg-[#FF444A] hover:bg-[#FF444A]">Login Now</button>
                                </NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;