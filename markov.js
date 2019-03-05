/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chains = {};

    for (let i = 0; i < this.words.length; i++){
      if (chains.hasOwnProperty(this.words[i])){
        chains[this.word[i]].push(this.words[i+1]);
      } else {
        chains[this.word[i]] = [this.words[i+1]];
      }
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}

