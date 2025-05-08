import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';
import config from '../../config.js';

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }

  static async getRandomQuotePublicAPI() {
    const url = `${config.PUBLICK_API}/api/quotes/random`;
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

  static async getRandomQuoteOwnAPI() {
    const url = `${config.API_URL}/quotes/random-quote`;
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, option);
      const quote = await res.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.log(error);
    }
  }
}

export default RandomQuote;
