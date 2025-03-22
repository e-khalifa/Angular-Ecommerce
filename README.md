# Voyez
Voyez is a modern e-commerce application built using Angular, Bootstrap, and JSON Server. It provides a seamless shopping experience with features like cart management, product browsing, and a billing system.

## Table of Contents
1. [📸 Demo](#-demo)
2. [🚀 Getting Started](#-getting-started)
3. [💳 Billing Information](#-billing-information)

## 📸 Demo
<div>
<img src="https://github.com/e-khalifa/Angular-Ecommerce/blob/main/public/demo/demo.gif">
<div>

## 🚀 Getting Started
### Prerequisites
- Install **Node.js** and **Angular CLI**
- Clone the repository:
  ```sh
  git clone https://github.com/e-khalifa/Angular-Ecommerce.git
  cd voyez
  ```

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
ng serve
```

### Start the JSON Server
```sh
npx json-server --watch data.json --port 3000
```
This will serve mock backend data at `http://localhost:3000/`

### 💳 Billing Information
For testing the billing system, use the following details:

**Billing Address:**
```
Apartment: 12B
Street: 45 Greenway Blvd
Building: Sunset Towers
City: Los Angeles
State: California
ZIP Code: 90210
```

**Payment Details:**
```
Card Number: 4032 0367 2547 8646
Expiration Date: 10/2029
CVV: 200
Phone Number: +1 224 419 5222
```
