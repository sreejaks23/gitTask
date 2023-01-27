/* Program to manage employee salary payout */

class Employee {
	//constructor with attribute name, employee type and sales target
	constructor(name, employee_Type,sales_Target) {
		this.name = name;
		this.employee_Type = employee_Type;
		this.sales_Target = sales_Target;
	}
	
}

class Salaried extends Employee {
	//constructor with the attribute name, employee type, sales target and salary
	constructor(name, employee_Type, sales_Target, salary) {
		super(name, employee_Type,sales_Target);
		this.salary = salary;
	}

	//get details for the salaried employees
	get_Details()
	{
		if(this.sales_Target>50)
		{
			payout = this.salary + this.salary * 10/100;
		}
		else
		{
			payout = this.salary;
		}

		console.log(`${this.name}\t\t\t${this.employee_Type}\t\t£${payout}`);
	}
}

class Hourly extends Employee {
	//constructor with the attribute name, employee type, sales target and hour
	constructor(name, employee_Type, sales_Target, hour) {
		super(name, employee_Type,sales_Target);
		this.hour = hour;
	}

	//get details for the hourly paid employees
	get_Details()
	{
		if(this.sales_Target>50)
		{
			payout = (this.hour *per_Hour) +  (per_Hour * 50/100);
		}
		else
		{
			payout = (this.hour *per_Hour);
		}

		console.log(`${this.name}\t\t\t${this.employee_Type}\t\t\t£${payout}`);
	}
}

class Hybrid extends Employee {
	//constructor with the attribute name, employee type, sales target, salary and hour
	constructor(name, employee_Type, sales_Target, salary, hour) {
		super(name, employee_Type,sales_Target);
		this.salary = salary;
		this.hour = hour;
	}

	//get details for the hybrid employees
	get_Details()
	{
		if(this.sales_Target>50)
		{
			//payout = (this.hour *per_Hour) +  (per_Hour * 50/100);
			payout = this.salary + (this.hour * per_Hour) + (per_Hour * 50/100);
		}
		else
		{
			payout = this.salary + (this.hour * per_Hour);
		}

		console.log(`${this.name}\t\t\t${this.employee_Type}\t\t\t£${payout}`);
	}

}

//sales target set as 50
let sales_Target = 50;
//rate per hour
let per_Hour = 40;
let payout;

//created instances for the class 'Salaried'
let salaried_Employee1 = new Salaried('Stella', 'Salaried', 52, 10000);
let salaried_Employee2 = new Salaried('Ruby', 'Salaried', 40 ,10000);

//created instances for the class 'Hourly'
let hourly_Employee1 = new Hourly('Krishna', 'Hourly', 55, 200);
let hourly_Employee2 = new Hourly('Radha', 'Hourly', 45, 350);

//created instances for the class 'Hybrid'
let hybrid_Employee1 = new Hybrid('Alex', 'Hybrid', 60, 10000, 150);
let hybrid_Employee2 = new Hybrid('David', 'Hybrid', 40, 12000, 80);

console.log(`Employee name\t\tEmployee Type\t\tPayout`);
console.log(`-------------------------------------------------------`);

salaried_Employee1.get_Details();
salaried_Employee2.get_Details();

hourly_Employee1.get_Details();
hourly_Employee2.get_Details();

hybrid_Employee1.get_Details();
hybrid_Employee2.get_Details();