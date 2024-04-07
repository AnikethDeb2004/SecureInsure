// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InsuranceContract {
    // Struct to represent an insurance policy
    struct Policy {
        address policyholder;
        uint256 coverageAmount;
        bool isActive;
    }
    
    // Struct to represent an insurance claim
    struct Claim {
        address policyholder;
        uint256 claimAmount;
        bool isProcessed;
    }
    
    // Struct to represent a transaction
    struct Transaction {
        uint256 timestamp;
        address recipient;
        uint256 amount;
    }
    
    // Mapping of policy ID to Policy struct
    mapping(uint256 => Policy) public policies;
    
    // Mapping of claim ID to Claim struct
    mapping(uint256 => Claim) public claims;
    
    // Mapping of user address to their transaction history
    mapping(address => Transaction[]) public transactionHistory;

    // Counter for generating unique policy IDs
    uint256 public policyCount;
    
    // Counter for generating unique claim IDs
    uint256 public claimCount;
    
    // Event emitted when a new policy is created
    event PolicyCreated(uint256 indexed policyId, address indexed policyholder, uint256 coverageAmount);
    
    // Event emitted when a claim is submitted
    event ClaimSubmitted(uint256 indexed claimId, address indexed policyholder, uint256 claimAmount);
    
    // Event emitted when a transaction is recorded
    event TransactionRecorded(address indexed sender, address indexed recipient, uint256 amount);

    // Function to create a new insurance policy
    function createPolicy(uint256 _coverageAmount) external {
        policies[policyCount] = Policy(msg.sender, _coverageAmount, true);
        emit PolicyCreated(policyCount, msg.sender, _coverageAmount);
        policyCount++;
    }
    
    // Function to submit a new insurance claim
    function submitClaim(uint256 _policyId, uint256 _claimAmount) external {
        require(policies[_policyId].isActive, "Policy does not exist or is inactive");
        require(msg.sender == policies[_policyId].policyholder, "Unauthorized");
        claims[claimCount] = Claim(msg.sender, _claimAmount, false);
        emit ClaimSubmitted(claimCount, msg.sender, _claimAmount);
        claimCount++;
    }
    
    // Function to process an insurance claim
    function processClaim(uint256 _claimId) external {
        require(!claims[_claimId].isProcessed, "Claim already processed");
        require(msg.sender == claims[_claimId].policyholder, "Unauthorized");
        claims[_claimId].isProcessed = true;
        // Perform further actions like transferring claim amount
    }
    
    // Function to record a transaction
    function recordTransaction(address _recipient, uint256 _amount) external {
        Transaction memory transaction = Transaction(block.timestamp, _recipient, _amount);
        transactionHistory[msg.sender].push(transaction);
        emit TransactionRecorded(msg.sender, _recipient, _amount);
        
    }
}
