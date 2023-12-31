// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./SharedStructs.sol";
import "./StandardToken.sol";
import "./StandardTokenFactory.sol";

contract CreateManage {
    address public owner;

    mapping(address => address[]) tokens;

    uint256 public fee;
    StandardTokenFactory internal standardTokenFactory;

    event OwnerWithdrawSuccess(uint256 value);
    event CreateStandardSuccess(address tokenAddress);
    event setOwnerSucess(address ownerAddress);
    event createLiquditySuccess(address tokenAddress);
    event SetFeeSuccess();

    constructor(
        address _owner,
        StandardTokenFactory _standardTokenFactory
    ) {
        owner = _owner;
        
        fee = 1000000; //0.1 eth

        standardTokenFactory = _standardTokenFactory;
    }

    function setOwner(address newowner) public {
        require(msg.sender == owner, "Only manager can do it");
        owner = newowner;
        emit setOwnerSucess(owner);
    }

    function setFee(uint256 _fee) public {
        fee = _fee;
        emit SetFeeSuccess();
    }

    function createStandard(
        address creator_,
        string memory name_,
        string memory symbol_,
        uint8 decimals_,
        uint256 tokenSupply_,
        SharedStructs.status memory _state
    ) public payable {
        require(msg.value >= fee, "Balance is insufficent");

        StandardToken token = standardTokenFactory.deploy(
            creator_,
            name_,
            symbol_,
            decimals_,
            tokenSupply_,
            _state
        );

        tokens[address(creator_)].push(address(token));
        address payable reciever = payable(owner);
        reciever.transfer(msg.value);

        emit CreateStandardSuccess(address(token));
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getCreatedToken(address creater)
        public
        view
        returns (address[] memory)
    {
        return tokens[address(creater)];
    }
}
