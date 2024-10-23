export const generateRandomTitle = () => {
    const titles = ["The Future of Technology", "The Importance of Education", "Climate Change Solutions"];
    return titles[Math.floor(Math.random() * titles.length)];
};

export const generateRandomWords = () => {
    const words = ["apple", "car", "dog", "computer", "ocean"];
    return Array.from({ length: 3 }, () => words[Math.floor(Math.random() * words.length)]);
};
