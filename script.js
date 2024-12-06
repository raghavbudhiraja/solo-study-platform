// Random Motivational Quotes
const quotes = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "You are never too old to set another goal or to dream a new dream.",
    "Hardships often prepare ordinary people for an extraordinary destiny."
  ];
  
  function shuffleQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  
  function toggleQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.style.display = (quoteElement.style.display === 'none') ? 'block' : 'none';
  }
  
  // Study Stats Logic (Dummy)
  let studyTime = {
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    allTime: 0
  };
  
  function showStats(period) {
    document.getElementById("studyTime").textContent = `${studyTime[period]} hrs`;
  }
  
  // Backgrounds
  const backgrounds = {
    anime: "url('https://placekitten.com/1920/1080')",
    nature: "url('https://source.unsplash.com/1920x1080/?nature')",
    library: "url('https://source.unsplash.com/1920x1080/?library')"
  };
  
  function setBackground(type) {
    document.getElementById("background").style.backgroundImage = backgrounds[type];
  }
  
  function shuffleBackground() {
    const randomIndex = Math.floor(Math.random() * Object.keys(backgrounds).length);
    setBackground(Object.keys(backgrounds)[randomIndex]);
  }
  
  function hideBackground() {
    document.getElementById("background").style.display = 'none';
  }
  