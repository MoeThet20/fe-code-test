# My React Native Expo Project

## Description
This project is a React Native application built using Expo. It includes integration with the Omise payment gateway.

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have installed Expo CLI.
- You have an Omise account. If not, you can create one [here](https://omise.co/).

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/your-username/your-repo-name.git](https://github.com/MoeThet20/fe-code-test.git

2. Navigate to the project directory:
   
   ```bash
   cd your-repo-name

3. Install the dependencies:

   ```bash
   npm install
   or
   yarn

##Setting Up Environment Variables

This project uses environment variables to store sensitive information, such as the Omise public and secret keys. You need to create a .env file in the root directory of your project and add your keys.

1. Create a .env file in the root directory:

   ```bash
   touch .env

2. Add your Omise keys to the .env file: 

   ```bash
   EXPO_PUBLIC_KEY=your-omise-public-key
   EXPO_SECRET_KEY=your-omise-secret-key

Replace your-omise-public-key and your-omise-secret-key with your actual Omise public and secret keys.


##Running the App

To start the Expo project, run:

   ```bash
   npm run android or ios
   or
   yarn android or ios
