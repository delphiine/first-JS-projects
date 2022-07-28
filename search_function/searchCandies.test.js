const {candies, searchCandies} = require('./searchCandies');

describe('Candies search', () => {
    it("returns the number of items in the 'Candies' array",()=>{
      expect(candies.length).toBe(13)
    });

    it('returns names of candies that starts with specific letters and cost less than a predefined number', () => {
      expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
      expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ])
      expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
      expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
    });

    it('search prefix is case insensitive', () => {
      expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ])
      expect(searchCandies('mA', 10)).toEqual([ 'Mars', 'Maltesers' ])
      expect(searchCandies('MA', 10)).toEqual([ 'Mars', 'Maltesers' ])
    });
});
