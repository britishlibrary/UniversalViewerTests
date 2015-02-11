Feature: Language Specific Characters
  In order to use the viewer in a particular language
  As a Viewer user
  I must be able to see language specific characters correctly.

#  Scenario: Viewer user can see Welsh specific characters
#    Given the user is viewing the Viewer in Welsh
#     When they choose to display the language test page
#     Then Welsh specific characters are displayed correctly

  Scenario: Viewer user can see special characters
    Given the user is viewing the Viewer in TestLanguage
     When they choose to display the language test page
     Then they see special characters in the search option label