// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract cert {
    address owner;
    uint256 public certCount = 0;

    struct Certificate {
        uint256 id;
        string name;
        string studentid;
        string email;
        string course;
        string date;
        string college;
        string term;
    }

    Certificate[] certs;

    constructor() payable {
        owner = msg.sender;
    }

    modifier ownerOnly() {
        require(owner == msg.sender);
        _;
    }

    function getAllCertificates() public view returns (Certificate[] memory) {
        return certs;
    }

    function addCertificate(
        string memory _name,
        string memory _studentid,
        string memory _email,
        string memory _course,
        string memory _date,
        string memory _college,
        string memory _term
    ) public {
        certCount++;
        certs.push(
            Certificate(
                certCount,
                _name,
                _studentid,
                _email,
                _course,
                _date,
                _college,
                _term
            )
        );
    }

    event certadded(
        uint256 id,
        string name,
        string studentid,
        string email,
        string course,
        string date,
        string college,
        string term
    );

    function getDetailCertWithId(uint256 _id)
        public
        view
        returns (Certificate memory)
    {
        return certs[_id - 1];
    }
}
