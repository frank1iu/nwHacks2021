resource "google_service_account" "firestore_service_account" {
  account_id   = "firestore"
  display_name = "Firestore Service Account"
}

resource "google_project_iam_member" "firestore_service_account_binding" {
  project = var.project
  role    = "roles/datastore.owner"
  member  = "serviceAccount:${google_service_account.firestore_service_account.email}"
}