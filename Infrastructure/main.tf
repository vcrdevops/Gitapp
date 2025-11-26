provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "legalservices-rg"
  location = "Central India"
}
