import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first argument', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expectedResult = 'someClass firstClass secondClass';
        expect(classNames('someClass', {}, ['firstClass', 'secondClass']))
            .toBe(expectedResult);
    });

    test('with mods', () => {
        const expectedResult = 'someClass hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }))
            .toBe(expectedResult);
    });

    test('with additional classes and mods undefined', () => {
        const expectedResult = 'someClass additionalClass hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['additionalClass'],
        ))
            .toBe(expectedResult);
    });
});
