/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Here I create `quotes` array filled with objects of quotes and additional information
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
            year: 2011,
            tags: ', television'
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
          },
          {
            quote: 'Winter, spring, summer or fall, all you have to do is call and I\'ll be there. . .you\'ve got a friend.',
            source: 'Carole King',
            citation: 'Tapestry Album',
            year: 1971,
            tags: ', music'
          },
          {
            quote: 'Freedom, freedom, where are you, cuz I need freedom too',
            source: 'Beyonce',
            citation: 'Homecoming',
            year: 2019,
            tags: ', music'
          },
          {
            quote: 'People are just people. They shouldn\'t make you nervous. The world is everlasting -- it\'s coming and it\'s going.',
            source: 'Regina Spektor',
            citation: 'Soviet Kitsch Album',
            year: 2003,
            tags: ', music'
          },
          {
           quote: 'Sometimes I think I lost something really important to me, and it turns out I already ate it.',
           source: 'Troy Barnes',
           citation: 'Community, Season 2: Episode 8',
           year: 2010,
           tags: ', television' 
          }
];

/***
 * Here I create the `getRandomQuote` function with math.floor() and math.random() to pick a random object within the quotes array
***/
function getRandomQuote(array) {
         let randomNum = Math.floor(Math.random() * quotes.length);
         return quotes[randomNum];       
}
getRandomQuote(quotes);
//used console.log to test the function in the console
console.log(getRandomQuote(quotes));

/***
 * Here I created the `printQuote` function using the getRandomQuote function. 
 * Next, I concatendated the HTML strings and pulled the object's quote and source properties and used quoteHTML to store it.
 * Next, I created if statements to include the additional object properties.
 * Finally, I set the code snippet given to me from the project instructions equal to quoteHTML to update the HTML.
***/
function printQuote(array) {
       let randomQuote = getRandomQuote(quotes);
       let quoteHTML = '<p class="quote">' + randomQuote.quote + '</p>'; 
      quoteHTML += '<p class="source">' + randomQuote.source;
      if (randomQuote.citation) {
        quoteHTML += '<span class="citation">' + randomQuote.citation + '</span>';
      }
      if (randomQuote.year) {
          quoteHTML += '<span class="year">' + randomQuote.year + '</span>';
      } 
      if (randomQuote.tags) {
        quoteHTML += '<span class="tags">' + randomQuote.tags + '</span>';
      }
      quoteHTML += '</p>'
     return document.getElementById('quote-box').innerHTML = quoteHTML;
} 


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);