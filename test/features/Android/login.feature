Feature: Belajar Login Page

  Scenario Outline: Halaman login untuk belajar

    Given I open menu and choose login
    When login with <username> and <password>
    Then go to product page

    Examples:
      | username        | password     |
      | bob@example.com | 10203040     |
