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
    "links": {
      "Code": "https://github.com/tiffbouchard/forkpitch",
      "Live Demo": "http://forkpitch.herokuapp.com"
    }
  },
  "bidgala": {
    "title": "Bidgala",
    "header": "/images/project_three/header.png",
    "role": "Development / Web Design",
    "links": {
      "Live": "https://bidgala.com"
    }
  },
  "personal-branding": {
    "title": "Personal Branding",
    "role": "Branding / Logo Design / Development / Web Design",
    "links": [
      { "name": "Code",
        "link": "https://github.com/tiffbouchard/portfolio-v2",
      },
      { "name": "Live Demo",
        "link": "https://tiffbouchard.com",
      }
    ],
    "sections": [
      {
        "title": "Wireframes",
        "images": [
          {
            "description" : "",
            "link" : "/images/project_four/wireframe.png"
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
  }
}