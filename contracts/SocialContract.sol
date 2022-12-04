// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SocialContract {
    uint256 public latestPostId = 0;

    struct User {
        string username;
        string bio;
        uint256[] postIds;
    }

    struct Post {
        string title;
        string content;
        address payable author;
        uint256 created;
        uint256 donationAmount;
    }

    mapping(address => User) public users;
    mapping(uint256 => Post) public posts;

    event NewPost(address indexed author, uint256 postId, string title);

    // Event emitted when an there is a donation
    event DonateVideo(
        uint256 id,
        string title,
        string content,
        address payable author,
        uint256 donationAmount
    );

    function createPost(string memory title, string memory content) public {
        latestPostId++;

        posts[latestPostId] = Post(
            title,
            content,
            payable(msg.sender),
            block.timestamp,
            0
        );
        users[msg.sender].postIds.push(latestPostId);

        emit NewPost(msg.sender, latestPostId, title);
    }

    function modifyPostTitle(uint256 postId, string memory title) public {
        require(
            msg.sender == posts[postId].author,
            "Only the author can modify"
        );

        posts[postId].title = title;
    }

    function modifyPostContent(uint256 postId, string memory content) public {
        require(
            msg.sender == posts[postId].author,
            "Only the author can modify"
        );

        posts[postId].content = content;
    }

    function updateUsername(string memory username) public {
        users[msg.sender].username = username;
    }

    function updateBio(string memory bio) public {
        users[msg.sender].bio = bio;
    }

    function getPostIdsByAuthor(address author)
        public
        view
        returns (uint256[] memory)
    {
        return users[author].postIds;
    }

    function getPostById(uint256 postId)
        public
        view
        returns (string memory title, string memory content)
    {
        title = posts[postId].title;
        content = posts[postId].content;
    }

    function donateVideoOwner(uint256 _id) public payable {
        require(_id > 0 && _id <= latestPostId);

        Post memory _post = posts[_id];
        address payable _author = _post.author;
        payable(address(_author)).transfer(msg.value);
        _post.donationAmount = _post.donationAmount + msg.value;
        posts[_id] = _post;

        emit DonateVideo(
            _id,
            _post.title,
            _post.content,
            _author,
            _post.donationAmount
        );
    }
}
