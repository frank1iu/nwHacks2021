<p align="center">
  <img src="https://i.imgur.com/a1VxImp.png">
</p>

![](https://img.shields.io/badge/K8s-v1.16.15-success?logo=kubernetes)
![](https://img.shields.io/badge/Terraform-v0.14.4-success?logo=terraform)
![](https://img.shields.io/badge/React-17.0.1-success?logo=react)

Share Street is a web app facilitating the sharing of resources between organizations by making it fast and easy to post requests and offers of items for their community and networks to view and fulfill.

## Getting started

The application is broken down into a client and server folder.

### Running the Frontend

`npm install`

`npm start`

### Running the Backend

`npm install`

`npm run dev`

## Infrastructure

Terraform code is in `infra/`. To setup the K8s cluster, use

`terraform apply`

After creation of the GKE cluster, deploy the application using

`kubectl apply -f sharestreet.yaml`