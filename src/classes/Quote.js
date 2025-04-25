class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatQuote() {
    return `<i>"${this.text}"</i>`;
  }

  formatAuthor() {
    return `© ${this.author}`;
  }
}

export default Quote;
