import quotes from '../data/quotes.js';
import Quote from './Quote.js';
import MathUtils from '../utils/MathUtils.js';

class RandomQuote {
  static getRandomQuote() {
    const { id, text, author } =
      quotes[MathUtils.generateRandomInt(quotes.length)];
    return new Quote(id, text, author);
  }

  /**
   * 1) Each async function return promise
   * 2) If on the "await" line of code is rejected, code in the same block below "await" is not executed
   * 3) Promise returned by getRandomQuoteViaAPI function is always fulfilled
   * 4) Result "fulfilled" (promise) will be each either Quote or undefined
   * 5) Therfore there is no have to call getRandomQuoteViaAPI function in try/catch (./RandomQuotesApp)
   */

  static async getRandomQuoteViaAPI() {
    const url = 'https://quoteslate.vercel.app/api/quotes/random';
    const option = { headers: { 'Content-Type': 'application/json' } };
    try {
      const res = await fetch(url, option);
      const { id, quote: text, author } = await res.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // static getRandomQuoteViaAPI() {
  //   const url = 'https://quoteslate.vercel.app/api/quotes/random';
  //   return fetch(url, { headers: { 'Content-Type': 'application/json' } })
  //     .then((res) => res.json())
  //     .then(({ id, quote: text, author }) => new Quote(id, text, author))
  //     .catch((error) => console.error('Error:', error));
  // }
}

export default RandomQuote;
