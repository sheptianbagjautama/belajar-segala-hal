var heroes = [
    { name: 'juggernaut' },
    { name: 'nyx' },
    { name: 'io' }
];

var evil = [
    { name: 'joker'},
    { name: 'sun gokong'},
    { name: 'endasmu'}
];

var findHero = heroes.find(hero => hero.name === 'nyx');
var findEvil = evil.find(easdf => easdf.name == 'joker');
console.log(findHero);
console.log(findEvil);