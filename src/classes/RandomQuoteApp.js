import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuoteApp {
  constructor() {
    this.currentQuote = null;
    this.quoteText = document.getElementById('quote-text');
    this.quoteAuthor = document.getElementById('quote-author');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.init();
  }

  displayCurrentQuote() {
    this.quoteText.innerHTML = this.currentQuote.formatText();
    this.quoteAuthor.innerHTML = this.currentQuote.formatAuthor();
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () => this.getRandomQuote());
  }
}

export default RandomQuoteApp;
