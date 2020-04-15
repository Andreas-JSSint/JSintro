# Lesson01 - Intro to HTML, CSS, JS
## Introduction
Nearly every modern website consits basically of three different programming languages - HTML, CSS, JavaScript.

*  HTML - basic **structure** or skeleton of websites
*  CSS - used to control **presentation**, formatting, and layout
*  JavaScript - used to control **behavior** of different elements

### Whats the role of JavaScript here?

Originally JavaScript was developed to turn websites into a application platform. At the same time it should enable isomorphic development, which means beeing able to use the same language for server as for client side development. Nevertheless, for a long time it was not really accepted as a serious programming language, but gaining more and more importance over the years up until today.

An in depth article about how JavaScript emerged over the time you can find here:   
https://auth0.com/blog/a-brief-history-of-javascript/

### Why do we use JavaScript for application development?
Although originally developed for the web only, with the help of different frameworks Javascript has become a fully integrated programming language so that the core concepts of web developing can be taken to the desktop level and expanded with additional features.   
General upsides of the language are:
* Open source - so no license struggle
* Relatively easy to learn and implement
* Platform independent
* Big community support, if there is a problem in 99% you can find the solution by googling it 

Of course there are some downsides as security issues (the code can be seen by the clients) and the lack of extended debugging when developing, but there are solutions to this, that we will get to know later.

#
## Basic structure of a website
Cutting to the chase the following picture shows a basic HTML structure. 

*By the way... You can try out the following examples yourself by just creating an html file in your code editor, take the code snippets, save them into the html file and then load the file with for example the Chrome browser.*

```html
<!DOCTYPE html>
<html lang="en">

<head>
</head>

<body>    
</body>

</html>
```

* ```<head>``` is where all metadata and references to external files like CSS or JavaScript files belongs. 
* ```<body>``` is where all elements of the website and the JavaScript code belongs

So a very simple website could look like following:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>
</head>

<body>    
    <h1>Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...</p>
</body>

</html>
```

The ```<head>``` tag is filled with some basic information about the character set of the website and the title. The body only holds an headline ```<h1>``` and a paragraph ```<p>```. That results in following representation in the browser:

![alt text][websiteBasic]

#
## Styling the website
#### General selectors
We got a static website now without any styling or behaviour. The styling we see in the example is the default styling the browser uses for ```<h1>``` and ```<p>``` tags if there is nothing else defined. If we want for example change the styling now with CSS we have to:

1. Insert a ```<style>``` tag into the ```<head>``` of the website 
2. Write some CSS to define the style

Let's change the background color of the website:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>
    
    
    <style>
        /* CSS */
        body {
            background-color: lightcyan;
        }
    </style>

</head>
```
With the "body" selector we get now access to the ```<body>``` element and with "background-color" we define a new color for the background. The result in the browser looks like this:

![alt text][websiteBasicBackground]

So far so good. We can access the ```<body>```  tag now, which effects every element that's part of it. But what if we want to access a single element, for example the headline ```<h1>```? Easy as pie, it's the same as referring to the ```<body>``` tag in CSS!  
Following CSS code will make the headline appear red in the browser.

```css
body {
    background-color: lightcyan;
}

h1 {
    color: red;
}
```
![alt text][websiteBasicHeadline]

#### ID and class selectors
We can style every tag element of the website now by just referring to it in CSS via its actual tag name. The problem we have now is, that if we have multiple elements with the same tag name, for example two ```<h1>``` headlines, we can't change the style explicit for only one of the two headlines. Following:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>

    <!-- CSS -->
    <style>
        body {
            background-color: lightcyan;
        }
        h1 {
            color: red;
        }
    </style>

</head>

<body>    
    <h1>Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...
    </p>
    <h1>Hello again!</h1>
</body>

</html>
```
...will result in this:

![alt text][websiteBasicHeadlineDouble]

The solution for this is to: 
1. Give the different elements in the  ```<body>``` tag certain "names" and put them in "groups"
   * translated to HTML a "name" is an ```id``` and a "group" is a ```class```
2. Write some CSS to define the style for the ```id``` and ```class```

We can define an ```id``` or ```class``` for an element by setting the elements attributes. For an ```<h1>``` element this looks for example like this: 

```html
    <h1 id="headline01" class="headlines">Hello JSS!</h1>
```
Now we can access this in CSS by choosing additional selectors. The selectors look like follwing: 
```css
/* '#' means I want to access all elements that have following class*/
.headlines {
    border-bottom: 1px solid black;
}
/* '#' means I want to access an element with following id  */
#headline01 {
    color: orange;
}
```
The whole html code would now look like this:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>

    <!-- CSS -->
    <style>
        body {
            background-color: lightcyan;
        }

        h1 {
            color: red;
        }
      
        .headlines {
            border-bottom: 1px solid black;
        }
      
        #headline01 {
            color: orange;
        }
    </style>

</head>

<body>
    <h1 id="headline01" class="headlines">Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...
    </p>
    <h1 class="headlines">Hello again!</h1>
</body>

</html>
```
And the result in the browser...

![alt text][websiteUnderline]

Both headlines have a border on the bottom now because they are in the  ```class="headlines"``` and are selected by CSS with  ```.headlines```, but only the first headline has a different color. It has the ```id="headline01"``` and is selected by CSS with ```#headline01```

#### Conclusion

With CSS we can 
* Select different elements of the HTML with different selectors like class or id selectors
* Apply different styles by setting style attributes like background colors to certain
elements
* It is also possible to implement some kind of conditional behaviour but we will look into that later
* A very good reference for CSS is the Mozilla reference sheet. It gives a general overview about the different selectors and attributes
  * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference

#
## Coming to life
Although we applied some color and lines to the web page we still only have a static website. To change this we have to implement some JavaScript.  

#### Preparing the HTML
Let's assume we want the second headline to disappear if we click on a button. We would have to do following steps to approach this: 

1. Define a ```<button>``` in our html code to have something to click on
2. Give the button an ```id``` so we can find it easily
3. Give the second headline an ```id``` so we can find it easily
4. Define some place in the HTML where our JavaScript code is able to run
5. Write some JavaScript code that hides the headline

If we do steps 1 - 4 our html code would now look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>

    <!-- CSS is hidden -->
    <style>
        /* ... */
    </style>
</head>

<body>
    <h1 id="headline01" class="headlines">Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...
    </p>

    <!-- Step 3 -->
    <h1 id="headline02" class="headlines">Hello again!</h1>
    <!--  -->
    
    <!-- Step1 & Step2 -->
    <button id="hideButton">Click!</button>
    <!--  -->

    <!-- Step 4 -->
    <script>
    </script>
    <!--  -->
</body>

</html>
```
In the browser we now see a button.

![alt text][websiteButton]

#### What the JavaScript?!
If we look at the task of hiding the headline when clicking the button, we basically have take care of two things:
1. Checking if and when the button is clicked
2. Hiding the headline 

Luckily JavaScript is basically designed for the first task. In JavaScript there is something called the event loop, which is simplified just a program loop that executes a call stack again and again. A call stack is for example a group of "functionalities" where every group member is executed one after the other.   

How does this help us?  
Well one of these "functionalities" happen to listen if there appeared an event in the browser that has been registered before. Meaning we can tell JavaScript to listen to our "Button clicked" event and make it part of the call stack. Javascript will then execute a function we can define by ourselves if the event appears in the browser (user clicks the button).

#### Implementing the theory
First we have to tell JavaScript which element to listen to. So we grab the element from the HTML code and then regeister an event to it.

```javascript
//Grabbing the button 
const hideButton = document.querySelector('#hideButton');
//Grabbing the headline 
const headline02 = document.querySelector('#headline02');
//Register the event
hideButton.addEventListener(/*...*/)
```
When adding the EventListener we must tell Javascript what to to with it. We do this by giving the ```addEventListener()``` function some parameter. First one is the event type and the second one is the function that should get executed, when seeing the event in the browser. 

```javascript
const hideButton = document.querySelector('#hideButton');
const headline02 = document.querySelector('#headline02');

//Register 'click event'
hideButton.addEventListener('click', hideFunction);

function hideFunction(){
    // where the love happens
}
```

#### The smart way
So the only thing that is missing is the actual code that hides the headline element when clicking the bottom. We could use JavaScript to just remove the element from the html so that it's gone for the eternal existence of the universe, but that would make it quite hard to get it back if we want to show the headline again. We would have to store it in some kind of way.  

Bottom line here, there must be a smarter way than just deleteing the element and of course there is. Thinking of CSS again, we could just tell JavaScript to add a class to the headline, that tells CSS to hide the headline.  
First we modify the CSS part of the html code:
```css
.hideClass {
    display: hide;
}
```
Then we add the necessary code into a CSS part of the html code:

```javascript
function hideFunction(){
     headline02.classList.add('hideClass');
}
```
The whole html file would now look like this

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>

    <!-- CSS -->
    <style>
        body {
            background-color: lightcyan;
        }

        h1 {
            color: red;
        }

        .headlines {
            border-bottom: 1px solid black;
        }

        #headline01 {
            color: orange;
        }
        .hideClass{
            display: none;
        }
    </style>

</head>

<body>
    <h1 id="headline01" class="headlines">Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...
    </p>
    <h1 id="headline02" class="headlines">Hello again!</h1>
    <button id="hideButton">Click Me!</button>

     <!-- JS -->
    <script>        
        const hideButton = document.querySelector('#hideButton');       
        const headline02 = document.querySelector('#headline02');
       
        hideButton.addEventListener('click', hideFunction);
        function hideFunction() {
            headline02.classList.add('hideClass');
        }
    </script>
</body>

</html>
```
We should now see that the second headline disappears when we click the button.

#### Multiple files
Last but not least, modern websites of course have a bigger functionality than just hiding a headline on a button click. Writing all this code into one file can end in a complete mess really fast. Also smart packaging is not really a topic when you just have one file.  

To have a better code organization it is always smart to put the JavaScript and CSS code in seperate files. To do this, we can refer to them by path.
For the CSS file we can just create a new .css file and put all the CSS code into it. We now can refer to it by adding a ```<link>``` tag to the header of the html file. The ```<link>``` tag contains a relative path to the .css file

```html    
<!-- In this case the 'Lesson01.css is in the same folder' -->
<link rel="stylesheet" type="text/css" href="./Lesson01.css">
```
We can delete the  ```<style>``` tags from the header now.  

We can do the same with the JavaScript part of the html file. We copy the code into a new .js file and then put a  ```<script>``` tag with an realtive path into the html file instead of the whole code snippet. The relative script  ```<script>``` tag would look like this  

```html    
<!-- In this case the 'Lesson01.js is in the same folder' -->
<script src="./Lesson01.js">
```
The html file now looks like this:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lesson01</title>
    
    <!-- CSS -->   
    <link rel="stylesheet" type="text/css" href="./Lesson01.css">
</head>

<body>
    <h1 id="headline01" class="headlines">Hello JSS!</h1>
    <p>Lorem ipsum dolor sit...
    </p>
    <h1 id="headline02" class="headlines">Hello again!</h1>
    <button id="hideButton">Click Me!</button>

    <!-- JS -->
    <script src="./Lesson01.js"></script> 
</body>

</html>
```
The css file now looks like this:
```css
body {
    background-color: lightcyan;
}

h1 {
    color: red;
}

.headlines {
    border-bottom: 1px solid black;
}

#headline01 {
    color: orange;
}
.hideClass{
    display: none;
}
```

The js file now looks like this:
```javascript
const hideButton = document.querySelector('#hideButton');       
const headline02 = document.querySelector('#headline02');
       
hideButton.addEventListener('click', hideFunction);
function hideFunction() {
    headline02.classList.add('hideClass');
}
```
Fin.




<!-- Sources -->
[websiteBasic]: 01.png 
[websiteBasicBackground]: 02.png 
[websiteBasicHeadline]: 03.png 
[websiteBasicHeadlineDouble]: 04.png 
[websiteUnderline]: 05.png 
[websiteButton]: 06.png 






