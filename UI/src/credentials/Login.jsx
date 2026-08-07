import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here...
    
    // Redirect to the dashboard page
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Sign In</button>
    </form>
  );
}