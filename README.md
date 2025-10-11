# Northcoders News — Frontend

**Live Demo:**  
👉 [**View the Deployed App on Netlify**](https://main--northcoders-news-hafsa.netlify.app/)

---

### Table of Contents  
- [Description](#description)  
- [How to Use](#how-to-use)  
- [Features](#features)  
- [Back End Repository](#back-end-repository)  
- [Local Setup](#local-setup-minimum-node-version)  
- [Acknowledgements](#acknowledgements)

---

## Description
Northcoders News is a social news aggregation, content rating, and discussion platform where users can view articles categorised according to topics, vote on them using upvotes and downvotes, and add comments to articles. This project was developed using **React** and **CSS** and based on a **mobile-first design**, providing a dynamic and user-friendly interface that interacts with the [backend API](https://github.com/Lione-25/be-nc-news) for data management and real-time updates.

---

## How to Use
- Visit the [deployed version](https://main--northcoders-news-hafsa.netlify.app/) to interact with the web app live.
- Users can browse articles by topic, vote on articles, and view, submit and delete comments on individual articles.

---

## Features

### Quick Navigation
- [Theme Toggle](#theme-toggle)
- [Home Page](#home-page)
- [Articles Page](#articles-page)
- [Article Cards](#article-cards)
- [Users Page](#users-page)
- [Article Page](#article-page)
- [Comments](#comments)
- [Posting a Comment](#posting-a-comment)
- [Returning to an Unfinished Comment](#returning-to-an-unfinished-comment)
- [Deleting Your Comment](#deleting-your-comment)
- [Loading State](#loading-state)
- [Responsive Layout](#responsive-layout)
- [Mobile Version](#mobile-version)

---

### Theme Toggle

Users can switch between **light**, **dark**, and **system** themes for a personalised viewing experience.

| Theme | Preview |
|:------|:---------|
| **System** | <img alt="System theme" src="https://github.com/user-attachments/assets/707d7f30-90ac-482d-805d-c8c33223a80a" /> |
| **Light** | <img alt="Light theme" src="https://github.com/user-attachments/assets/9a22d70c-f87e-4082-8bf1-46c93123842d" /> |
| **Dark** | <img alt="Dark theme" src="https://github.com/user-attachments/assets/72539809-5862-4984-b07e-70f8abadf797" /> |

---

### Home Page

The home page features a dynamic slideshow of the five most recent articles, with interactive browsing options.

- **Live Slideshow** — Automatically cycles through the latest articles.  
  <img alt="Home page slideshow" src="https://github.com/user-attachments/assets/c1c72bc8-3cfa-4c71-a9cc-dedbb0813a9f" />

- **Manual Navigation** — Use arrows to view the next or previous article, or click one of the dots below to jump to a specific one.
  <img alt="Slideshow manual navigation" src="https://github.com/user-attachments/assets/f661a2c0-4aa4-437e-bb05-f13f50f2e711" />

- **Hover Pause** — Slideshow pauses when hovering over an article for easy reading and interaction. The article image and title are clickable, taking you directly to its full page.
  <img alt="Slideshow paused on hover" src="https://github.com/user-attachments/assets/bf8e74f5-ba9b-4e72-8262-4460093a13fb" />

- **Browse by Topic** — Select a topic or view all articles.  
  <img alt="Browse by topic" src="https://github.com/user-attachments/assets/833cf016-cbce-4218-9041-5828953afb0d" />

---

### Articles Page

- Select a topic from the dropdown menu or click the topic button on an article.
  <img alt="Select topic" src="https://github.com/user-attachments/assets/4e4d07a1-8d69-4e71-88bd-f06dfbad1a82" />

- Choose how to order the list of articles.
  <img alt="Sort articles" src="https://github.com/user-attachments/assets/08bf0bcd-980c-4278-816f-1d16c746e1e5" />

- Customise pagination of the list of articles, choosing to display 10, 15, 20 or 30 articles per page and easily navigating to the next and previous pages.
  <img alt="Articles pagination" src="https://github.com/user-attachments/assets/aeb0dd8e-5fb9-45d9-8f13-9036560e10fc" />

- Jump to the top or bottom of the page easily.
  <img alt="Jump to top" src="https://github.com/user-attachments/assets/5663fd6b-8952-4ffb-b965-81c83f421807" />
  <img alt="Jump to end" src="https://github.com/user-attachments/assets/f4dede21-89a5-48d0-903a-ba6afcccafbc" />

- Navigate via the breadcrumb trail or the header navigation buttons.
  <img alt="Breadrumb trail" src="https://github.com/user-attachments/assets/ddddaac5-00c4-4e08-8267-18e4a4e72e2a" />

---

### Article Cards

Each article card displays key details (title, author, date, votes, comments, and topic).  
Users can interact with cards for quick navigation and sharing.

- Truncated long titles (hover to see full title).  
- Jump directly to the comments section using the comments button.  
- Share articles easily with one click.

---

### Users Page

- View all registered users.  
- Log in by selecting a user.  

---

### Article Page

Each article page includes the full article content and an interactive comments section.  
Users can vote on articles, post comments, and manage their own contributions.

---

### Comments

- Jump directly to the comments section.  
- Paginate through long comment threads.  

---

### Posting a Comment

Add new comments instantly — the interface updates in real time once a comment is submitted.

---

### Returning to an Unfinished Comment

If a user navigates away mid-comment, their text is saved locally and restored when they return.  

---

### Deleting Your Comment

Users can delete their own comments, with instant feedback on success.  

---

### Loading State

Each page and action includes a visual loading indicator for smoother user experience.  

---

### Responsive Layout

All pages adapt seamlessly to different screen sizes.  

---

### Mobile Version

Optimised for mobile devices — intuitive navigation, stacked layouts, and touch-friendly buttons.  

---

## Back End Repository
The backend for this project can be found in the [Northcoders News API repository](https://github.com/Lione-25/be-nc-news).

---

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
