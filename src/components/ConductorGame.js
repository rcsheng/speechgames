import React, { useState, useEffect } from 'react';

const ConductorGame = () => {
    const [energyLevel, setEnergyLevel] = useState(1);
    const [title, setTitle] = useState('Conductor Game'); // Default title
    const [speechTitle, setSpeechTitle] = useState(''); // Speech title
    const [elapsedTime, setElapsedTime] = useState(0); // Time elapsed since the game started
    const [energyChangeInterval, setEnergyChangeInterval] = useState(10); // Default interval for energy level change in seconds
    const [gameStarted, setGameStarted] = useState(false); // Game start state
    const [gamePaused, setGamePaused] = useState(false); // Game paused state
    const [startTime, setStartTime] = useState(0); // Time when the game started

    useEffect(() => {
        // Change energy level at the specified interval
        const interval = setInterval(() => {
            if (gameStarted && !gamePaused) {
                setEnergyLevel(Math.floor(Math.random() * 10) + 1);
            }
        }, energyChangeInterval * 1000); // Convert seconds to milliseconds

        // Timer to track elapsed time
        const timerInterval = setInterval(() => {
            if (gameStarted && !gamePaused) {
                setElapsedTime(prevElapsedTime => Math.floor((Date.now() - startTime) / 1000)); // Update elapsed time
            }
        }, 1000); // Update every second

        return () => {
            clearInterval(interval);
            clearInterval(timerInterval);
        };
    }, [energyChangeInterval, gameStarted, gamePaused, startTime]); // Dependencies

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
            "Chasing Excellence, Not Perfection",
            "The Art of Communication",
            "Thinking Big, Starting Small",
            "How to Stay Calm Under Pressure",
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
        setEnergyLevel(1); // Reset energy level
        setElapsedTime(0); // Reset elapsed time
        setGamePaused(false); // Reset game paused state
        setSpeechTitle(generateRandomSpeechTitle()); // Generate a new random title
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
                    <p className="game-content">Match your energy level: <b>{energyLevel}</b></p>
                    <p className="game-content">Elapsed time: {formatElapsedTime(elapsedTime)}</p>
                    <div>
                        <label>
                            Energy Change Interval (seconds):
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

export default ConductorGame;
