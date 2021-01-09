# ShareStreet backend

## Quick Start

### Requirements

install `node`, then install TypeScript using `npm install -g typescript`

### Launch Dev Server

`npm start`

## Endpoints

### POST `/register`

Registers a user.

Post body:

|Name|Type|Description|
|:--:|:--:|:--:|
|`username`|`string`||
|`email`|`string`||
|`type`|`"Organization" | "Individual"`||