# hKhR Blockchain

## Introduction

Welcome to the hKhR Blockchain! This project, developed by Harsh Vardhan Singh, is a full-fledged blockchain and cryptocurrency application that highlights various core concepts of blockchain technology and cryptocurrency mechanisms. This README will guide you through the key features, accomplishments, and functionalities of the project.

## Key Features

- **Blockchain Structure**: Implements a robust and flexible blockchain architecture.
- **Genesis Block**: Initializes the blockchain with a genesis block.
- **Mining Blocks**: Allows for the creation of new blocks using a proof-of-work system.
- **SHA-256 Hashing**: Uses SHA-256 cryptographic hash function for secure block hashing.
- **Dynamic Difficulty Adjustment**: Adjusts mining difficulty dynamically to regulate the block creation rate.
- **Peer-to-Peer Network**: Supports multiple users and servers, enhancing the decentralized nature of the blockchain.
- **Express API**: Provides a RESTful API for interacting with the blockchain backend.
- **Real-Time Messaging**: Utilizes Redis/PubNub for real-time communication and broadcasting.
- **Transaction Mechanism**: Implements a secure and efficient transaction system with cryptographic key pairs and digital signatures.
- **Transaction Pool**: Manages a pool of pending transactions awaiting validation and inclusion in the blockchain.
- **Transaction Mining**: Allows miners to validate and add transactions to the blockchain.
- **Wallet Functionality**: Manages wallets, balances, and transaction histories.
- **Frontend Interface**: Features a React.js frontend for user interaction with the blockchain.

## Highlights

### Blockchain Backend

- **Setup and Genesis Block**: Initialized the blockchain with the genesis block to get the blockchain started.
- **Mining and Hashing**: Implemented block mining using the SHA-256 hashing algorithm.
- **Chain Validation and Replacement**: Ensured the integrity of the blockchain with validation and replacement functionalities.

### Proof of Work System

- **Difficulty and Nonce**: Incorporated proof of work with difficulty and nonce values for each block.
- **Dynamic Difficulty Adjustment**: Adjusted mining difficulty to stabilize the block creation rate.
- **Security Enhancements**: Prevented difficulty jump attacks with additional validation.

### Distributed Network

- **Express API**: Developed an API to interact with the blockchain through HTTP requests.
- **Real-Time Network**: Implemented a real-time messaging network for broadcasting chains and transactions.
- **Peer Synchronization**: Enabled chain synchronization among new and existing peers.

### Cryptocurrency Mechanisms

- **Wallet Class**: Created a core wallet class for managing cryptocurrency transactions.
- **Cryptographic Key Pairs**: Implemented secure key pair generation and public key addressing.
- **Transaction Validation**: Developed functionality to validate transactions and ensure their integrity.

### Transaction Pool

- **Core Transaction Pool**: Managed a pool of valid transactions.
- **API Integration**: Handled transactions through the API and ensured synchronization across the network.
- **Invalid Transaction Handling**: Prevented invalid transactions from entering the pool.

### Transaction Mining

- **Transaction Miner Class**: Created a class to manage the mining of valid transactions.
- **Clearing and Validating Transactions**: Ensured only unique and valid transactions were recorded in the blockchain.
- **Wallet Balance Calculation**: Calculated wallet balances based on blockchain history.

### Frontend Interface

- **React Integration**: Built a React.js frontend to interact with the backend.
- **Visualization**: Visualized blocks and transactions on the frontend.
- **Transaction Management**: Supported conducting and visualizing transactions through a user-friendly interface.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshVardhanSingh/hKhR-blockchain.git
   ```
2. Install dependencies:
   ```bash
   cd hKhR-blockchain
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run start
   ```
4. Start the frontend development server:
   ```bash
   npm run start-frontend
   ```

## Usage

- Access the blockchain and interact with it through the provided API endpoints.
- Visualize blocks and conduct transactions via the React.js frontend.

## Contributing

Feel free to contribute to the project by submitting issues or pull requests. Contributions are always welcome!

## Contact

For any questions or inquiries, please feel free to contact at [harshvardhan5673@gmail.com].

## License

This project is licensed under the MIT License.

---

Developed by Harsh Vardhan Singh
