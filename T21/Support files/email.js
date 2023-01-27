// An Email Simulation
/*
create your email class here*/

let get_email = [];

/*class definition for email with four attributes.
created inbox array to add emails*/
class User {
	constructor(emailContents, fromAddress){
	  this.hasBeenRead = false;
	  this.emailContents = emailContents;
	  this.isSpam = false;
	  this.fromAddress = fromAddress;
	  this.inbox = [];
	}

	//function to change hasBeenRead to true
	markAsRead()
	{
		this.hasBeenRead = true;
		return this.hasBeenRead;
	}

	//function to change isspam to true
	markAsSpam()
	{
		this.isSpam = true;
		console.log('E-mail marked as spam');
		return this.isSpam;
	}

	//function to receive email and push the email in inbox
	addEmail(emailContents, fromAddress)
	{
		let newEmail = new User(emailContents, fromAddress);
		this.inbox.push(newEmail);
		//console.log(this.inbox);
		console.log("E-mail sent successfully")
		return this.inbox;
	}

	//function to get the email count
	getCount()
	{
		//return this.inbox.length;
		console.log(this.inbox.length);
	}

	//function created to read the email
	getEmail(index)
	{
	    if(index<=this.inbox.length)
		{
		this.index = this.inbox[index].markAsRead();
		console.log(this.inbox);
		return this.inbox;
		}
		else
		{
			console.log('E-mail doesnot exist');
		}
	}

	//function to return all the Unread Eamils
	getUnreadEmails()
	{
		let unreadList = [];
		for(let i in this.inbox)
		{
			if(!this.inbox[i].hasBeenRead)
			{
				unreadList.push(this.inbox[i]);
				console.log(unreadList);
			}
			{
				console.log("Unread list is empty");
			}
		}
		
		return unreadList;
	}

	getSpamEmails()
	{
		let spamList = [];
		for(let i in this.inbox)
		{
			if(this.inbox[i].isSpam)
			{
				spamList.push(this.inbox[i]);
				console.log(spamList);
			}
			else
			{
				console.log("Spam list is empty");
			}
			
		}
		return spamList;
	}

	delete_Email(index)
	{
		if(index<=this.inbox.length)
		{
		this.inbox.pop(this.inbox[index]);
		console.log("Email removed successfully");
		}
		else
		{
			console.log('E-mail doesnot exist');
		}
	}
    
}


let email = new User();
userChoice = "";
let num;

while(userChoice != "7"){
	userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");
	if(userChoice == "1")
	{
		num = prompt("Enter the number of email you want to read: ");
		email.getEmail(num-1);
	}
	else if(userChoice == "2")
	{
		num = prompt("Enter the number of email you want to spam: ");
		email.getSpamEmails(num-1);
	}
	else if(userChoice == "3")
	{
		fromAddress = prompt("Enter your email address: ");
		emailContents = prompt("Enter your email content: ");
		email.addEmail(emailContents,fromAddress);
		// email.addEmail('Hello! I am E-mail content 1','test1@email.com'); 
		// email.addEmail('Hello! I am E-mail content 2','test2@email.com');
	}
	else if(userChoice == "4")
	{
		num = prompt("Enter number of email to delete");
		email.delete_Email(num -1);
	}
	else if(userChoice == "5")
	{
		console.log(email.getSpamEmails());
	}
	else if(userChoice == "6")
	{
		console.log(email.getUnreadEmails());
	}
	else if(userChoice == "7")
	{
		console.log("Goodbye");
		//email.getCount();
	}
	else{
		console.log("Oops - incorrect input");
		
	}
}