$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Customer.feature");
formatter.feature({
  "line": 1,
  "name": "Adding new customers",
  "description": "",
  "id": "adding-new-customers",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3056863101,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 529023700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 4558356299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 346519500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 6502889600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 85167400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Add a new Customer",
  "description": "",
  "id": "adding-new-customers;add-a-new-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User can view and Add new customer page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enter customer info",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User can view confirmation message \"The new customer has been added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3190464500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 5575415900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Add_new_button()"
});
formatter.result({
  "duration": 5206953200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_and_Add_new_customer_page()"
});
formatter.result({
  "duration": 5362500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_enter_customer_info()"
});
formatter.result({
  "duration": 6032991300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_Save_Button()"
});
formatter.result({
  "duration": 6370644800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The new customer has been added successfully",
      "offset": 36
    }
  ],
  "location": "Steps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "duration": 795176300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 557574200,
  "status": "passed"
});
formatter.before({
  "duration": 6698117100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 433100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 2798597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 322256900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 2400899799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 771861399,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search a Customer by EmailId",
  "description": "",
  "id": "adding-new-customers;search-a-customer-by-emailid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter Customer Email",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User Should find Email in the search table",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3194049000,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 4926254701,
  "status": "passed"
});
formatter.match({
  "location": "Steps.enter_Customer_Email()"
});
formatter.result({
  "duration": 1030956700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3485719600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_Should_fing_Email_in_the_search_table()"
});
formatter.result({
  "duration": 224570199,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 4622170399,
  "status": "passed"
});
formatter.before({
  "duration": 4635977401,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Below are the common steps for each scenario",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can view Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 384600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 5421714800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 364470800,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 6777750700,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_can_view_Dashboard()"
});
formatter.result({
  "duration": 65104500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Search a Customer by Name",
  "description": "",
  "id": "adding-new-customers;search-a-customer-by-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "click on customers Menu Item",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter Customer FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Enter Customer LastName",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User Should find Name in the search table",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_click_on_customers_Menu()"
});
formatter.result({
  "duration": 3115414901,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_customers_Menu_Item()"
});
formatter.result({
  "duration": 6409020399,
  "status": "passed"
});
formatter.match({
  "location": "Steps.ESnter_Customer_FirstName()"
});
formatter.result({
  "duration": 3330027600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.Enter_Customer_LastName()"
});
formatter.result({
  "duration": 3277354400,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_search_button()"
});
formatter.result({
  "duration": 3158521399,
  "status": "passed"
});
formatter.match({
  "location": "Steps.User_Should_find_Name_in_the_search_table()"
});
formatter.result({
  "duration": 134227900,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 166570401,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2332058600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click out link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Page Title Should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 4138164099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 321652200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 6203494200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 77823300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_out_link()"
});
formatter.result({
  "duration": 5604990699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 30030600,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 501523700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title Should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login;login-data-driven;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login;login-data-driven;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 27,
      "id": "login;login-data-driven;;2"
    },
    {
      "cells": [
        "admin@yourstore1.com",
        "admin123"
      ],
      "line": 28,
      "id": "login;login-data-driven;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2803816901,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title Should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 333101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 3991552100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 22
    },
    {
      "val": "admin",
      "offset": 60
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 325929200,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 3721263000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 394313500,
  "status": "passed"
});
formatter.match({
  "location": "Steps.user_click_out_link()"
});
formatter.result({
  "duration": 4615990899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 28725300,
  "status": "passed"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "duration": 373361799,
  "status": "passed"
});
formatter.before({
  "duration": 2306614000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login Data Driven",
  "description": "",
  "id": "login;login-data-driven;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User Launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User enters Email as \"admin@yourstore1.com\" and Password as \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Page Title Should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click out link",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Page Title Should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 490500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "Steps.user_opens_url(String)"
});
formatter.result({
  "duration": 4602060600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore1.com",
      "offset": 22
    },
    {
      "val": "admin123",
      "offset": 61
    }
  ],
  "location": "Steps.user_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 307570499,
  "status": "passed"
});
formatter.match({
  "location": "Steps.click_on_login()"
});
formatter.result({
  "duration": 1704730600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "duration": 153786500,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat StepDefinitions.Steps.page_title_should_be(Steps.java:79)\r\n\tat ✽.Then Page Title Should be \"Dashboard / nopCommerce administration\"(login.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.user_click_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 22
    }
  ],
  "location": "Steps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});