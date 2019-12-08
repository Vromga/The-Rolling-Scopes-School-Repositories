# What is React?
- [youtube video](https://youtu.be/t-Bd-6eaQh0)
- [slides](https://clever-khorana-e51ca3.netlify.com)

## Transcript presentation

### Slide 1.
Hello everyone. My name is Nikita. Today I would like to talk about the JS React library. 
So, React is JavaScript library for user interface creation. The library allows us to create more advanced UI out of smaller isolated code pieces, called ‘components’.
React developed by Facebook, as well as by huge amount of third parties and external companies.  For the first time React was used in the Facebook feed in 2011.
 
### Slide 2.
React is the most popular JS library for UI creation by the end of 2019, among companies such Facebook, Instagram, Twitter, Netflix and many others. Let’s look at the downloads data from npmtrends.com, React is on the leader position among other libraries and frameworks. For example, Vue.js is also popular among frontend-developers, but React is 6 time more popular in the scope of downloads. 
Let’s give a look at the key components. 

### Slide 3.
#### Virtual DOM.
When developers were working on Facebook, they came across many issues.  For example, one of them is synchronization of data between different parts of the page such as messages or notifications. Therefore, they decided to do the following. They divided a page into many components, connected by their own logic. Those components were created on JavaScript.
Using this approach, we are bumping into a small issue. When we are working on DOM tree, any manipulation or change takes efforts. Just look at Facebook or Twitter. Scroll the page, you will see tens of thousands of DOM-crosspoints. It’s not an easy task to manipulate them easily.
As an example, let’s try to move 1000 div-boxes on 5 pixels to right or left side.
It can take more than a second, it’s too much for the modern internet.
So, Facebook developers started to use Virtual Dom.
Instead of manipulating DOM directly, React uses its lighter version. The library constantly comparing DOM-tree with its virtual copy, calculate the difference and do rendering only those components that were genuinely changed. This method allowed to foster the speed of rendering and pages reload in thousand times. 

### Slide 4.1
#### JSX
Another distinctive feature is use of JSX. Instead of artificial divide of technologies, putting formatting and logic in different files, React divide the responsibility with the assistance of slightly connected items, named ‘components’ – they include formatting and logics. 
JSX allows use of any correct JavaScript-expressions inside curved brackets - { }. For example: 2 + 2, user.firstName and function call are allowed.

### Slide 4.2
You can notice this example on this slide. Here we are using the simple function, which contacts name and surname. Just inside the variable element we need to write HTML name tag of the first level and using curved brackets we can call function formatName. After this manipulation we can write this JSX code on a page.
 
### Slide 5.1
####Components.
Components allows to divide the interface into independent parts. They can be combined together and used infinite times in different part of a project.
The components are similar to simple JavaScript functions.

### Slide 5.2
If we look at the main page of Twitter, we immediately can find the major components like:

### Slide 5.3
- Navigation bar
### Slide 5.4
- Profile
### Slide 5.5
- Feed
### Slide 5.6
- recommendation
### Slide 5.7
- trends
### Slide 5.8
React components can be put in other components. We can see this:  
-	feed includes tweet component
### Slide 5.9
-	tweet includes, for example, like or repost component.
### Slide 5.10
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
The simplest way to define a component is to write a JavaScript function.
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.
You can also use an ES6 class to define a component:

As you can see, the names of the components are usually start with capital letter. Otherwise, React will not know that this is a component and will try to use it as the basic HTML tag.
### Slide 5.11
So, how React do rendering of an element on the page?
Let’s recap what happens in this example:
1.	We call `ReactDOM.render()` with the `<Welcome name="Nikita" />` element.
2.	React calls the `Welcome` component with `{name: 'Nikita'}` as the props.
3.	Our Welcome component returns a `<h1>Hello, Nikita</h1>` element as the result.
4.	React DOM efficiently updates the DOM to match `<h1>Hello, Nikita</h1>`.
### Slide 5.12
We can put components one into another unlimited times.
For example, we can create an App component that renders Welcome many times.
### Slide 6.1
Let’s look how components are interacting with each other.
### Slide 6.2
Props is an object that includes all the elements of a parental component to a child. Props always transfer, even if it’s empty. 
### Slide 6.3
What if we need to change the data? What if other components are interacting with these props. Props can’t be changed. Whether you declare a component as a function or a class, it must never modify its own props.
	### Slide 6.4
In this case we can use State. State describes the current position of component. It’s very similar to props, but available only inside component.
### Slide 6.5
For using state, Class needed to be used. 
Let’s look how function – that you can see on the slide - can be changed.
### Slide 6.6
1.	Create an ES6 class, with the same name, that extends `React.Component`.
2.	Add a single empty method to it called `render()`.
3.	Move the body of the function into the `render()` method.
4.	Replace props with `this.state` in the `render()` body.
### Slide 6.7
#### Using State Correctly
There are three things you should know about `setState()`:

##### Do not modify state directly, use setState.
The only place where you can assign this.state is the constructor.

##### State updates may be asynchronous.

React may batch multiple `setState()` calls into a single update for performance.

##### Use function for `setState()`.

State updates are merged. When you call setState(), React merges the object you provide into the current state.	

### Slide 6.8
#### The data flows down
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.
This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
A component may choose to pass its state down as props to its child components.
This is commonly called a “top-down” or “unidirectional” data flow. Any state is always owned by some specific component, and any data or UI derived from that state can only affect components “below” them in the tree.
If you imagine a component tree as a waterfall of props, each component’s state is like an additional water source that joins it at an arbitrary point but also flows down.

### Slide 6.9
#### Let’s sum up: 
##### Differences between props and state
State - This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the setState function.

Props - Data passed in from a parent component. props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

The difference is all about which component owns the data. State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.

The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.
 
### Slide 7
#### Freedom of setting choosing.
React library initially was used for use interfaces creation, therefore, doesn’t contain several elements that are traditional for JS-framework. This only allows to choose only needed libraries for precise tasks, effectively reducing an application and server load.
### Slide 8
#### Ability to develop mobile applications

React Native is responsible for mobile apps development in React. The code that was written for the site can be used again for the mobile app. This allow to reduce the development time if you need at the same time – an app and a site. Library is relatively easy is use, had simple and brief syntax.
### Slide 9
The vibrant community and extensive corporation are behind the development of this library. If you face an issue, you can easily find the solution over the Internet, because more probably someone already had the similar issue.
### Slide 10
#### Let’s summarize:
Studying REACT you will get a powerful instrument, allowing to develop UI web-applications. The community of developers all around the world collected an impressive source of information. You can also easily find a job, because developers proficient in REACT are in high demand. 
### Slide 11
Thank you for the attention.
