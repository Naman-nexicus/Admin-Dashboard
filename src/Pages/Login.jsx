
import { useState } from "react";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">N</div>

        <h1>Welcome </h1>
        <p className="login-subtitle">
          Please login to your account
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          onLogin();
        }}>
          <label>Email Address</label>
          <div className="input-box">
            <Mail size={18} />
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <Lock size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          © 2026 Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
