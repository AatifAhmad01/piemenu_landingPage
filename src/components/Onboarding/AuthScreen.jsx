import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import TextInput from '../Input/TextInput';

const AuthScreen = ({ onNext, onPrevious }) => {
    const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (authMode === 'signup' && formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onNext({
                user: {
                    email: formData.email,
                    authMode: authMode
                }
            });
        }, 1000);
    };

    const handleGoogleAuth = () => {
        // Simulate Google OAuth
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onNext({
                user: {
                    email: 'user@gmail.com',
                    authMode: 'google'
                }
            });
        }, 1000);
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {authMode === 'signup' ? 'Create Your Account' : 'Welcome Back'}
                    </h2>
                    <p className="text-gray-600">
                        {authMode === 'signup' 
                            ? 'Start building your online menu today' 
                            : 'Sign in to continue to your dashboard'
                        }
                    </p>
                </div>

                {/* Google OAuth Button */}
                <button
                    onClick={handleGoogleAuth}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200 mb-6 disabled:opacity-50"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                </button>

                {/* Divider */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <TextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder="Enter your email"
                        required
                    />

                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        error={errors.password}
                        placeholder="Enter your password"
                        required
                    />

                    {authMode === 'signup' && (
                        <TextInput
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            error={errors.confirmPassword}
                            placeholder="Confirm your password"
                            required
                        />
                    )}

                    {authMode === 'login' && (
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm text-orange-600 hover:text-orange-700"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    <PrimaryButton
                        type="submit"
                        title={isLoading ? 'Processing...' : (authMode === 'signup' ? 'Create Account' : 'Sign In')}
                        disabled={isLoading}
                        className="w-full"
                    />
                </form>

                {/* Toggle Auth Mode */}
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-600">
                        {authMode === 'signup' ? 'Already have an account?' : "Don't have an account?"}
                        <button
                            type="button"
                            onClick={() => setAuthMode(authMode === 'signup' ? 'login' : 'signup')}
                            className="ml-1 text-orange-600 hover:text-orange-700 font-medium"
                        >
                            {authMode === 'signup' ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>

            {/* Back Button */}
            <div className="text-center mt-6">
                <button
                    onClick={onPrevious}
                    className="text-gray-600 hover:text-gray-800 text-sm flex items-center gap-2 mx-auto"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Welcome
                </button>
            </div>
        </div>
    );
};

export default AuthScreen;

