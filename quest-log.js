const questLog = ["Collect 10 Firefly Wings",  
"Defeat the Goblin King",  
"Find the Lost Sword of Oakhaven"
];

console.log("You should: " + questLog.join(","));

console.log("The hero has " + questLog.length + " quests.");

console.log(questLog[0]);

console.log(questLog.push( "Deliver the Royal Scroll"));

console.log(questLog.pop());

console.log(questLog.unshift("Rescue the Blacksmith's Cat"));

console.log(questLog.shift());

console.log(questLog.splice("Slay the Dragon of Mount Doom"));