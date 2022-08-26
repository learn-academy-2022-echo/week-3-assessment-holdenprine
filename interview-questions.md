# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: JSX (JavaScript Syntax Extension) is how developers implement UI items commonly in React. The common syntactical difference between HTML and JSX in how you display your UI facing code. In HTML it doesn't matter how you format what you want to show while in JSX you have to encapsulate everything within a return statement. When returning multiple JSX tags you'll want to encapsulate them in fragments or if you so please a div
Researched answer: With everything said above, after more research, JSX is an incredibly flexible off shoot of JavaScript that makes working in React much simpler. Initially the similarities between HTML and JSX were minimal until the syntactical sugar of HTML style fragments was introduced to replace react.createElement(). The flexibility of JSX is also felt through the ability to implement JS directly in JSX elements. Using {*insert code here*} you can implement whole chunks of logic written out in JS. Another interesting distinction between HTML and JSX is in that all tags are technically self closing formatted like this:
```javascript 
<div 
// code block goes here
/>
```

2. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn stands for yet another resource navigator. Yarn at its core is simply a package manager for node that 

Researched answer: After greater research yarn was a solution to solve issues of scaling and utilization. The key distinction in utilizing yarn for installing dependencies was in data processing paradigm which would come to be called lazy evaluation and extremely late binding.

3. What is an anonymous function in JavaScript?

Your answer: An anonymous function in JavaScript looks a lot like an arrow function but without a declaration hence the name. The unique thing about anonymous functions are that they can be used as arguments, often times in built in methods  

Researched answer:

4. What is the difference between a class and an object?

Your answer: A class functions as a blue print for other objects, providing methods and values that can be used later where ever the object and its methods are needed. An object on its own has to be defined with all key value pairs defined on the declaration of said object. There are two keywords when discussing classes that allow it to act as object blueprints; constructor and this. A constructor is a method that defines values or sets up a variable that will be defined at a later time. The way this is done is by using the keyword this, with dot notation the keyword this can be used to assign a variable a temporary placeholder that can then be defined later as a parameter. Some constructors can have no arguments and will simply be in place to dispense values that are predefined
For example:
```javascript
//example of a constructor with args
class DemoClass {
    constructor(personName, dogName) {
        this.personName = personName
        this.dogName = dogName
    }
}
//No args constructor
class DemoClassTwo{
    constructor() {
        var personName = Joe
        var dogName = Spot
    }
}
```

Researched answer: After some greater research, classes are defined as templates for object behavior. On its own a class cant act as an object would but instead provides data for what an object will be and when said object (and/or its methods) are called they will already be predefined or at least set up to where arguments can be easily passed with no extra set up. An object on its own has very little it can initially do outside of having predefined key value pairs that can be called upon when an instance of that class is called. In the case of the relationship between objects and classes, an instantiated object that is predefined by a class can have access to ever detailed method or value assigned to it within the class that allows for a great deal of applications.  

5. What is the difference between state and props in React?

Your answer: State is a concept surrounding the status of a given value, function or program as a whole. State is something that can be passed down when modified to other files (in react specifically components) also known as children. This information is important to pass on when describing the behavior of the different aspects of an application. This is done through props. the concept of props can be best described as a motion sensor (and are probably implemented in networked motion trackers), when movement is detected they send information back. This is a decent way to think about how state and props work in tandem. When something in the state changes, the props keyword is used to apply to value that will pass information back to the parent component showing that something has changed.

Researched answer: After more research its important to note that without state, dynamic UI elements would be much harder to build. The relationship between state and props creates the ability for a trickle of information on specific actions to be passed from component to component to respond to changes(change in state). This is often associated with the onClick method in React. When something is clicked we want a response. We can set this up by creating a state using useState -> (const[screenColor, setScreenColor] = useState(white)). If we have a click handler that switches a pages background color from white to green we would need to pass that data through to the component dealing with screen color. A variable can be created which then is accessed within the component via the props keyword. Props is used to call the variable via dot notation and is then accessible to that component. From there a connection is made in the component call that references the variable in the return statement. All in all this is the relationship that makes state and props the power house duo of React.

6. STRETCH: Which is the difference between a div and a span?

Your answer: Upon initial recollection I've only seen span used once and cant for the life of me remember exactly what the functionality is. In the case of a div, it acts as a kind of container in HTML that serves to package elements together. Its within this package that classes and IDs can be utilized to affect each element contained. 

Researched answer: After further research the functionality of the span and div are only distinctive in their scope of affect. The utilization of a div as mentioned earlier is best executed on a group of elements, organizing them with a common goal in styling and functionality. In the case of span, a similar type of allocation of styles and functionality is performed on a piece of a line item. In this case, when applying specific styles to a piece of the webpage it might be best to use a span versus a div in that you can have most specific affects. On the contrary, big chunks of text and/or other elements can be uniformly stylized using a div. 

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: The concept of organizing programs around data and objects versus functions and logic.

2. Ruby: Released in 1995, Ruby was built to be a simplistic and easy to use language that centered around the concept of "everything being an object". The main popularization around Ruby is the concept of blocks; statements that can dictate the behavior of methods in a concise way.

3. Implicit return: A concept of using a form of short hand to "automatically" return a value when parens are omitted from a function call. This only works if the function takes a single expression. -> const add = x => x + 5
                    add(5) -> //will return 10

4. Ruby blocks: As mentioned earlier, ruby blocks are used to determine the behavior of a method using particular keywords.

5. Ruby hashes: The concept of a hash is similar to an array in that there are key value pairs used to store and identify data. The key (no pun intended) difference in hashes is the index definition. While in array indexes are assigned number values, hashes have arbitrary values assigned to denote each index
