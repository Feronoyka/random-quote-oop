import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    return fetch(url, { headers: { 'Content-Type': 'application/json' } })
      .then((res) => res.json())
      .then(({ id, quote: text, author }) => new Quote(id, text, author))
      .catch((error) => console.error('Error:', error));
  }
}

export default RandomQuote;
