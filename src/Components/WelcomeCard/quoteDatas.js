const quotes = [
  "The secret of getting ahead is getting started. 🚀",
  "Productivity is not just about doing more. It's about creating more impact with less work. 🌟",
  "Your limitation—it's only your imagination. 💭",
  "Push yourself, because no one else is going to do it for you. 💪",
  "Sometimes later becomes never. Do it now. ✨",
  "Great things never come from comfort zones. 🌱",
  "Dream it. Wish it. Do it. 🌈",
  "Success doesn’t just find you. You have to go out and get it. 🏆",
  "The harder you work for something, the greater you’ll feel when you achieve it. 🎯",
  "Don’t stop when you’re tired. Stop when you’re done. 🛑",
  "Wake up with determination. Go to bed with satisfaction. 🌙",
  "Do something today that your future self will thank you for. 💌",
  "Little things make big days. 🌼",
  "It’s going to be hard, but hard does not mean impossible. 🚧",
  "Don’t wait for opportunity. Create it. 🛠️",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. 💪",
  "The key to success is to focus on goals, not obstacles. 🔑",
  "Motivation is what gets you started. Habit is what keeps you going. 🔁",
  "You don’t need to be better than anyone else, you just need to be better than you used to be. 🌱",
  "Discipline is the bridge between goals and accomplishment. 🌉",
  "The secret of getting ahead is getting started. 🚀",
  "Productivity is not just about doing more. It's about creating more impact with less work. 🌟",
  "Your limitation—it's only your imagination. 💭",
  "Push yourself, because no one else is going to do it for you. 💪",
  "Sometimes later becomes never. Do it now. ✨",
  "Great things never come from comfort zones. 🌱",
  "Dream it. Wish it. Do it. 🌈",
  "Success doesn’t just find you. You have to go out and get it. 🏆",
  "The harder you work for something, the greater you’ll feel when you achieve it. 🎯",
  "Don’t stop when you’re tired. Stop when you’re done. 🛑",
  "Wake up with determination. Go to bed with satisfaction. 🌙",
  "Do something today that your future self will thank you for. 💌",
  "Little things make big days. 🌼",
  "It’s going to be hard, but hard does not mean impossible. 🚧",
  "Don’t wait for opportunity. Create it. 🛠️",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. 💪",
  "The key to success is to focus on goals, not obstacles. 🔑",
  "Motivation is what gets you started. Habit is what keeps you going. 🔁",
  "You don’t need to be better than anyone else, you just need to be better than you used to be. 🌱",
  "Discipline is the bridge between goals and accomplishment. 🌉",
  "Self-discipline is the magic power that makes you virtually unstoppable. ✨",
  "Act as if what you do makes a difference. It does. 🌟",
  "Setting goals is the first step in turning the invisible into the visible. 🔮",
  "True freedom belongs to the disciplined, not slaves to whims and desires. ⛓️",
  "When you feel like quitting, think about why you started. 🤔",
  "Your future is created by what you do today, not tomorrow. 📆",
  "Without self-discipline, success is impossible, period. 🚫",
  "Focus on being productive instead of busy. 🐝",
  "You can’t have a better tomorrow if you are thinking about yesterday all the time. 🔄",
  "Challenges bring interest to life; overcoming them gives it meaning. 🌈",
  "Change your life today. Don't gamble on the future, act now, without delay. ⏳",
  "Your most valuable asset can be your willingness to persist longer than anyone else. 🕰️",
  "Believe in yourself. You're braver, more talented, and capable beyond imagination. 🌠",
  "I never dreamed about success. I worked for it. 💼",
  "Discipline is choosing between what you want now and what you want most. 🏅",
  "The best way to predict your future is to create it. 🛠️",
  "You are the artist of your own life. Don’t hand the paintbrush to anyone else. 🎨",
  "Everything you’ve ever wanted is on the other side of fear. 🚪",
  "Opportunities don't happen, you create them. 🌟",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. ❤️",
  "Work hard in silence, let your success be your noise. 🤫",
  "Failure is not the opposite of success; it’s part of success. 🔄",
  "Action is the foundational key to all success. 🔑",
  "The only limit to our realization of tomorrow will be our doubts of today. 🚧",
  "Make each day your masterpiece. 🖼️",
  "The future belongs to those who believe in the beauty of their dreams. 🌈",
  "Achieving goals shapes you more than the rewards. 🦋",
  "With the new day comes new strength and new thoughts. 🌅",
  "You don’t have to be great to start, but you have to start to be great. 🏁",
  "A river cuts through rock, not because of its power, but because of its persistence. 💧",
  "Optimism fuels achievement; hope and confidence are indispensable. ☀️",
  "To accomplish great things, we must not only act, but also dream; not only plan, but also believe. ✨",
  "Start where you are. Use what you have. Do what you can. 🌱",
  "Overcoming difficulties leads to courage, self-respect, and knowing yourself. 🛡️",
  "The only way to achieve the impossible is to believe it is possible. 🌈",
  "It does not matter how slowly you go as long as you do not stop. 🐢",
  "Your energy is currency. Spend it well. Invest it wisely. ⚡",
  "Everything you want is on the other side of consistency. 🚀",
  "Be stubborn about your goals, and flexible about your methods. 🎯",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. ❤️",
  "He who conquers himself is the mightiest warrior. ⚔️",
  "The best time to plant a tree was 20 years ago. The second best time is now. 🌳",
  "What we fear of doing most is usually what we most need to do. 🚧",
  "Opportunities are like sunrises. If you wait too long, you miss them. 🌅",
  "Self-belief and hard work will always earn you success. 💼",
  "Quality is not an act, it is a habit. 🔄",
  "The difference between who you are and who you want to be is what you do. 🔍",
  "The future depends on what you do today. 📆",
  "The only limit to our realization of tomorrow is our doubts of today. 🚫",
  "Do not wait to strike till the iron is hot; but make it hot by striking. 🔥",
  "Success requires embracing all challenges, not just the ones you prefer.🛡️",
  "Be not afraid of going slowly, be afraid only of standing still. 🐾",
  "You can't cross the sea merely by standing and staring at the water. 🌊",
  "Don’t watch the clock; do what it does. Keep going. ⏰",
  "A year from now you may wish you had started today. 📅",
  "The way to get started is to quit talking and begin doing. 🗣️➡️🏃",
  "Perfection is not attainable, but if we chase perfection we can catch excellence. 🌟",
  "Life is 10% what happens to us and 90% how we react to it. 🔄",
  "Your potential knows no bounds, except those set by your mindset. 🧠",
  "The only person you are destined to become is the person you decide to be. 🦋",
  "Go as far as you can see; when you get there, you'll be able to see further. 🌄",
  "You don’t drown by falling in the water; you drown by staying there. 🌊",
  "Believe you can and you're halfway there. 💭",
  "Set your goals high, and don't stop till you get there. 🚀",
  "All progress takes place outside the comfort zone. 📦",
  "You have to be odd to be number one. 🎲",
  "Strength does not come from physical capacity. It comes from an indomitable will. 💪",
  "Success is walking from failure to failure with no loss of enthusiasm. 🚶‍♂️",
  "The only place where success comes before work is in the dictionary. 📖",
  "Don’t let yesterday take up too much of today. 📅",
  "You can either experience the pain of discipline or the pain of regret. The choice is yours. 🤔",
  "Impossible is just an opinion. 🚫",
  "Your time is limited, don't waste it living someone else's life. ⌛",
  "Magic is believing in yourself, if you can do that, you can make anything happen. 🌟",
  "The only way to do great work is to love what you do. ❤️",
  "From every wound there is a scar, and every scar tells a story. A story that says, I survived. 📖",
  "To live a creative life, we must lose our fear of being wrong. 🎨",
  "If you are not willing to risk the usual, you will have to settle for the ordinary. 💼",
  "Trust because you are willing to accept the risk, not because it's safe or certain. 🤝",
  "Take the risk or lose the chance. 🎲",
  "When you stop chasing the wrong things, you give the right things a chance to catch you. 🏃‍♀️",
  "Everything you’ve ever wanted is sitting on the other side of fear. 🚪",
];

export default quotes;
