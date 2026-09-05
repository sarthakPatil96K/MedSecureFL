# 🛡️ MedSecureFL

**Privacy-Preserving Federated Learning with Quality-Aware Aggregation & Blockchain**

[![Python 3.10+](https://img.shields.io/badge/Python-3.10+-blue.svg?logo=python&logoColor=white)](https://www.python.org/)
[![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C.svg?logo=pytorch&logoColor=white)](https://pytorch.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-363636?logo=solidity&logoColor=white)](https://soliditylang.org/)

MedSecureFL is an end-to-end medical AI platform designed to train Vision Transformers (ViT) on distributed, non-IID healthcare datasets (such as HAM10000) using Federated Learning.

---

## ✨ Key Features

- **Federated Vision Transformers:** High-accuracy medical image classification trained across decentralized data without sharing raw patient records.
- **Quality-Aware Aggregation:** Custom weighting algorithms that evaluate client dataset quality and reliability before aggregation.
- **Differential Privacy (Opacus):** Gradient clipping and noise injection to mathematically guarantee patient data privacy during model updates.
- **Blockchain Authorization:** Ethereum/Solidity smart contracts for strict hospital client authorization and immutable audit logging.

## 🏗️ Architecture & Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Machine Learning** | PyTorch, HuggingFace | Vision Transformer (ViT) implementation |
| **Federated Learning** | Flower (`flwr`), Opacus | FL server, local clients, DP integration |
| **Backend API** | FastAPI, Web3.py | REST endpoints & blockchain interaction |
| **Frontend UI** | React, TypeScript | Dashboard for monitoring & predictions |
| **Blockchain** | Solidity, Hardhat | Smart contracts for hospital registries |

## 📁 Directory Structure

```text
MedSecureFL/
├── backend/      # FastAPI REST server & Web3 integration
├── frontend/     # React dashboard for monitoring & disease prediction
├── federated/    # Flower FL server, clients, strategies, & DP logic
├── blockchain/   # Smart contracts (Solidity) & deployment scripts
├── models/       # Neural network architecture definitions (ViT)
├── datasets/     # Raw/preprocessed medical image data
├── experiments/  # Jupyter & Kaggle notebooks for training runs
├── scripts/      # Data downloading, preprocessing, & simulation scripts
├── results/      # Evaluation metrics, loss plots, & checkpoints
└── docs/         # System architecture diagrams & API docs
```
## ⚙️ Setup & Installation

### Prerequisites

- **OS:** Fedora Linux (or compatible UNIX system)
- **Python:** 3.10+
- **Node.js:** 18+ (for Frontend & Hardhat)

### Quickstart

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sarthakPatil96K/MedSecureFL.git
   cd MedSecureFL
   ```

2. **Set up the virtual environment:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install --upgrade pip
   ```

3. **Install Core Dependencies:**

   ```bash
   pip install -r backend/requirements.txt
   ```

## 🧪 Model Training & Compute

- **Centralized & FL Training:** ML workflows, simulations, and heavy Vision Transformer training are executed on **Kaggle Notebooks (GPU)** using Flower Simulation Mode to overcome local hardware constraints.
- **Platform Services:** The FastAPI backend, local Blockchain testnet (Hardhat/Ganache), and React Frontend are lightweight and run locally on the CPU.
