import { Link } from 'react-router-dom'
import './Auth.css'

export default function Login() {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-brand">SYNERGY</div>
        <p className="auth-eyebrow">WELCOME BACK</p>
        <h1 id="login-title">Sign in to your account</h1>
        <p className="auth-subtitle">Manage your property journey in one place.</p>

        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="login-email">Email address</label>
          <input id="login-email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <div className="label-row">
            <label htmlFor="login-password">Password</label>
            <a href="#forgot-password">Forgot password?</a>
          </div>
          <input id="login-password" type="password" placeholder="Enter your password" autoComplete="current-password" required />
          <label className="remember-me"><input type="checkbox" /><span>Remember me</span></label>
          <button className="auth-submit" type="submit">Sign in</button>
        </form>
        <p className="auth-switch">New to Synergy? <Link to="/signup">Create an account</Link></p>
      </section>
    </main>
  )
}
