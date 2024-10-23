import React, { useState, useEffect } from 'react';

// Sample topics and words for demonstration
const topics = [
    "Public Speaking",
    "Effective Communication",
    "Presentation Skills",
    "Storytelling Techniques",
    "Audience Engagement"
];

const words = [
    "apple",
    "car",
    "dog",
    "computer",
    "ocean",
    "book",
    "tree",
    "phone",
    "music",
    "dance"
];

const TripleStepGame = () => {
    const [topic, setTopic] = useState('');
    const [randomWords, setRandomWords] = useState([]);
    const [timer, setTimer] = useState(60); // 1 minute timer

    useEffect(() => {
        setTopic(generateRandomTopic());
        setRandomWords(generateRandomWords());
    }, []);

    const generateRandomTopic = () => {
        // Randomly select a topic from the topics array
        return topics[Math.floor(Math.random() * topics.length)];
    };

    const generateRandomWords = () => {
        // Randomly select 3 words from the words array
        const shuffledWords = words.sort(() => 0.5 - Math.random());
        return shuffledWords.slice(0, 3); // Get the first 3 words
    };

    return (
        <div>
            <h1>Topic: {topic}</h1>
            <p>Incorporate these words: {randomWords.join(', ')}</p>
            <p>Time left: {timer}s</p>
            {/* Add speech input and logic to incorporate random words */}
        </div>
    );
};

export default TripleStepGame;
