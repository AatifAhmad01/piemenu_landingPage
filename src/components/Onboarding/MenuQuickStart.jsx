import React, { useState } from 'react';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import TextInput from '../Input/TextInput';

const MenuQuickStart = ({ onNext, onPrevious, data, onSkip }) => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: '', price: '', description: '', category: 'appetizers' }
    ]);
    const [errors, setErrors] = useState({});

    const categories = [
        { id: 'appetizers', name: 'Appetizers', icon: '🥗' },
        { id: 'mains', name: 'Main Courses', icon: '🍽️' },
        { id: 'desserts', name: 'Desserts', icon: '🍰' },
        { id: 'beverages', name: 'Beverages', icon: '🥤' }
    ];

    const sampleItems = {
        appetizers: [
            { name: 'Caesar Salad', price: '8.99', description: 'Fresh romaine lettuce with parmesan cheese and croutons' },
            { name: 'Buffalo Wings', price: '12.99', description: 'Spicy chicken wings served with ranch dressing' }
        ],
        mains: [
            { name: 'Grilled Salmon', price: '24.99', description: 'Fresh Atlantic salmon with lemon butter sauce' },
            { name: 'Beef Burger', price: '16.99', description: 'Juicy beef patty with lettuce, tomato, and special sauce' }
        ],
        desserts: [
            { name: 'Chocolate Cake', price: '7.99', description: 'Rich chocolate cake with vanilla ice cream' },
            { name: 'Tiramisu', price: '8.99', description: 'Classic Italian dessert with coffee and mascarpone' }
        ],
        beverages: [
            { name: 'Fresh Orange Juice', price: '4.99', description: 'Freshly squeezed orange juice' },
            { name: 'Cappuccino', price: '3.99', description: 'Rich espresso with steamed milk foam' }
        ]
    };

    const handleInputChange = (index, field, value) => {
        const updatedItems = [...menuItems];
        updatedItems[index] = { ...updatedItems[index], [field]: value };
        setMenuItems(updatedItems);
        
        // Clear error when user starts typing
        if (errors[`item_${index}`]) {
            setErrors(prev => ({ ...prev, [`item_${index}`]: '' }));
        }
    };

    const addMenuItem = () => {
        setMenuItems([...menuItems, { 
            id: Date.now(), 
            name: '', 
            price: '', 
            description: '', 
            category: 'appetizers' 
        }]);
    };

    const removeMenuItem = (index) => {
        if (menuItems.length > 1) {
            setMenuItems(menuItems.filter((_, i) => i !== index));
        }
    };

    const addSampleItems = (category) => {
        const sampleCategoryItems = sampleItems[category] || [];
        const newItems = sampleCategoryItems.map((item, index) => ({
            id: Date.now() + index,
            ...item,
            category: category
        }));
        setMenuItems([...menuItems, ...newItems]);
    };

    const validateForm = () => {
        const newErrors = {};
        
        menuItems.forEach((item, index) => {
            if (!item.name.trim()) {
                newErrors[`item_${index}`] = 'Item name is required';
            }
            if (!item.price.trim()) {
                newErrors[`item_${index}`] = 'Item price is required';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        // Filter out empty items
        const validItems = menuItems.filter(item => item.name.trim() && item.price.trim());
        
        onNext({
            menuItems: validItems
        });
    };

    const handleSkip = () => {
        onSkip();
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Add your menu items</h2>
                    <p className="text-gray-600">Start with a few items or add sample items to get started quickly</p>
                </div>

                {/* Sample Items Quick Add */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Start Templates</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => addSampleItems(category.id)}
                                className="p-4 border border-gray-200 rounded-lg hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200 text-center"
                            >
                                <div className="text-2xl mb-2">{category.icon}</div>
                                <div className="text-sm font-medium text-gray-700">{category.name}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Menu Items */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-800">Menu Items</h3>
                            <button
                                type="button"
                                onClick={addMenuItem}
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium"
                            >
                                + Add Item
                            </button>
                        </div>

                        {menuItems.map((item, index) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-medium text-gray-800">Item {index + 1}</h4>
                                    {menuItems.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeMenuItem(index)}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <TextInput
                                        label="Item Name"
                                        value={item.name}
                                        onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                        placeholder="e.g., Grilled Salmon"
                                        required
                                    />

                                    <TextInput
                                        label="Price"
                                        value={item.price}
                                        onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                                        placeholder="e.g., 24.99"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        value={item.category}
                                        onChange={(e) => handleInputChange(index, 'category', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    >
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.icon} {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mt-4">
                                    <TextInput
                                        label="Description (Optional)"
                                        value={item.description}
                                        onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                        placeholder="Brief description of the item"
                                    />
                                </div>

                                {errors[`item_${index}`] && (
                                    <p className="mt-2 text-sm text-red-600">{errors[`item_${index}`]}</p>
                                )}
                            </div>
                        ))}
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

export default MenuQuickStart;

