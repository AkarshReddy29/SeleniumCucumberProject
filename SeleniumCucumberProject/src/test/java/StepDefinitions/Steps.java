
 package StepDefinitions;
//https://github.com/AkarshReddy29/SeleniumCucumberProject.git
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;
import junit.framework.Assert;
import pageObjects.AddcustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

@SuppressWarnings("deprecation")
public class Steps extends BaseClass {
	
	@Before
	public void setup() throws IOException {
		logger = Logger.getLogger("SeleniumCucumberProject");
		PropertyConfigurator.configure("Log4j.properties");
		
		configProp=new Properties();
		FileInputStream configPropfile=new FileInputStream("config.properties");
		configProp.load(configPropfile);
		
		String br=configProp.getProperty("browser");
		
		if(br.equals("chrome")) {
			System.setProperty("webdriver.chrome.driver", configProp.getProperty("chromepath"));
			driver = new ChromeDriver();
		}else if (br.equals("edge")) {
			System.setProperty("webdriver.edge.driver", configProp.getProperty("iepath"));
			driver = new EdgeDriver();
		}		
		logger.info("************Launching browser*************");
	}
	
	@Given("User Launch chrome browser")
	public void user_launch_chrome_browser() {

		
		lp = new LoginPage(driver);
	}

//	"\\{\"user_id\" : [0-9]*\\}".
//	"\\$\\{name\\}";
//	\"([^\"]*)\"$"

	@When("User opens URL \"([^\"]*)\"$")
	public void user_opens_url(String url) {
		logger.info("************Launching url*************");
		driver.get(url);
	}

	@When("User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_email_as_and_password_as(String email, String password) {
		logger.info("************Providing user info*************");
		lp.setUserName(email);
		lp.setPassword(password);
	}

	@When("Click on Login")
	public void click_on_login() {
		logger.info("************ Started login*************");
		lp.clickLogin();
	}

	@Then("Page Title Should be \"([^\"]*)\"$")
	public void page_title_should_be(String title) {

		if (driver.getPageSource().contains("Login was unsuccessful.")) {
			driver.close();
			logger.info("************Login Successfull*************");
			Assert.assertTrue(false);
		} else {
			Assert.assertEquals(title, driver.getTitle());
			logger.info("************Login Failure*************");
		}
	}

	@When("user click out link")
	public void user_click_out_link() throws Exception {
		logger.info("************Click on logout link*************");
		lp.clickLogout();
		Thread.sleep(3000);
	}

	@Then("close browser")
	public void close_browser() {
		logger.info("************Close the browser*************");
		driver.close();
	}

	/////////////////////////////// Customer methods/////////////////////

	@Then("User can view Dashboard")
	public void user_can_view_Dashboard() {

		addCust = new AddcustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());
	}

	@When("User click on customers Menu")
	public void user_click_on_customers_Menu() throws Exception {
		Thread.sleep(3000);
		addCust.clickOnCustomersMenu();

	}

	@When("click on customers Menu Item")
	public void click_on_customers_Menu_Item() throws Exception {
		Thread.sleep(3000);
		addCust.clickOnCustomersMenuItem();
	}

	@When("click on Add new button")
	public void click_on_Add_new_button() throws Exception {
		Thread.sleep(3000);
		addCust.clickOnAddnew();
	}

	@Then("User can view and Add new customer page")
	public void user_can_view_and_Add_new_customer_page() {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());

	}

	@When("User enter customer info")
	public void user_enter_customer_info() throws InterruptedException {
		String email = randomstring() + "@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");
		addCust.setFirstName("ABC");
		addCust.setLastName("Reddy");

		addCust.setGender("Male");
		addCust.setManagerOfVendor("Vendor 2");
		addCust.setDob("8/2/2020");
		addCust.setCompanyName("Rolex");

//		
		addCust.setAdminContent("This is for testing....,");
		Thread.sleep(3000);
		addCust.setCustomerRoles("Administrators");

	}

	@When("click on Save Button")
	public void click_on_Save_Button() throws InterruptedException {
		addCust.clickOnSave();
		Thread.sleep(3000);
	}

	@Then("User can view confirmation message \"([^\"]*)\"$")
	public void user_can_view_confirmation_message(String msg) {
		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
				.contains("The new customer has been added successfully"));
	}

	@When("Enter Customer Email")
	public void enter_Customer_Email() throws Throwable {
		searchCust = new SearchCustomerPage(driver);
		searchCust.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("Click on search button")
	public void click_on_search_button() throws Throwable {
		searchCust.clickSearch();
		Thread.sleep(3000);
	}

	@Then("User Should find Email in the search table")
	public void user_Should_fing_Email_in_the_search_table() throws Throwable {
		boolean status = searchCust.searchCustomerByEmail("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
//	    Thread.sleep(3000);
	}

	@When("Enter Customer FirstName")
	public void ESnter_Customer_FirstName() throws Throwable {
		searchCust = new SearchCustomerPage(driver);
		searchCust.setFirstName("Victoria");
		Thread.sleep(3000);
	}

	@When("Enter Customer LastName")
	public void Enter_Customer_LastName() throws Throwable {
		searchCust.setLastName("Terces");
		Thread.sleep(3000);
	}

	@Then("User Should find Name in the search table")
	public void User_Should_find_Name_in_the_search_table() throws Throwable {
		boolean status = searchCust.searchCustomerByName("Victoria Terces");
		Assert.assertEquals(true, status);
	}
}
