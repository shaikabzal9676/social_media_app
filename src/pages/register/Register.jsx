import './register.css'

function Register() {
 
        return (
            <div className="login">
                <div className="loginWrapper">
                    <div className="loginLeft">
                        <h3 className="loginLogo">AbzzaN</h3>
                        <span className="loginDesc">
                            Connect with friends and the world around you on AbzzaN.
                        </span>
                    </div>
                    <div className="loginRight">
                        <div className="loginBox">
                            <input type="text" placeholder='Email' className="loginInput" />
                            <input type="password" placeholder='Password' className="loginPassword" />
                            <input type="text" placeholder='confirm Password' className="loginPassword" />
                            <input type="text" placeholder='Phone Number' className="loginPassword" />
                            <button className="loginButton">Sign Up</button>
                           
                            <button className="loginRegisterButton">
                                Log into Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Register