import { Record } from '../models/record.model';

export const questionsAndAnswers: Record[] = [
  {
    id: '1',
    question: 'What is the difference between HTML and XHTML?',
    answer:
      'HTML is a markup language used to create web pages, while XHTML is a stricter and more XML-based version of HTML. XHTML requires that all elements be properly nested and closed, and all attribute values be enclosed in quotes.',
    category: 'html',
    linkReadMore: 'https://www.w3schools.com/html/html_xhtml.asp',
    updatedAt: '2022-12-01',
    publishedAt: '2022-11-01',
    createdAt: '2022-10-01',
    answerMd: {
      id: '1',
      url: 'https://example.com/1',
    },
  },
  {
    id: '2',
    question: 'What is the box model in CSS?',
    answer:
      'The box model is a design concept in CSS that describes the layout of a webpage. It consists of four parts: margin, border, padding, and content. Each part is defined by a set of properties that determine its size, position, and style.',
    category: 'css',
    linkReadMore: 'https://www.w3schools.com/css/css_boxmodel.asp',
    updatedAt: '2022-12-02',
    publishedAt: '2022-11-02',
    createdAt: '2022-10-02',
    answerMd: {
      id: '2',
      url: 'https://example.com/2',
    },
  },
  {
    id: '3',
    question: 'What is a closure in JavaScript?',
    answer:
      'A closure is a function that has access to variables in its outer scope, even after the outer function has returned. Closures are often used to create private variables or to create functions that can be passed as arguments to other functions.',
    category: 'javascript',
    linkReadMore:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    updatedAt: '2022-12-03',
    publishedAt: '2022-11-03',
    createdAt: '2022-10-03',
    answerMd: {
      id: '3',
      url: 'https://example.com/3',
    },
  },
  {
    id: '4',
    question: 'What is TypeScript?',
    answer:
      'TypeScript is a superset of JavaScript that adds static type checking and other features to the language. TypeScript code is transpiled to JavaScript, which can be executed by any web browser or JavaScript engine.',
    category: 'typescript',
    linkReadMore: 'https://www.typescriptlang.org/',
    updatedAt: '2022-12-04',
    publishedAt: '2022-11-04',
    createdAt: '2022-10-04',
    answerMd: {
      id: '4',
      url: 'https://example.com/4',
    },
  },
  {
    id: '5',
    question: 'What is Angular?',
    answer:
      'Angular is a front-end web development framework created by Google. It uses HTML, CSS, and TypeScript to build dynamic, single-page applications. Angular provides a powerful set of features, including dependency injection, component-based architecture, and reactive programming.',
    category: 'angular',
    linkReadMore: 'https://angular.io/',
    updatedAt: '2022-12-05',
    publishedAt: '2022-11-05',
    createdAt: '2022-10-05',
    answerMd: {
      id: '5',
      url: 'https://example.com/5',
    },
  },
  {
    id: '6',
    question: 'What is the difference between TypeScript and JavaScript?',
    answer:
      'TypeScript is a superset of JavaScript that adds optional static typing, classes, and interfaces to the language. This allows for better code organization and tooling support, but also requires additional compilation steps. JavaScript, on the other hand, is a dynamically typed language that is widely used for web development and can be run natively in web browsers.',
    category: 'typescript',
    linkReadMore:
      'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
    updatedAt: '2022-11-15',
    publishedAt: '2022-11-01',
    createdAt: '2022-10-01',
    answerMd: {
      id: '1',
      url: 'https://github.com/user/repo/blob/main/answers/1.md',
    },
  },
  {
    id: '7',
    question:
      'What is the difference between an observable and a promise in RxJS?',
    answer:
      'In RxJS, an observable is a stream of events that can be subscribed to and processed over time, while a promise is a one-time operation that returns a value or throws an error. Observables are useful for handling continuous streams of data, while promises are useful for handling discrete, one-time operations.',
    category: 'rxjs',
    linkReadMore: 'https://rxjs.dev/guide/observable',
    updatedAt: '2022-07-15',
    publishedAt: '2022-07-01',
    createdAt: '2022-06-01',
    answerMd: {
      id: '2',
      url: 'https://github.com/user/repo/blob/main/answers/2.md',
    },
  },
  {
    id: '8',
    question: 'What is the difference between const and let in JavaScript?',
    answer:
      'In JavaScript, const and let are used to declare variables. The difference between the two is that const declares a variable that cannot be reassigned a new value after it has been initialized, while let declares a variable that can be reassigned a new value.',
    category: 'javascript',
    linkReadMore:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const',
    updatedAt: '2022-08-30',
    publishedAt: '2022-08-01',
    createdAt: '2022-07-01',
    answerMd: {
      id: '3',
      url: 'https://github.com/user/repo/blob/main/answers/3.md',
    },
  },
  {
    id: '9',
    question: 'What is the box model in CSS?',
    answer:
      'The box model is a concept used in CSS that describes how the content, padding, border, and margin of an element are all calculated and displayed. Each of these areas is represented as a rectangular box, with the content box being the innermost box and the margin box being the outermost box.',
    category: 'css',
    linkReadMore: 'https://www.w3schools.com/css/css_boxmodel.asp',
    updatedAt: '2022-09-15',
    publishedAt: '2022-09-01',
    createdAt: '2022-08-01',
    answerMd: {
      id: '4',
      url: 'https://github.com/user/repo/blob/main/answers/4.md',
    },
  },
  {
    id: '10',
    question:
      'What is the difference between null and undefined in JavaScript?',
    answer:
      'In JavaScript, null and undefined are both used to represent the absence of a value. However, null is an explicitly assigned value that represents no value or an empty object reference, while undefined is a variable that has been declared but has not been assigned a value.',
    category: 'javascript',
    linkReadMore:
      'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null',
    updatedAt: '2022-10-30',
    publishedAt: '2022-10-01',
    createdAt: '2022-09-01',
    answerMd: {
      id: '5',
      url: 'https://github.com/user/repo/blob/main/answers/5.md',
    },
  },
];
