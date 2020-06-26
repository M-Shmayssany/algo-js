const readlineSync = require("readline-sync");

let living = ["castle", "mushroom", "house", "tree house", "caravan", "shoe"];
let daughter = ["Masako","Sikhanyiso","Salma","Sitadevi","Anastasia","Alexia"];
let prize = ["Money","a violin","a ring","a gold key","a magic sword","a unicorn"];
let instrument = ["piano","flute","guitar","harp","clarinet","drums"];
let boy = ["gardener","cleaner","farmer","cook","teacher","builder"];
let pet = ["dog","monkey","frog","parrot","rabbit","cat"];

let livingA = new Number(readlineSync.question('Feiry story\nThis story is about a king and queen. Where do thay live?\n1. castle.\n2. mushroom.\n3. house.\n4. tree house.\n5. caravan.\n6. shoe.\n Choose: '));
let daughterA = new Number(readlineSync.question('The  king and queen have a daughter. What`s her name?\n1. Masako.\n2. Sikhanyiso.\n3. Salma.\n4. Sitadevi.\n5. Anastasia.\n6. Alexia.\n Choose: '));
let prizeA = new Number(readlineSync.question('What`s the best prize to get?\n1. Money.\n2. a violin.\n3. a ring.\n4. a gold key.\n5. a magic sword.\n6. a unicorn.\n Choose: '));
let instrumentA = new Number(readlineSync.question('What`s your favourite musical instrument?\n1. piano.\n2. flute.\n3. guitar.\n4. harp.\n5. clarinet.\n6. drums.\n Choose: '));
let boyA = new Number(readlineSync.question('There`s a boy in this story. what`s his job?\n1. gardener.\n2. cleaner.\n3. farmer.\n4. cook.\n5. teacher.\n6. builder.\n Choose: '));
let petA = new Number(readlineSync.question('The boy in the story has got a pet. what is it?\n1. dog.\n2. monkey.\n3. frog.\n4. parrot.\n5. rabbit.\n6. cat.\n Choose: '));
console.log("Once upon a time there was a king and a queen. They lived in a lovely golden " + living[livingA - 1] + " and had a beautiful doughter, " + daughter[daughterA - 1] + ". But " + daughter[daughterA - 1] + " was very unhappy. She never laughed or smiled. 'We will give " + prize[prizeA - 1] + " to the person who can make " + daughter[daughterA - 1] + " happy,`said the queen. A musician come and played the " + instrument[instrumentA - 1] + ", a fairy said a magic spell and a joker come and toldjokes, but " + daughter[daughterA - 1] + " did not smile or laugh. A young " + boy[boyA - 1] + " come to work at the queen's " + living[livingA - 1] + ". He come with his little " + pet[petA - 1] + ". The little " + pet[petA - 1] + " liked to play. One dey, " + daughter[daughterA - 1] + " sow the " + pet[petA - 1] + " and stared to smile-then she laughed. The queen heard her daughter and sow the " + pet[petA - 1] + ". The " + pet[petA - 1] + " was happy to get " + prize[prizeA - 1] + "!")
