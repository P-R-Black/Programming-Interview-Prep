const reactQuestionBank = [
   {
        question: 'What is a PureComponent?',
        answers: [ 
            'PureComponents are similar to Component but it skips re-renders for same props and state. So a PureComponent only renders components when there is a difference between current and previous states or props.',
            'PureComponents help are components that share data between components, which you can\'t easily share with props',
            'PureComponents are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.',
            'PureComponents are portals that provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
    ],
        correct: 'PureComponents are similar to Component but it skips re-renders for same props and state. So a PureComponent only renders components when there is a difference between current and previous states or props.',
        explanation: 'PureComponents only does a shallow comparison on objects. If the props or state contains complex data structures, it may produce false-negatives',
        questionId: '22001',
        keyword: ['PureComponent']
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
        questionId: '22002',
        keyword: ['let', 'var', 'const']
   },
   {
    question: 'What is Event Delegation?',
    answers: [
        'Event Delegation is a function that plays an important role in displaying multiple views in a single page application.',
        'It\'s the concept of placing code as close to where it\'s relevant as possible.',
        'A process of checking code during compile time to ensure that all variables are statically typed.',
        'Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.',
    ],
    correct: 'Event Delegation is a pattern based upon the concept of Event Bubbling. It is an event-handling pattern that allows you to handle events at a higher level in the DOM tree other than the level where the event was first received.',
    explanation: 'By providing the event listener to the parent to access the child element with the help of that event',
    questionId: '22003',
    keyword: ['Event Delegation']
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
    questionId: '22004',
    keyword: ['null value']
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
    questionId: '22005',
    keyword: ['null vs undefined']
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
    questionId: '22006',
    keyword: ['map function', 'forEach function']
   },
   {
    question: 'What are styled components?',
    answers: [
        'A styled component is a React specific CSS-in-JS styling solution that creates a platform for developers to write CSS code to style React Components, by using tagged template literals and arrow functions in ES6+.', 
        'A styled component is a React component that is styled with CSS', 
        'A styled component is a React component that is styled using SCSS', 
        'A styled component is a React component styled with Bootstrap ', 
    ],
    correct: 'A styled component is a React specific CSS-in-JS styling solution that creates a platform for developers to write CSS code to style React Components, by using tagged template literals and arrow functions in ES6+.',
    explanation: 'We/’re defining a style in a function, using that function/’s name like an HTML tag that houses the element that we want that specific style to apply to',
    questionId: '22007',
    keyword: ['styled components']
   },
   {
    question: 'Explain how list work in React?',
    answers: [
        'Lists in React call other functions that are needed by a program', 
        'Lists is another term for ASCII values, and allows programmers to access ASCII values with a React function', 
        'Lists are arrays of data that can only be called and displayed in React by using a for loop', 
        'Lists are arrays of data. In React, the list can be traversed using the map function. With map, the items of the list can be applied to an element tag through a function, and that function can be rendered to the DOM to display the list.'
    ],
    correct: 'Lists are arrays of data. In React, the list can be traversed using the map function. With map, the items of the list can be applied to an element tag through a function, and that function can be rendered to the DOM to display the list.',
    explanation: '',
    questionId: '22008',
    keyword: ['lists', 'data structures']
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
    questionId: '22009',
    keyword: ['React Routing']
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
    questionId: '22010',
    keyword: ['React Routing']
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
    questionId: '22011',
    keyword: ['Hooks', 'Custom Hooks']
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
    questionId: '22012',
    keyword: ['React Lifecycle']
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
    questionId: '22013',
    keyword: ['Prop Drilling']
   },
   {
    question: 'How do you maintain a state of colocation?',
    answers: [
        'The concept of co-location can be boiled down to the fundamental principle of placing code as far away from where it is needed as possible.', 
        'The concept of co-location relates to mounting, unmounding, and rendering.',  
        'Co-location has to do with the call, apply and bind methods', 
        'The concept of co-location can be boiled down to the fundamental principle of placing code as close to where it\'s relevant as possible.', 
    ],
    correct: 'The concept of co-location can be boiled down to the fundamental principle of placing code as close to where it\'s relevant as possible.',
    explanation: '',
    questionId: '22014',
    keyword: ['Colocation']
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
    questionId: '22015',
    keyword: ['React Application Optimization']
   },
   {
        question: 'Can React Hooks be called conditionally?',
        answers: [
            'Yes.', 
            'Sometimes.', 
            'No.',
        ],
        correct: 'No.',
        explanation: '',
        questionId: '22016',
        keyword: ['Hooks']
   },
   {
        question: 'What is static typing?',
        answers: [
            'Static typing is a concept of placing code as far away from where it is needed as possible.', 
            'Static typing is a process in which a user is directed to different pages based on their action or request.', 
            'Static typing is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.', 
            'Static typing is a process of checking code during compile time to ensure that all variables are statically typed.', 
        ],
        correct: 'Static typing is a process of checking code during compile time to ensure that all variables are statically typed.',
        explanation: 'Hooks are primarily functions and have been designed in a way to ensure that all attributes are statically typed. You can also use the React API with custom Hooks if you want to enforce stricter static typing within your code',
        questionId: '22017',
        keyword: ['Static Typing']
   },
   {
        question: 'Give an example of Effect Hooks',
        answers: [
            'If an action is performed on a webpage, an Effect Hook may be used to transfer a side effect to another part of the DOM. An example, a title updates the document title of the webpage when a button is clicked.', 
            'An example of an Effect Hook is placing code as far away from where it is needed as possible.', 
            'The process in which the computer\'s CPU reads and routes React code, is an example of Effect Hooks.', 
            'An Effect Hook happens when JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.', 
        ],
        correct: 'If an action is performed on a webpage, an Effect Hook may be used to transfer a side effect to another part of the DOM. An example, a title updates the document title of the webpage when a button is clicked.',
        explanation: '',
        questionId: '22018',
        keyword: ['useEffect', 'Hooks']
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
        questionId: '22019',
        keyword: ['Redux']
   },
   {
        question: 'What is unit testing in React?',
        answers: [
            'Unit Testing is a test performed by a user\'s input from a React app.', 
            'Unit Testing is a function automatically called to test every React component\'s time to execute.', 
            'Unit Testing is the CSS styling of a component.', 
            'Unit Testing is a testing method that tests an individual unit of software in isolation.', 
        ],
        correct: 'Unit Testing is a testing method that tests an individual unit of software in isolation.',
        explanation: 'nit testing for React Apps means testing an individual React Component. Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Libraries used for testing are Jest and Enzyme, as well as Mocha or Chai',
        questionId: '22020',
        keyword: ['Unit Testing']
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
        questionId: '22021',
        keyword: ['lists', 'keys']
   },
   {
        question: 'What are higher order components?',
        answers: [
            'A higher-order component is a another name for Redux Toolkit.', 
            'A higher-order component is a component that is automatically called to test every React component\'s time to execute.', 
            'A higher-order component is a function that takes a component and returns a new component.', 
            'A higher-order component is a component that checks code during compile time to ensure that all variables are statically typed.', 
        ],
        correct: 'A higher-order component is a function that takes a component and returns a new component.',
        explanation: '',
        questionId: '22022',
        keyword: ['Higher order components']
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
        questionId: '22023',
        keyword: ['React API', 'Higher Order Components']
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
        questionId: '22024',
        keyword: ['DOM', 'DOM Structure']
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
        questionId: '22025',
        keyword: ['JSX', 'XML'],
   },
   {
        question: 'Why is "class" called ClassName in React?',
        answers: [
            'Because ClassName is what React uses for an element id.', 
            'Because ClassName is easier to compile at run time', 
            'Because class is a reversed keyword in Javascript and if your JSX is being compiled down to Javascript there would be a conflict if you used class.', 
        ],
        correct: 'Because class is a reversed keyword in Javascript and if your JSX is being compiled down to Javascript there would be a conflict if you used class.',
        explanation: 'Javascript would think that you’re trying to create a class and not style an element.',
        questionId: '22026',
        keyword: ['ClassName']
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
        questionId: '22027',
        keyword: ['Data flow','React data flow']
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
        questionId: '22028',
        keyword: ['API calls', 'Mounting', 'Unmounting']
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
        questionId: '22029',
        keyword: ['Ternary vs &&', 'Conditionals']
   },
   {
        question: 'What is unidirectional data flow?',
        answers: [
            'A one-way data flow where the data can move in only one pathway when being transferred between different parts of the program.', 
            'A two-way data binding, that refers to sharing data between a component class and its template.', 
            'A flow of data that flows in multiple directions and from parent to child, child to parent, and from child to child.', 
        ],
        correct: 'A one-way data flow where the data can move in only one pathway when being transferred between different parts of the program.',
        explanation: '',
        questionId: '22030',
        keyword: ['Data flow', 'React data flow']
   },
   {
        question: 'What is the difference between setState() and useEffect() in React?',
        answers: [
            'setState() is needed to export React functions to another function and useEffect() is a component that is automatically called to test every React component\'s time to execute.', 
            'useEffect() is what allows for one way data flow in React and setState() is what is used to allow for two-way data binding in React.', 
            'useEffect() is a higher-order component that is a function that takes a component and returns a new component, whereas setState() sets components up to be deployed into production.',
            'useState() is used for storing variables within the application that will change when the user interacts with the application,  whereas useEffect() allows components to react to lifecylce events such as mounting to the DOM, re-rendeirng, and unmounting.', 
        ],
        correct: 'useState() is used for storing variables within the application that will change when the user interacts with the application,  whereas useEffect() allows components to react to lifecylce events such as mounting to the DOM, re-rendeirng, and unmounting.',
        explanation: '',
        questionId: '22031',
        keyword: ['setState()', 'useEffect()', 'Hooks'],
   },
   {
        question: 'What is the virtual DOM',
        answers: [
            'The virtual DOM is a representation of the real DOM (Document Object Model).', 
            'The virtual DOM is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.', 
            'The Virtual DOM is a code editor that\'s held in the cloud.', 
            'The Virtual DOM is a movie starring Bill Gates, the creator of React.', 
        ],
        correct: 'The virtual DOM is a representation of the real DOM (Document Object Model).',
        explanation: 'It\'s a virtual representation of a UI that is kept in memory and synced wit the real DOM through a process called reconciliation.',
        questionId: '22032',
        keyword: ['Document Object Model', 'Virtual Document Object Model'],
   },
   {
        question: 'What are States?',
        answers: [
            'States are a representation of the real Document Object Model.', 
            'States are React objects that are used to contain data or information about a component.', 
            'States the name of the different components that make up a React App, there are 50 States to every React application.', 
            'States is another name for list in React.', 
        ],
        correct: 'States are React objects that are used to contain data or information about a component.',
        explanation: 'The state of a component can change over time, whenever it changes, the components re-renders. The change of state can happen as a response to user action or system-generated event and those changes determine the behavior f the component and how it will render.',
        questionId: '22033',
        keyword: ['useState', 'Hooks'],
   },
   {
        question: 'What are the React Hooks that are core to React?',
        answers: [
            'useInsertionEffect, useId, useTransition, useImperativeHandle.', 
            'useState, useEffect, useContext, useRef, useMemo, useCallback.', 
            'useState, useMemo, useDebugValue, useSyncExternalStore.', 
            'useState, useReducer, useTransition, useDeferredValue, useId ', 
        ],
        correct: 'useState, useEffect, useContext, useRef, useMemo, useCallback.',
        explanation: '',
        questionId: '22034',
        keyword: ['Hooks'],
   },
   {
        question: 'Which best explains State management in React?',
        answers: [
            'State management is another name for JSX.', 
            'State management are portals that provide a way to render children into a DOM node that exists outside the DOM hierarchy.', 
            'State management is a process for managing the data that React components need in order to render themselves, when the state object changes, the component will re-render itself.', 
            'State management is the concept of placing code as close to where it\'s relevant as possible.', 
        ],
        correct: 'State management is a process for managing the data that React components need in order to render themselves, when the state object changes, the component will re-render itself.',
        explanation: '',
        questionId: '22035',
        keyword: ['useState', 'State Management'],
   },
   {
        question: 'What is the difference between Props and State?',
        answers: [
            'Props are components that catch JavaScript errors and State provides a way to render children into a DOM node that exists outside the DOM hierarchy.', 
            'Props are needed to open React Component Locks and State needs to be added to every React Component.', 
            'State is when a component defines data locally within itself, and Props is data that gets passed in to a component from its parent.', 
            'State is a part of the Virtual DOM and Props are not.', 
        ],
        correct: 'State is when a component defines data locally within itself, and Props is data that gets passed in to a component from its parent.',
        explanation: 'State can be changed, updated, and manipulated, whereas Props cannot.',
        questionId: '22036',
        keyword: ['State', 'Props'],
   },
   {
        question: 'What is Event Bubbling?',
        answers: [
            'Event Bubbling are components that catch JavaScript errors and State provides a way to render children into a DOM node that exists outside the DOM hierarchy.', 
            'Event Bubbling is a runtime model, which is responsible for executing the code, collecting and processing events.', 
            'When an event happens, the handler of the innermost element runs, then the parents, and then the further ancestor element, this is event bubbling.', 
            'Event Bubbling is the process of moving state up to a common ancestor of the components that rely on the same state.', 
        ],
        correct: 'When an event happens, the handler of the innermost element runs, then the parents, and then the further ancestor element, this is event bubbling.',
        explanation: 'Event bubbling relates to the order in which events are propagated in nested elements. In bubbling, when an event happens, the handler of the innermost element runs, then the parents, and then the further ancestor elements. In other words, events bubble up or propagate the DOM tree upwards',
        questionId: '22037',
        keyword: ['Event Bubbling'],
   },
   {
        question: 'What are Event Loops in JavaScript?',
        answers: [
            'Event Loops are a runtime model, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.', 
            'Event Loops are the same as For Loops and While Loops', 
            'Event Loops helps share data between components which you can\'t easily share with props', 
            'Event Loops are a module bundler for JavaScript.', 
        ],
        correct: 'Event Loops are a runtime model, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks.',
        explanation: 'This model is quite different from models in other languages like C and Java. There are three main concepts in which the event loop is dependent, the stack, the heap, and the queue. The event loop gives the illusion of multi-threading, but JS executes all operations on a single thread. The call stack is response for keeping track of all the operations in line to be executed. Whenever a function is finished it is popped from the stack. The event queue is responsible for sending new functions to the stack for processing. It follows the stack for processing. It follows the queue data structure to maintain the correct sequence in which operations should be sent for execution.',
        questionId: '22038',
        keyword: ['Event Looping'],
   },

    {
        question: 'What is the difference between "var" and "let"',
        answers: [
            'Variables declared by "var" are only available inside the block where they\'re defined and variables declared by "let" are available throught the function in which they\'re declared.', 
            'Variables declared by "let" are only available inside the block where they\'re defined and variables declared by "var" are available throught the function in which they\'re declared.', 
            'There is no difference, they both do the same things.', 
            'Variables declared by "var" can only be used in a class component and Variables declared by let can only be used in functional components.', 
        ],
        correct: 'Variables declared by "let" are only available inside the block where they\'re defined and variables declared by "var" are available throught the function in which they\'re declared.',
        explanation: 'See this website for a simple breakdown of the differences between var and let | https://sentry.io/answers/difference-between-let-and-var-in-javascript/',
        questionId: '22039',
        keyword: ['var', 'let'],
   },
   {
        question: 'What is Hoisting?',
        answers: [
            'It is the same as lifting up state. It\'s the process of moving state up to a common ancestor of the components that rely on the same state, so that the state can be managed and distributed down to the components that require information held in that state.', 
            'Hosting happens when JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.', 
            'Hoisting occurs when a user types a specific URL into the browser, if this URL path matches any "route" inside the router file, the user will be redirected to that particular route.', 
            'Hoisting is a process of checking code during compile time to ensure that all variables are statically typed.', 
        ],
        correct: 'It is the same as lifting up state. It\'s the process of moving state up to a common ancestor of the components that rely on the same state, so that the state can be managed and distributed down to the components that require information held in that state.',
        explanation: 'If an app is using information from an API call in the header and in the body of the webpage, instead of calling the API in the header and again in the body, we would move the state that manages the API call to common component of the Header and the Body, and then distribute the state from that common component to the Header and the Body.',
        questionId: '22040',
        keyword: ['Hoisting', 'Lifting up state'],
   },
   {
        question: 'What is Debouncing?',
        answers: [
            'Debouncing is a process where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.', 
            'Debouncing is a process of checking code during compile time to ensure that all variables are statically typed.', 
            'Debouncing is the process of moving state up to a common ancestor of the components that rely on the same state.', 
            'Debouncing is a way of preventing a function from running in multiple instances at the same time.', 
        ],
        correct: 'Debouncing is a way of preventing a function from running in multiple instances at the same time.',
        explanation: 'Suppose we have an API that searches a list of users, and we can\'t afford to fire it too often. We\'ll want to search only when we have typed the whole search query. Debouncing is a practice in software development which makes sure that certain heavy tasks like this one don\'t get fired so often.',
        questionId: '22041',
        keyword: ['Debouncing'],
    },
    {
        question: 'What is Redux?',
        answers: [
            'Redux is used as a state management tool with React, but can be used with other JavaScript frameworks or libraries.', 
            'Redux is a fast, small, "write-less, do more" JavaScript library.', 
            'Redux is a structural framework for dynamic web apps', 
            'Redux is framework that blends together JavaScript and Java in order to make React more flexible.', 
        ],
        correct: 'Redux is used as a state management tool with React, but can be used with other JavaScript frameworks or libraries.',
        explanation: 'With Redux, the state of an applicatoini is kept in store, and each component can access any state that it needs from this store. Redux is a predictable state container designed to help you write JavaScript apps that behave consistently across client, server, and native environements.',
        questionId: '22042',
        keyword: ['Redux'],
    },
    {
        question: 'What is a difference between class based components and function based components?',
        answers: [
            'Functional components run from top to bottom, and once returned the function can\'t be kept alive, whereas a class componenit is instantiated and different life cycle methods are run and kept alive depending on the phase of the class component.', 
            'Functional components are stateful and class components are stateless.', 
            'Functional components must have a render() method and class based components do not require a render method.', 
            'Functional components require lifecycle methods like componentDidMount and class based components do not.', 
        ],
        correct: 'Functional components run from top to bottom, and once returned the function can\'t be kept alive, whereas a class componenit is instantiated and different life cycle methods are run and kept alive depending on the phase of the class component.',
        explanation: 'Class components are stateful and functional components are stateless, and lifecycle methods like componentDidMount are used in class based components and cannot be used in functional conmponents.',
        questionId: '22043',
        keyword: ['Class Based Components', 'Function Based Components'],
    },
    {
        question: 'You have four setStates for four states. When the four states change, does React update states one at a time or does it do it in one re-render?',
        answers: [
            'React updates the four states in one re-render.', 
            'React updates the four states one at a time.',
        ],
        correct: 'React updates the four states in one re-render.',
        explanation: '',
        questionId: '22044',
        keyword: ['re-render'],
    },
    {
        question: 'What is a benefit of code-splitting?',
        answers: [
            'Reduces download times and allows React powered apps to get much better speeds.', 
            'Allows React apps to lazy load only the parts that the visitor needs to have at any given time.', 
            'It checks code during compile time to ensure that all variables are statically typed.', 
            'It both reduces download times and allows React powered apps to get much better speeds and it allows React apps to lazy load only the parts that the visitor needs to have at any given time.', 
        ],
        correct: 'It both reduces download times and allows React powered apps to get much better speeds and it allows React apps to lazy load only the parts that the visitor needs to have at any given time.',
        explanation: '',
        questionId: '22045',
        keyword: ['Lazy-Loading'],
    },
    {
        question: 'How do you get the value from an uncontrolled component?',
        answers: [
            'A lazy-load can be used to get the value from an uncontrolled component', 
            'Event Bubbling can be used to get the value from an uncontrolled component.', 
            'A useRef can be used to get the value from an uncontrolled component.', 
            'Prop drilling can be used to get the value from an uncontrolled component.', 
        ],
        correct: 'A useRef can be used to get the value from an uncontrolled component.',
        explanation: '',
        questionId: '22046',
        keyword: ['useRef'],
    },
    {
        question: 'What are Refs in React?',
        answers: [
            'Refs is a function that plays an important role in displaying multiple views in a single page application.', 
            'Refs are a function provided by React to access the DOM element and the React element that you might have created on your own.', 
            'Refs is a testing method that tests an individual unit of software in isolation.', 
            'Refs is framework that blends together JavaScript and Java in order to make React more flexible.', 
        ],
        correct: 'Refs are a function provided by React to access the DOM element and the React element that you might have created on your own.',
        explanation: 'Refs are used in cases where we want to change the value of a child component, without making use of props and all. They also provide us with good functionality as we can use callbacks with them.',
        questionId: '22047',
        keyword: ['Refs'],
    },
    {
        question: 'What are controlled components?',
        answers: [
            'Controlled components are components for which the form data is handled by the DOM itself.', 
            'Controlled components are components that help React identify which items have changed, are added, or are removed.', 
            'Controlled components are components that check code during compile time to ensure that all variables are statically typed.', 
            'Controlled components in React are those in which form data is handled by the component\'s state.', 
        ],
        correct: 'Controlled components in React are those in which form data is handled by the component\'s state.',
        explanation: 'Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. This data is held by form input elements and control elements, such as input, select, textarea, etc., which maintain and control their states or values.',
        questionId: '22048',
        keyword: ['Controlled Components'],
    },
    {
        question: 'What are uncontrolled components?',
        answers: [
            'Uncontrolled components are those for which the form data is handled by the DOM itself.', 
            'Uncontrolled components are components that help React identify which items have changed, are added, or are removed.', 
            'Uncontrolled components are components that take modules with dependencies, and generates static assets representing those modules.', 
            'Uncontrolled components are components in React in which form data is handled by the component\'s state.', 
        ],
        correct: 'Uncontrolled components are those for which the form data is handled by the DOM itself.',
        explanation: '“Uncontrolled” refers to the fact that these components are not controlled by React state.',
        questionId: '22049',
        keyword: ['Uncontrolled components'],
    },
    {
        question: 'What answer best describes shouldComponentUpdate',
        answers: [
            'shouldComponentUpdate is a function that takes a component and returns a new component.', 
            'shouldComponentUpdate is a portal that provides a way to render children into a DOM node that exists outside the DOM hierarchy.',
            'shouldComponentUpdate is a method that allows developers to exit the complex react update life cycle to avoid calling it again and again on every re-render. It only updates the component if the props passed to it changes.', 
            'shouldComponentUpdate is a module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.', 
        ],
        correct: 'shouldComponentUpdate is a method that allows developers to exit the complex react update life cycle to avoid calling it again and again on every re-render. It only updates the component if the props passed to it changes.',
        explanation: '',
        questionId: '22050',
        keyword: ['shouldComponentUpdate'],
    },
    {
        question: 'Which answer best describes performance benefits of functional components?',
        answers: [
            'The overload created by lifecycle methods are limited in functional components, which avoids unnecessary memory allocations and checks.', 
            'Functional components provide multiprocessor support and an ORM system that has lots of features.', 
            'Functional components are fast because only the best developers use them.', 
        ],
        correct: 'The overload created by lifecycle methods are limited in functional components, which avoids unnecessary memory allocations and checks.',
        explanation: '',
        questionId: '22051',
        keyword: ['Functional Components'],
    },
    {
        question: 'What are Error Boundaries?',
        answers: [
            'React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.', 
            'Error Boundaries help React identify which items have changed, are added, or are removed.', 
            'Error Boundaries plays an important role in displaying multiple views in a single page application.', 
            'Error Boundaries is a way of sticking a specific prop to a specific component.', 
        ],
        correct: 'React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.',
        explanation: 'React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.',
        questionId: '22052',
        keyword: ['Error Boundaries'],
    },
    {
        question: 'Which best describes Context API?',
        answers: [
            'Context API is an algorithm that React uses to process large amounts of data.', 
            'Context API is a process in which a user is directed to different pages based on their action or request', 
            'Context API is a another name for Redux Toolkit.', 
            'Context API is a way for a React app to effectively produce global variables that can be passed around.', 
        ],
        correct: 'Context API is a way for a React app to effectively produce global variables that can be passed around.',
        explanation: 'An example is complex data objects. React\'s Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.',
        questionId: '22053',
        keyword: ['Context API'],
    },
    {
        question: 'What is Webpack?',
        answers: [
            'Webpack is a module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.', 
            'Webpack is similar to Component, but it skips re-renders for same props and state. Webpack only renders components when there is a difference between current and previous states or props.', 
            'Webpack is framework that blends together JavaScript and Java in order to make React more flexible.', 
            'Webpack helps a React app share data between components which can\'t easily be shared with props.', 
        ],
        correct: 'Webpack is a module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.',
        explanation: '',
        questionId: '22054',
        keyword: ['Webpack'],
    },
    {
        question: 'What is the purpose of Webpack?',
        answers: [
            'Webpack is used as a state management tool with React and Typescript.', 
            'Webpack was created to test individual units of software in isolation.', 
            'Webpack\'s purpose is to move state up to a common ancestor of components that rely on the same state.', 
            'Webpack takes modules with dependencies, and generates static assets representing those modules.', 
        ],
        correct: 'Webpack takes modules with dependencies, and generates static assets representing those modules.',
        explanation: '',
        questionId: '22055',
        keyword: ['Webpack'],
    },
    {
        question: 'Controlled components are predictable because the state of the form elements is handled by the component.',
        answers: [
            'True', 
            'False', 
        ],
        correct: 'True',
        explanation: '',
        questionId: '22056',
        keyword: ['Controlled Components'],
    },
     {
        question: 'Uncontrolled components are predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources',
        answers: [
            'True', 
            'False', 
        ],
        correct: 'False',
        explanation: 'Uncontrolled components ARE NOT predictable because, during the lifecycle of a component, the form elements can lose their reference and may be changed/affected by other sources',
        questionId: '22057',
        keyword: ['Uncontrolled components'],
    },
     {
        question: 'Controlled components enable you to effectively employ form validation to your forms. It doesn\'t matter what changes the form elements. Their values are safe in our local states, so that\'s where we perform our validation.',
        answers: [
            'True', 
            'False',  
        ],
        correct: 'True',
        explanation: '',
        questionId: '22058',
        keyword: [''],
    },
     {
        question: 'With controlled components, you are not in control of your form elements\' values, and you can\'t dictate how they go and what can and cannot be inserted.',
        answers: [
            'True', 
            'False', 
        ],
        correct: 'False',
        explanation: 'With controlled components, you ARE very much in control of your form elements\' values. You can dictate how they go and what can and cannot be inserted',
        questionId: '22059',
        keyword: ['Controlled Components'],
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
//     ],
//     correct: '',
//     explanation: '',
//     questionId: '22043',
//     keyword: [''],
// },
