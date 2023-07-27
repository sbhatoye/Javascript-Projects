const generateQuote = () => {
  const quotesList = [
    "“Don’t let yesterday take up too much of today.” ~ Will Rogers",
    "“We need much less than we think we need.” ~ Maya Angelou",
    "“There is no way to happiness – happiness is the way.” ~ Thich Nhat Hanh",
    "“Be yourself; everyone else is already taken.” ~ Oscar Wilde",
    "“Simplicity is the ultimate sophistication.” ~ Leonardo da Vinci",
    "“The only real mistake is the one from which we learn nothing.” ~  Henry Ford",
    "“If you tell the truth you don’t have to remember anything.” ~ Mark Twain",
    "“Try to be a rainbow in someone else’s cloud.” ~ Maya Angelou",
    "“Life is like riding a bicycle. To keep your balance, you must keep moving.” ~ Albert Einstein",
    "“What we think, we become.” ~ Buddha",
    "“It is never too late to be what you might have been.” ~ George Eliot",
    "“Happiness often sneaks in through a door you didn’t know you left open.” ~ John Barrymore",
    "“Don’t wait. The time will never be just right.” ~ Napoleon Hillf",
    "“If you can dream it, you can do it.” ~ Walt Disney",
    "“It hurt because it mattered.” ~ John Green",
    "“The road to success is always under construction.” ~ Lily Tomlin",
    "“It always seems impossible until it’s done.” ~ Nelson Mandela",
    "“To live is the rarest thing in the world. Most people just exist.” ~ Oscar Wilde",
    "“Everything you’ve ever wanted is on the other side of fear.” ~ George Addair",
    "“If you have the ability to love, love yourself first.” ~ Charles Bukowski",
    "“Either you run the day, or the day runs you.” ~ Jim Rohn",
    "“Knowledge speaks, but wisdom listens.” ~ Jimi Hendrix",
    "“Don’t cry because it’s over. Smile because it happened.” ~ Dr. Seuss",
    "“No one can make you feel inferior without your consent.” ~ Eleanor Roosevelt",
    "“Be not afraid of going slowly, be afraid only of standing still.” ~ Chinese Proverb",
    "“The journey of a thousand miles begins with one step.” ~ Lao Tzu",
    "“The most wasted of days is one without laughter.” ~E.E. Cummings",
    "“Spread love everywhere you go.” ~ Mother Teresa",
    "“A wise man will make more opportunities than he finds.” ~ Francis Bacon",
  ];

  const randomIndex = Math.floor(Math.random() * quotesList.length);
  const randomQuote = quotesList[randomIndex];
  document.getElementById("quote").innerHTML = randomQuote;
};
