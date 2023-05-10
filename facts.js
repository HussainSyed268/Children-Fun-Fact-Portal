const facts = [{fact:"Elephants can communicate with each other using infrasonic sounds that are below the range of human hearing.",gif:"https://i.stack.imgur.com/arIyq.gif"}
    ,
    {fact:"The world's largest snowflake on record measured 15 inches wide and 8 inches thick.",gif:"https://img1.picmix.com/output/stamp/normal/3/9/8/1/1081893_f4deb.gif"},
    {fact:"A group of flamingos is called a flamboyance.",gif:"https://i.pinimg.com/originals/9c/af/7e/9caf7ea2f219c2d0f53e76d416bff163.gif"},
    {fact:"A sneeze travels out of your mouth at over 100 miles per hour.",gif:"https://i.guim.co.uk/img/media/564dd785c43806d2d509c7db59003f479dc11e4b/0_54_1659_995/master/1659.jpg?width=465&quality=85&dpr=1&s=none"},
    {fact:"Hummingbirds can fly backwards.",gif:"https://media3.giphy.com/media/a4hc0w3KpIjLy/giphy.gif"},
    {fact:"A caterpillar has more muscles than a human.",gif:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRYOU9ZOBbp-uWbU8hAZIOQfvObBPBPMchg&usqp=CAU"},
    {fact:"The largest recorded snowman was 113 feet tall.",gif:"https://www.readwritethink.org/sites/default/files/styles/focal_point_350x350/public/1783_0.jpg?h=51a72048&itok=leDKwqVQ"},
    {fact:"Kangaroos cannot walk backwards.",gif:"https://i.gifer.com/Sjh3.gif"},
    {fact:"A giraffe's tongue is up to 18 inches long.",gif:"https://media.giphy.com/media/3o6nUVr4MVgKb9zDZ6/giphy.gif"},
    {fact:"The human nose can detect over 1 trillion different scents.",gif:"https://media.giphy.com/media/3oEjHXnhx3x2iA5lQY/giphy.gif"},
    {fact:"A group of penguins in the water is called a raft.",gif:"https://media.giphy.com/media/xUPGcfBYfzPqrvIBSE/giphy.gif"},
    {fact:"The longest recorded flight of a chicken is 13 seconds.",gif:"https://media.giphy.com/media/l3vRba5cZpOUM1cfS/giphy.gif"},
    {fact:"Starfish have no brains.",gif:"https://media.giphy.com/media/l0K41ZlOmJVq16kKI/giphy.gif"},
    {fact:"A blue whale's heart is the size of a small car.",gif:"https://media.giphy.com/media/Kf4wygZf70kaWIMc6p/giphy.gif"},
    {fact:"The world's smallest mammal is the bumblebee bat.",gif:"https://media.giphy.com/media/aV8Re460HHdZK/giphy.gif"},
    {fact:"Sloths only poop once a week.",gif:"https://media.giphy.com/media/IG6i30q4DMT0Q/giphy.gif"},
    {fact:"Owls can turn their heads up to 270 degrees.",gif:"https://media.giphy.com/media/11nJ3kaAXETWQo/giphy.gif"},
    {fact:"A group of rhinoceroses is called a crash.",gif:"https://media.giphy.com/media/2wN5OlLBhBzc4/giphy.gif"},
    {fact:"The lifespan of a housefly is only 14 days.",gif:"https://media.giphy.com/media/Dh8ULOqmVxHGoGSrku/giphy.gif"},
    {fact:"Ants never sleep.",gif:"https://media.giphy.com/media/MLYvQVgQ1RSA8/giphy.gif"},
];

let currentFactIndex = 0;
const factTextEl = document.getElementById("fact-text");
const gifElement = document.getElementById("gif");
const factNumberEl = document.getElementById("fact-number");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

function showFact() {
    const fact = facts[currentFactIndex].fact;
    factTextEl.textContent = fact;
    const gif = facts[currentFactIndex].gif;
    gifElement.src=gif;
    factNumberEl.textContent = `Fact #${currentFactIndex + 1} out of ${facts.length}`;

    // Add the "loading" class to the fact container to activate the animation
    factContainerEl.classList.add("loading");

    // Remove the "loading" class after a short delay to allow the animation to complete
    setTimeout(() => {
        factContainerEl.classList.remove("loading");
    }, 500);
}

function showPreviousFact() {
    currentFactIndex--;
    if (currentFactIndex < 0) {
        currentFactIndex = facts.length - 1;
    }
    showFact();
}

function showNextFact() {
    currentFactIndex++;
    if (currentFactIndex >= facts.length) {
        currentFactIndex = 0;
    }
    showFact();
}

previousBtn.addEventListener("click", showPreviousFact);
nextBtn.addEventListener("click", showNextFact);

showFact();