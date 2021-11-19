function askCourseNumber(){
    let courseNumber = prompt (" Enter your Course Number Here ");

    if (courseNumber == '102'){
        document.write('Hello Classmate ' )
//console.log("inside if");
//console.log ();

}   else { 
     document.write("Welcome Course " + courseNumber)
//console.log("inside else");
}
    return courseNumber;
}

let courseNumberOutside = askCourseNumber();
console.log(courseNumberOutside);