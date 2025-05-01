import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, option);
      const quote = await res.json();
      const { id, quote: text, author } = quote;
      if (id && text && author) {
        return new Quote(id, text, author);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

export default RandomQuote;
