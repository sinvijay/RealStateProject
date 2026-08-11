import { Link } from 'react-router-dom'
import './Auth.css'

export default function Signup() {
  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="signup-title">
        <div className="auth-brand">SYNERGY</div>
        <p className="auth-eyebrow">GET STARTED</p>
        <h1 id="signup-title">Create your account</h1>
        <p className="auth-subtitle">Join Synergy and find the place that feels like home.</p>

        <form className="auth-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="signup-name">Full name</label>
          <input id="signup-name" type="text" placeholder="Your full name" autoComplete="name" required />
          <label htmlFor="signup-email">Email address</label>
          <input id="signup-email" type="email" placeholder="you@example.com" autoComplete="email" required />
          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Create a password" autoComplete="new-password" minLength="8" required />
          <label className="remember-me"><input type="checkbox" required /><span>I agree to the terms and privacy policy.</span></label>
          <button className="auth-submit" type="submit">Create account</button>
        </form>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </section>
    </main>
  )
}
