/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/,);
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
        chains[this.words[i]].push(this.words[i+1]);
      } else {
        chains[this.words[i]] = [this.words[i+1] || null];
      }
    }
    return chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let chain = this.makeChains();
    let story = [];
    let keyArray = Object.keys(chain);


    //when we choose random word from the key, use getRandNum by sending 
    // Obj[key].length. That returns a random number that we will use to pick the word

    //append seed word
    let randomNumber = this.getRandNum(keyArray.length);
    story.push(keyArray[randomNumber]);

    for(let i = 0; i < numWords-1; i++){
      let randIndex = this.getRandNum(chain[story[i]].length);
      if(chain[story[i]][randIndex]  === null){
        break;
      }
      else{
        story.push(chain[story[i]][randIndex]);
      }
    }
    return story.join(' ');

  }

  getRandNum(length){
    return Math.floor(Math.random() * Math.floor(length));
  }
}

let markTest = new MarkovMachine("The quick brown fox jumped over the lazy fox and brown is a quick color");
console.log(markTest.makeChains());
console.log(markTest.makeText());