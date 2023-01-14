var file = require('../utils/_DATA');

describe('getQuestions', () => {
    it('will return the questions from server', async() => {

        var result = await file._getQuestions();
		expect(result).not.toEqual(undefined);
		expect(result).not.toEqual({});
		expect(result).not.toBeNull();
        expect(Object.keys(result).length).toBeGreaterThan(0);
    });

})