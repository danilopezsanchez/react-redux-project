var file = require('../utils/_DATA');

describe('_saveQuestionAnswer', () => {
    it('will return the formatted question', async() => {

		var data = {
			"authedUser":"sarahedo", 
			"qid":"6ni6ok3ym7mf1p33lnez", 
			"answer":"optionOne" 
	   }
        var result = await file._saveQuestionAnswer(data);
        expect(result).toEqual(true);
    });

    it('will return an error if data is not correct', async() => {
        var data = {
		};
        await expect(file._saveQuestionAnswer(data)).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
})