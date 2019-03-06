const MarkovMachine = require("./markov");

describe("markov text maker", function(){
    let o;
    beforeEach(function(){
        let text = "the cat in the hat plays with other cat and has hat cheese is delicious but also full of chesese fats and more cheese";
        let mm = new MarkovMachine(text);
        o = mm.makeChains();
        // console.log("Test o", o)
    })
    test("shows that makeChains creates proper object", function(){
        expect(Object.keys(o).length).toEqual(19);
    })
    test("show null in proper key", function(){
        expect(o.cheese[1]).toEqual(null);
    })
})