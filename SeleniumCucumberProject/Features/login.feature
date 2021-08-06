Feature: Login

@sanity
Scenario: Successful Login with Valid Credentials
	Given User Launch chrome browser
	When User opens URL "http://admin-demo.nopcommerce.com/login"
	And User enters Email as "admin@yourstore.com" and Password as "admin"
	And Click on Login
	Then  Page Title Should be "Dashboard / nopCommerce administration"
	When user click out link
	Then Page Title Should be "Your store. Login"
	And close browser
	
@regression	
Scenario Outline:Login Data Driven
	Given User Launch chrome browser
	When User opens URL "http://admin-demo.nopcommerce.com/login"
	And User enters Email as "<email>" and Password as "<password>"
	And Click on Login
	Then  Page Title Should be "Dashboard / nopCommerce administration"
	When user click out link
	Then Page Title Should be "Your store. Login"
	And close browser
	
	Examples:
	     | email | password |
		 | admin@yourstore.com | admin |
		 | admin@yourstore1.com | admin123 |