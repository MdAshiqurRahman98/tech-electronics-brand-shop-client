import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location in the login page', location);

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // Reset error and success
        setLoginError('');
        setSuccess('');

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('Email doesn`t match');
            return;
        }

        if (password.length < 6) {
            setLoginError('Password doesn`t match');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!()\-_{}[\]:;"'<>,.?/\\|]).*$/.test(password)) {
            setLoginError('Password doesn`t match');
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Logged in Successfully');
                form.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                setSuccess('User Logged in Successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Login</h2>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Email</span>
                    </label>
                    <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text font-medium">Password</span>
                    </label>
                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="Password" className="input input-bordered" />
                    <span className="absolute top-12 right-5 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? 'Hide' : 'Show'
                        }

                    </span>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-[#FF444A] hover:bg-[#FF444A]">Login</button>
                </div>
            </form>
            {
                loginError && <p className="text-red-700">{loginError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
            <p className="text-center mt-4">Don`t have an account? <Link className="text-[#FF444A] font-bold" to="/register">Register</Link></p>
            <p className="text-center mt-5 mb-7">--------- OR ---------</p>
            <p className="text-center mb-11"><button onClick={handleGoogleSignIn} className="btn btn-wide btn-outline rounded-3xl normal-case text-base hover:bg-white hover:text-black"><FcGoogle className="w-5 h-5 mt-1"></FcGoogle>Login with Google</button></p>
        </div>
    );
};

export default Login;