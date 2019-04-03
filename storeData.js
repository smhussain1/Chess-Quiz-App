let data = [
    {number: 1,
    question: "Who is the highest scoring Chess Champion in History?",
    answers: ['Bobby Fischer', 'Anatoly Karpov', 'Magnus Carlsen', 'Garry Kasparov'],
    correctAns: 'Magnus Carlsen'},

    {number: 2,
    question: 'What is the highest title a competitive Chess Player can attain?',
    answers: ['International Grandmaster', 'World Master', 'World Champion', 'Grandmaster'],
    correctAns: 'World Champion'},

    {number: 3,
    question: 'Who did Bobby Fischer play against in Reykevik in one of the most watched chess battles in the history of the game?',
    answers: ['Anatoly Karpov', 'Vladimir Kramnik', 'Boris Spassky', 'Emanuel Lasker'],
    correctAns: 'Boris Spassky'},

    {number: 4,
    question: 'José Raúl Capablanca is best known for what style of chess, in which he has been described as the ‘absolute master’ of?',
    answers: ['The Orangutang Opening', 'Blanche (always winning when playing white, which enjoys the first move advantage)', 'Blitz chess (games of 5 minutes or less)', 'Blind chess (where players are blindfolded, keeping the game in their minds and calling out moves.)'],
    correctAns: 'Blitz chess (games of 5 minutes or less)'},

    {number: 5,
    question: 'Magnus Carlsen was how old when he won the title of Grandmaster?',
    answers: ['Twelve', 'Thirteen', 'Fifteen', 'Ninteen'],
    correctAns: 'Thirteen'},
	
    {number: 6,
    question: 'The sequence of moves which plays out as follows:  1.d4 e6 2.e4 d5, is called…..:',
    answers: ['The French Defense', 'The Sicilian', 'The Slav Opening', 'The Black Queen’s Gambit'],
    correctAns: 'The French Defense'},

    {number: 7,
    question: 'Who is considered to be “the Father of Chess”?',
    answers: ['Mikhail Tal', 'Bobby Fischer', 'Wilhelm Steinitz', 'Mikhail Botvinnik'],
    correctAns: 'Wilhelm Steinitz'},

    {number: 8,
    question: 'What piece(s) is(are) considered to be "The Soul of Chess"',
    answers: ['The Queen', 'The King', 'The Knight(s)', 'The Pawn(s)'],
    correctAns: 'The Pawn(s)'},

    {number: 9,
    question: 'Is the Fried Liver attack for black or white?',
    answers: ['The Fried liver attack is an opening for black.', 'The Fried liver attack is an opening for white.', 'Both', 'Neither'],
    correctAns: 'The Fried liver attack is an opening for white.'},

    {number: 10,
    question: 'When playing with a clock, which hand must be used to control time on the clock”?',
    answers: ['It Does not Matter', 'The Opposite Hand you Just Touched the Last Piece With', 'The Same Hand you Just Touched the Last Piece With', 'Always the Opposite Hand you Play With'],
    correctAns: 'Always the Opposite Hand you Play With'}
    ];
/*
    
    // test function
    let z = 6;
    function answerCheck(data) {
        let testanswers = (data[6].answers);
        for(let i=0; i<testanswers.length; i++) {
            if (testanswers[i] === data[6].correctAns) {
                console.log(testanswers[i]);
            }
        }; console.log(data[z].correctAns);
    };

    answerCheck(data); // this seems to work  
*/