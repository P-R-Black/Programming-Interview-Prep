import formatImage from '../assets/questionImages/formattedTextImg.jpeg';


const htmlQuestionBank = [
    {
        question: 'How do you create the formatted text below?',
        image: formatImage,
        answers: [
            '<p> This is a <mark>Formatted</mark> text</p>',
            '<p>This is a <highlight>Formatted<highlight> text</p>',
            '<p>This is a <color>Formatted</color> text</p>',
            '<p> This is a <em>Formatted</em> text<p>',
        ],
        correct: '<p> This is a <mark>Formatted</mark> text</p>',
        explanation: '',
        questionId: '24000',
        keyword: ['HTML Tags', 'Semantic Tags'],
    },
    {
        question: 'Which group of tags are considered semantic tags',
        answers: [
            '<div>, <span>',
            '<img>, <table>, <article>, <section>, <aside>, <nav>',
        ],
        correct: '<img>, <table>, <article>, <section>, <aside>, <nav>',
        explanation: 'Semantic tags in HTML are elemetnts that clearly define their content\'s purpose and meaing to both the browswer and the developer.',
        questionId: '24001',
        keyword: ['HTML Tags', 'Semantic Tags'],
    },
    {
        question: 'What are semantic tags in HTML',
        answers: [
            'Semantic tags in HTML are tags that don\'t care about the semantics.',
            'Semantic tags are tags like the <div> and <span> tags.',
            'Semantic tags in HTML are elemetnts that clearly define their content\'s purpose and meaing to both the browswer and the developer.',
            'Semantic tags are the tags used to process the inputs of a form.',
        ],
        correct: 'Semantic tags in HTML are elemetnts that clearly define their content\'s purpose and meaing to both the browswer and the developer.',
        explanation: '',
        questionId: '24002',
        keyword: ['HTML Tags', 'Semantic Tags'],
    },

    {
        question: 'There are two divs, they are next to each other, and I need to increase the space between the divs. Would I use margin or padding?',
        answers: [
            'Padding, because padding increases space outside of an element, and that would apply in this scenario.',
            'Space, using space: 1 on the div will increase the space between the divs by 1rem.',
            'Widen Right, using the widen_right: 1 will increase the space between the divs by 16px.',
            'Margin, because margin increases space outside of an element, and that would apply in this scenario.',
        ],
        correct: 'Margin, because margin increases space outside of an element, and that would apply in this scenario.',
        explanation: '',
        questionId: '24006',
        keyword: ['margin', 'padding'],
    },

];
export default htmlQuestionBank;
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
//     questionId: '24004',
//     keyword: [''],
// },