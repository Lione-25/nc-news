# Northcoders News Frontend

**Live Demo**  
[Link to Deployed Version](https://main--northcoders-news-hafsa.netlify.app/)

# Contents
[Description](https://github.com/Lione-25/nc-news/blob/main/README.md#description)
[How to Use](https://github.com/Lione-25/nc-news/blob/main/README.md#how-to-use)
[Features](https://github.com/Lione-25/nc-news/blob/main/README.md#features)
[Back End Repository](https://github.com/Lione-25/nc-news/blob/main/README.md#back-end-repository)
[Local Setup](https://github.com/Lione-25/nc-news/blob/main/README.md#description)
[Acknowledgements](https://github.com/Lione-25/nc-news/blob/main/README.md#acknowledgements)

## Description

Northcoders News is a social news aggregation, content rating, and discussion platform where users can view articles categorised according to topics, vote on them using upvotes and downvotes, and add comments to articles. This project was developed using **React** and **CSS** and based on a **mobile-first design**, providing a dynamic and user-friendly interface that interacts with the [backend API](https://github.com/Lione-25/be-nc-news) for data management and real-time updates.


## How to Use

- Visit the [deployed version](https://main--northcoders-news-hafsa.netlify.app/) to interact with the web app live.
- Users can browse articles by topic, vote on articles, and view, submit and delete comments on individual articles.

## Features

### Theme toggle

Users can click the theme button to toggle between themes

- System theme
<img width="1038" height="186" alt="System theme" src="https://github.com/user-attachments/assets/707d7f30-90ac-482d-805d-c8c33223a80a" />

- Light theme
<img width="1038" height="186" alt="Light theme" src="https://github.com/user-attachments/assets/9a22d70c-f87e-4082-8bf1-46c93123842d" /> 

- Dark theme
<img width="1038" height="186" alt="Dark theme" src="https://github.com/user-attachments/assets/72539809-5862-4984-b07e-70f8abadf797" /> 


### Home page

- Clickable live slideshow of 5 most recent articles
<img width="1318" height="1181" alt="Home page" src="https://github.com/user-attachments/assets/c1c72bc8-3cfa-4c71-a9cc-dedbb0813a9f" /> 

- Slideshow pauses when hovering over an article
<img width="1436" height="873" alt="Home page paused slideshow" src="https://github.com/user-attachments/assets/bf8e74f5-ba9b-4e72-8262-4460093a13fb" /> 

- Choose to browse by topic or view all articles
<img width="1436" height="362" alt="Home page browse by topic" src="https://github.com/user-attachments/assets/833cf016-cbce-4218-9041-5828953afb0d" /> 


### Articles page

- Select a topic from the dropdown menu or click the topic button on an article
- Filter and sort the list of articles
- Customise pagination of the list of articles
- Jump to the top and bottom of the page
- Navigate to a different page using the navigation buttons in the header or the breadcrumb trail at the top of the page

### Article cards

- View information about each article (longer names are truncated - hover to see full name)
- Click on the comments button to jump directly to the comments section of the article's page
- Share the article

### Users page

- View all users
- Choose to log in as a user

### Article page

- 

### Comments

- Jump to the comments section
- Customise pagination of the list of comments

### Posting a comment

### Returning to an unfinished comment

### Deleting your comment

### Loading state

### Responsive layout

### Mobile version

## Back End Repository

The backend for this project can be found in the [Northcoders News API repository](https://github.com/Lione-25/be-nc-news).


## Local Setup: Minimum Node Version

To run this project locally, you will need **Node.js v23.7.0** or higher. Check your version using the following command:

```bash
node --version
```


## Local Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Lione-25/nc-news
   ```
2. Navigate to the project folder:
   ```bash
   cd nc-news
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` to view the app.

---

## Acknowledgements

This portfolio project was created as part of a **Digital Skills Bootcamp in Software Engineering** provided by [Northcoders](https://northcoders.com/).
