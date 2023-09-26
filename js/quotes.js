const quotes = [
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas Edison"
    },
    {
        quote: "You can observe a lot just by watching.",
        author: "Yogi Berra"
    },
    {
        quote: "A house divided against itself cannot stand.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Difficulties increase the nearer we get to the goal.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "Fate is in your hands and no one elses",
        author: "Byron Pulsifer"
    },
    {
        quote: "Be the chief but never the lord.",
        author: "Lao Tzu"
    },
    {
        quote: "Nothing happens unless first we dream.",
        author: "Carl Sandburg"
    },
    {
        quote: "Well begun is half done.",
        author: "Aristotle"
    },
    {
        quote: "Life is a learning experience, only if you learn.",
        author: "Yogi Berra"
    },
    {
        quote: "Self-complacency is fatal to progress.",
        author: "Margaret Sangster"
    },
    {
        quote: "Peace comes from within. Do not seek it without.",
        author: "Buddha"
    },
    {
        quote: "What you give is what you get.",
        author: "Byron Pulsifer"
    },
    {
        quote: "We can only learn to love by loving.",
        author: "Iris Murdoch"
    },
    {
        quote: "Life is change. Growth is optional. Choose wisely.",
        author: "Karen Clark"
    },
    {
        quote: "You'll see it when you believe it.",
        author: "Wayne Dyer"
    },
    {
        quote: "Today is the tomorrow we worried about yesterday.",
        author: "type.fit"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;