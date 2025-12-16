import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin', onAuthSuccess }) => {
  const [mode, setMode] = useState(initialMode); // 'signin', 'signup', 'confirm', 'forgot'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Form data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');

  const { signUp, signIn, confirmSignUp, forgotPassword, forgotPasswordSubmit } = useAuth();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setPhone('');
    setConfirmationCode('');
    setError('');
    setSuccess('');
    setLoading(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (!isPossiblePhoneNumber(phone)) {
      setError('Please enter a valid phone number');
      setLoading(false);
      return;
    }

    const result = await signUp(email, password, phone, fullName);
    
    if (result.success) {
      setMode('confirm');
      setSuccess('Account created! Please check your email for confirmation code.');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await signIn(email, password);
    
    if (result.success) {
      setSuccess('Welcome back!');
      setTimeout(() => {
        handleClose();
        if (onAuthSuccess) onAuthSuccess('signin');
      }, 1000);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleConfirmSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await confirmSignUp(email, confirmationCode);
    
    if (result.success) {
      setSuccess('Email confirmed! You can now sign in.');
      setTimeout(() => {
        handleClose();
        if (onAuthSuccess) onAuthSuccess('signup');
      }, 2000);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await forgotPassword(email);
    
    if (result.success) {
      setMode('resetPassword');
      setSuccess('Password reset code sent to your email!');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    const result = await forgotPasswordSubmit(email, confirmationCode, password);
    
    if (result.success) {
      setSuccess('Password reset successful! You can now sign in.');
      setTimeout(() => {
        setMode('signin');
        setSuccess('');
      }, 2000);
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === 'signin' && 'Sign In'}
              {mode === 'signup' && 'Create Account'}
              {mode === 'confirm' && 'Confirm Email'}
              {mode === 'forgot' && 'Forgot Password'}
              {mode === 'resetPassword' && 'Reset Password'}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ×
            </button>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Sign In Form */}
          {mode === 'signin' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

              <div className="text-center space-y-2">
                <button
                  type="button"
                  onClick={() => setMode('forgot')}
                  className="text-purple-600 hover:text-purple-800 text-sm"
                >
                  Forgot Password?
                </button>
                <p className="text-sm text-gray-600">
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          )}

          {/* Sign Up Form */}
          {mode === 'signup' && (
            <form onSubmit={handleSignUp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <PhoneInput
                  value={phone}
                  onChange={setPhone}
                  defaultCountry="US"
                  className="w-full"
                  style={{
                    '--PhoneInputCountryFlag-height': '1em',
                    '--PhoneInput-color--focus': '#7c3aed'
                  }}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  minLength={8}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="text-purple-600 hover:text-purple-800 font-medium"
                >
                  Sign In
                </button>
              </p>
            </form>
          )}

          {/* Email Confirmation Form */}
          {mode === 'confirm' && (
            <form onSubmit={handleConfirmSignUp} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                We sent a confirmation code to <strong>{email}</strong>. 
                Please enter it below to activate your account.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmation Code
                </label>
                <input
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center text-lg"
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Confirming...' : 'Confirm Email'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Didn't receive the code?{' '}
                <button
                  type="button"
                  onClick={() => signUp(email, password, phone, fullName)}
                  className="text-purple-600 hover:text-purple-800"
                >
                  Resend
                </button>
              </p>
            </form>
          )}

          {/* Forgot Password Form */}
          {mode === 'forgot' && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Enter your email address and we'll send you a password reset code.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Reset Code'}
              </button>

              <p className="text-center text-sm text-gray-600">
                Remember your password?{' '}
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className="text-purple-600 hover:text-purple-800 font-medium"
                >
                  Sign In
                </button>
              </p>
            </form>
          )}

          {/* Reset Password Form */}
          {mode === 'resetPassword' && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <p className="text-sm text-gray-600 mb-4">
                Enter the reset code from your email and choose a new password.
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reset Code
                </label>
                <input
                  type="text"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-center"
                  placeholder="Enter code from email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  minLength={8}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-purple-900 text-white py-2 px-4 rounded-lg hover:bg-purple-800 transition-colors disabled:opacity-50"
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;