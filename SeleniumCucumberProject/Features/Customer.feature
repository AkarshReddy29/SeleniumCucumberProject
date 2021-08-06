Feature: Adding new customers
	
 Background: Below are the common steps for each scenario
	Given User Launch chrome browser
	When User opens URL "http://admin-demo.nopcommerce.com/login"
	And User enters Email as "admin@yourstore.com" and Password as "admin"
	And Click on Login
	Then User can view Dashboard

@sanity	 
Scenario: Add a new Customer
	When User click on customers Menu
	And click on customers Menu Item
	And click on Add new button
	Then User can view and Add new customer page
	When User enter customer info
	And click on Save Button
	Then User can view confirmation message "The new customer has been added successfully"
	And close browser

@regression	
Scenario: Search a Customer by EmailId
	When User click on customers Menu
	And click on customers Menu Item
	And Enter Customer Email
	When Click on search button
	Then User Should find Email in the search table
	And close browser

@regression	
Scenario: Search a Customer by Name
	When User click on customers Menu
	And click on customers Menu Item
	And Enter Customer FirstName
	And Enter Customer LastName
	When Click on search button
	Then User Should find Name in the search table
	And close browser