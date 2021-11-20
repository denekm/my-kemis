function askCourseNumber(){
    let courseNumber = prompt (" Enter your Course Number Here ");

    if (courseNumber == '102'){
        document.write('Hello Classmate ' )
//console.log("inside if");
//console.log ();

}   else { 
     document.write("Welcome Course " + courseNumber + " ! ");
//console.log("inside else");
}
    return courseNumber;
}

function informationMessage(){
    let userAnswer= prompt (" Do you want to know during what occasions Ethiopian women wear Kemis?" )
if(userAnswer.toUpperCase() == "YES"){

    document.write( ' Ethiopian traditional attires are worn in various ceremonies like the unique coffee ceremony, (which is done every Sunday, on holidays or when a guest is present), during church ceremonies, and at weddings ')
    }   
    console.log(userAnswer);
}



function anotherPictureQuestion(){
        let additionalPicture = prompt('Do you want to see another Kemis?');
        let picURl = " https://d1v9pyzt136u2g.cloudfront.net/blog/wp-content/uploads/2021/07/23095000/habesha.jpg "
       
        if (additionalPicture.toLowerCase() == "yes") {
    
            document.write('<img src="' + picURl + '">')
        }
        console.log(additionalPicture)
    }

function guessingGame(){
        let userAnswer= prompt('Guess My favorite number. Hint: it is between 1-20');
        let correctNumber = 7;
            let attempts = 5; 
    
        for(let i = 1; i < attempts; i++){
            while(userAnswer < 1 || userAnswer > 20){
                    userAnswer = prompt('Try again. You did not enter a number between 1-20');
    
            }
            if(userAnswer == correctNumber){
                    alert('Great Job you Got it Right!');
                    document.write("Winner");
                    break;
                    
            } else if (userAnswer > correctNumber){
                    userAnswer = prompt('The number you entered is too high. Please enter a number between 1-20');
    
            } else if (userAnswer < correctNumber){
                    userAnswer = prompt('The number you entered is too low. Please enter a number between 1-20');
            } 
            if(i == 4){
                alert('The correct answer was ' + correctNumber);
                document.write('Game Lost');
            }
        }
}