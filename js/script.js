/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        source: 'Oscar Wilde'
    },
    {
        quote: 'A room without books is like a body without a soul',
        source: 'Marcus Tullius Cicero'
    },
    {
        quote: 'One fish, two fish, red fish, blue fish.',
        source: 'Dr. Seuss',
        citation: 'One Fish, Two Fish, Red Fish, Blue Fish',
        year: 1960
    },
    {
        quote: 'People demand freedom of speech as a compensation for the freedom of thought which they seldom use.',
        source: 'Soren Kierkegaard',
        tags: 'philosophy'
    },
    {
        quote: 'Well Seymour, you are an odd fellow, but I must say, you steam a good ham.',
        source: 'Superintendent Chalmers',
        citation: '22 Short Films About Springfield',
        year: 1996,
        tags: 'humor'
    }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // generate a random number between 0 and length of quotes
    quotesLen = quotes.length;
    randNum = Math.floor(
        Math.random() * quotesLen
    );
    
    // use the random number to pull back an object from the quotes array
    randQuote = quotes[randNum];
    return randQuote;
}

/***
 * `randomBackgroundColor` function
 *      Changes the webpage background every time the quote changes
***/
function randomBackgroundColor() {
    // generate 3 random numbers
    _red = Math.floor(
        Math.random() * 256
    ) + 1;
    _blue = Math.floor(
        Math.random() * 256
    ) + 1;
    _green = Math.floor(
        Math.random() * 256
    ) + 1;

    // combine to a single rgb
    _rgb = 'rgb(' + [_red, _blue, _green].join() + ')';

    // change the background color
    // (referenced https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp for assistance on this one.)
    document.body.style.backgroundColor = _rgb;
};

/***
 * `printQuote` function
***/
function printQuote() {
    // call getRandomQuote function
    randQuote = getRandomQuote();

    // html for printing the quote information
    _html = '<p class="quote">' + randQuote.quote + '</p>' + 
            '<p class="source">' + randQuote.source;

    // conditional check for adding citation if available
    if ( 'citation' in randQuote ) {
        _html = _html + '<span class="citation">' + randQuote.citation + '</span>';
    };

    // conditional check for adding year if available
    if ( 'year' in randQuote ) {
        _html = _html + '<span class="year">' + randQuote.year + '</span>';
    };

    // conditional check for adding tags if available
    if ( 'tags' in randQuote ) {
        _html = _html + '<span class="tags"><br>' +
            '(' + randQuote.tags + ')</strong></span>';
    };

    // close the _html string
    _html = _html + '</p>';

    // return the _html string
    document.getElementById('quote-box').innerHTML = _html;

    // change the background color
    randomBackgroundColor();
}



// refresh every 10 seconds
setInterval(
    // call the printQuote function
    //printQuote(),
    function() {
        printQuote();
    },

    // every 10 seconds
    10 * 1000
);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);