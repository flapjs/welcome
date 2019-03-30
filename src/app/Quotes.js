const QUOTES = [
  ["Explore what it means to be \'computable\'.", "- Prof. Mia Minnes"],
  ["Lush has an interactive background in Mozilla", "- David"],
  ["Good almost afternoon (I totally didn’t just wake up).", "- Noah"],
  ["If you dream it, you can do it.", "- Walt Disney"],
  ["Never, never, never give up.", "- Winston Churchill"],
  ["Don't wait. The time will never be just right.", "- Napolean Hill"],
  ["I can, therefore I am.", "- Simone Wei"],
  ["Turn your wounds into wisdom.", "- Oprah Winfrey"],
  ["Believe you can and you're halfway there.", "- Theodore Roosevelt"],
  ["80% of success is showing up.", "- Woody Allen"],
  ["If you have never failed you have never lived.", "- Human"],
  ["Dream big and dare to fail.", "- Norman Vaughan"],
  ["It's kind of fun to do the impossible.", "- Walt Disney"],
  ["Find out who you are and do it on purpose.", "- Dolly Parton"],
  ["The only journey is the one within.", "- Rainer Maria Rilke"],
  ["Every moment is a fresh beginning.", "- T.S. Eliot"],
  ["Be willing to be a beginner every single morning.", "- Meister Eckhart"],
  ["Welcome. To Jurassic Park.", "- John Hammond"],
];

export function getRandomQuote()
{
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
};
