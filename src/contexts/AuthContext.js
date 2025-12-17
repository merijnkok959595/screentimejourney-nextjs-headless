import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      // Skip loading state for immediate app access
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
      setIsAuthenticated(true);
      console.log('✅ User is authenticated:', user.username);
    } catch (error) {
      console.log('❌ User is not authenticated');
      setUser(null);
      setIsAuthenticated(false);
    }
    // No loading state changes
  };

  const signUp = async (email, password, phone, fullName) => {
    try {
      const result = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          phone_number: phone,
          name: fullName
        }
      });
      
      console.log('✅ Sign up successful:', result);
      return { success: true, user: result.user };
    } catch (error) {
      console.error('❌ Sign up error:', error);
      return { success: false, error: error.message };
    }
  };

  const confirmSignUp = async (email, code) => {
    try {
      await Auth.confirmSignUp(email, code);
      console.log('✅ Confirmation successful');
      return { success: true };
    } catch (error) {
      console.error('❌ Confirmation error:', error);
      return { success: false, error: error.message };
    }
  };

  const signIn = async (email, password) => {
    try {
      const user = await Auth.signIn(email, password);
      setUser(user);
      setIsAuthenticated(true);
      console.log('✅ Sign in successful:', user.username);
      return { success: true, user };
    } catch (error) {
      console.error('❌ Sign in error:', error);
      return { success: false, error: error.message };
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
      console.log('✅ Sign out successful');
      return { success: true };
    } catch (error) {
      console.error('❌ Sign out error:', error);
      return { success: false, error: error.message };
    }
  };

  const forgotPassword = async (email) => {
    try {
      await Auth.forgotPassword(email);
      console.log('✅ Password reset email sent');
      return { success: true };
    } catch (error) {
      console.error('❌ Forgot password error:', error);
      return { success: false, error: error.message };
    }
  };

  const forgotPasswordSubmit = async (email, code, newPassword) => {
    try {
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      console.log('✅ Password reset successful');
      return { success: true };
    } catch (error) {
      console.error('❌ Password reset error:', error);
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    signUp,
    confirmSignUp,
    signIn,
    signOut,
    forgotPassword,
    forgotPasswordSubmit,
    checkAuthState
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

