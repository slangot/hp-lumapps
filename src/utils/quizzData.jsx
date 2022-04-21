const questions = [
  {
    answers: ["Hogwarts", "Beaux Bâtons", "Durmstrang", "Mahoutokoro"],
    correctAnswer: "Hogwarts",
    question: "What school does Harry Potter attend ?",
  },
  {
    answers: [
      "Albus Dumbledore",
      "Minerva McGonagall",
      "Hermione Granger",
      "Rubeus Hagrid",
    ],
    correctAnswer: "Albus Dumbledore",
    question: "Who is the headmaster of the school Harry attends ?",
  },
  {
    answers: [
      "Lord Voldemort",
      "Draco Malfoy",
      "Ron Weasley",
      "Dolores Umbridge",
    ],
    correctAnswer: "Lord Voldemort",
    question: "Who is Harry Potters greatest enemy ?",
  },
  {
    answers: [
      "Ron Weasley",
      "Neville Longbottom",
      "Vincent Crabbe",
      "Cedric Diggory",
    ],
    correctAnswer: "Ron Weasley",
    question: "Who is Harry Potters closest friend (male) ?",
  },
  {
    answers: [
      "Hermione Granger",
      "Luna Lovegood",
      "Cho Chang",
      "Ginny Weasley",
    ],
    correctAnswer: "Hermione Granger",
    question: "Who is Harry Potters closest friend (female) ?",
  },
  {
    answers: ["Quidditch", "Quadditch", "Quidball", "Quidbeach"],
    correctAnswer: "Quidditch",
    question: "What game, using flying broomsticks, is played by wizards ?",
  },
  {
    answers: [
      "Severus Snape",
      "Minerva McGonagall",
      "Horace Slughorn",
      "Remus Lupin",
    ],
    correctAnswer: "Severus Snape",
    question: "What teacher, despised by many, teaches potions ?",
  },
  {
    answers: ["Owl", "Rat", "Cat", "Snake"],
    correctAnswer: "Owl",
    question: "And what type of animal Harry has ?",
  },
  {
    answers: ["Hagrid", "Arthur Weasley", "Sirius Black", "Dolores Umbridge"],
    correctAnswer: "Hagrid",
    question: "Who tells Harry that he is, in fact, a wizard ?",
  },
  {
    answers: [
      "J.K. Rowling",
      "Stephen King",
      "Mary Higgins Clark",
      "Orson Welles",
    ],
    correctAnswer: "J.K. Rowling",
    question: "Who wrote the Harry Potter series ?",
  },
  {
    answers: ["United Kingdom", "United States", "Germany", "Japan"],
    correctAnswer: "United Kingdom",
    question: "In what country are the books set ?",
  },
  {
    answers: ["9 3/4", "8 1/5", "9 8/10", "3 4/9"],
    correctAnswer: "9 3/4",
    question: "What platform does the train to the school depart from ?",
  },
  {
    answers: ["House elf", "Goblin", "Dragon", "Basilisk"],
    correctAnswer: "House elf",
    question: "What type of creature is Dobby ?",
  },
  {
    answers: ["Slytherin", "Hufflepuff", "Ravenclaw", "Gryffindor"],
    correctAnswer: "Slytherin",
    question: "What house is Draco Malfoy a part of ?",
  },
  {
    answers: ["Azkaban", "Alcatraz", "Azkolan", "Abanaz"],
    correctAnswer: "Azkaban",
    question: "What prison does Sirius Black escape from ?",
  },
  {
    answers: ["Seeker", "Chaser", "Keeper", "Beater"],
    correctAnswer: "Seeker",
    question: "In this game, what is Harry Potter's position ?",
  },
  {
    answers: ["Lily Potter", "Anna Potter", "Elizabeth Potter", "Naomi Potter"],
    correctAnswer: "Lily Potter",
    question: "What is Harry's mothers name?",
  },
  {
    answers: ["Ravenclaw", "Hufflepuff", "Slytherin", "Gryffindor"],
    correctAnswer: "Ravenclaw",
    question: "What house has the house color of blue ?",
  },
  {
    answers: ["Fred", "Arthur", "Ron", "Harry"],
    correctAnswer: "Fred",
    question: "Who is George Weasley's twin ?",
  },
  {
    answers: ["Hedwig", "Astan", "Snowflake", "Copper"],
    correctAnswer: "Hedwig",
    question: "What is the name of Harry's pet ?",
  },
  {
    answers: ["Horcruxes", "Death eaters", "Muggles", "Snitches"],
    correctAnswer: "Horcruxes",
    question: "What are Tom Riddle's diary and Rowena Ravenclaw's diadem ?",
  },
  {
    answers: ["Basilisk", "Dragon", "Gobelin", "Troll"],
    correctAnswer: "Basilisk",
    question:
      "What creature, from the Chamber of Secrets, paralyzes and kills students in Harry's second year ?",
  },
  {
    answers: [
      "Cedric Diggory",
      "Arthur Weasley",
      "Luna Lovegood",
      "Lord Voldemort",
    ],
    correctAnswer: "Cedric Diggory",
    question: "Who dies during the Triwizard Tornament ?",
  },
  {
    answers: ["Dementor", "Death eater", "Basilisk", "Dragon"],
    correctAnswer: "Dementor",
    question: 'What will "suck all the happiness from you" ?',
  },
  {
    answers: [
      "Moaning Myrtle",
      "Screaming Raspberry",
      "Whispering Strawberry",
      "Uttering Blackberry",
    ],
    correctAnswer: "Moaning Myrtle",
    question: "Who haunts the girls bathroom ?",
  },
  {
    answers: [
      "Luna Lovegood",
      "Hermione Granger",
      "Ginny Weasley",
      "Minerva McGonagall",
    ],
    correctAnswer: "Luna Lovegood",
    question: "Who has radish earrings ?",
  },
  {
    answers: ["Unlocks", "Destroys", "Closes", "Jumps"],
    correctAnswer: "Unlocks",
    question: 'What does the spell "Alohomora" do ?',
  },
  {
    answers: ["Nagini", "Salati", "Nogini", "Riddle"],
    correctAnswer: "Nagini",
    question: "What is the name of Voldemorts snake ?",
  },
  {
    answers: ["Peeves", "Arthur", "Perceval", "Karadoc"],
    correctAnswer: "Peeves",
    question:
      "Who is the mischievous poltergeist that wreaks havoc throughout the school ?",
  },
  {
    answers: ["Yule Ball", "Basket Ball", "Baseball Ball", "Socker Ball"],
    correctAnswer: "Yule Ball",
    question: "What ball does the school hold ?",
  },
];

export const getQuestion = () => {
  const randomQuestion = Math.floor(Math.random() * questions.length);
  const selectedQuestion = questions[randomQuestion];
  return selectedQuestion;
};

export const sortAnswer = () => {
  const answersOrder = [0, 1, 2, 3];
  const shuffledAnswers = answersOrder.sort((a, b) => 0.5 - Math.random());
  return shuffledAnswers;
};

export const getAnswer = () => {};

export default getQuestion;
