# Guess_My_Fav_Number
Live on this link https://chirag13222.github.io/Guess_My_Fav_Number/




HTML (index.html):
Document Type Declaration (<!DOCTYPE html>):
This line defines the document as an HTML5 document.
HTML Structure:
The document is structured with the usual HTML elements: <html>, <head>, and <body>.
The document's language is set to English using the lang attribute.
Meta Tags:
<meta charset="UTF-8">: Specifies the character encoding for the document as UTF-8.
<meta name="viewport" content="width=device-width, initial-scale=1.0">: Configures the viewport settings for responsive design.
<meta http-equiv="X-UA-Compatible" content="ie=edge">: Provides compatibility settings for Internet Explorer.
<link rel="website icon" href="icon.png">: Defines the website icon (favicon) to be displayed in the browser tab.
Styles and Title:
<link rel="stylesheet" href="style.css">: Links an external stylesheet named "style.css" for styling the web page.
<title>Guess My Number!</title>: Sets the title of the web page displayed in the browser tab.
Body Structure:
The main content of the web page is structured within <header> and <main> sections.
The <header> contains a title, a description, a button, and a hidden number.
The <main> section contains two sections, one for user input and one for displaying messages and scores.
JavaScript is loaded at the end of the <body> to ensure it's executed after the HTML is parsed.
JavaScript (script.js):
Variables:
secretNumber: Stores the randomly generated secret number.
score: Keeps track of the player's score.
highScore: Stores the player's highest score.
Functions:
DisplayMessage(message): A function to update the message displayed on the web page.
Event Listeners:
The JavaScript code includes event listeners for the "Check!" and "Again!" buttons, allowing the user to interact with the game.
When the "Check!" button is clicked, it checks the user's guess against the secret number and updates the message, score, and page appearance accordingly.
When the "Again!" button is clicked, it resets the game.
CSS (style.css):
CSS Reset:
Resets margin, padding, and box-sizing for all HTML elements.
Sets the root font size to 62.5% for easier rem-based styling.
Body Styling:
Applies a background color and font family to the entire page.
Layout Styling:
Defines the layout for the header and main sections.
Positions the header's title and number.
Element Styling:
Styles various elements like the title, number display, description, input field, buttons, and messages.
Uses CSS classes for styling consistency and readability.
