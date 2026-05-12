'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/members');
      router.refresh();
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      alert('Check your email for the confirmation link!');
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <div className="login-box">
        <div className="login-logo">
          <div className="icon">🕉️</div>
          <h2>Members' Login</h2>
          <p>Access exclusive spiritual teachings and resources</p>
        </div>
        
        {error && <div className="login-error" style={{display: 'block'}}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="login-email">Email Address</label>
            <input 
              id="login-email" 
              type="email" 
              placeholder="your@email.com" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input 
              id="login-password" 
              type="password" 
              placeholder="Your password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '.5rem'}} disabled={loading}>
            {loading ? 'Signing in…' : 'Sign In 🙏'}
          </button>
          <button type="button" className="btn btn-outline" style={{width: '100%', marginTop: '.5rem'}} onClick={handleSignUp} disabled={loading}>
            Sign Up
          </button>
        </form>
        
        <p style={{textAlign: 'center', marginTop: '1.5rem', fontSize: '.82rem', color: 'var(--muted)'}}>
          Not a member yet? Sign up above or contact the ashram to register.
        </p>
      </div>
    </div>
  );
}
