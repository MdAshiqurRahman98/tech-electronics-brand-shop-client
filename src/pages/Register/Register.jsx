import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('Location in the register page', location);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // Reset error and success
        setRegisterError('');
        setSuccess('');

        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('Please write a valid email');
            return;
        }

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!()\-_{}[\]:;"'<>,.?/\\|]).*$/.test(password)) {
            setRegisterError('Your password should have at least one upper case and one special characters');
            return;
        }

        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully');

                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => console.log('profile updated'))
                    .catch(error => {
                        console.error(error);
                    })

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })

    }

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <h2 className="text-3xl my-10 text-center">Please Register</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Name</span>
                    </label>
                    <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-medium">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                </div>
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
                    <button className="btn text-white bg-[#FF444A] hover:bg-[#FF444A]">Register</button>
                </div>
            </form>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
            <p className="text-center mt-4">Already have an account? <Link className="text-[#FF444A] font-bold" to="/login">Login</Link></p>
            <p className="text-center mt-5 mb-7">--------- OR ---------</p>
            <p className="text-center mb-11"><button onClick={handleGoogleSignUp} className="btn btn-wide btn-outline rounded-3xl normal-case text-base hover:bg-white hover:text-black"><FcGoogle className="w-5 h-5 mt-1"></FcGoogle>Register with Google</button></p>
        </div>
    );
};

export default Register;