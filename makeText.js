/** Command-line tool to generate Markov text. */
const MarkovMachine = require("./markov");
const fs = require("fs");
const axios = require("axios");
const process = require("process");

let mm = new MarkovMachine()