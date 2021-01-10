# Terraform Config Details
terraform {
  required_version = ">=0.13.2"
}

# Provider info with project name, region and zone
provider "google" {
  credentials   = file("credentials-terraform.json")
  project       = var.project
  region        = var.region
}