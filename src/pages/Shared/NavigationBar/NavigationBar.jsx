import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User logged out successfully'))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="mt-2 text-lg"><NavLink to="/" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-[#FF444A] text-lg font-bold"
                    : ""
        }>Home</NavLink></li>

        <li className="mt-2 lg:ml-5 text-lg"><NavLink to="/addProduct" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-[#FF444A] text-lg font-bold"
                    : ""
        }>Add Product</NavLink></li>

        <li className="my-2 lg:ml-5 text-lg"><NavLink to="/myCart" className={({ isActive, isPending }) =>
            isPending
                ? "pending"
                : isActive
                    ? "text-[#FF444A] text-lg font-bold"
                    : ""
        }>My Cart</NavLink></li>
    </>

    return (
        <div>
            <nav className="flex justify-between pb-1 mb-3 items-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        {navLinks}
                    </ul>
                </div>
                <figure className="hidden lg:contents"><img className="w-[257px] h-[150px] -ml-11 mt-2" src="https://i.ibb.co/0tFR2j1/Logo.png" alt="Logo" /></figure>
                <ul className="hidden lg:flex gap-5 flex-1 items-center justify-start lg:ml-52">
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

export default NavigationBar;