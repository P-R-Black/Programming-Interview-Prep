
const fullStackQuestionBank = [
    {
        question: 'Which of the following is NOT a core principle used in object-oriented software design and programming?',
        answers: [
            'Immutability',
            'Inheritance',
            'Polymorphism',
            'Encapsulation',
        ],
        correct: 'Immutability',
        explanation: '',
        questionId: '27000',
        keyword: ['Object-oriented programming', 'OOP Inheritance', 'OOP Polymorphism', 'OOP Encapsulation'],
    },
    {
        question: 'To create web apps that can gracefully handle a lost network connection and sync data in a background thread after the device comes back online, you should use?',
        answers: [
            'TheAppCache API',
            'A Service Worker',
            'A Worklet',
            'A Shared Worker',
        ],
        correct: 'A Service Worker',
        explanation: 'Service Workers are scripts that run in the background, separate from the main browser thread.',
        questionId: '27001',
        keyword: [''],
    },
    {
        question: 'You do not want the browser or intermediate servers to provide a cached version of the resource, regardless of cache validity. Which "Cache-Control" header should your client provide in the request?',
        answers: [
            'Cache-Control: proxy-revalidate',
            'Cache-Control: no-cache',
            'Cache-Control: no-store',
            'Cache-Control: immutable',
        ],
        correct: 'Cache-Control: no-store',
        explanation: 'no-store tells the browser and any intermediate caches not to store the resource at all — meaning every request will go to the origin server, regardless of cache validity.',
        questionId: '27002',
        keyword: ['HTTP Caching Fundamentals', 'Cache-Control headers'],
    },
    {
        question: 'What is the purpose of unit testing?',
        answers: [
            'To test a software application as a complete unit and ensure it complies with expected functional requirements.',
            'To test independently developed units of code and verify that they work correctly when interacting with each other',
            'To test small, individual units of code (such as methods, classes, or modules) and verify their correctness',
            'To test different application workflows from start to finish and simulate real use-case scenarios',
        ],
        correct: 'To test small, individual units of code (such as methods, classes, or modules) and verify their correctness',
        explanation: 'Unit testing is about trust. It gives you confidence that your code works now, keeps working after changes, and behaves exactly the way you think it should.',
        questionId: '27003',
        keyword: ['unit testing'],
    },
    {
        question: 'Why do assets sometimes have extra characters in their filenames, e.g. script.3ebe4e93.js?',
        answers: [
            'The characters are a link to a sourcemap, which aids in debugging.',
            'This is a hash of the file\'s contents, which busts caches when new versions are released.',
            'This is the file\'s git commit hash, which makes it easy to track the last time the file was updated.',
            'These are random characters are added to the filename at deploy time to bust caches.',
        ],
        correct: 'This is a hash of the file\'s contents, which busts caches when new versions are released.',
        explanation: 'Those extra characters are a content hash used to uniquely identify a file’s version. It’s a cache-busting technique to ensure users always get the latest version without sacrificing caching performance',
        questionId: '27004',
        keyword: ['content hash', 'cache-busting'],
    },
    {
        question: 'In the context of a RESTful APl, which of the following HTTP requests should NOT be used to add or update a user\'s profile information?',
        answers: [
            'A POST request to a users/:id endpoint',
            'A GET request to a /users/:id endpoint',
            'A PUT request to a /users/:id endpoint',
            'A PATCH request to a users/id endpoint',
        ],
        correct: 'A GET request to a /users/:id endpoint',
        explanation: 'GET is intended for retrieving data, not modifying it. In REST, GET requests should be safe (no side effects) and idempotent (repeated calls don’t change state).',
        questionId: '27005',
        keyword: ['RESTful APl request', 'GET', 'POST', 'PUT', 'PATCH'],
    },
    {
        question: 'How do you validate incoming request data in an Express + Typescript backend?',
        answers: [
            'You can use middleware like express-validator.',
            'You use a React Hook',
            'This isn\'t something that can be done.',
            'You call the "Validator API"',
        ],
        correct: 'You can use middleware like express-validator.',
        explanation: 'express-validator ensures fields exist and have the right types before persisting them. Errors can then be returned with validationResult(req).',
        questionId: '27006',
        keyword: ['Node.js', 'express', 'express-validator'],
    },
    {
        question: 'Why should API responses include the saved entity instead of just a success message?',
        answers: [
            'Returning the saved entity lets the frontend immediately update its state with the database-generated fields (like id, status, timestamps). This keeps the UI in sync without needing another fetch.',
            'Including the saved entity makes for more efficient code.',
            'Including the saved entity extends the user\'s capabilities.',
        ],
        correct: 'Returning the saved entity lets the frontend immediately update its state with the database-generated fields (like id, status, timestamps). This keeps the UI in sync without needing another fetch.',
        explanation: '',
        questionId: '27007',
        keyword: ['API saved entity', 'API success message'],
    },
    {
        question: 'What is Cross-origin resource sharing (CORS)?',
        answers: [
            'CORS is a process of frontend optimization.',
            'CORS meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'CORS is a markup language that uses tags to structure and define content on web pages.',
            'CORS is a security feature that restricts web applications from making requests to a domain different fromt he one which served the web page.',
        ],
        correct: 'CORS is a security feature that restricts web applications from making requests to a domain different fromt he one which served the web page.',
        explanation: 'To handle cross-origin resource sharing, configure he server to include CORS headers like "Access-Control-Allow-Origin" in the response, specifying which domains are allowed to access the resources.',
        questionId: '27008',
        keyword: ['CORS'],
    },
    {
        question: 'Compressing assets (CSS, JavaScript, Images), implementing lazy loading for images and components, using CDN for static assets, optimizing CSS selectors, and leveraging browser caching are all strategies for.',
        answers: [
            'frontend performance optmization',
            'backend performance optimzation',
            'making a website go viral',
            'saving code to github',
        ],
        correct: 'frontend performance optmization',
        explanation: '',
        questionId: '27009',
        keyword: ['Frontend optimization'],
    },
    {
        question: 'Progressive Web Apps are...',
        answers: [
            'Applications that use Django, React, and Amazon Web Services',
            'Web applications that use modern web technologies to provide a fast, reliable and engaging user experience.',
            'Applications hosted on Google Cloud',
            'Applications that sit between the client and server that is capable of handling requests and responses.',
        ],
        correct: 'Web applications that use modern web technologies to provide a fast, reliable and engaging user experience.',
        explanation: '',
        questionId: '27010',
        keyword: ['Progressive Web Apps'],
    },
    {
        question: 'Which is considered a key performance metric that is critical for a web application.',
        answers: [
            'First Contentful Paint (FCP)',
            'Largest Contentful Paint (LCP)',
            'Time to Interactive (TTI)',
            'All of the above',
        ],
        correct: 'All of the above',
        explanation: '',
        questionId: '27011',
        keyword: ['First Contentful Paint', 'Largest Contentful Paint', 'Time to Interactive'],
    },
    {
        question: 'What does First Contentful Paint (FCP) measure?',
        answers: [
            'FCP measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
            'FCP meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'FCP measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'FCP measures the visual stability of a webpage.',
        ],
        correct: 'FCP measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
        explanation: '',
        questionId: '27012',
        keyword: ['First Contentful Paint'],
    },
    {
        question: 'What does Time to Interactive (TTI) measure?',
        answers: [
            'TTI measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
            'TTI measures how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'TTI measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'TTI measures the time it takes for a browser to respond to a user\'s first interaction with a website, such as clicking a button or link.',
        ],
        correct: 'TTI measures how long it takes for a webpage to become fully interactive and usable for a user.',
        explanation: '',
        questionId: '27013',
        keyword: ['Time to Interactive (TTI)'],
    },
    {
        question: 'What does First Input Delay (FID) measure?',
        answers: [
            'FID measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
            'FID meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'FID measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'FID measures the time it takes for a browser to respond to a user\'s first interaction with a website, such as clicking a button or link.',
        ],
        correct: 'FID measures the time it takes for a browser to respond to a user\'s first interaction with a website, such as clicking a button or link.',
        explanation: '',
        questionId: '27014',
        keyword: ['Cumulative Layout Shift (CLS)'],
    },
    {
        question: 'What does Cumulative Layout Shift (CLS) measure?',
        answers: [
            'CLS measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
            'CLS meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'CLS measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'CLS measures the visual stability of a webpage.',
        ],
        correct: 'CLS measures the visual stability of a webpage.',
        explanation: 'CLS quantifies how often users experience unexpected layout shifts as they interact with a site. A good CLS score, ideally is below 0.1, indicates a stable and user-friendly experience.',
        questionId: '27015',
        keyword: ['Cumulative Layout Shift (CLS)'],
    },
    {
        question: 'Implementing Context Security Policies (CSP), santizing user inputs to prevent XSS attacks, and using HTTPS for secure communications are methods used to?',
        answers: [
            'Protect a frontend application from common security threats.',
            'Import JavaScript code into a web application',
            'Connect to the internet',
            'Safegaurd your cryptocurrency.',
        ],
        correct: 'Protect a frontend application from common security threats.',
        explanation: '',
        questionId: '27016',
        keyword: ['common security threats of frontend applications'],
    },
    {
        question: 'What is HTML?',
        answers: [
            'HTML (HyperText Markup Language) is a markup language that uses tags to structure and define content on web pages.',
            'HTML (HyperText Mimmic Language) is a programming language exclusively used to create iPhone apps.',
            'HTML (HyperTransit Meduim Language) is a programming language exclusively used to create Android apps.',
            'HTML (HyperTextual Motion Loader) is a programming language exclusively used to create apps for PCs.',
        ],
        correct: 'HTML (HyperText Markup Language) is a markup language that uses tags to structure and define content on web pages.',
        explanation: '',
        questionId: '27017',
        keyword: ['HTML'],
    },
    {
        question: 'What is the DOM?',
        answers: [
            'The DOM or Dedicated Object Manifest ',
            'The DOM or Document Object Model is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects.',
            'The DOM or Domain Oriented Machine is a high-performance, open-source framework for making remote procedure calls (RPCs) across machines, with features like authentiation, load balancing, and more.',
            'The DOM or Document Object Model describes how HTML elements are rendered as rectangular boxes in a web browser.',
        ],
        correct: 'The DOM or Document Object Model is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree of objects.',
        explanation: 'Each object in the tree corresponds to an element, attribute, or text node within the document.',
        questionId: '27018',
        keyword: ['Document Object Model'],
    },
    {
        question: 'What is CSS',
        answers: [
            'CSS, or Curve Style Smoothing, is a way of smoothing out rough edges on shapes created in HTML.',
            'CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
            'CSS, or Cascading Server Systems, is a programming language that bridges the frontend to the backend.',
            'CSS, or Crash System Services, is a report that provides feedback when applications crash unexpectedly.',
        ],
        correct: 'CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
        explanation: '',
        questionId: '27019',
        keyword: ['CSS'],
    },
    {
        question: 'What is the box model in CSS?',
        answers: [
            'It\'s the model that enhances the box.',
            'The Box Model is a third-party program that JavaScript uses to read CSS files.',
            'The Box Model is another name for CSS animation.',
            'The Box Model describes how HTML elements are rendered as rectangular boxes in a web browser.',
        ],
        correct: 'The Box Model describes how HTML elements are rendered as rectangular boxes in a web browser.',
        explanation: '',
        questionId: '27020',
        keyword: ['CSS box model'],
    },
    {
        question: 'What are CSS preprocessors',
        answers: [
            'CSS preprocessors enable web pages to update asynchronously by exchanging data with a server behind the scenes.',
            'CSS preprocessors generate HTML on the server and sends it to the client, improving initial load tiems and SEO.',
            'CSS preprocessors are sued to generate unique identifiers for records in a database table.',
            'CSS preprocessors like SASS and LESS extend CSS with variables, nested rules, and functions.',
        ],
        correct: 'CSS preprocessors like SASS and LESS extend CSS with variables, nested rules, and functions.',
        explanation: '',
        questionId: '27021',
        keyword: ['CSS preprocessors'],
    },
    {
        question: 'What is AJAX?',
        answers: [
            'AJAX (Asynchronous JavaScript and XLM) enables web pages to update asynchronously by exchanging data with a server behind the scenes.',
            'AJAX (Asynchronous JavaScript and XLM) is an Object-relational Mapper, that allows for writing raw SQL queries.',
            'AJAX (Asynchronous JavaScript and XLM) is a query language for APIs and a runtime for executing those querieis by using a type system you define for your data.',
            'AJAX (Asynchronous JavaScript and XLM) is a lightweight data interchange format that\'s easy for humans to read and write and for machines to parse and generate.',
        ],
        correct: 'AJAX (Asynchronous JavaScript and XLM) enables web pages to update asynchronously by exchanging data with a server behind the scenes.',
        explanation: '',
        questionId: '27022',
        keyword: ['AJAX'],
    },
    {
        question: 'What is React?',
        answers: [
            'React is a JavaScript library for building user interfaces, focusing on component-based architecture and state management.',
            'React is a Java library for building user interfaces, focusing on component-based architecture and state management.',
            'React is a C++ library for building user interfaces, focusing on component-based architecture and state management.',
            'React is Python library for building user interfaces, focusing on component-based architecture and state management.',
        ],
        correct: 'React is a JavaScript library for building user interfaces, focusing on component-based architecture and state management.',
        explanation: '',
        questionId: '27023',
        keyword: ['React'],
    },
    {
        question: 'Which answer best explains server-side rendering?',
        answers: [
            'Server-side rendering renders pages directly in the browser using JavaScript, which leads to faster subsequent page loads.',
            'Server-side rendering is a software development technique where large applications are structured as a collection of small, independent, and loosely coupled services.',
            'Server-side rendering renders a lightweight, portable, and self-sufficient container environment that includes everything needed to run a piece of software.',
            'Server-side rendering generates HTML on the server and sends it to the client, improving initial load tiems and SEO.',
        ],
        correct: 'Server-side rendering generates HTML on the server and sends it to the client, improving initial load tiems and SEO.',
        explanation: '',
        questionId: '27024',
        keyword: ['server-side rendering'],
    },
    {
        question: 'Which answer best explains client-side rendering?',
        answers: [
            'Client-side rendering generates HTML on the server and sends it to the client, improving initial load tiems and SEO.',
            'Client-side rendering is simple state logic that provides variable and function updates for complex state logic that involves multiple sub-values.',
            'Client-side rendering renders pages directly in the browser using JavaScript, which leads to faster subsequent page loads.',
            'Client-side rendering measures the visual stability of a webpage.',
        ],
        correct: 'Client-side rendering renders pages directly in the browser using JavaScript, which leads to faster subsequent page loads.',
        explanation: '',
        questionId: '27025',
        keyword: ['client-side rendering'],
    },
    {
        question: 'Your interview asks you to discuss frontend testing strategies, which choice would help you with frontend testing?',
        answers: [
            'Jest, React Testing Library, Cypress, and Selenium',
            'Pytest, JUnit, MSTest, MUnit',
            'Github, GitBucket',
            'Ethereum Test Network',
        ],
        correct: 'Jest, React Testing Library, Cypress, and Selenium',
        explanation: '',
        questionId: '27026',
        keyword: ['frontend testing strategies', 'Jest', 'React Testing Library', 'Cypress', 'Selenium'],
    },
    {
        question: 'Which of the following choices represents the best way to implement a dark mode feature in a web application?',
        answers: [
            'Create two versions of the web application, one light and another dark, add a toggle switch that allows the user to switch between the dark themed application and the light themed application.',
            'Use the React Hook "useDarkTheme" to create a web application with a dark mode feature.',
            'Use CSS custom properties for color schemes and media queries (prefers-color-scheme) to detect system theme preferences. Provide a toggle option for users to switch manually, storing their preference locally to persist across sessions.',
        ],
        correct: 'Use CSS custom properties for color schemes and media queries (prefers-color-scheme) to detect system theme preferences. Provide a toggle option for users to switch manually, storing their preference locally to persist across sessions.',
        explanation: '',
        questionId: '27027',
        keyword: [''],
    },
    {
        question: 'What is a primary key?',
        answers: [
            'A primary key is the first item in a list of items.',
            'A primary key is the key used to decrypt data that has been encrypted.',
            'A primary key is a field in a database table that creates a ling between two tables.',
            'A primary key is a unique identifier for a record in a database table.',
        ],
        correct: 'A primary key is a unique identifier for a record in a database table.',
        explanation: '',
        questionId: '27028',
        keyword: ['primary keys', 'database primary keys'],
    },
    {
        question: 'What is a foreign key?',
        answers: [
            'A foreign key is a field in a database table that creates a link between two tables.',
            'A foreign key is the last item in a list of items.',
            'A foreign key the key used to decrypt data that has been encrypted.',
            'A foreign key is a tool used for hashing.',
        ],
        correct: 'A foreign key is a field in a database table that creates a link between two tables.',
        explanation: '',
        questionId: '27029',
        keyword: ['foreign keys', 'database foreign keys'],
    },
    {
        question: 'What is Object-Relational-Mapping?',
        answers: [
            'Object-Relational-Mapping (ORM) is a technique and tool that creates a conceptual "bridge" between object-oriented programming languages and relational databases, allowing developers to work with data using objects rather than writing SQL code.',
            'Object-Relational-Mapping (ORM) is a development technique where large applications are structured as a collection of small, independent, and loosely coupled services.',
            'Object-Relational-Mapping (ORM) is a code injection technique that exploits vulnerabilities in an application\'s software by inserting malicious SQL statements.',
        ],
        correct: 'Object-Relational-Mapping (ORM) is a technique and tool that creates a conceptual "bridge" between object-oriented programming languages and relational databases, allowing developers to work with data using objects rather than writing SQL code.',
        explanation: 'ORMs automate the translation of application objects into database tables and vice-versa, simplifying data persistence, improving developer productivity, and promoting modular application design by abstracting database details.',
        questionId: '27030',
        keyword: ['ORM', 'Object-Relational-Mapping'],
    },
    {
        question: 'What are microservices',
        answers: [
            'Microservices are small pieces of information that is stored in the client browswer, and it\'s used to store user\'s data in a file permanently or for a specified time.',
            'Microservices are a software development technique where large applications are structured as a collection of small, independent, and loosely coupled services.',
            'Microservices are a state management tool used with React and Typescript.',
            'Microservices are an open-source platform for automating the deployment, scaling, and management of containerized applications.',
        ],
        correct: 'Microservices are a software development technique where large applications are structured as a collection of small, independent, and loosely coupled services.',
        explanation: '',
        questionId: '27031',
        keyword: ['microservices'],
    },
    {
        question: 'What is Docker',
        answers: [
            'Docker is a superset of JavaScript that adds static types, enhancing code quality and developer productivity.',
            'Docker is an open-source platform for automating the deployment, scaling, and management of containerized applications.',
            'Docker is a platform for developing, shipping, and running applications in containers.',
            'Docker is a system that handles incoming network traffic across multiple servers to ensure no single server is overwhelmed',
        ],
        correct: 'Docker is a platform for developing, shipping, and running applications in containers.',
        explanation: '',
        questionId: '27031',
        keyword: ['Docker'],
    },
    {
        question: 'Which choice best describes what a container is?',
        answers: [
            'A container is a field in a database table that creates a ling between two tables.',
            'A container generates HTML on the server and sends it to the client, improving initial load tiems and SEO.',
            'A container extend CSS with variables, nested rules, and functions.',
            'A container is a lightweight, portable, and self-sufficient environment that includes everything needed to run a piece of software.',
        ],
        correct: 'A container is a lightweight, portable, and self-sufficient environment that includes everything needed to run a piece of software.',
        explanation: '',
        questionId: '27032',
        keyword: ['containers'],
    },
    {
        question: 'Which choice best describes Kubernetes?',
        answers: [
            'Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications.',
            'Kubernetes is a way for a React app to effectively produce global variables that can be passed around.',
            'Kubernetes is a Python file that contains changes we make to our models so that they can be converted into a database schema.',
            'Kubernetes is a third-party program that JavaScript uses to read CSS files',
        ],
        correct: 'Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications.',
        explanation: '',
        questionId: '27033',
        keyword: ['Kubernetes'],
    },
    {
        question: 'Distributing incoming network traffic across multiple servers to ensure no single server is overwhelmed, refers to',
        answers: [
            'Depth first search',
            'Load balancing',
            'Walking a tree',
            'Kruskal\'s algorithm',
        ],
        correct: 'Load balancing',
        explanation: 'By distributing traffic, load balancers prevent any single server from becoming overloaded, which helps maintain fast response times and prevents slowdowns.',
        questionId: '27034',
        keyword: ['Load balancing'],
    },
    {
        question: 'The process of forwarding client requests to backend servers and returning the server\'s response to the client, best describes?',
        answers: [
            'Kahn\'s algorithm',
            'Breadth-first search',
            'A reverse proxy',
            'Load balancing',
        ],
        correct: 'A reverse proxy',
        explanation: '',
        questionId: '27035',
        keyword: ['Reverse proxy'],
    },
    {
        question: 'Which answer best describes middleware?',
        answers: [
            'Software that provides a better mobile experience, faster load balancing, and early error detection.',
            'A CSS technique used to apply styles based on device characteristics, such as screen width.',
            'A code injection technique that exploits vulnerabilities in an application\'s software by inserting malicious SQL statements.',
            'Software that sits between the client and server that is capable of handling requests and responses.',
        ],
        correct: 'Software that sits between the client and server that is capable of handling requests and responses.',
        explanation: '',
        questionId: '27036',
        keyword: ['middleware'],
    },
    {
        question: 'Which choice best describes TypeScript?',
        answers: [
            'TypeScript is a superset of JavaScript that adds static types, enhancing code quality and developer productivity.',
            'TypeScript is a static module bundler for JavaScript applications, that transforms and packages code for deployment.',
            'TypeScript is a script that runs in the background, enabling offline capabilities and background synching.',
            'TypeScript converts data into a coded form to prevent unauthorized access.',
        ],
        correct: 'TypeScript is a superset of JavaScript that adds static types, enhancing code quality and developer productivity.',
        explanation: '',
        questionId: '27037',
        keyword: ['TypeScript'],
    },
    {
        question: 'What are some of the benefits of using TypeScript?',
        answers: [
            'Better mobile experience, faster load balancing, early error detection.',
            'Improves code readability, early error detection, and better tooling support.',
            'Improves loading time of main content on webpages and lowers the time it takes for a browswer to respond to a user\'s first interaction.',
            'Provides better tooling support, better build times, unlimited flexibility.',
        ],
        correct: 'Improves code readability, early error detection, and better tooling support.',
        explanation: '',
        questionId: '27038',
        keyword: ['Pros and cons of TypeScript'],
    },
    {
        question: 'What is webpack?',
        answers: [
            'Webpack is an open-source platform for automating the deployment, scaling, and management of containerized applications.',
            'Webpack is a small piece of information that is stored in the client browswer, and it\'s used to store user\'s data in a file permanently or for a specified time.',
            'Webpack is a lightweight, portable, and self-sufficient environment that includes everything needed to run a piece of software.',
            'Webpack is a static module bundler for JavaScript applications, that transforms and packages code for deployment.',
        ],
        correct: 'Webpack is a static module bundler for JavaScript applications, that transforms and packages code for deployment.',
        explanation: 'Webpack is a static module bundler for modern JavaScript applications that takes your project\'s files, analyzes their dependencies, and bundles them into a smaller set of optimized files (like JavaScript, CSS, and images) that are faster for browsers to download and use. It achieves this by building a dependency graph from an entry point, transforming non-JavaScript assets using loaders, and performing additional processing with plugins to create the final bundles.',
        questionId: '27039',
        keyword: ['Webpack'],
    },
    {
        question: 'Which answer best explains lazy loading?',
        answers: [
            'Lazy loading delays loaing of non-critical resources until they are needed, which improves initial loading time.',
            'Lazy loading loads scripts that run in the background, enabling offline capabilities and background synching.',
            'Lazy loading is a security measure that prevents attackers from injecting malicious scripts into web pages.',
            'Lazy loading is a high-performance, open-source framework for making remote procedure calls (RPCs) across machines.',
        ],
        correct: 'Lazy loading delays loaing of non-critical resources until they are needed, which improves initial loading time.',
        explanation: '',
        questionId: '27040',
        keyword: ['lazy loading'],
    },
    {
        question: 'What are service workers?',
        answers: [
            'Service workers provide a programming interface that adheres to the architectural principles of Representational State Transfer (REST).',
            'Service workers are scripts that run in the background, enabling offline capabilities and background synching.',
            'Service workers are a security feature that restricts web applications from making requests to a domain different fromt he one which served the web page.',
            'Service workers are another name used to describe Progressive Web Apps',
        ],
        correct: 'Service workers are scripts that run in the background, enabling offline capabilities and background synching.',
        explanation: '',
        questionId: '27041',
        keyword: ['Service workers'],
    },
    {
        question: 'Which choice best describes what responsive design is?',
        answers: [
            'Responsive design ensures that the backend of an application responds quickly to the frontend of the applicaiton when a GET or POST request are initiated.',
            'Responsive design is another term used to describe an optimized, quick, and good looking website.',
            'Responsive design ensures web content adapts to different screen sizes and orientations for optimal viewing on any device.',
            'Responsive design refers to chatbots that respond to users of a web application.',
        ],
        correct: 'Responsive design ensures web content adapts to different screen sizes and orientations for optimal viewing on any device.',
        explanation: '',
        questionId: '27042',
        keyword: ['Responsive design'],
    },
    {
        question: 'What is a media query?',
        answers: [
            'A media query meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.',
            'A media query measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'A media query is an attack that forces a user to execute unwanted actions on a web application in which they\'re authenicated.',
            'A media query is a CSS technique used to apply styles based on device characteristics, such as screen width.',
        ],
        correct: 'A media query is a CSS technique used to apply styles based on device characteristics, such as screen width.',
        explanation: '',
        questionId: '27043',
        keyword: ['Media query'],
    },
    {
        question: 'What is an SQL Injection?',
        answers: [
            'An SQL Injection is a code injection technique that exploits vulnerabilities in an application\'s software by inserting malicious SQL statements.',
            'An SQL Injection is a generic class used for unit testing and functionality testing.',
            'An SQL Injection transforms input data into a fixed-size string of characters, which is typically a digest that uniqely identifies the input.',
            'An SQL Injection is a specific type of SQL database.',
        ],
        correct: 'An SQL Injection is a code injection technique that exploits vulnerabilities in an application\'s software by inserting malicious SQL statements.',
        explanation: '',
        questionId: '27044',
        keyword: ['SQL Injection'],
    },
    {
        question: 'What is Cross-Site Scripting (XSS)?',
        answers: [
            'Cross-Site Scripting (XSS) is design that ensures web content adapts to different screen sizes and orientations for optimal viewing on any device.',
            'Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.',
            'Cross-Site Scripting (XSS) is an attack that forces a user to execute unwanted actions on a web application in which they\'re authenicated.',
        ],
        correct: 'Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.',
        explanation: '',
        questionId: '27045',
        keyword: ['Cross-site scripting (XSS)'],
    },
    {
        question: 'What choice best describes Cross-site request forgery (CSRF)?',
        answers: [
            'Cross-site request forgery (CSRF) transforms input data into a fixed-size string of characters, which is typically a digest that uniqely identifies the input.',
            'Cross-site request forgery (CSRF) is an attack that forces a user to execute unwanted actions on a web application in which they\'re authenicated.',
            'Cross-site request forgery (CSRF) converts data into a coded form to prevent unauthorized access.',
            'Cross-site request forgery (CSRF) is a performance optimization technique that can be achieved by wrapping your code in the <optimize> tag.',
        ],
        correct: 'Cross-site request forgery (CSRF) is an attack that forces a user to execute unwanted actions on a web application in which they\'re authenicated.',
        explanation: '',
        questionId: '27046',
        keyword: ['Cross-site request forgery (CSRF)'],
    },
    {
        question: 'What is hashing?',
        answers: [
            'Hashing is a concept of co-location related to mounting, unmounting, and rendering.',
            'Hashing is a lightweight, portable, and self-sufficient environment that includes everything needed to run a piece of software.',
            'Hashing transforms input data into a fixed-size string of characters, which is typically a digest that uniqely identifies the input.',
            'Hashing is a lightweight data interchange format that\'s easy for humans to read and write and for machines to parse and generate.',
        ],
        correct: 'Hashing transforms input data into a fixed-size string of characters, which is typically a digest that uniqely identifies the input.',
        explanation: '',
        questionId: '27047',
        keyword: ['Hashing'],
    },
    {
        question: 'What is encryption?',
        answers: [
            'Encryption is a loosely coupled framework with Model, View, and Template architecture.',
            'Encryption is another name used to describe cryptocurrencies',
            'Encryption is an open-source platform for automating the deployment, scaling, and management of containerized applications.',
            'Encryption converts data into a coded form to prevent unauthorized access.',
        ],
        correct: 'Encryption converts data into a coded form to prevent unauthorized access.',
        explanation: '',
        questionId: '27048',
        keyword: ['Encryption'],
    },
    {
        question: 'What is GraphQL?',
        answers: [
            'GraphQL is a query language for APIs and a runtime for executing those querieis by using a type system you define for your data.',
            'GraphQL is a generic class used for unit testing and functionality testing.',
            'GraphQL is a concept of co-location related to mounting, unmounting, and rendering.',
            'GraphQL is a package of graphs designed for frontend libraries like JavaScript and React.',
        ],
        correct: 'GraphQL is a query language for APIs and a runtime for executing those querieis by using a type system you define for your data.',
        explanation: '',
        questionId: '27049',
        keyword: ['GraphQL'],
    },
    {
        question: 'What is JSON?',
        answers: [
            'JSON (JavaScript Object Notation) are arrays of data that can only be called and displayed in React by using a for loop',
            'JSON (JavaScript Object Notation) is a lightweight data interchange format that\'s easy for humans to read and write and for machines to parse and generate.',
            'JSON (JavaScript Object Notation) is a markup language that defines a set of rules for encoding documents in both a human-readable and machine-readable format, and it allows users to define their own custom tags to structure and organize data hierarchically, making it an excellent tool for exchanging data between different systems and platforms.',
        ],
        correct: 'JSON (JavaScript Object Notation) is a lightweight data interchange format that\'s easy for humans to read and write and for machines to parse and generate.',
        explanation: '',
        questionId: '27050',
        keyword: ['JavaScript Object Notation (JSON)'],
    },
    {
        question: 'Whatis RPC?',
        answers: [
            'RPC (Remote Procedure Call) is a CSS technique used to apply styles based on device characteristics, such as screen width.',
            'RPC (Remote Procedure Call) are scripts that run in the background, enabling offline capabilities and background synching.',
            'RPC (Remote Procedure Call), is a protocol that allows a program on one computer to execute a procedure (or function) on another computer over a network, as if it were a local call.',
            'RPC (Remote Procedure Call) is a lightweight data interchange format that\'s easy for humans to read and write and for machines to parse and generate.',
        ],
        correct: 'RPC (Remote Procedure Call), is a protocol that allows a program on one computer to execute a procedure (or function) on another computer over a network, as if it were a local call.',
        explanation: '',
        questionId: '27051',
        keyword: ['Remote Procedure Call (RPC)'],
    },
    {
        question: 'What is gRPC?',
        answers: [
            'gRPC is a platform for developing, shipping, and running applications in containers.',
            'gRPC is a static module bundler for JavaScript applications, that transforms and packages code for deployment.',
            'gRPC transforms input data into a fixed-size string of characters, which is typically a digest that uniqely identifies the input.',
            'gRPC is a high-performance, open-source framework for making remote procedure calls (RPCs) across machines, with features like authentiation, load balancing, and more.',
        ],
        correct: 'gRPC is a high-performance, open-source framework for making remote procedure calls (RPCs) across machines, with features like authentiation, load balancing, and more.',
        explanation: 'gRPC uses Protocol Buffers (protobufs) for high-performance binary serialization and HTTP/2 as the transport protocol. Key features include language independence, support for various communication patterns like streaming, and pluggable security. ',
        questionId: '27052',
        keyword: ['gRPC', 'Remote Procedure Call'],
    },
    {
        question: 'What choice best describes a RESTful API?',
        answers: [
            'A RESTful API is a high-performance, open-source framework for making remote procedure calls (RPCs) across machines, with features like authentiation, load balancing, and more.',
            'A RESTful API is a protocol that allows a program on one computer to execute a procedure (or function) on another computer over a network, as if it were a local call.',
            'A RESTful API is an application programming interface that adheres to the architectural principles of Representational State Transfer (REST).',
            'A RESTful API converts data into a coded form to prevent unauthorized access.',
        ],
        correct: 'A RESTful API is an application programming interface that adheres to the architectural principles of Representational State Transfer (REST).',
        explanation: '',
        questionId: '27053',
        keyword: ['REST', 'RESTful API'],
    },
    {
        question: 'What does Largest Contentful Paint (LCP) measure?',
        answers: [
            'LCP measures the time it takes for the browser to render the first piece of DOM content (text, images, or other non-white canvas elements) after a user navigates to a webpage.',
            'LCP meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.measures how long it takes for a webpage to become fully interactive and usable for a user.',
            'LCP measures the visual stability of a webpage.',
            'LCP measures how long it takes for a webpage to become fully interactive and usable for a user.',
        ],
        correct: 'LCP meausres how quickly the main content of a webpage loads, specifically the largest image or text block visible within the viewport.measures how long it takes for a webpage to become fully interactive and usable for a user.',
        explanation: '',
        questionId: '27054',
        keyword: ['Largest Contentful Paint (LCP)'],
    },
]
export default fullStackQuestionBank;

//  {
//         question: '',
//         answers: [
//             '',
//             '',
//             '',
//             '',
//         ],
//         correct: '',
//         explanation: '',
//         questionId: '27000',
//         keyword: [''],
//     },




let questoinsForReview = new Set()

const checkTest = (question) => {

    let newArray = []
    let questionId = question['questionId']
    let correct = question['correct']

    question['answers'].map((testing) => newArray.push(testing))


    if (callCheck(newArray, correct)) {
        return true
    }
    return [false, questionId]
}

const callCheck = (answers, correct) => {

    if (answers.includes(correct)) {
        return true
    }

    return false
}


const testQuizesBank = () => {

    for (let i in fullStackQuestionBank) {
        for (let j in fullStackQuestionBank[i]) {
            let test = checkTest(fullStackQuestionBank[i])
            if (test === true) {
                break

            } else {
                questoinsForReview.add(test[1])
            }
        }

    }
    console.log('Questions for review', questoinsForReview)
}
// testQuizesBank()


