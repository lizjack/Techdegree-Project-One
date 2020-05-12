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
let quotes = [
          {
            quote: 'The fact that you can build and you can make nonviolent change through organization; that\'s what I want my legacy to be.',
            source: 'Dolores Huerta',
            citation: 'aaro.org',
            year: 2004
          },
          {
            quote: 'We are capable of building community anywhere.',
            source: 'Austin Channing Brown',
            citation: 'Im Still Here',
            year: 2018
          },
          {
            quote:'We\'re together. That makes this the perfect timeline.',
            source: 'Abed Nadir',
            citation: 'Community, Season 3: Episode 4',
            year: 2011
          },
          {
            quote: 'If I\'ve learned anything, it\'s that I do not have to be limited by age or resources to make change and invigorate people.',
            source: 'Nadya Okamoto',
            citation: 'Feminist.com',
            year: 2020
          },
          {
            quote: 'I\'m streetlight, chillng in the heat. I illuminate the stories of the people in the street.',
            source: 'Usnavi',
            citation: 'In the Heights',
            year: 2005
          }
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
         let randomNum = Math.floor(Math.random() * quotes.length);
         let randomQuote = quotes[randomNum];
         return randomQuote;
         console.log(randomQuote);
}
console.log(getRandomQuote(quotes));


/***
 * `printQuote` function
***/
function printQuote(array) {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);