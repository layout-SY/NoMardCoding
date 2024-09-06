const quotes = [
	{
		quote: 'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
		author: 'Marilyn Monroe',
	},
	{
		quote: 'So many books, so little time.',
		author: 'Frank Zappa',
	},
	{
		quote: 'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
		author: 'Albert Einstein',
	},
	{
		quote: 'A room without books is like a body without a soul.',
		author: 'Marcus Tullius Cicero',
	},
	{
		quote: 'You only live once, but if you do it right, once is enough.',
		author: 'Mae West',
	},
	{
		quote: 'Be the change that you wish to see in the world.',
		author: 'Mahatma Gandhi',
	},
	{
		quote: 'In three words I can sum up everything Ive learned about life: it goes on.',
		author: 'Robert Frost',
	},
	{
		quote: 'If you tell the truth, you dont have to remember anything.',
		author: 'Mark Twain',
	},
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const todaysquotes = quotes[Math.floor(Math.random() * quotes.length)];
//Math.round(num) num 반올림
//Math.ceil(num) num 올림
//Math.floor(num) num 내림

quote.innerText = todaysquotes.quote;
author.innerText = todaysquotes.author;
