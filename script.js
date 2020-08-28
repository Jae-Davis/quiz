/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Which instrument can have 4-6 strings?',
      answers: [
        'Ukulele',
        'Banjo',
        'Bass',
        'Violin'
      ],
      correctAnswer: 'Bass'
    },
    {
      question: 'What instrument did Jimi Hendrix play?',
      answers: [
        'Piano',
        'Saxophone',
        'Guitar',
        'Trumpet'
      ],
      correctAnswer: 'Guitar'
    },
    {
      question: 'Finish this lyric, "Its beginning to look a lot like..."',
      answers: [
        'Fall',
        'Christmas',
        'Snow',
        'Rain'
      ],
      correctAnswer: 'Christmas'
    },
    {
      question: 'Which artist changed their name multiple times?',
      answers: [
        'Michael Jackson',
        'Sean Combs',
        'Beyonce',
        'Smokey Robinson'
      ],
      correctAnswer: 'Sean Combs'
    },
    {
      question: 'What is the first instrument ever invented?',
      answers: [
        'Horn',
        'Harp',
        'Drum',
        'Flute'
      ],
      correctAnswer: 'Flute'
    },
    {
      question: 'What is the most recent instrument invented?',
      answers: [
        'Kazoo',
        'Harpejji',
        'Tuba',
        'Trombone'
      ],
      correctAnswer: 'Harpejji'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)