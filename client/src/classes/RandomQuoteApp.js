import Quote from './Quote.js';
import RandomQuote from './randomQuote.js';

class RandomQuoteApp {
  constructor() {
    this.currentQuote = null;
    this.quoteText = document.getElementById('quote-text');
    this.quoteAuthor = document.getElementById('quote-author');
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuoteAPIBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      'random-quote-own-api-btn'
    );

    this.init();
  }

  displayCurrentQuote() {
    this.quoteText.innerHTML = this.currentQuote.formatQuote();
    this.quoteAuthor.innerHTML = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  handleRandomQuote() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteAPI(isOwnAPI) {
    this.changeCurrentQuote(
      isOwnAPI
        ? await RandomQuote.getRandomQuoteOwnAPI()
        : await RandomQuote.getRandomQuotePublicAPI()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.handleRandomQuote()
    );
    this.randomQuoteAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteAPI()
    );
    this.randomQuoteOwnAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteAPI(true)
    );
  }
}

export default RandomQuoteApp;
