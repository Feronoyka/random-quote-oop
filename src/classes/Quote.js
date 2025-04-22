class Quote {
  constructor(id, text, author) {
    this.id = id;
    this.text = text;
    this.author = author;
  }

  formatText() {
    return `"${this.text}"`;
  }

  formatAuthor() {
    return `<i>© ${this.author}</i>`;
  }
}

export default Quote;
