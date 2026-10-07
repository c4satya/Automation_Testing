Feature: User Login Functionality

  Scenario : Valid credentials login
    Given user is on the login page
    When user logs in with valid credentials "standard_user" and "secret_sauce"
    Then Verify Dashboard page is loaded successfully
  
    Scenario: Login verification with multiple users
    Given user is on the login page
    When user logs in using credentials from "multicredentials.json"
    Then Verify Dashboard page is loaded successfully
  

  Scenario Outline: Valid credentials login
    Given user is on the login page
    When user logs in with valid credentials "<username>" and "<password>"
    Then Verify Dashboard page is loaded successfully

    Examples:

      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

