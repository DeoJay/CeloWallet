\\SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string private myString;

    function setString(string memory _newString) public {
        myString = _newString;
    }

    function getString() public view returns (string memory) {
        return myString;
    }
}