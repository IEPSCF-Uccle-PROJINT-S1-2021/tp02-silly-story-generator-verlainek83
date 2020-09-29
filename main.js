const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
document.querySelector('html').style.backgroundColor = 'red';

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

var storyText = "It was 94 fahrenheit outside, so: insertx: went \
for a walk.When they got to: inserty: , they stared in horror \
for a few moments, then: insertz: .Bob saw the whole thing, \
but was not surprised—: insertx: weighs 300 pounds, \
and it was a hot day.";

var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];

var insertY = ['the soup kitchen ', 'Disneyland ', ' the White House '];

var insertZ = ['spontaneously combusted ', 'melted into a puddle on the sidewalk ',
    'turned into a slug and crawled away '
];
randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertX);
    var zItem = randomValueFromArray(insertX);
    insertx = newStory(xItem);
    inserty = newStory(yItem);
    insertz = newStory(zItem);

    if (customName.value !== '') {
        let name = customName.value;
        name.replace(/Bob/g, name);

    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 * 0.071428571428571) + 'stone';
        weight.replace(/300 pounds/g, weight);
        let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        temperature.replace(/94 Fahrenheit/g, temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}