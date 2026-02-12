# DeFi Staking Rewards Vault

A secure and gas-efficient staking mechanism for ERC-20 tokens. This repository provides the core logic used by major DeFi protocols to incentivize liquidity providers and long-term holders.

## Features
- **Time-Weighted Rewards**: Rewards are distributed linearly over a set duration.
- **Fair Distribution**: Users earn rewards proportional to their share of the total pool and the duration of their stake.
- **Emergency Egress**: Basic security patterns to ensure user funds remain accessible.
- **Owner-Managed Rewards**: Simple interface for the protocol owner to notify the contract of new reward amounts.

## Mathematical Model
The contract uses a "Reward Per Token" accumulator to ensure $O(1)$ complexity for updates, regardless of the number of participants.

## Security
- Utilizes OpenZeppelin's `SafeERC20` to handle non-standard token implementations.
- ReentrancyGuard included to prevent common exploit vectors.
