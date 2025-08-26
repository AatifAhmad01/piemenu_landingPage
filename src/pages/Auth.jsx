import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Auth = () => {
    const [authMode, setAuthMode] = useState('login'); // 'login', 'signup', 'forgot'
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        restaurantName: '',
        userType: 'customer' // 'customer' or 'restaurant'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log('Form submitted:', { authMode, formData });
        }, 2000);
    };

    const InputField = ({ type, name, placeholder, value, required = true, icon }) => (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">
                    {icon}
                </span>
            </div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
            />
        </div>
    );

    const PasswordField = ({ name, placeholder, value, showPassword, setShowPassword }) => (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            </div>
            <input
                type={showPassword ? 'text' : 'password'}
                name={name}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                required
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
                {showPassword ? (
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </svg>
                ) : (
                    <svg className="w-5 h-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                )}
            </button>
        </div>
    );

    const AuthButton = ({ children, loading = false }) => (
        <button
            type="submit"
            disabled={loading}
            className="w-full relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg group hover:from-orange-500 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
            {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <span className="relative font-medium">
                {children}
            </span>
        </button>
    );

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 pt-20">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-md mx-auto">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <Link to="/" className="inline-flex items-center space-x-2 mb-6 group">
                                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                    <span className="text-white font-bold text-xl">P</span>
                                </div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    PieMenu
                                </h1>
                            </Link>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {authMode === 'login' && 'Welcome Back'}
                                {authMode === 'signup' && 'Create Account'}
                                {authMode === 'forgot' && 'Reset Password'}
                            </h2>
                            <p className="text-gray-600">
                                {authMode === 'login' && 'Sign in to your account to continue'}
                                {authMode === 'signup' && 'Join thousands of restaurants using PieMenu'}
                                {authMode === 'forgot' && 'Enter your email to receive reset instructions'}
                            </p>
                        </div>

                        {/* Auth Form */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                            {/* User Type Toggle for Signup */}
                            {authMode === 'signup' && (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-3">I am a</label>
                                    <div className="flex bg-gray-100 rounded-lg p-1">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, userType: 'customer' }))}
                                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                                                formData.userType === 'customer'
                                                    ? 'bg-white text-orange-600 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                        >
                                            Customer
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, userType: 'restaurant' }))}
                                            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                                                formData.userType === 'restaurant'
                                                    ? 'bg-white text-orange-600 shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-800'
                                            }`}
                                        >
                                            Restaurant Owner
                                        </button>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields for Signup */}
                                {authMode === 'signup' && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <InputField
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            icon={
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            }
                                        />
                                        <InputField
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            icon={
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            }
                                        />
                                    </div>
                                )}

                                {/* Restaurant Name for Restaurant Owners */}
                                {authMode === 'signup' && formData.userType === 'restaurant' && (
                                    <InputField
                                        type="text"
                                        name="restaurantName"
                                        placeholder="Restaurant Name"
                                        value={formData.restaurantName}
                                        icon={
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                        }
                                    />
                                )}

                                {/* Email Field */}
                                <InputField
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    icon={
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                        </svg>
                                    }
                                />

                                {/* Password Fields */}
                                {authMode !== 'forgot' && (
                                    <>
                                        <PasswordField
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            showPassword={showPassword}
                                            setShowPassword={setShowPassword}
                                        />

                                        {authMode === 'signup' && (
                                            <PasswordField
                                                name="confirmPassword"
                                                placeholder="Confirm Password"
                                                value={formData.confirmPassword}
                                                showPassword={showConfirmPassword}
                                                setShowPassword={setShowConfirmPassword}
                                            />
                                        )}
                                    </>
                                )}

                                {/* Forgot Password Link for Login */}
                                {authMode === 'login' && (
                                    <div className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="rounded border-gray-300 text-orange-600 focus:ring-orange-500" />
                                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => setAuthMode('forgot')}
                                            className="text-sm text-orange-600 hover:text-orange-700 font-medium"
                                        >
                                            Forgot password?
                                        </button>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <AuthButton loading={isLoading}>
                                    {authMode === 'login' && 'Sign In'}
                                    {authMode === 'signup' && 'Create Account'}
                                    {authMode === 'forgot' && 'Send Reset Link'}
                                </AuthButton>

                                {/* Terms for Signup */}
                                {authMode === 'signup' && (
                                    <p className="text-xs text-gray-500 text-center">
                                        By creating an account, you agree to our{' '}
                                        <Link to="/terms-of-service" className="text-orange-600 hover:text-orange-700">
                                            Terms of Service
                                        </Link>{' '}
                                        and{' '}
                                        <Link to="/privacy-policy" className="text-orange-600 hover:text-orange-700">
                                            Privacy Policy
                                        </Link>
                                    </p>
                                )}
                            </form>

                            {/* Auth Mode Switch */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="text-center">
                                    {authMode === 'login' && (
                                        <p className="text-gray-600">
                                            Don't have an account?{' '}
                                            <button
                                                onClick={() => setAuthMode('signup')}
                                                className="text-orange-600 hover:text-orange-700 font-medium"
                                            >
                                                Sign up
                                            </button>
                                        </p>
                                    )}
                                    {authMode === 'signup' && (
                                        <p className="text-gray-600">
                                            Already have an account?{' '}
                                            <button
                                                onClick={() => setAuthMode('login')}
                                                className="text-orange-600 hover:text-orange-700 font-medium"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    )}
                                    {authMode === 'forgot' && (
                                        <p className="text-gray-600">
                                            Remember your password?{' '}
                                            <button
                                                onClick={() => setAuthMode('login')}
                                                className="text-orange-600 hover:text-orange-700 font-medium"
                                            >
                                                Sign in
                                            </button>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Social Login */}
                            {authMode !== 'forgot' && (
                                <>
                                    <div className="mt-6">
                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center">
                                                <div className="w-full border-t border-gray-300" />
                                            </div>
                                            <div className="relative flex justify-center text-sm">
                                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2">GitHub</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                                        >
                                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.044 2.064c4.397 0 7.956 3.559 7.956 7.956 0 3.518-2.288 6.503-5.456 7.554v-5.34h1.51l.286-1.87h-1.796V9.02c0-.514.252-.768.768-.768h1.028V6.664c-.178-.024-.768-.071-1.46-.071-1.49 0-2.511 1.01-2.511 2.838v1.133H8.163v1.87h1.206v5.34C5.202 16.523 2.914 13.538 2.914 10.02c0-4.397 3.559-7.956 7.956-7.956z" clipRule="evenodd" />
                                            </svg>
                                            <span className="ml-2">Google</span>
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Auth;
