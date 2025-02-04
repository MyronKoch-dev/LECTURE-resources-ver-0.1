# Web3 Development Speedrun - Andromeda Protocol Workshop

## 📋 Prerequisites

### **Necessities**
- **Chrome Browser**  
  [Download Chrome](https://www.google.com/chrome/)
- **Keplr Wallet (Chrome Extension)**  
  [Install Keplr](https://www.keplr.app/get)
- **Notepad Chrome Extension**  
  [Install scratchpad](https://chromewebstore.google.com/detail/scratchpad/khkjjphjlmjloplmcmpphalnlboajeha)
- **GitHub Account**  
  [Sign Up](https://github.com/)
- **GitHub Desktop**  
  [Download](https://github.com/apps/desktop)
- **Vercel Account**  
  [Sign Up](https://vercel.com/)

### **Code & Design Tools**
- **Cursor IDE**  
  [Download](https://www.cursor.com/pricing) *(AI-enhanced VS Code fork)*
- **Warp Terminal (Mac Only)**  
  [Download](https://app.warp.dev/get_warp?package=dmg) *(AI-powered terminal)*
- **Vercel v0**  
  [Frontend Generator](https://v0.dev/)

### **AI Chat Interfaces**
- [Claude.ai](https://claude.ai/)
- [ChatGPT](https://chat.openai.com/) ([VS Code Extension Guide](https://help.openai.com/en/articles/10128592))
- [Google AI Studio](https://aistudio.google.com/)
- 
- **Easy access to many models - OpenRouter API**  
  [Sign Up](https://openrouter.ai/)

### **Andromeda Protocol**
- Testnet Web App:  
  [app.testnet.andromedaprotocol.io](https://app.testnet.andromedaprotocol.io/flex-builder)

---

## 🎯 Tutorial Objectives
1. Deploy CW20 token + exchange contract
2. Mint tokens & send to exchange
3. Create embeddable web components:
   - Andromeda-hosted exchange
   - Custom Vercel-hosted exchange
4. Execute token purchase via custom exchange

---

## 🚀 Step-by-Step Guide

### **1. Deploy CW20 Token**
1. Open [Andromeda Flex Builder (TESTNET)](https://app.testnet.andromedaprotocol.io/flex-builder)
2. Click **CW20 Exchange Template**
3. Configure:
   - App Name: `[Your Choice]`
   - Token Name/Symbol: *Follow constraints*
   - Decimals: `0`
   - Marketing Info: *(Optional logo/website)*
   - **Mint Tokens** → Add wallet address + initial balance (e.g., 10000)
4. Click **Publish** & approve transactions

### **2. Record Contract Addresses**
1. Go to **Assets Page**
2. Toggle open your app
3. Use Notepad extension to save:
   - Token Contract Address
   - Exchange Contract Address

### **3. Create Embeddable (Andromeda Hosting, limited configurability)**
1. Navigate to **Embeddables Page**
2. Click **New Embeddable**
3. Configure:
   - Coin Denom: `uandr`
   - App Name: `[Your Choice]`
   - Add **Exchange Embeddable** collection
4. Input contract addresses + exchange name
5. Click **Publish**

### **4. Create Embeddable (Vercel/Github Hosting, full configurability)**
1. **Deploy Template via Vercel**  
   - Go to [Workshop Demo Repo](https://github.com/andromedaprotocol/embeddable-workshop-demo)
   - In README.md (or below), hit the button for one-click deployment
   - [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/andromedaprotocol/embeddable-workshop-demo.git)  
   *(This automatically:*
     - *Forks repo to your GitHub account*
     - *Deploys to Vercel with CI/CD pipeline)*

2. **Access Your New Repo**  
   - Navigate to your GitHub account → Repositories  
   - Find your new `embeddable-workshop-demo` fork

3. **Clone Locally**  
   - In your forked repo:  
     1. Click **Code** (green button)
     2. Select **Open with GitHub Desktop**
     3. Follow prompts to clone to your local machine

4. **Open in Cursor IDE**  
   - GitHub Desktop will prompt you about opening this repo in Cursor. Go ahead and do it. 
   - Click **Open in Cursor** (or manually open repo folder)
   - Ready to customize!

---

## ⚠️ Important Notes
- **Keplr Wallet Users**: If experiencing issues:  
To resolve issues with Keplr Wallet, follow these steps:

1. Click the ≡ Menu icon and navigate to Settings → General.
2. In the General settings, select "Add/Remove Non-Native Chains".
3. Remove any Andromeda chains from the list. This action will automatically reinstall the chains.
- Always test transactions with small amounts first
- Store contract addresses securely (Notepad extension recommended)

---

## 📚 Resources
- [Andromeda Documentation](https://docs.andromedaprotocol.io/)
- [GitHub Workshop Demo](https://github.com/andromedaprotocol/embeddable-workshop-demo)
- [CosmWasm Docs (CW20 Standard)](https://docs.cosmwasm.com/docs/1.0/smart-contracts/erc20/)