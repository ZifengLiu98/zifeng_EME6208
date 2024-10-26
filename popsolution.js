//change 5 to the total number of questions
var total=7
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Good!"
compliments[1]="Right on."
compliments[2]="Correct!"
compliments[3]="Great Job!"
compliments[4]="Good work!"
compliments[5]="Wow, you're really rocking!"
compliments[6]="You must have studied hard. Good job!"
compliments[7]="Unbelievavble!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

// question[1]="What is the difference between a jungle and a rain forest?"
// choice1[1]="No difference. Simply two different ways in referring to the same thing."
// choice1[2]="A jungle in general receives less rain than a rain forest."
// choice1[3]="A jungle refers to the thickest area of a rain forest"
// choice1[4]="A jungle and a rain forest each contain their own group of distinct plants and animals."

// question[2]="What is the world's most common religion?"
// choice2[1]="Christianity"
// choice2[2]="Buddhism"
// choice2[3]="Hinduism"
// choice2[4]="Muslim"

// question[3]="Which city ranks as the world\'s most populous city?"
// choice3[1]="New York (US)"
// choice3[2]="Mexico City (Mexico)"
// choice3[3]="Tokyo (Japan)"
// choice3[4]="Shanghai (China)"

// question[4]="According to statistics, what kind of sites on the net are the most popular?"
// choice4[1]="Adult content sites"
// choice4[2]="Portal sites"
// choice4[3]="Chat sites"
// choice4[4]="News sites"

// question[5]="As of June 1998, how much is Microsoft Chairman Bill Gates's net worth?"
// choice5[1]="10 million US"
// choice5[2]="10 billion US"
// choice5[3]="35 billion US"
// choice5[4]="50 billion US"

// solution[1]="c"
// solution[2]="a"
// solution[3]="b"
// solution[4]="b"
// solution[5]="d"

// Q1
question[1] = "What is the main function of a variable in programming?";
choice1[1] = "To store data that can change during the execution of a program.";
choice1[2] = "To perform mathematical calculations.";
choice1[3] = "To define the structure of the program.";
choice1[4] = "To interact with the user.";
solution[1] = "a";

// Q2
question[2] = "Which programming language is primarily used for web development?";
choice2[1] = "Python";
choice2[2] = "HTML";
choice2[3] = "JavaScript";
choice2[4] = "C++";
solution[2] = "c";

// Q3
question[3] = "What is a 'loop' in programming?";
choice3[1] = "A section of code that repeats until a certain condition is met.";
choice3[2] = "A variable that stores multiple values.";
choice3[3] = "A function that returns a value.";
choice3[4] = "An error in the code.";
solution[3] = "a";

// Q4
question[4] = "Which of the following is a common data type in most programming languages?";
choice4[1] = "String";
choice4[2] = "Loop";
choice4[3] = "Class";
choice4[4] = "Method";
solution[4] = "a";

// Q5
question[5] = "What does 'if' do in a programming language?";
choice5[1] = "It creates a loop that runs forever.";
choice5[2] = "It defines a function.";
choice5[3] = "It checks a condition and executes code based on whether it’s true or false.";
choice5[4] = "It declares a variable.";
solution[5] = "c";

// Q6
question[6] = "What is 'debugging' in programming?";
choice6[1] = "Writing code that doesn't need testing.";
choice6[2] = "Removing syntax errors from a program.";
choice6[3] = "Finding and fixing errors or bugs in the program.";
choice6[4] = "Improving the performance of an algorithm.";
solution[6] = "c";

// Q7
question[7] = "Which of the following is used to iterate over a list in Python?";
choice7[1] = "if";
choice7[2] = "for";
choice7[3] = "return";
choice7[4] = "import";
solution[7] = "b";
