import { FaApple } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import { IoCheckmark } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="signup-container">
            {/* Background Effects */}
            <div className="bg-layer">
                <div className="beam"></div>
                <div className="glow-teal"></div>
                <div className="glow-red"></div>
                <div className="glow-warm"></div>
                <div className="vignette"></div>
            </div>

            {/* LEFT SECTION */}
            <div className="left-section">


                <div className="left-content">
  <h1>
    Expert level Cybersecurity in <span className="highlight-one">hours</span> not weeks.
  </h1>

  <h4 className="included-title">What’s included</h4>

  <div className="features">

    <div className="feature-item">
      <IoCheckmark className="check-icon" />
      <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
    </div>

    <div className="feature-item">
      <IoCheckmark className="check-icon" />
      <p>Deliver high-quality, validated findings in hours, not weeks.</p>
    </div>

    <div className="feature-item">
      <IoCheckmark className="check-icon" />
      <p>Generate professional, enterprise-grade security reports automatically.</p>
    </div>

  </div>

  <div className="rating">
    <div className="trustpilot">
      <IoStarSharp className="star-icon" />
      <span>Trustpilot</span>
    </div>

    <div className="rating-score">
      Rated 4.5/5.0 <span>(100k+ reviews)</span>
    </div>
  </div>
</div>
            </div>

            {/* RIGHT SECTION */}
            <div className="right-section">
                <div className="signup-card">
                    <h2>Sign up</h2>
                    <p className="login-text">
                        Already have an account? <Link to="#">Log in</Link>
                    </p>

                    <input type="text" placeholder="First name*" />
                    <input type="text" placeholder="Last name*" />
                    <input type="email" placeholder="Email address*" />
                    <div className="input-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password (8+ characters)*"
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <LuEye size={18} /> : <LuEyeClosed size={18} />}
                        </span>
                    </div>

                    <div className="checkbox">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            I agree to Aps's{" "}
                            <Link to="#">Terms & Conditions</Link> and acknowledge the{" "}
                            <Link to="#">Privacy Policy</Link>
                        </label>
                    </div>



                    <Link className="primary-btn" to="/dashboard">Create account</Link>



                    <div className="social-buttons">

                        <Link to="#" className="social apple">
                            <FaApple size={22} />
                        </Link>

                        <Link to="#" className="social google">
                            <svg width="20" height="20" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.64 2.36 30.21 0 24 0 14.64 0 6.55 5.48 2.56 13.44l8.05 6.26C12.56 13.16 17.84 9.5 24 9.5z" />
                                <path fill="#4A90E2" d="M46.1 24.5c0-1.64-.15-3.21-.42-4.73H24v9h12.4c-.54 2.9-2.18 5.36-4.65 7.02l7.23 5.62C43.98 37.36 46.1 31.4 46.1 24.5z" />
                                <path fill="#FBBC05" d="M10.61 28.7c-.54-1.6-.84-3.3-.84-5.2s.3-3.6.84-5.2l-8.05-6.26C.92 16.5 0 20.14 0 24s.92 7.5 2.56 10.96l8.05-6.26z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.14 15.9-5.8l-7.23-5.62c-2 1.34-4.56 2.12-8.67 2.12-6.16 0-11.44-3.66-13.39-8.9l-8.05 6.26C6.55 42.52 14.64 48 24 48z" />
                            </svg>
                        </Link>

                        <Link to="#" className="social meta">
                            <SiMeta size={22} />
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Signup;