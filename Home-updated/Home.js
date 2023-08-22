document.getElementById("profile-icon").addEventListener("click", function() {
    var accountPanel = document.querySelector(".account-panel");
    if (accountPanel.style.display === "none" || accountPanel.style.display === "") {
        accountPanel.style.display = "block";
    } else {
        accountPanel.style.display = "none";
    }
});

function uploadPost() {
    var postContent = document.getElementById("postContent").value;
    var postImage = document.getElementById("postImage");
   var loggedInUser = localStorage.getItem("loggedInUser") || "DefaultUser";


    if (postContent) {
        var postDiv = document.createElement('div');
        postDiv.className = "post";

        var postHeader = document.createElement('div');
        postHeader.className = "post-header";
        var postH3 = document.createElement('h3');
        postH3.innerText = loggedInUser;
        var deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function() { deletePost(deleteButton); };

        postHeader.appendChild(postH3);
        postHeader.appendChild(deleteButton);
        postDiv.appendChild(postHeader);

        var postText = document.createElement('p');
        postText.innerText = postContent;
        postDiv.appendChild(postText);

        if (postImage.files.length > 0) {
            var reader = new FileReader();

            reader.onload = function(e) {
                var postImg = document.createElement('img');
                postImg.src = e.target.result;
                postImg.alt = "Uploaded Image";
                postImg.style.maxWidth = "100%";
                postDiv.appendChild(postImg);
                document.querySelector('.feed-section').appendChild(postDiv);
            }

            reader.readAsDataURL(postImage.files[0]);
        } else {
            document.querySelector('.feed-section').appendChild(postDiv);
        }
    }
}
window.onload = function() {
var loggedInUser = localStorage.getItem("loggedInUser") || "DefaultUser";
document.getElementById("usernameDisplay").textContent = loggedInUser;
}


