const imageUrls =
    [
        "https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif",
        "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif",
    ];

function main() {
    console.log("hello world");
    const data = {
        title: 'Card Title1',
        description: 'This is a sample card description.',
        img: 'https://example.com/image.jpg',
        link: 'https://example.com'
    }

    const newDiv = document.createElement("div");
    // and give it some content
    const newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    console.log(imageUrls);
    const githubToken = window._env_ && window._env_.GITHUB_TOKEN;
    console.log('my token is ', window, githubToken);

    appendCard(4, "https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif", "My title")
}
main();

function appendCard(n, imgUrl, CardTitle) {
    const card = document.createElement('div');
    card.className = `card ${n}`;

    // Create the card_image div
    const cardImage = document.createElement('div');
    cardImage.className = 'card_image';

    // Create the img element and set its src attribute
    const img = document.createElement('img');
    img.src = imgUrl;

    // Append the img element to the card_image div
    cardImage.appendChild(img);

    // Create the card_title div
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card_title title-white';

    // Create the p element and set its text content
    const p = document.createElement('p');
    p.textContent = CardTitle;

    // Append the p element to the card_title div
    cardTitle.appendChild(p);

    // Append the card_image and card_title divs to the main card div
    card.appendChild(cardImage);
    card.appendChild(cardTitle);

    // Append the main card div to the body
    document.getElementsByClassName("cards-list")[0].appendChild(card);
}



