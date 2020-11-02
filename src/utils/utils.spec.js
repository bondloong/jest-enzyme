import { trimString, removeObjPropImmutably, getIsValidNumber } from './utils'

describe('trimString util', () => {
    it('positive trimming cases', () => {
        expect(trimString("LongName", 5)).toBe('LongN...');
        expect(trimString("LongName", 4)).toBe('Long...');
        expect(trimString("LongName", 10)).toBe('LongName');
        expect(trimString("               LongName             ", 3)).toBe('Lon...');
    });
    it('negative trimming cases', () => {
        expect(trimString("           ", 4)).toBe('           ');
        expect(trimString(null, 4)).toBeNull();
        expect(trimString(undefined, 4)).toBeUndefined();
        expect(trimString(12345, )).toBe("1234...");
    });
});

describe('getIsValidNumber util', () => {
    it('positive checking cases', () => {
        const numbers = [1, 0, 0.5, '123', '321asd']
        for (let int = 0; int < numbers.length; int++) {
            expect(getIsValidNumber(numbers[int])).toBeTruthy();
        }
    });
    it('negative checking cases', () => {
        const numbers = ['asd321', "qwe", Infinity, undefined, null, [], {}]
        for (let int = 0; int < numbers.length; int++) {
            expect(getIsValidNumber(numbers[int])).toBeFalsy();
        }
    });
});

describe('removeObjPropImmutably util', () => {
    it('positive removing cases', () => {
        expect(removeObjPropImmutably({a: 1, b: 2}, 'b')).toMatchObject({a: 1});
        expect(removeObjPropImmutably({a: () => {}, b: 2}, 'a')).toMatchObject({b: 2});
    });
    it('negative checking cases', () => {
        const notValidObject = [undefined, null, []]
        for (let int = 0; int < notValidObject.length; int++) {
            const element = notValidObject[int];
            expect(removeObjPropImmutably(notValidObject[int])).toMatchObject({}); 
        }
    });
});