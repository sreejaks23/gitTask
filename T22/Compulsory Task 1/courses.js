/* Program to create course details */

class Courses {
	//constructor with attribute course name, contact website
	constructor(course_Name, contact_Website){
	  this.course_Name = course_Name;
	  this.contact_Website = contact_Website;
	}

	//function to display the contact website of the selected course
	display_Website()
	{
		console.log(`Contact Website			: 	 ${this.contact_Website}`)
	}
}

class Subjects extends Courses{
	//constructor with the attribute course name, contact website, topics covered and duration
	constructor(course_Name, contact_Website, topics_Covered, duration){
		super(course_Name, contact_Website);
		this.topics_Covered = topics_Covered;
		this.duration = duration;
	  }

	  //function to display course name, topics covered and duration
	  display_courseDetails()
	{
		console.log(`Course Name  			:	 ${this.course_Name}\nTopics Covered			:  	 ${this.topics_Covered}\nDuration			:	 ${this.duration}`)
	}
  
}

//created instances of subjects class
let subject1 = new Subjects('WEB DEVELOPMENT', 'https://www.hyperiondev.com/', 'JavaScript', '120 hours');
let subject2 = new Subjects('SOFTWARE ENGINEERING', 'https://www.hyperiondev.com/', 'Object Oriented Programming', '100 hours');
let subject3 = new Subjects('DATA SCIENCE', 'https://www.hyperiondev.com/', 'Python', '150 hours');

subject1.display_Website();
subject1.display_courseDetails();
