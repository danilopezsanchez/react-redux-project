var file = require('../utils/_DATA');

describe('getusers', () => {
    it('will return the users from server', async() => {

        var result = await file._getUsers();
		expect(result).not.toEqual(undefined);
		expect(result).not.toEqual({});
		expect(result).not.toBeNull();
        expect(Object.keys(result).length).toBeGreaterThan(0);
    });

})