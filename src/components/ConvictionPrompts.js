import React, { useState, useEffect } from 'react';

// List of interesting words for speeches, including common objects
const convictionPhrases = [
    "I firmly believe that...",
    "There is no doubt in my mind that...",
    "Without hesitation, I can say...",
    "I am absolutely convinced that...",
    "It's clear that...",
    "Let me be very clear on this point...",
    "We all know that...",
    "One thing is certain...",
    "There’s no question that...",
    "It's undeniable that...",
    "I stand here today knowing that...",
    "Rest assured, this is the truth...",
    "I am committed to the idea that...",
    "Make no mistake, this is crucial...",
    "It’s imperative that we understand...",
    "Let me assure you that...",
    "This is a fact that cannot be ignored...",
    "I wholeheartedly support the notion that...",
    "It is my strong conviction that...",
    "What I know for sure is...",
    "The evidence is overwhelming that...",
    "You can be sure of this...",
    "I am certain beyond any doubt that...",
    "This is not just an opinion; it's a fact...",
    "I have no reservations when I say...",
    "We must recognize that...",
    "Believe me when I tell you...",
    "I stake my reputation on the fact that...",
    "It’s essential to realize that...",
    "I guarantee you that...",
    "I am passionate about the idea that...",
    "There’s no escaping the truth that...",
    "This is something I feel strongly about...",
    "I stand by the principle that...",
    "Let’s be clear, the reality is...",
    "It’s impossible to argue against the fact that...",
    "I’m resolute in my belief that...",
    "No one can deny that...",
    "You have my word that...",
    "I am unwavering in my stance on this...",
    "There’s irrefutable evidence that...",
    "I cannot emphasize enough that...",
    "It's my unshakable belief that...",
    "I’ve seen firsthand that...",
    "This is a truth we must embrace...",
    "I will not waver in my belief that...",
    "Let’s face the facts—this is the way forward...",
    "I cannot overstate the importance of...",
    "I am confident in saying...",
    "There’s only one conclusion we can draw from this...",
    "Let me underscore the importance of this...",
    "We must stand firm in our understanding that...",
    "It’s critical that we acknowledge...",
    "The reality is inescapable...",
    "It’s high time we recognized...",
    "I’ll leave no stone unturned in proving that...",
    "Nothing could be clearer to me than...",
    "This is an undeniable truth...",
    "Let me stress this as much as possible...",
    "You cannot convince me otherwise that...",
    "This is the foundation of everything I believe...",
    "It’s evident that...",
    "It’s with complete certainty that I say...",
    "I will argue this point until the end...",
    "There’s nothing that makes more sense than...",
    "This is a truth we cannot deny...",
    "It’s a fact that...",
    "I’m here to tell you that...",
    "You can trust that...",
    "This is the path forward, without a doubt..."
  ];
  

const ConvictionPrompts = () => {
    const [randomWord, setRandomWord] = useState(''); // Random word to incorporate
    const [speechTitle, setSpeechTitle] = useState(''); // Speech title
    const [title, setTitle] = useState('Conviction Prompts'); // Default title
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
        return convictionPhrases[Math.floor(Math.random() * convictionPhrases.length)];
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
                    <p className="game-content">Please incorporate this phrase: <b>{randomWord}</b></p>
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

export default ConvictionPrompts;
