import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Calendar } from './ui/calendar';

export default function InputForm() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
            {/* Top Navigation */}
            <nav className="w-full bg-gray-800 flex justify-between items-center px-8 py-3 shadow-md">
                <h1 className="text-lg font-semibold">Intelligent tour planner</h1>
                <div className="flex items-center space-x-4">
                    <span>Quang Duy</span>
                    <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="text-sm">👤</span>
                    </div>
                </div>
            </nav>

            {/* Sub Navigation */}
            <div className="w-full bg-gray-700 flex px-8 py-2 space-x-6 text-sm font-medium">
                <button className="px-3 py-1 bg-gray-900 rounded text-white">Plan your adventure</button>
                <button className="hover:text-gray-300">My trips</button>
                <button className="hover:text-gray-300">Settings</button>
            </div>

            {/* Form Card */}
            <Card className="mt-12 w-[700px] bg-white text-black shadow-2xl rounded-2xl">
                <CardContent className="p-8">
                    <h2 className="text-lg font-semibold mb-6">Intelligent Tour Planner</h2>

                    {/* Destination */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Destination</label>
                        <Input placeholder="e.g., Ho Chi Minh City, District 1" className="border-gray-300" />
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Start date</label>
                            <Input type="date" className="border-gray-300" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">End date</label>
                            <Input type="date" className="border-gray-300" />
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-2">Budget</label>
                        <input type="range" className="w-full accent-purple-400" />
                    </div>

                    {/* Interests */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium mb-3">Interests</label>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-1 rounded-full bg-blue-200 text-blue-800 font-medium">Culture</span>
                            <span className="px-4 py-1 rounded-full bg-yellow-300 text-yellow-800 font-medium">Food</span>
                            <span className="px-4 py-1 rounded-full bg-green-400 text-green-900 font-medium">Nature</span>
                            <span className="px-4 py-1 rounded-full bg-red-500 text-white font-medium">Adventure</span>
                            <button className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">+Add</button>
                        </div>
                    </div>

                    {/* Generate Button */}
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-xl">
                        GENERATE MY ITINERARY NOW
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
