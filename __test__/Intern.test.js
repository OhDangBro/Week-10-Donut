const Intern = require('../lib/Intern');

//Intern Object //
test('creates an Intern object', () => {
    const intern = new Intern('John', 3, 'John@aol.com', 'Rutgers');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// pulls school data //
test('gets employee school', () => {
    const intern = new Intern('John', 3, 'John@aol.com', 'Rutgers');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// pulls role //
test('gets role of employee', () => {
    const intern = new Intern('John', 3, 'John@aol.com', 'Rutgers');

    expect(intern.getRole()).toEqual("Intern");
}); 