resource "google_container_cluster" "backend" {
  name               = "sharestreet"
  location           = var.zone
  initial_node_count = 3

  node_config {
    machine_type = "e2-medium"
  }
}