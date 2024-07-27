const { describe } = require("yargs");
const { getFullName } = require("./person");

test('Check with all correct names: FIRST MIDDLE LAST', () => {
    const participant = {firstName: "James", middleName: "Amante", lastName:"Clarit"};
    const expected = participant.firstName + participant.middleName + participant.lastName;
    const result = getFullName(participant);

    //assess
    expect(result).toBe(expected);
});

test('getFullName without first name and last name is handled properly', () => {
    const participant = {};
    const expected = "First name, middle name, and last name is required!";
    const result = getFullName(participant);

    //assess
    expect(result).toBe(expected);
});

test("Check if First Name exists",()=>{
    const participant = {middleName: "Amante", lastName: "Ski"};

    const expected = "First name is required!";
    const result = getFullName(participant);
    expect(result).toBe(expected);
});

test("Check if Middle Name exists",()=>{
    const participant = {firstName: "James", lastName: "Clarit"};

    const expected = "Middle name is required!";
    const result = getFullName(participant);
    expect(result).toBe(expected);
});

test("Check if Last Name exists",()=>{
    const participant = {middleName: "Amante", firstName: "James"};

    const expected = "Last name is required!";
    const result = getFullName(participant);
    expect(result).toBe(expected);
});
