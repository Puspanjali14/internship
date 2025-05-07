const quotes = {
    science: [
      "Somewhere, something incredible is waiting to be known. – Carl Sagan",
      "The good thing about science is that it's true whether or not you believe in it. – Neil deGrasse Tyson",
      "Equipped with his five senses, man explores the universe around him and calls the adventure Science. – Edwin Hubble",
      "The most beautiful thing we can experience is the mysterious. – Albert Einstein",
      "Science knows no country, because knowledge belongs to humanity. – Louis Pasteur"
    ],
    motivational: [
      "Believe you can and you're halfway there. – Theodore Roosevelt",
      "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
      "Success is not in what you have, but who you are. – Bo Bennett",
      "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
      "Start where you are. Use what you have. Do what you can. – Arthur Ashe"
    ]
  };
  
  let currentCategory = "science";
  let currentIndex = 0;
  let fontSize = 16; 
  
  const quoteBox = document.getElementById("quoteBox");
  const categorySelect = document.getElementById("categorySelect");
  const modeToggle = document.getElementById("modeSwitch");
  const body = document.body;
  
  
  displayQuote();
  
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    const length = quotes[currentCategory].length;
    currentIndex = (currentIndex + 1) % length;
    displayQuote();
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    const length = quotes[currentCategory].length;
    currentIndex = (currentIndex - 1 + length) % length;
    displayQuote();
  });
  
  document.getElementById("randomBtn").addEventListener("click", () => {
    const length = quotes[currentCategory].length;
    currentIndex = Math.floor(Math.random() * length);
    displayQuote();
  });
  
  categorySelect.addEventListener("change", (e) => {
    currentCategory = e.target.value;
    currentIndex = 0;
    displayQuote();
  });
  
  modeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
  });
  
  document.getElementById("increaseFont").addEventListener("click", () => {
    fontSize = Math.min(fontSize + 2, 32);
    quoteBox.style.fontSize = fontSize + "px";
  });
  
  document.getElementById("decreaseFont").addEventListener("click", () => {
    fontSize = Math.max(fontSize - 2, 12);
    quoteBox.style.fontSize = fontSize + "px";
  });
  
  function displayQuote() {
    quoteBox.textContent = quotes[currentCategory][currentIndex];
  }
  