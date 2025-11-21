import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import TextInput from '../Input/TextInput';

const RestaurantDetails = ({ onNext, onPrevious, data, onSkip }) => {
    const [formData, setFormData] = useState({
        restaurantName: data.restaurant?.name || '',
        email: data.user?.email || '',
        serviceType: data.restaurant?.serviceType || '',
        address: data.restaurant?.address || '',
        phone: data.restaurant?.phone || '',
        cuisineType: data.restaurant?.cuisineType || '',
        operatingHours: {
            monday: { open: '09:00', close: '22:00', closed: false },
            tuesday: { open: '09:00', close: '22:00', closed: false },
            wednesday: { open: '09:00', close: '22:00', closed: false },
            thursday: { open: '09:00', close: '22:00', closed: false },
            friday: { open: '09:00', close: '23:00', closed: false },
            saturday: { open: '09:00', close: '23:00', closed: false },
            sunday: { open: '10:00', close: '21:00', closed: false }
        }
    });
    const [errors, setErrors] = useState({});
    const [showOperatingHours, setShowOperatingHours] = useState(false);

    const serviceTypes = [
        { id: 'dining', label: 'Dining In', icon: '🍽️', description: 'Traditional sit-down restaurant' },
        { id: 'delivery', label: 'Delivery', icon: '🚚', description: 'Food delivery service' },
        { id: 'takeaway', label: 'Takeaway', icon: '🥡', description: 'Pickup orders only' },
        { id: 'all', label: 'All Services', icon: '🌟', description: 'Dining, delivery & takeaway' }
    ];

    const cuisineTypes = [
        'American', 'Italian', 'Chinese', 'Mexican', 'Indian', 'Thai', 'Japanese', 
        'Mediterranean', 'French', 'Korean', 'Vietnamese', 'Middle Eastern', 'Other'
    ];

    const days = [
        { key: 'monday', label: 'Monday' },
        { key: 'tuesday', label: 'Tuesday' },
        { key: 'wednesday', label: 'Wednesday' },
        { key: 'thursday', label: 'Thursday' },
        { key: 'friday', label: 'Friday' },
        { key: 'saturday', label: 'Saturday' },
        { key: 'sunday', label: 'Sunday' }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleServiceTypeSelect = (type) => {
        setFormData(prev => ({ ...prev, serviceType: type }));
        if (errors.serviceType) {
            setErrors(prev => ({ ...prev, serviceType: '' }));
        }
    };

    const handleOperatingHoursChange = (day, field, value) => {
        setFormData(prev => ({
            ...prev,
            operatingHours: {
                ...prev.operatingHours,
                [day]: {
                    ...prev.operatingHours[day],
                    [field]: value
                }
            }
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.restaurantName.trim()) {
            newErrors.restaurantName = 'Restaurant name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'Please select a service type';
        }

        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        if (!formData.cuisineType) {
            newErrors.cuisineType = 'Please select a cuisine type';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        onNext({
            restaurant: {
                name: formData.restaurantName,
                email: formData.email,
                serviceType: formData.serviceType,
                address: formData.address,
                phone: formData.phone,
                cuisineType: formData.cuisineType,
                operatingHours: showOperatingHours ? formData.operatingHours : null
            }
        });
    };

    const handleSkip = () => {
        onSkip();
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Tell us about your restaurant</h2>
                    <p className="text-gray-600">We'll use this information to customize your menu experience</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Restaurant Name */}
                    <TextInput
                        label="Restaurant Name"
                        name="restaurantName"
                        type="text"
                        value={formData.restaurantName}
                        onChange={handleInputChange}
                        error={errors.restaurantName}
                        placeholder="Enter your restaurant name"
                        required
                    />

                    {/* Email */}
                    <TextInput
                        label="Business Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        placeholder="Enter your business email"
                        required
                    />

                    {/* Service Type Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            What type of service do you offer? <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {serviceTypes.map((type) => (
                                <button
                                    key={type.id}
                                    type="button"
                                    onClick={() => handleServiceTypeSelect(type.id)}
                                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                                        formData.serviceType === type.id
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">{type.icon}</span>
                                        <div>
                                            <h3 className="font-medium text-gray-800">{type.label}</h3>
                                            <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                        {errors.serviceType && (
                            <p className="mt-2 text-sm text-red-600">{errors.serviceType}</p>
                        )}
                    </div>

                    {/* Address */}
                    <TextInput
                        label="Restaurant Address"
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleInputChange}
                        error={errors.address}
                        placeholder="Enter your restaurant address"
                        required
                    />

                    {/* Phone */}
                    <TextInput
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                        placeholder="Enter your phone number"
                        required
                    />

                    {/* Cuisine Type */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Cuisine Type <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="cuisineType"
                            value={formData.cuisineType}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-200 ${
                                errors.cuisineType ? 'border-red-500' : 'border-gray-300'
                            }`}
                            required
                        >
                            <option value="">Select cuisine type</option>
                            {cuisineTypes.map((cuisine) => (
                                <option key={cuisine} value={cuisine}>
                                    {cuisine}
                                </option>
                            ))}
                        </select>
                        {errors.cuisineType && (
                            <p className="mt-2 text-sm text-red-600">{errors.cuisineType}</p>
                        )}
                    </div>

                    {/* Operating Hours Toggle */}
                    <div className="border-t pt-6">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-medium text-gray-800">Operating Hours</h3>
                                <p className="text-sm text-gray-600">Set your restaurant's opening hours</p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowOperatingHours(!showOperatingHours)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                                    showOperatingHours
                                        ? 'bg-orange-500 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {showOperatingHours ? 'Hide' : 'Set Hours'}
                            </button>
                        </div>

                        {showOperatingHours && (
                            <div className="space-y-3">
                                {days.map((day) => (
                                    <div key={day.key} className="flex items-center gap-4">
                                        <div className="w-20 text-sm font-medium text-gray-700">
                                            {day.label}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={!formData.operatingHours[day.key].closed}
                                                onChange={(e) => handleOperatingHoursChange(day.key, 'closed', !e.target.checked)}
                                                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                                            />
                                            <span className="text-sm text-gray-600">Open</span>
                                        </div>
                                        {!formData.operatingHours[day.key].closed && (
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="time"
                                                    value={formData.operatingHours[day.key].open}
                                                    onChange={(e) => handleOperatingHoursChange(day.key, 'open', e.target.value)}
                                                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                                                />
                                                <span className="text-gray-500">to</span>
                                                <input
                                                    type="time"
                                                    value={formData.operatingHours[day.key].close}
                                                    onChange={(e) => handleOperatingHoursChange(day.key, 'close', e.target.value)}
                                                    className="px-3 py-1 border border-gray-300 rounded text-sm"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onPrevious}
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            onClick={handleSkip}
                            className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                        >
                            Skip for now
                        </button>
                        <PrimaryButton
                            type="submit"
                            title="Continue"
                            className="flex-1"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RestaurantDetails;
