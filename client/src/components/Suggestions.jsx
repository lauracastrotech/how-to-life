import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchAllSuggestions();
    }, []);

    async function fetchAllSuggestions() {
        try {
            const response = await axios.get('/suggestions');
            console.log('All suggestions:', response.data);
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching all suggestions:', error);
        }
    }

    async function fetchTop10ByCategory(category) {
        try {
            const response = await axios.get('/suggestions/top10', {
                params: { category }
            });
            console.log(`Top 10 ${category} suggestions:`, response.data);
            setSuggestions(response.data);
        } catch (error) {
            console.error(`Error fetching top 10 ${category} suggestions:`, error);
        }
    }

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        if (category === '') {
            fetchAllSuggestions();
        } else {
            fetchTop10ByCategory(category);
        }
    };

    return (
        <div>
            <h1>Suggestions</h1>
            <div>
                <label htmlFor="category">Select Category:</label>
                <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                    <option value="Education">Education</option>
                    <option value="Relationships">Relationshipd</option>
                    
                </select>
            </div>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>
                        {suggestion.question} (Clicks: {suggestion.click_count})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Suggestions;
