const reactQuestionBank = [
   {
    question: 'What is a PureComponent?',
    answers: [ 
        'PureComponents are similar to Component but it skips re-renders for same props and state. So a PureComponent only renders components when there is a difference between current and previous states or props.',
        'PureComponents help are componenents that share data between components, which you can\'t easily share with props',
        'PureComponents are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.',
        'PureComponents are portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
],
    correct: 'PureComponents are similar to Component but it skips re-renders for same props and state. So a PureComponent only renders components when there is a difference between current and previous states or props.',
    explanation: 'PureComponents only does a shallow comparison on objects. If the props or state contains complex data structures, it may produce false-negatives',
    questionId: '22001'
   },
   {
    question: 'What are the differences between var, let, and const keywords?',
    answers: [
        'Var is block scope, and let and const are functional scope. Also var and let variables can\'t be reinitialized, and const variables can be reinitialized',
        'Var and const block scope, and let is functional and block scope. Also var and const variables can be reinitialized, and let variables cannot be reinitialized',
        'Var is functional scope, and let and const are block scope. Also var and let variables can be reinitialized, and const variables cannot be reinitialized',
        'Let and var are functional scope, const is block scope. Also let and var variables can be reinitialized, and const variables cannot be reinitialized',
    ],
    correct: 'Var is functional scope, and let and const are block scope. Also var and let variables can be reinitialized, and const variables cannot be reinitialized',
    explanation: '',
    questionId: '22002'
   },
   {
    question: 'What is Event Delegation?',
    answers: [
        'Event Delegation is a function that plays an important role in displaying multiple views in a single page application.',
        'It\'s the concept of placing code as close to where it\'s relevant as possible. ',
        'A process of checking code during compile time to ensure that all variables are statically typed',
        'Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received',
    ],
    correct: 'Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received',
    explanation: 'By providing the event listener to the parent to access the child element with the help of that event',
    questionId: '22003'
   },
   {
    question: 'null == undefined // true;  null === undefined; // false. Why is one true and one false?',
    answers: [
        '== just compares both entities types, whereas === just compares the entities.', 
        'Because this is a bug within JavaScript that cannot be fixed.', 
        '== just compares both entities without matching their types, whereas === or strict equality compares the types of both of the these entities as well.', 
        'Because null equals the string "0" and undefined equals the integer 0.' 
    ],
    correct: '== just compares both entities without matching their types, whereas === or strict equality compares the types of both of the these entities as well.',
    explanation: '',
    questionId: '22004'
   },
   {
    question: 'What is the difference between null and undefined?',
    answers: [
        'Undefined is an actual value, but null means that the variable is declared but not initialized yet.', 
        'Null is less than undefined.', 
        'Null === -1 and undefined === 0', 
        'Null is an actual value, but undefined means that the variable is declared but not initialized yet.'
    ],
    correct: 'Null is an actual value, but undefined means that the variable is declared but not initialized yet.',
    explanation: '',
    questionId: '22005'
   },
   {
    question: 'What is the difference between the map function and the forEach function?',
    answers: [ 
        'One can iterate over arrays, and the other only interates over functions.', 
        'Both are used to iterate over arrays, map returns a new array, whereas forEach does not return a new array based on the given array.', 
        'Other functions can be chained to forEach, but not to map', 
        'There is no difference between the two, they have all the same capabilities.'
    ],
    correct: 'Both are used to iterate over arrays, map returns a new array, whereas forEach does not return a new array based on the given array.',
    explanation: 'Also, other functions can be chained to the map array, like reduce, sort(), filter(), whereas chaining techniques cannot be applied to the forEach function.',
    questionId: '22006'
   },
   {
    question: 'What are styled components?',
    answers: [
        'A styled component is a React specific CSS-in-JS styling solution that creates a platform for developers to write CSS code to style React Components, by using tagged template literals and arrow functions in ES6+.', 
        'A styled component is a React component that is styled with CSS', 
        'A styled component is a React component that is styled using another SCSS', 
        'A styled component is a React component styled with Bootstrap ', 
    ],
    correct: 'A styled component is a React specific CSS-in-JS styling solution that creates a platform for developers to write CSS code to style React Components, by using tagged template literals and arrow functions in ES6+.',
    explanation: 'We/’re defining a style in a function, using that function/’s name like an HTML tag that houses the element that we want that specific style to apply to',
    questionId: '22007'
   },
   {
    question: 'Explain how list work in React?',
    answers: [
        'Lists in React call other functions that are needed by a program', 
        'Lists is another term for ASCII values, and allows programmers to access ASCII values with a React function', 
        'Lists are arrays of data that can only be called and displayed in React by using a for loop', 
        'Lists are arrays of data. In React, the list can be traversed using the map function. With map, the items of a the list can be applied to an element tag through a function, and that function can be rendered to the DOM to display the list.'
    ],
    correct: 'Lists are arrays of data. In React, the list can be traversed using the map function. With map, the items of a the list can be applied to an element tag through a function, and that function can be rendered to the DOM to display the list.',
    explanation: '',
    questionId: '22008'
   },
   {
    question: 'What is React Routing?',
    answers: [
        'React Routing is the process in which the computer\'s CPU reads and routes React code.', 
        'Routing is a process in which a user is directed to different pages based on their action or request.', 
        'React Routing is the process in which React routes data on the server.', 
        'React Routing is an important and often used map package in React.'
    ],
    correct: 'Routing is a process in which a user is directed to different pages based on their action or request.',
    explanation: 'React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. ReactJS Router is mainly used for developing 	Single Page Web Applications. React Router is used to define multiple routes in the application. React Router is a standard library system built on top of the React 	and used to create routing in the React application using React Router Package',
    questionId: '22009'
   },
   {
    question: 'How is React Routing implemented?',
    answers: [
        'React Routing is implemented when click "implementRouting" function is called.',  
        'React Routing is implemented with the call of a useEffect hook.', 
        'When a user types a specific URL into the browser, if this URL path matches any "route" inside the router file, the user will be redirected to that particular route.', 
        'When a user types "Routing" in a React app, then React Routing is implemented'
    ],
    correct: 'When a user types a specific URL into the browser, if this URL path matches any "route" inside the router file, the user will be redirected to that particular route.',
    explanation: '',
    questionId: '22010'
   },
   {
    question: 'Why and when is it necessary to use Custom hooks?',
    answers: [
        'It\'s necessary to use custom hooks when all other hooks have been used.', 
        'Custom hooks are needed to link between React files and files written in another programming language.', 
        'Custom hooks are never necessary and should never be used.', 
        'The main reason to write a custom hook is for code reusability.'
    ],
    correct: 'The main reason to write a custom hook is for code reusability.',
    explanation: 'For example, instead of writing the same code across multiple components that use the same common stateful logic (say a “setState” or localStorage logic), you can put that code inside a custom hook and reuse it.',
    questionId: '22011'
   },
   {
    question: 'What are the different phases of React component lifecycle?',
    answers: [
        'Mounting, Updating, and Unmounting', 
        'Parcing, Mapping, and Rendering', 
        'Routing, Prop Drilling, and Recycling', 
        'Mapping, Mounting, Updating', 
    ],
    correct: 'Mounting, Updating, and Unmounting',
    explanation: 'The three phases are: Mounting, Updating, and Unmounting. Mounting means putting elements into the DOM.A component is updated whenever there is a change in the component\'s state or props. Unmounting is when a component is removed from the DOM.',
    questionId: '22012'
   },
   {
    question: 'What is Prop Drilling and how can you avoid it',
    answers: [
        'Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.', 
        'Prop drilling is a way of sticking a specific prop to a specific component.', 
        'Prop drilling is a function that calls a prop.', 
        'Prop drilling is related to React Routing.', 
    ],
    correct: 'Prop drilling is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.',
    explanation: '',
    questionId: '22013'
   },
   {
    question: 'How do you maintain a state of colocation',
    answers: [
        'The concept of co-location can be boiled down to the fundamental principle of placing code as far away from where it is needed as possible.', 
        'The concept of co-location relates to mounting, unmounding, and rendering',  
        'Colocation has to do with the call, apply and bind methods', 
        'The concept of co-location can be boiled down to the fundamental principle of placing code as close to where it\'s relevant as possible.', 
    ],
    correct: 'The concept of co-location can be boiled down to the fundamental principle of placing code as close to where it\'s relevant as possible.',
    explanation: '',
    questionId: '22014'
   },
   {
    question: 'What are some techniques to optimize React app performance?',
    answers: [
        'List Visualization, Lazy Loading, Utilize PropTypes', 
        'Mounting, Updating, and Unmounting', 
        'React Routing, Event Delegation', 
        'Colocation, Mounting, Lazy Loading', 
    ],
    correct: 'List Visualization, Lazy Loading, Utilize PropTypes',
    explanation: 'Other ways to optimize a React App include, trimming JavaScript bundles, using immutable data structures, avoiing inline function definition in the render function',
    questionId: '22015'
   },
   {
    question: 'Can React Hooks be called conditionally?',
    answers: [
        'Yes', 
        'Sometimes', 
        'No',
    ],
    correct: 'No',
    explanation: '',
    questionId: '22016'
   },
   {
    question: 'What is static typing?',
    answers: [
        'Static typing is a concept of placing code as far away from where it is needed as possible.', 
        'Static typing is is a process in which a user is directed to different pages based on their action or request.', 
        'Static typing is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.', 
        'Static typing is a process of checking code during compile time to ensure that all variables are statically typed.', 
    ],
    correct: 'Static typing is a process of checking code during compile time to ensure that all variables are statically typed.',
    explanation: 'Hooks are primarily functions and have been designed in a way to ensure that all attributes are statically typed. You can also use the React API with custom Hooks if you want to enforce stricter static typing within your code',
    questionId: '22017'
   },
   {
    question: 'Give an example of Effect Hooks',
    answers: [
        'If an action is performed on a webpage, an Effect Hook may be used to transfer a side effect to another part of the DOM. An example, a title updates the document title of the webpage when a button is clicked', 
        'An example of an Effect Hook is placing code as far away from where it is needed as possible.', 
        'The process in which the computer\'s CPU reads and routes React code, is an example of Effect Hooks', 
        'An Effect Hook happens when JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.', 
    ],
    correct: 'If an action is performed on a webpage, an Effect Hook may be used to transfer a side effect to another part of the DOM. An example, a title updates the document title of the webpage when a button is clicked',
    explanation: '',
    questionId: '22018'
   },
   {
    question: 'What are some alternatives to Redux?',
    answers: [
        'RTK - or Redux Toolkit', 
        'Recoil', 
        'MobX', 
        'RTK - or Redux Toolkit, Recoil, and MobX', 
    ],
    correct: 'RTK - or Redux Toolkit, Recoil, and MobX',
    explanation: '',
    questionId: '22019'
   },
   {
    question: 'What is unit testing in React?',
    answers: [
        'Unit Testing is a test performed by a user\'s input from a React app', 
        'Unit Testing is a function automatically called to test every React component\'s time to execute.', 
        'Unit Testing the CSS styling of a component.', 
        'Unit Testing is a testing method that tests an individual unit of software in isolation.', 
    ],
    correct: 'Unit Testing is a testing method that tests an individual unit of software in isolation.',
    explanation: 'nit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Libraries used for testing are Jest and Enzyme, as well as Mocha or Chai',
    questionId: '22020'
   },
   {
    question: 'Why do we use Key in React & why should each child in a list have a unique key prompt?',
    answers: [
        'Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.', 
        'Key\'s are needed to open React Component Locks. Keys should be added to every React Component.', 
        'We use keys in order to get Form inputs, and therefore all forms must contain a key', 
        'Keys are needed to export React functions to another function.', 
    ],
    correct: 'Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.',
    explanation: '',
    questionId: '22021'
   },
   {
    question: 'What are higher order components?',
    answers: [
        'A higher-order component is is another name for Redux Toolkit.', 
        'A higher-order component is a component that is automatically called to test every React component\'s time to execute.', 
        'A higher-order component is a function that takes a component and returns a new component.', 
        'A higher-order component is a component that checks code during compile time to ensure that all variables are statically typed.', 
    ],
    correct: 'A higher-order component is a function that takes a component and returns a new component.',
    explanation: '',
    questionId: '22022'
   },
   {
    question: 'Are higher order components a part of a React API',
    answers: [
        'Yes, higer order components are a part of the React API, they are a pattern that emerges from React\'s compositional nature.', 
        'Higher order components are not part of the React API, per se, they are a pattern that emerges from React\'s compositional nature.', 
        'No, higer order components are a part of the React API, they are a components that emerges from React\'s functional nature.', 
    ],
    correct: 'Higher order components are not part of the React API, per se. They are a pattern that emerges from React\'s compositional nature.',
    explanation: '',
    questionId: '22023'
   },
   {
    question: 'How does DOM structure work?',
    answers: [
        'The DOM structure works by linking JavaScript files to an HTML file. This allows DOM methods to access DOM nodes.', 
        'Each branch of the node ends in a tree, and each tree contains a list. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.', 
        'Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.', 
        'The DOM structure works by recurssion.', 
    ],
    correct: 'Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.',
    explanation: 'The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document\'s structure, style, or content.',
    questionId: '22024'
   },
   {
    question: 'What is JSX?',
    answers: [
        'It stands for Javascript and XML, it provides an XML syntax for you to write JavaScript and render things out to the DOM.', 
        'It stands for Java and XML, it provides an XML syntax for you to write JavaScript and render things out to the DOM.', 
        'It stands for Javascript and XTRAN, it provides an XTRAN syntax for you to write JavaScript and render things out to the DOM.', 
        'It stands for Java and XML, it provides an XML syntax for you to write Java frontend code and render it out to the DOM.',  
    ],
    correct: 'It stands for Javascript and XML, it provides an XML syntax for you to write JavaScript and render things out to the DOM.',
    explanation: '',
    questionId: '22024'
   },
   {
    question: 'Why is class called ClassName in React',
    answers: [
        'Because ClassName is what React uses for an element id.', 
        'Because ClassName is easier to compile at run time', 
        'Because class is a reversed keyword in Javascript and if your JSX is being compiled down to Javascript there would be a conflict if you used class.', 
    ],
    correct: 'Class is a reversed keyword in Javascript and if your JSX is being compiled down to Javascript there would be a conflict if you used class.',
    explanation: 'Javascript would think that you’re trying to create a class and not style an element.',
    questionId: '22024'
   },
   {
    question: 'Describe the data flow in React.',
    answers: [
        'Data in React typically flows from child to parent, in a uni-directional manner.', 
        'In React, data flows in multiple ways and from parent component to child component and between child components', 
        'All of the components in React have a parent-child relationship, and typically what happens is your passing data is flowing downwards.', 
    ],
    correct: 'All of the components in React have a parent-child relationship, and typically what happens is your passing data is flowing downwards.',
    explanation: 'Typically, the most basic way of passing information down is through props.',
    questionId: '22024'
   },
   {
    question: 'How would you delay an API call until a component is mounted?',
    answers: [
        'You would use the async and await statement.', 
        'The traditional way is to use component DidMount(). A function that runs after the component is mounted.', 
        'You would use the Timeout function to time a delay.', 
        'You flow the API to a button, and use the button to control the flow the API data.', 
    ],
    correct: 'The traditional way is to use component DidMount(). A function that runs after the component is mounted.',
    explanation: 'Now that we have functional components and hooks, use the useEffect hook and pass an empty array as the second argument. What that does is mimic DidMount()',
    questionId: '22024'
   },
   {
    question: 'Should you use ternary or && operator to conditionally render react components?',
    answers: [
        'You should use && opeartor because undefined && anything will always evaluate to anything.', 
        'You should use the && operatar because it is explicit, and a ternary will not evaluate the right side of the : on certain occassions.', 
        'You should use the && operator because it is easy to understand by people reading your code.', 
        'You should use ternary, because when JS evaluates 0 && anything the result will always be 0 because 0 is falsy, so it doesn\'t evaluate the right side of the &&.', 
    ],
    correct: 'You should use ternary, because when JS evaluates 0 && anything the result will always be 0 because 0 is falsy, so it doesn\'t evaluate the right side of the &&.',
    explanation: '&& operator returns the value of the falsy one if both/either values aren\'t truthy. Therefore when checking for variables that might be null or undefined at some point, it\'s always best to use the ternary(?) operator and that way you have a configured output if there is no value. A ternary allows you to be explicit.',
    questionId: '22024'
   },
   {
    question: 'What is unidirectional data flow?',
    answers: [
        'A one-way data flow where the data can move in only one pathway when being transferred between different parts of the program.', 
        'A Two-way data binding, that refers to sharing data between a component class and its template.', 
        'A flow of data that flows like in multiple directions and from parent to child, child to parent, and from child to child.', 
    ],
    correct: 'A one-way data flow where the data can move in only one pathway when being transferred between different parts of the program.',
    explanation: '',
    questionId: '22024'
   },
];


// export default (n = 1) => Promise.resolve(reactQuestionBank.sort(() => 0.5 - Math.random()).slice(0, n));
// export default reactQuestionBank.sort(() => 0.5 - Math.random()).slice(0, 5);
export default reactQuestionBank;


// {
//     question: '',
//     answers: [
//         '', 
//         '', 
//         '', 
//         '', 
//         '', 
//     ],
//     correct: '',
//     explanation: '',
//     questionId: '22024',
//     keyword: '',
//    },