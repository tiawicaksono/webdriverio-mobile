Feature: Belajar Cart

  Scenario Outline: Halaman product cart

    Given After login, show product
    When Choose product, Update quantity, Click add to cart
    Then CLick left menu, click catalog
    Then Choose product, Update quantity, Click add to cart again
