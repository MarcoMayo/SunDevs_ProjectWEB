Feature: Login
  Scenario: Successful Login
    
    Given The user is on the main page
    When Enters credentials user "automationtestbc@yopmail.com" and password "Colombia2024#"
    Then the user can see the init page

