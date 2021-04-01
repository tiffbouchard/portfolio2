module.exports = {
  "artist-explorer": {
    "title": "Artist Explorer",
    "catch": "Discover new artists based on your current favourites",
    "header": "/images/project_one/header.png",
    "role": "Development / Web Design",
    "links": [
      { "name": "Code",
        "link": "https://github.com/tiffbouchard/artist-explorer",
      },
      { "name": "Live Demo",
        "link": "http://artist-explorer.herokuapp.com",
      }
    ],
    "about": "I created this web app as an easy to use platform to discover new music and artists. I used the Spotify Web API to fetch your personal Spotify listening data, in particular your top artists and those you follow. There is also search functionality and a random artist generator that seeds data from your recent listening history. You can keep clicking on artists to continue discovering new artists and listen to a clip of their top track. If you like what you hear, you can open their Spotify or follow them. You can listen to top tracks by hovering over the album art, however, if that is annoying you can disable it. Hovering is also disabled automatically on mobile devices and a click to play is enabled.",
    "tech": ["HTML/CSS/SASS", "Javascript", "React", "Spotify Web API", ],
    "sections": [
      {
        "title": "Wireframes",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_one/wireframe.png"
          }
        ],
      },
      {
        "title": "Preview",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_one/preview_mockup.png"
          }
        ],
      },
      {
        "title": "Next Steps + Improvements",
        "content": ["Music player/display gets in the way on the mobile version", "Music will play over top of eachother if you are on the Random page and try to play two tracks at once", "Generate a random artist that is not based on your current taste, maybe also based on genre", "If searching get rid of highlighted link in sidebar", "Save an artist to a list", "Save tracks to a playlist", "Better error handling", "Dark mode could be cool", "Fix repeating components, make one", "Filter by genre", "Following doesn't show all artists, randomize page on each request"],
      }
    ]
  },
  "forkpitch": {
    "title": "Forkpitch",
    "header": "/images/project_two/header.png",
    "role": "Development / Web Design",
    "links": [
      { "name": "Code",
        "link": "https://github.com/tiffbouchard/music-review-app",
      },
      { "name": "Live Demo",
        "link": "http://forkpitch.herokuapp.com",
      }
    ],
    "about": "This app uses a third-party API that scrapes Pitchfork review data and lets you to leave your opinions on album reviews. Using Google OAuth you can login and leave a review.",
    "tech": ["HTML/CSS", "Javascript", "MongoDB", "Node.js"],
    "sections": [
      {
        "title": "Wireframes",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_two/wireframe.png"
          }
        ],
      },
      {
        "title": "Preview",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_two/preview.png"
          }
        ],
      },
      {
        "title": "Next Steps + Improvements",
        "content": ["AAU I want to be able to add reviews to My Reviews page through an ADD button, this page allows for users to track album reviews they have commented and/or ones they would like to track", "AAU I want to be able to like/dislike a critic review or user review, when the buttons are clicked again they decrease the amount of likes/dislikes", "AAU/AAV I want to be able to view the amount of like/dislikes", "AAU I want to be able to reply to other user reviews", "Make search better by implementing sort functionality, right now the search returns results randomly and in no specific order, sometimes the least relevant result will be returned first which does not make sense if a user has entered a very specific search", "The navigation bar is not accessible from a mobile device, make it accessible through a drop-down menu", "Have feedback for loading when searching"],
      }
    ]
  },
  "bidgala": {
    "title": "Bidgala",
    "header": "/images/project_three/header.png",
    "role": "Development / Web Design",
    "links": [
      { "name": "Live Site",
        "link": "http://bidgala.com",
      }
    ],
    "about": "Bidgala is a global dynamic marketplace and visual arts community putting artists and their stories at the forefront. Our goal is to become the go-to platform for individuals looking to connect with the art-world. With Bidgala, I worked to develop and design some key features. I worked on the frontend for products and profile pages and the backend for payments using Stripe Connect. See below for features I worked on independently.",
    "tech": ["HTML/CSS", "Bootstrap", "Javascript/jQuery", "React", "PostgreSQL", "Django/Python" ],
    "sections": [
      {
        "title": "My Work",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_three/mockup_web.png"
          },
          {
            "description" : "",
            "id": "center",
            "link" : "/images/project_three/mockup_mobile.png"
          },
          {
            "description" : "",
            "link" : "/images/project_three/more_web.png"
          },
        ],
      }
    ]
  },
  "personal-branding": {
    "title": "Personal Branding",
    "role": "Branding / Logo Design / Development / Web Design",
    "header": "/images/project_four/header.png",
    "about": "In this project, I created my personal brand.",
    "tech": ["HTML/CSS", "styled-components", "React" ],
    "links": [
      { "name": "Code",
        "link": "https://github.com/tiffbouchard/portfolio-v2",
      },
      { "name": "Live Site",
        "link": "https://tiffbouchard.com",
      }
    ],
    "sections": [
      {
        "title": "",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_four/branding_icons.png"
          },
          {
            "description" : "",
            "link" : "/images/project_four/branding_color.png"
          },
          {
            "description" : "",
            "link" : "/images/project_four/bizcard.png"
          },
          {
            "description" : "",
            "link" : "/images/project_four/branding_type.png"
          },
          {
            "description" : "",
            "link" : "/images/project_four/webmock.png"
          }
        ],
      },
      {
        "title": "Wireframes",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_four/wireframe.png"
          }
        ],
      },
    ]
  }
}