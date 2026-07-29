Feature: Login

@login
@smoke
Scenario Outline: Login with different credentials

Given User opens login page
When User enters username "<username>" and password "<password>"
And User clicks Login button
Then User should see "<result>" with message "<message>"

Examples:
| username | password    | result  | message                      |
| student  | Password123 | success |                              |
| student  | wrongpass   | failure | Your password is invalid!    |
| wrong    | Password123 | failure | Your username is invalid!    |
| wrong    | wrongpass   | failure | Your username is invalid!    |