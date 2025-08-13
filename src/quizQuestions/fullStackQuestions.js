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
]
export default fullStackQuestionBank;


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
//     questionId: '27000',
//     keyword: [''],
// },