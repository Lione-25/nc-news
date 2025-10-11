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
- [Errors](#errors)
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

Each clickable article card displays key details (title, author, date, votes, comments, and topic).  
Users can interact with cards for quick navigation and sharing.

- Truncated long titles (hover to see full title).
  <img alt="Truncated article title" src="https://github.com/user-attachments/assets/56eab950-b522-4164-8e43-f5e28c96068d" />

- Jump directly to the comments section using the comments button.
  <img alt="Article card comments button" src="https://github.com/user-attachments/assets/79838ed5-61f8-447d-bbae-c5001adc58f6" />

- Share articles easily with one click.
  <img alt="Share article from list" src="https://github.com/user-attachments/assets/7e1daae4-8cc4-4cf0-ba4a-df63a7594099" />
  
  <img alt="Link copied to clipboard" src="https://github.com/user-attachments/assets/3578f6a3-d024-49f2-90c9-16409446c3ba" />

---

### Users Page

- View all registered users.
  <img alt="Users page" src="https://github.com/user-attachments/assets/74d6279d-15ba-48da-af20-e6f98bb925f9" />

- Log in by selecting a user, after which you can log out or log in as another user.
  <img alt="Log in as a user" src="https://github.com/user-attachments/assets/4e039bf2-e379-43c1-ab7a-8c061fa9c461" />

---

### Article Page

Each article page includes the full article content and an interactive comments section.  
Users can vote on articles, post comments, and manage their own contributions.

---

### Comments

- Jump directly to the comments section.
  <img alt="Jump to comments" src="https://github.com/user-attachments/assets/d25e55ab-d899-4ba7-ae6b-8e36cf5cd78f" />

- Hide or show the list of comments
  <img alt="Hide comments" src="https://github.com/user-attachments/assets/df316ec5-001d-4b83-a89c-dec0d56bfda0" />

- Paginate through long comment threads.
  <img alt="Comments pagination" src="https://github.com/user-attachments/assets/6f8fbd53-9818-45a6-8fd4-9b9b5a1482d1" />

---

### Posting a Comment

Users can add new comments instantly — the interface updates in real time once a comment is submitted.

<img alt="Add new comment button" src="https://github.com/user-attachments/assets/985dedd0-5153-4fee-a05a-afcc8368460e" />

<img alt="Add new comment section" src="https://github.com/user-attachments/assets/10228451-1f54-4d4f-8ea3-c92a0ebb0f05" />

- If you’re not logged in, the **Post Comment** button is disabled. You can choose to log in, which takes you to the **Users** page:
<img alt="Log in to post comment" src="https://github.com/user-attachments/assets/18fdb646-7cda-4459-8247-7260f75038ec" />

- Select a user to log in as: 
<img alt="Select user to log in as" src="https://github.com/user-attachments/assets/c54d8f6f-b65b-47df-b0db-9dabdbbf267d" />

- You’re then returned to the article to finish posting your comment: 
<img alt="Return to comment" src="https://github.com/user-attachments/assets/c8a58d20-cfa8-407d-a883-cae802ff8450" />

<img alt="Post your finished comment" src="https://github.com/user-attachments/assets/71902ba5-6ac5-4bf6-9bd3-3b7ea38dcfeb" />

<img alt="Comment is being posted" src="https://github.com/user-attachments/assets/c2129cc1-2ddf-4220-bca1-6de71c786e38" />

- Once posted, you can click a button to jump to your comment at the top of the list. 
<img alt="Click to view comment" src="https://github.com/user-attachments/assets/1fc89bd1-fed8-4a0f-a43d-1165306259eb" />

<img alt="New comment in list" src="https://github.com/user-attachments/assets/0dacb9e9-2acc-45f3-87d9-4e5da53e71a5" />

---

### Returning to an Unfinished Comment

If a user navigates away mid-comment, their text is saved locally and restored when they return. 
<img alt="Return to unfinished comment" src="https://github.com/user-attachments/assets/d1ec92b4-7aae-4b94-8ea6-1607190c492c" />

---

### Deleting Your Comment

Users can delete their own comments. 

<img alt="Delete comment" src="https://github.com/user-attachments/assets/4e820c05-f51c-499a-8a52-c2b139d9bae6" />

- A confirmation modal prevents accidental deletion: 
<img alt="Confirm deletion" src="https://github.com/user-attachments/assets/ff972cb3-632e-4e8b-9d3e-48c935ca0e42" />

- A loading state is displayed while the deletion is processed: 
<img alt="Deleting" src="https://github.com/user-attachments/assets/5cf9be1d-1386-47e2-8820-76730e784d29" />

- Any errors are promptly reported to the user.
<img alt="Deletion error" src="https://github.com/user-attachments/assets/e87d6f27-fff0-43e6-b49f-53ceb5963826" />

---

### Loading State

Each page and action includes a visual loading indicator for smoother user experience. 

<img alt="Loading home page" src="https://github.com/user-attachments/assets/4b8294c5-19a7-4820-8a93-588db1a2a78b" />

<img alt="Loading users" src="https://github.com/user-attachments/assets/f9fb2a6c-469a-4a89-bd15-bed6e9af74bf" />

<img alt="Loading articles" src="https://github.com/user-attachments/assets/5e02be3c-b11c-4ff9-bcbb-36c5bbbbf1db" />

The first page of comments is loaded along with the article to prevent unnecessary delays and allow a smoother user experience. 

---

### Errors

Errors are promptly reported to the user.

<img alt="Unable to load articles" src="https://github.com/user-attachments/assets/3ed57087-08ab-4ee7-809a-b0c705c9c626" />

<img alt="Unable to load users" src="https://github.com/user-attachments/assets/d685472e-527e-4e22-8e12-db4864bef5b0" />

<img alt="Unable to load article and comments" src="https://github.com/user-attachments/assets/6e5891af-56c6-40c2-a797-dfd39c86f4b6" />

<img alt="Unable to post comment" src="https://github.com/user-attachments/assets/1779b431-cdde-44ac-b545-10823567cb10" />

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
