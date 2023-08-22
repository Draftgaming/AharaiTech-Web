function uploadPost() {
    var loggedInUser = localStorage.getItem('loggedInUser') || "Anonymous";
    var postContent = document.getElementById("postContent").value;

    if (postContent) {
        var postDiv = document.createElement('div');
        postDiv.className = "post";

        var image = document.getElementById('postImage').files[0];

        if (image) {
            var reader = new FileReader();

            reader.onload = function(e) {
                postDiv.innerHTML = `<h3>${loggedInUser}</h3><p>${postContent}</p><img src="${e.target.result}" alt="Uploaded Image" width="100">`;
                document.querySelector('.feed-section').appendChild(postDiv);
            };

            reader.readAsDataURL(image);
        } else {
            postDiv.innerHTML = `<h3>${loggedInUser}</h3><p>${postContent}</p>`;
            document.querySelector('.feed-section').appendChild(postDiv);
        }
    }
}

function searchPosts() {
    var searchQuery = document.getElementById("searchBar").value.toLowerCase();
    var allPosts = document.querySelectorAll('.post h3');

    allPosts.forEach(function(postHeader) {
        var postName = postHeader.innerText.toLowerCase();

        if (postName.includes(searchQuery)) {
            postHeader.parentElement.style.display = "";
        } else {
            postHeader.parentElement.style.display = "none";
        }
    });
}

document.getElementById("searchBar").addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        searchPosts();
    }
});
