Feature: Zoom
  In order to view high quality images of digitised items in great detail
  As a Viewer user
  I want to be able to zoom an image in and out at any level


  Scenario: Zooming in
    Given the user is viewing the Viewer
    When they click zoom in button
    Then an area of the image has a bigger display

  Scenario: Zooming out
    Given the user is viewing the Viewer
    When they click zoom out button
    Then an area of the image is seen more far away

  Scenario: Panning image
    Given the user is viewing the Viewer
    And the image is zoomed
    When the user press the mouse and drag the image to the right
    Then that part of the image moves to the right
