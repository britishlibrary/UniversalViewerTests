Feature: Navigation
  In order to view image in a digital item in a linear sequence
  As a Viewer user
  I want to navigate through digital images in sequence

  Scenario: Navigating to the next page
    Given the user is viewing the Viewer on page 12
    When they click the Next arrow button
    Then the content of the page 13 is displayed to the user

  Scenario: Navigating to the previous page
    Given the user is viewing the Viewer on page 13
    When they click the Previous arrow button
    Then the content of the page 12 is displayed to the user

  Scenario: Navigating to the next page in full screen
    Given the user is viewing the Viewer on page 12
    And the Viewer is on full screen mode
    When they click the Next arrow button
    Then the content of the page 13 is displayed to the user

  Scenario: Navigating to the previous page in full screen
    Given the user is viewing the Viewer on page 13
    And the Viewer is on full screen mode
    When they click the Previous arrow button
    Then the content of the page 12 is displayed to the user

  Scenario: Viewer first page with Previous button disabled
    Given the user is viewing the Viewer on its very first page
    Then the Previous arrow button is disabled

  Scenario: Viewer last page with Next button disabled
    Given the user is viewing the Viewer in its last page
    Then the Next arrow is disabled

  Scenario: Changing page and label
    Given the user is viewing the Viewer
    When they go to the page 15
    Then the image is labeled with page 15
