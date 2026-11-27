

import { useState } from "react";
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-logo">
          <span>N</span>
        </div>

        <div className="login-heading">
          <span className="login-tag">ADMIN PORTAL</span>
          <h1>Welcome Back!</h1>
          <p>Please sign in to access your dashboard.</p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <div className="input-box">
              <Mail size={19} />
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <div className="input-box">
              <Lock size={19} />

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
              />

              <button
                type="button"
                className="eye-btn"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="login-security">
          <ShieldCheck size={16} />
          <span>Secure Admin Access</span>
        </div>

        <div className="login-footer">
          © 2026 Admin Dashboard. All rights reserved.
        </div>

      </div>
    </div>
  );
}

export default Login;
