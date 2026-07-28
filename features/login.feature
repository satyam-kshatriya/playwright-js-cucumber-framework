Feature: Login

Scenario: Valid Login
# Demo Change
Given User opens login page
When User enters username and password
And User clicks Login button
Then User should be logged in successfully