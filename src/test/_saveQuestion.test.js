var file = require('../utils/_DATA');

describe('_saveQuestion', () => {
    it('will return the formatted question', async() => {
		var optionOne ="This is option one";
		var optionTwo ="This is option two";
		var author="Spiderman"

		var data = {
			"optionOneText": optionOne,
			"optionTwoText": optionTwo,
			"author": author
		}
        var result = await file._saveQuestion(data);
        expect(result.author).toEqual(author);
        expect(result.optionOne.text).toEqual(optionOne);
        expect(result.optionTwo.text).toEqual(optionTwo);
    });

    it('will return an error if data is not correct', async() => {
        var data = {
		};
        await expect(file._saveQuestion(data)).rejects.toEqual("Please provide optionOneText, optionTwoText, and author");
    });
})