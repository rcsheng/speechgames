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
            "The Energizer",
            "The Motivator",
            "The Enthusiast",
            "The Dynamo",
            "The Powerhouse"
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

    return (
        <div>
            <h1>{title}</h1>
            {gameStarted && (
                <>
                    <p>Speech title: {speechTitle}</p>
                    <p>Match your energy level: {energyLevel}</p>
                    <p>Elapsed time: {elapsedTime}s</p>
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
