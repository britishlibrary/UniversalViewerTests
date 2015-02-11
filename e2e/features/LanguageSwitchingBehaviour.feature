Feature: Language Switching Behaviour
  In order to use the viewer in a particular language
  As a Viewer user
  I must be able to switch language and continue working.

Scenario: Viewer user switches language while on an advanced page
  Given the user is viewing the Viewer in English on page 2
   When they switch to the TestLanguage language
   Then the content of the page 2 is displayed to the user

Scenario: Viewer user switches language while zoomed
  Given the user is viewing the Viewer in English
  When they click zoom in button
   And the current zoom level is recorded
   And they change language to TestLanguage
  Then the current zoom level matches that which was recorded

