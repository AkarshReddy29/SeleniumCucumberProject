package pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utilities.WaitHelper;

public class SearchCustomerPage {
	public WebDriver driver;
	WaitHelper waithelper;
	
	public SearchCustomerPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waithelper =new WaitHelper(driver);
	}
	@FindBy(how=How.ID,using = "SearchEmail")
	@CacheLookup
	WebElement txtEmail;
	
	@FindBy(how=How.ID,using = "SearchFirstName")
	@CacheLookup
	WebElement txtFirstName;
	
	@FindBy(how=How.ID,using = "SearchLastName")
	@CacheLookup
	WebElement txtLastName;
	
	@FindBy(how=How.ID,using = "SearchMonthOfBirth")
	@CacheLookup
	WebElement drpdobMonth;
	
	@FindBy(how=How.ID,using = "SearchDayOfBirth")
	@CacheLookup
	WebElement drpdobDay;
	
	@FindBy(how=How.ID,using = "SearchCompany")
	@CacheLookup
	WebElement txtCompanyName;
	
	
	@FindBy(how=How.XPATH,using = "//li[contains(text(),'Administrators')]")
	@CacheLookup
	WebElement lstItemAdministrators;
	
	@FindBy(how=How.XPATH,using = "//li[contains(text(),'Forum Moderators')]")
	@CacheLookup
	WebElement lstItemForumModerators;
	
	@FindBy(how=How.XPATH,using = "//li[contains(text(),'Guests')]")
	@CacheLookup
	WebElement lstItemGuests;
	
	@FindBy(how=How.XPATH,using = "//li[contains(text(),'Registered')]")
	@CacheLookup
	WebElement lstItemRegistered;
	
	@FindBy(how=How.XPATH,using = "//li[contains(text(),'Vendors')]")
	@CacheLookup
	WebElement lstItemVendors;
	
	@FindBy(how=How.ID,using = "search-customers")
	@CacheLookup
	WebElement searchButton;
	
	@FindBy(how=How.XPATH,using = "//table[@role='grid']")
	WebElement tblSearchResults;
	
	@FindBy(how=How.XPATH,using = "//table[@id='customers-grid']")
	WebElement table;
	
	@FindBy(how=How.XPATH,using = "//table[@id='customers-grid']//tbody/tr")
	List<WebElement> tableRows;
	
	@FindBy(how=How.XPATH,using = "//table[@id='customers-grid']//tbody/tr/td")
	List<WebElement> tableColumns;
	
	public void setEmail(String mail) {
		waithelper.WaitForElement(txtEmail, 30);
		txtEmail.clear();
		txtEmail.sendKeys(mail);
	}
	public void setFirstName(String fname) {
		waithelper.WaitForElement(txtFirstName, 30);
		txtFirstName.clear();
		txtFirstName.sendKeys(fname);
	}
	
	public void setLastName(String lname) {
		waithelper.WaitForElement(txtLastName, 30);
		txtLastName.clear();
		txtLastName.sendKeys(lname);
	}
	
	public void clickSearch() {
		searchButton.click();
		waithelper.WaitForElement(searchButton, 30);
	}
	public int getNoOfRows() {
		return tableRows.size();
	}
	
	public int getNoOfColumns() {
		return tableColumns.size();
	}
	
	public boolean searchCustomerByEmail(String email) {
		boolean flag=false;
		
		for (int i = 1; i <= getNoOfRows(); i++) {
			
			String emailid=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[2]")).getText();
			System.out.println(emailid);
			
			if(emailid.equals("victoria_victoria@nopCommerce.com")) {
				flag=true;
			}
		}
		return flag;
	}
	
	
	//Firstname and lastname
	public boolean searchCustomerByName(String Name) {
		boolean flag=false;
		
		for (int i = 1; i <= getNoOfRows(); i++) {
			
			String name=table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr["+i+"]/td[3]")).getText();
			System.out.println(name);
			
			String names[]=name.split(" ");
			
			if(names[0].equals("Victoria") && names[1].equals("Terces")) {
				flag=true;
			}
		}
		
		return flag;
//		//table[@id='customers-grid']/tbody/tr[1]/td[3]
	}
	
}
