const { introduce } = require("./integration");

// integration.test.js
test('test that will make sure introduce handles missing properties', () => {
    //Arrange
    const person = {}

    //Act
    const expected = "Name and Age is required!";
    const result = introduce(person); 

    //Assess
    expect(result).toBe(expected);
});

test('test that handles empty string property values', () => {
    //Arrange
    const person = {age: '', name: ''}

    //Act
    const expected = "Name and Age is required!";
    const result = introduce(person); 

    //Assess
    expect(result).toBe(expected);   
});

test('test that handles if no name', () => {
    //Arrange
    const person = {age: 19}

    //Act
    const expected = "Name is required!";
    const result = introduce(person); 

    //Assess
    expect(result).toBe(expected);   
});

test('test that handles if no age', () => {
    //Arrange
    const person = {name: 'James'}

    //Act
    const expected = "Age is required!";
    const result = introduce(person); 

    //Assess
    expect(result).toBe(expected);   
});