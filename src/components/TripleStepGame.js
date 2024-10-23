import React, { useState, useEffect } from 'react';

// List of interesting words for speeches, including common objects
const interestingWords = [
    "abundance", "acceptance", "achievement", "adventure", "advocacy", "ambition", "appreciation", "articulation", "authenticity", "balance",
    "bravery", "brilliance", "calmness", "courage", "creativity", "dedication", "determination", "diligence", "discovery", "diversity",
    "dream", "elegance", "empathy", "enthusiasm", "excellence", "exploration", "freedom", "gratitude", "growth", "harmony",
    "imagination", "impact", "inspiration", "integrity", "intelligence", "journey", "joy", "leadership", "legacy", "liberty",
    "mindfulness", "motivation", "narrative", "opportunity", "passion", "perseverance", "potential", "purpose", "resilience", "sacrifice",
    "self-awareness", "strength", "success", "teamwork", "transformation", "trust", "understanding", "vision", "wisdom", "zeal",
    "apple", "book", "car", "computer", "desk", "dog", "elephant", "flower", "guitar", "house",
    "ice cream", "jacket", "key", "lamp", "mountain", "notebook", "orange", "pencil", "quilt", "rose",
    "shoe", "table", "umbrella", "violin", "window", "yarn", "zebra", "ball", "chair", "phone",
    "water", "bread", "coffee", "tea", "sun", "moon", "star", "cloud", "tree", "river",
    "mountain", "ocean", "sky", "sand", "grass", "rock", "leaf", "bird", "fish", "insect",
    "computer", "television", "radio", "camera", "watch", "bicycle", "train", "bus", "airplane", "boat",
    "grocery", "store", "market", "restaurant", "school", "library", "park", "gym", "theater", "museum",
    "city", "village", "town", "country", "continent", "planet", "universe", "space", "time", "history"
];

const TripleStepGame = () => {
    const [randomWord, setRandomWord] = useState(''); // Random word to incorporate
    const [speechTitle, setSpeechTitle] = useState(''); // Speech title
    const [title, setTitle] = useState('Triple Step Game'); // Default title
    const [elapsedTime, setElapsedTime] = useState(0); // Time elapsed since the game started
    const [energyChangeInterval, setEnergyChangeInterval] = useState(10); // Default interval for new word change in seconds
    const [gameStarted, setGameStarted] = useState(false); // Game start state
    const [gamePaused, setGamePaused] = useState(false); // Game paused state
    const [startTime, setStartTime] = useState(0); // Time when the game started

    useEffect(() => {
        // Change random word at the specified interval
        const wordInterval = setInterval(() => {
            if (gameStarted && !gamePaused) {
                setRandomWord(generateRandomWord());
            }
        }, energyChangeInterval * 1000); // Convert seconds to milliseconds

        // Timer to track elapsed time
        const timerInterval = setInterval(() => {
            if (gameStarted && !gamePaused) {
                setElapsedTime(prevElapsedTime => Math.floor((Date.now() - startTime) / 1000)); // Update elapsed time
            }
        }, 1000); // Update every second

        return () => {
            clearInterval(wordInterval);
            clearInterval(timerInterval);
        };
    }, [energyChangeInterval, gameStarted, gamePaused, startTime]); // Dependencies

    const generateRandomWord = () => {
        return interestingWords[Math.floor(Math.random() * interestingWords.length)];
    };

    const generateRandomSpeechTitle = () => {
        const titles = [
            "Unlocking Your Inner Leader",
            "The Power of Small Wins",
            "From Idea to Reality",
            "Finding Strength in Vulnerability",
            "The Art of Reinvention",
            "Mastering the Unseen",
            "Embracing the Journey, Not Just the Destination",
            "Lessons From Failure",
            "Turning Fear Into Fuel",
            "The Magic of Momentum",
            "Overcoming the Impossible",
            "The Gift of Adversity",
            "Breaking Through Mental Barriers",
            "Leading With Purpose",
            "Navigating the Chaos of Change",
            "The Beauty of Being Different",
            "Building a Legacy That Lasts",
            "Finding Your Authentic Voice",
            "The Courage to Start",
            "Creating a Culture of Innovation",
            "Making an Impact That Matters",
            "Shattering the Glass Ceiling",
            "The Future of Leadership",
            "Harnessing the Power of Positivity",
            "Taking the Road Less Traveled",
            "The Mindset of a Champion",
            "Turning Setbacks Into Comebacks",
            "From Struggle to Strength",
            "The Art of Decision-Making",
            "Leading Through Uncertainty",
            "Unlocking Human Potential",
            "How to Stay Resilient",
            "The Power of Consistency",
            "Breaking Free From Limitations",
            "Finding Balance in a Chaotic World",
            "How to Influence Others",
            "Leading From the Heart",
            "The Science of Success",
            "The Courage to Change",
            "Building a Personal Brand",
            "Embracing Uncertainty with Confidence",
            "The Power of Focus",
            "Turning Ideas Into Action",
            "Overcoming Perfectionism",
            "The Evolution of a Leader",
            "Becoming Unstoppable",
            "Lessons From a Life Well Lived",
            "Innovation in Action",
            "The Power of Connection",
            "Why Failure Is a Good Thing",
            "Finding Purpose in the Everyday",
            "Building a Team That Thrives",
            "The Road to Mastery",
            "Breaking the Mold",
            "The Art of Being Present",
            "Becoming the Leader Others Follow",
            "Creating a Vision for the Future",
            "Leading With Empathy",
            "The Resilience Factor",
            "The Art of Storytelling",
            "Learning From Life's Greatest Teachers",
            "The Power of Gratitude",
            "Leading by Example",
            "From Good to Great",
            "Redefining Success",
            "Turning Your Passion Into Your Purpose",
            "Leading in the Digital Age",
            "The Confidence to Lead",
            "Mastering the Art of Influence",
            "Navigating the Unknown",
            "Building a Mindset of Growth",
            "The Power of Adaptability",
            "The Joy of Lifelong Learning",
            "Creating a Lasting Impact",
            "Why Mindset Matters",
            "Finding Clarity in Complexity",
            "Overcoming Imposter Syndrome",
            "The Power of Reflection",
            "Building a Culture of Trust",
            "The Heart of a Leader",
            "How to Lead With Confidence",
            "Creating Opportunities in Chaos",
            "The Art of Reinvention",
            "Learning From the Unexpected",
            "Why Empathy Is the Future of Leadership",
            "The Power of Saying No",
            "Mastering Time Management",
            "How to Build Stronger Relationships",
            "Leading in a Time of Disruption",
            "The Science of Peak Performance",
            "Turning Vision Into Reality",
            "Why Curiosity Is the Key to Success",
            "The Art of Active Listening",
            "Finding Courage in Uncertainty",
            "The Power of a Growth Mindset",
            "Leading with Integrity",
            "Mastering Change, Embracing Growth",
            "How to Inspire Others"
        ];
        
        return titles[Math.floor(Math.random() * titles.length)];
    };

    const handleEnergyChangeInterval = (e) => {
        setEnergyChangeInterval(parseInt(e.target.value)); // Update energy change interval in seconds
    };

    const startGame = () => {
        setGameStarted(true);
        setStartTime(Date.now()); // Record the start time
        setElapsedTime(0); // Reset elapsed time
        setSpeechTitle(generateRandomSpeechTitle()); // Generate a random speech title
        setRandomWord(generateRandomWord()); // Generate a random word
    };

    const pauseGame = () => {
        setGamePaused(true); // Mark the game as paused
    };

    const continueGame = () => {
        setGamePaused(false); // Unpause the game
        setStartTime(Date.now() - elapsedTime * 1000); // Adjust start time to continue from where it paused
    };

    const restartGame = () => {
        setGameStarted(false); // Reset game state
        setElapsedTime(0); // Reset elapsed time
        setGamePaused(false); // Reset game paused state
        setRandomWord(''); // Clear random word
        setSpeechTitle(''); // Clear speech title
    };

    // Function to format elapsed time into minutes and seconds
    const formatElapsedTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}m ${seconds}s`;
    };

    return (
        <div>
            <h1>{title}</h1>
            {gameStarted && (
                <>
                    <p className="game-content">Speech title: <b>{speechTitle}</b></p>
                    <p className="game-content">Please incorporate this word: <b>{randomWord}</b></p>
                    <p className="game-content">Elapsed time: {formatElapsedTime(elapsedTime)}</p>
                    <div>
                        <label>
                            Word Change Interval (seconds):
                            <input
                                type="number"
                                value={energyChangeInterval}
                                onChange={handleEnergyChangeInterval}
                                min="1"
                            />
                        </label>
                    </div>
                    {!gamePaused ? (
                        <button onClick={pauseGame}>Pause Game</button>
                    ) : (
                        <>
                            <button onClick={continueGame}>Continue Game</button>
                            <button onClick={restartGame}>Restart Game</button>
                        </>
                    )}
                </>
            )}
            {!gameStarted ? (
                <div>
                    <button onClick={startGame}>Start Game</button>
                </div>
            ) : gamePaused && <p>Game Paused!</p>}
        </div>
    );
};

export default TripleStepGame;
