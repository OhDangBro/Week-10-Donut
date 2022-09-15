// Manager require //
const Manager = require('../lib/Manager');

// Manager Object //   
test('creates an Manager object', () => {
    const manager = new Manager('Jared', 1, 'Jared@gmail.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Get manager role //
test('gets role of employee', () => {
    const manager = new Manager('Jared', 1, 'Jared@gmail.com');
expect(manager.getRole()).toEqual("Manager");
}); 