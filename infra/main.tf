terraform {
  required_version = ">=0.13.2"
}

provider "google" {
  credentials   = file("credentials-terraform.json")
  project       = var.project
  region        = var.region
}