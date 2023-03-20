const djangoQuestionBank =[
    {
        question: 'How would you explain what models are?',
        answers: [
            'A model is a Python class that subclasses django.db.models.Model in which each attribute represents a database field.', 
            'A model is what is used to display a webpage from django.', 
            'A model in Django is where URLs are constructed in Django.', 
            'Models are the areas of Django where CSS templates are stored.', 
        ],
        correct: 'A model is a Python class that subclasses django.db.models.Model in which each attribute represents a database field.',
        explanation: 'Django will create a table for each model defined in the models.py file. When you create a model, Django will provides you with a practical API to query objects in the database easily.',
        questionId: '23000'
    },
    {
        question: 'What do you understand the term CRUD to mean?',
        answers: [
            'Clean, Rinse, Upsize, Download', 
            'CRUD is related to Class Based Views.', 
            'CRUD is a special kind of multiple inheritance for a class.', 
            'Create, Retrieve, Update, Delete', 
        ],
        correct: 'Create, Retrieve, Update, Delete',
        explanation: '',
        questionId: '23001'
    },
    {
        question: 'What does CSRF stand for and what is it?',
        answers: [
            'CSRF stands for Cross-site request forgery. the CSRF token introduces a hidden field with an autogenerated token to avoid cross-site request forgery attacks.', 
            'CSRF stands for Coding Size Return Font and applies to the font type that must be used in Django apps.', 
            'CSRF stands for Crisp Solid Ready For Production and describes how production ready code must be written in Django.', 
            'CSRF stands for nothing, but is used to save information to the Django database.', 
        ],
        correct: 'CSRF stands for Cross-site request forgery. the CSRF token introduces a hidden field with an autogenerated token to avoid cross-site request forgery attacks.',
        explanation: 'These attacks can consist of a malicious website or program peforming an unwanted action for a user on your site.',
        questionId: '23002'
       },
       {
        question: 'What are a couple of the advantageous features of Django?',
        answers: [
            'Django provides multiprocessor support and the ORM system has a lot of features', 
            'It is great for small projects.', 
            'Battery included, rapid development, security, scalable, community supported, admin interface, python web-framework.', 
            'Django is small and easy to learn.', 
        ],
        correct: 'Battery included, rapid development, security, scalable, community supported, admin interface, python web-framework.',
        explanation: 'Also time-tested, speed and app performance, admin interface, object oriented, REST Framework for APIs, Versatile.',
        questionId: '23003'
       },
       {
        question: 'Explain which features of Django might be considered drawbacks?',
        answers: [
            'Not suitable for small projects, Does not provide multiprocessor support, ORM system lacks features, steep learning curve.', 
            'Battery included, rapid development, security, scalable, community supported, admin interface, python web-framework.', 
            'Time-tested, speed and app performance, admin interface, object oriented, REST Framework for APIs, Versatile', 
            'Django is not a widly used framework, which makes it difficult to find support.', 
        ],
        correct: 'ot suitable for small projects, Does not provide multiprocessor support, ORM system lacks features, steep learning curve.',
        explanation: 'Django is designed for building large applications quickly, and for this, it requires server processing time and bandwidth while developing, Bandwidth is the requirement for scaling the sites, and for small projects, large bandwidth gets wasted',
        questionId: '23004'
       },
       {
        question: 'What is meant by Django MVT architecture?',
        answers: [
            'MVT is a Django architecture that merges Django with React and Typescript.', 
            'MVT stands for Mobile, Vital Technology, and is a software design pattern used for developing a iOS and Android apps', 
            'MVT is a way to save data entered into a Django app.', 
            'MVT is a software design pattern for developing a web application. It consists of the following three entities, Model, Views, Template.', 
        ],
        correct: 'MVT is a software design pattern for developing a web application. It consists of the following three entities, Model, Views, Template.',
        explanation: '',
        questionId: '23005'
       },
       {
        question: 'How is the project directory structured in Django?',
        answers: [
            'The Django project directory is structured from top to bottom.', 
            'Django uses the concept of projects and apps for managing the codes and presents them in a readable format. A Django project contains one or more apps within it, the files inlcude manage.py, __init.py__, settings.py, urls.py, wsgi.py.', 
            'The Django project directory is structured in the settings.py file.', 
            'The Django project director is structured by the creators command in Django models.',
        ],
        correct: 'Django uses the concept of Projects and apps for managing the codes and presents them in a readable format. A Django project contains one or more apps within it, the files inlcude manage.py, __init.py__, settings.py, urls.py, wsgi.py, asgi.py.',
        explanation: '',
        questionId: '23006'
       },
       {
        question: 'What is the Django template language?',
        answers: [
            'Django Template Language or DTL is a Python class that subclasses django.db.models.Model in which each attribute represents a database field', 
            'Django Template Language or DTL is a special kind of multiple inheritance for a class.', 
            'Django Template Language or DTL is a text-based Template language that provides a bridge between scripts like HTML, CSS, JS, etc. and programming languages like python.', 
            'Django Template Language or DTL is another named for Class-based views.', 
        ],
        correct: 'Django Template Language or DTL is a text-based Template language that provides a bridge between scripts like HTML, CSS, JS, etc. and programming languages like python.',
        explanation: '',
        questionId: '23007'
       },
       {
        question: 'What are views in Django',
        answers: [
            'Django view is a python function that receives a web request and returns a web response. All the logic to return the desired response goes inside the view.', 
            'Views are a collection of database queries to retrieve objects from your database.', 
            'Views are a text-based Template language that provides a bridge between scripts like HTML, CSS, JS, etc. and programming languages like python.', 
            'Django views is a group of models, templates and urls that interact with teh framework to provide some functionality.', 
        ],
        correct: 'Django view is a python function that receives a web request and returns a web response. All the logic to return the desired response goes inside the view.',
        explanation: 'All the logic to return the desired response goes inside the view.First you create your application views, then define a URL pattern for each vview, and then create HTML templates to render the data generated by the view. Each view will render a template passing variables to it, and will return an HTTP response with the rendered output.',
        questionId: '23008'
       },
];

export default djangoQuestionBank;

