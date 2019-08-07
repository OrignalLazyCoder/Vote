pragma solidity ^0.5.1;

contract Vote{
    struct candidate{
        uint id;
        string name;
        uint voteCount;
    }
    mapping(uint => candidate) public candidates;
    uint public candidateCount;
    mapping(address => bool) hasPutVote;
    
    constructor() public{
        candidateCount = 0;
        candidates[candidateCount] = candidate(0,"Arpit",0);
        candidateCount++;
        candidates[candidateCount] = candidate(1,"lazycoderr",0);
        candidateCount++;
        candidates[candidateCount] = candidate(2,"Ear-Eating Goat",0);
        candidateCount++;
        candidates[candidateCount] = candidate(3,"Pupperino",0);
    }
    
    function doVote(uint _id) public{
        require(!hasPutVote[msg.sender],"You have already done this!");
        candidates[_id].voteCount++;
        hasPutVote[msg.sender]=true;
    }
    
    
}