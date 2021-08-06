package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddcustomerPage {
	public WebDriver driver;
	
	public AddcustomerPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	By lnkCustomers_menu=By.xpath("//body/div[3]/aside[1]/div[1]/div[4]/div[1]/div[1]/nav[1]/ul[1]/li[4]/a[1]");
	By lnkCustomer_menuitem=By.xpath("//body[1]/div[3]/aside[1]/div[1]/div[4]/div[1]/div[1]/nav[1]/ul[1]/li[4]/ul[1]/li[1]/a[1]/p[1]");
	By btnAddnew=By.xpath("//body/div[3]/div[1]/form[1]/div[1]/div[1]/a[1]");
	By txtEmail=By.id("Email");
	By txtPassword=By.id("Password");
//	By txtcustomerRoles=By.xpath("//div[@class='k-multiselect-wrap k-floatwrap']");
//	By txtcustomerRoles=By.xpath("//body/div[3]/div[1]/form[1]/section[1]/div[1]/div[1]/nop-cards[1]"
//			+ "/nop-card[1]/div[1]/div[2]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]");
	
//	//*[@id="customer-info"]/div[2]/div[10]/div[2]/div/div[1]/div/div
	By txtcustomerRoles=By.xpath("//*[@id=\"customer-info\"]/div[2]/div[10]/div[2]/div/div[1]/div/div");
	By lstitemAdministrator=By.xpath("//li[contains(text(),'Administrators')]");
	By lstitemRegistered=By.xpath("//li[contains(text(),'Registered')]");
	By lstitemGuests=By.xpath("//li[contains(text(),'Guests')]");
	By lstitemVendors=By.xpath("//li[contains(text(),'Vendors')]");
	By drpmrOfVendor=By.id("VendorId");
	By rdMaleGender=By.id("Gender_Male");
	By rdFeMaleGender=By.id("Gender_Female");
	By txtFirstName=By.id("FirstName");
	By txtLastName=By.id("LastName");
	By txtDob=By.id("DateOfBirth");
	By txtCompanyName=By.id("Company");
	By AdminContent=By.id("AdminComment");
	By btnSave=By.name("save");
	
	
	//Action Methods
	public String getPageTitle() {
		return driver.getTitle();
	}
	
	public void clickOnCustomersMenu() {
		driver.findElement(lnkCustomers_menu).click();;
	}
	
	public void clickOnCustomersMenuItem() {
		driver.findElement(lnkCustomer_menuitem).click();
	}
	
	public void clickOnAddnew() {
		driver.findElement(btnAddnew).click();
	}
	
	public void setEmail(String email) {
		driver.findElement(txtEmail).sendKeys(email);
	}
	
	public void setPassword(String password) {
		driver.findElement(txtPassword).sendKeys(password);
	}
	
	public void setFirstName(String fname) {
		driver.findElement(txtFirstName).sendKeys(fname);
	}
	
	public void setLastName(String lname) {
		driver.findElement(txtLastName).sendKeys(lname);
	}
	
	public void setDob(String dob) {
		driver.findElement(txtDob).sendKeys(dob);
	}
	
	public void setCompanyName(String cname) {
		driver.findElement(txtCompanyName).sendKeys(cname);
	}
	
	public void setAdminContent(String content) {
		driver.findElement(AdminContent).sendKeys(content);
	}
	
	public void clickOnSave() {
		driver.findElement(btnSave).click();
	}
	
	public void setCustomerRoles(String role) {
		if(!role.equals("Vendors")) {
			driver.findElement(By.xpath("//*[@id=\"SelectedCustomerRoleIds_taglist\"]//li/span[contains(text(),'Registered')]")).click();

//			driver.findElement(By.xpath("//body/div[3]/div[1]/form[1]/section[1]/div[1]/div[1]/nop-cards[1]"
//					+ "/nop-card[1]/div[1]/div[2]/div[10]/div[2]/div[1]/div[1]/div[1]/div[1]"));
		}
		
		driver.findElement(txtcustomerRoles).click();
		WebElement listitem;
		if(role.equals("Administrators")) {
			listitem=driver.findElement(lstitemAdministrator);
		}
		
		else if(role.equals("Registered")) {
			listitem=driver.findElement(lstitemRegistered);
			System.out.println("3");
		}
		else if(role.equals("Guests")) {
			listitem=driver.findElement(lstitemGuests);
		}
		else if(role.equals("Vendors")) {
			listitem=driver.findElement(lstitemVendors);
		}
		else {
			listitem=driver.findElement(lstitemGuests);
		}
		listitem.click();
		
//		JavascriptExecutor js=(JavascriptExecutor)driver;
//		js.executeScript("argument[0].click();", listitem);
//		System.out.println("8");
	}
	
	public void setManagerOfVendor(String value) {
		Select drp=new Select(driver.findElement(drpmrOfVendor));
		drp.selectByVisibleText(value);
	}
	
	public void setGender(String gender) {
		if(gender.equals("Male")) {
			driver.findElement(rdMaleGender).click();
		}
		else if (gender.equals("Female")) {
			driver.findElement(rdFeMaleGender).click();
		}
		else {
			driver.findElement(rdMaleGender).click();  //Default
		}
	}
	
}
