Feature: Purchase

    Scenario: Purchase tickets for a movie
        Given The user Login with user "automationtestbc@yopmail.com" and password "Colombia2024#"
        When the user selects a movie "Wifi Ralph" at "22:10" on the day "17 jul. 2024" and theater "Lab v5 Multiplaza"
        And the user selects 2 tickets and chooses seats
        And the user proceeds to payment
        Then the user should see the confirmation of ticket purchase