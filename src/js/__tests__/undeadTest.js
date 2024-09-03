import Undead from '../undead'

test('Создание Undead', () => {
	const undead = new Undead('Егор', 'Undead');

	const obj = {
		name: 'Егор',
		type: 'Undead',
		health: 100,
		level: 1,
		attack: 25,
		defence: 25,
	};

	expect(undead).toEqual(obj);
})