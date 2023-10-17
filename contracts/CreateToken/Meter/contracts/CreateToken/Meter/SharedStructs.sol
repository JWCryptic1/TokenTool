// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library SharedStructs {
    struct status {
        address taxaddress;
        uint256 taxamount; //% of tax amount
        uint256 mintflag;
        uint256 pauseflag;
        uint256 burnflag;
        uint256 blacklistflag;
    }
}
