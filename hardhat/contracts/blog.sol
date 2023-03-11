//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;



contract blog {
    mapping(address=>string) accountName;

    address public owner;
    uint256 public cost;

    constructor() payable{

    }

   

    struct Blog{
        uint256 id;
        string title;
        string content;
        address owner;
        string imageURI;
        uint256 timestamp;
    }

    Blog[] public blogs;

    function post(string memory _title, string memory _content, string memory _imageURI) external payable{

        blogs.push(Blog(
            (block.timestamp + block.difficulty) % 100,
            _title,
            _content,
            msg.sender,
            _imageURI,
            block.timestamp
        ));
    }

    function getPosts() public view returns(Blog[] memory){
        return blogs;
    }

    function getOwnBlogs() public view returns(Blog[] memory){
        for(uint256 i =0;  i<blogs.length; i++){
            if(blogs[i].owner == msg.sender)
               return blogs;
        }
    }

    
    

    function setAccountName(string memory _name) external payable{
        accountName[msg.sender] = _name;
    }

    function getAccountName(address accounAddress) public view returns(string memory){
        return accountName[accounAddress];
    }

  


}