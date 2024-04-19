// You can add JavaScript functionality here as needed
// For example, handling dynamic content loading or interactions
// JavaScript for handling the search functionality
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var searchTerm = document.getElementsByName("search")[0].value;
    // You can implement your search functionality here, e.g., redirect to a search results page
    console.log("Search term: " + searchTerm);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('facebook') ? 'facebook' :
                             this.classList.contains('twitter') ? 'twitter' :
                             'instagram';
            shareOnSocialMedia(platform);
        });
    });

    function shareOnSocialMedia(platform) {
        // Replace the "#" with the URL of your website
        const url = encodeURIComponent('https://yourwebsite.com');
        let shareUrl;

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
                break;
            case 'instagram':
                // Instagram doesn't allow direct sharing via URL, it has to be done via mobile app or API
                alert("Instagram sharing is not supported via web browser. Please share manually.");
                return;
        }

        // Open a new window to share the URL
        window.open(shareUrl, '_blank');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewsContainer = document.getElementById("reviewsContainer");

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const rating = document.getElementById("rating").value;
        const comment = document.getElementById("comment").value;

        // Create a new review element
        const review = document.createElement("div");
        review.classList.add("review");
        review.innerHTML = `
            <p class="username">${username}</p>
            <p class="rating">${"★".repeat(rating)}</p>
            <p>${comment}</p>
        `;

        // Add the review to the container
        reviewsContainer.appendChild(review);

        // Clear the form fields
        reviewForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const newsContainer = document.getElementById("newsContainer");
    const articlesContainer = document.getElementById("articlesContainer");

    // Dummy data for news and articles
    const newsData = [
        { title: "New Album Announcement", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Upcoming Concerts", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Interview with Famous Artist", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];

    const articlesData = [
        { title: "How to Master Guitar Playing", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Top 10 Songs of the Decade", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { title: "Exploring Jazz Music: A Beginner's Guide", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ];

    // Function to create news articles dynamically
    function createNewsArticles() {
        newsData.forEach(news => {
            const newsArticle = document.createElement("div");
            newsArticle.classList.add("news-article");
            newsArticle.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            `;
            newsContainer.appendChild(newsArticle);
        });
    }

    // Function to create featured articles dynamically
    function createFeaturedArticles() {
        articlesData.forEach(article => {
            const featuredArticle = document.createElement("div");
            featuredArticle.classList.add("featured-article");
            featuredArticle.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.content}</p>
            `;
            articlesContainer.appendChild(featuredArticle);
        });
    }

    // Call functions to create news and articles
    createNewsArticles();
    createFeaturedArticles();
});



//for new releases

document.addEventListener("DOMContentLoaded", function() {
    const newReleasesContainer = document.getElementById("newReleasesContainer");

    // Dummy data for new releases
    const newReleasesData = [
        { title: "New Album: Artist Name - Album Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "n.png" },
        { title: "Single Release: Artist Name - Song Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "n.png" },
        { title: "EP Release: Artist Name - EP Title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "n.png" }
    ];

    // Function to create new releases dynamically
    function createNewReleases() {
        newReleasesData.forEach(release => {
            const newRelease = document.createElement("div");
            newRelease.classList.add("new-release");
            newRelease.innerHTML = `
                <h3>${release.title}</h3>
                <img src="images/${release.image}" alt="${release.title}">
                <p>${release.description}</p>
            `;
            newReleasesContainer.appendChild(newRelease);
        });
    }

    // Call function to create new releases
    createNewReleases();
});
