// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function () {
  // STEP 1: DONE
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10: DONE
  for (var name in names) {

    // STEP 11: DONE
    var firstLetter = name.toLowerCase().charAt(0);

    console.log(`Name "${name}" starts with character "${firstLetter}"`);

    // STEP 12: DONE
    if (firstLetter == 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
}) ();
