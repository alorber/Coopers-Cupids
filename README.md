###### ECE 366 Final Project
# Cooper's Cupids
## Andrew Lorber & Mark Koszykowski
#### A dating app to solve all of life’s woes.

Cooper's Cupids is a dating webapp built as a term project for ECE 366 - Software Engineering & Large System Design. The frontend was built with a React, the backend was developed in Java (Spark), and MySQL was used for the database.

The site is fully responsive and contains features expected of a dating app, including:
- Sign up / Login
- Profile Creation / Editing
- User Feed & Like / Dislike Mechanic
- User Matching
- User Messaging

### Frontend (Andrew)

The frontend of this project was built in React using TypeScript. 

There are 5 main pages, each of which is responsive to changes in screen size:

#### 1. Home Page

Before a user logs into their Cooper's Cupids account, only the homepage is available. The rest of the navbar tabs are hidden, and attempts to access other pages will redirect here. The homepage contains a signup / login card, which can be toggled by clicking on `Already have an account?` &  `Don't have an account?`. The form has proper validation and will check for & alert the user on improper email format, emails already linked to accounts, incorrect email + password combinations, and empty fields. Additionally, the homepage contains information about Cooper's Cupids.

<img width="70%" alt="Home Page, Not Logged In" src="https://user-images.githubusercontent.com/13024480/129514806-5b5f2087-2f56-4cae-8aab-ddb34367d970.png">

<img width="70%" alt="Home Page, Logged In" src="https://user-images.githubusercontent.com/13024480/129514775-459287bc-6022-48e6-84cd-af602771c70c.png">

#### 2. Profile Page

The Profile Page is where users can create and edit the profile that other users will see. Before a profile is created, the page will prompt the user to create one. Once a profile is created, the page will display the user's profile while giving the option to edit.

<div style="display: flex;">
  <img width="70%" alt="Profile Page, No Profile" src="https://user-images.githubusercontent.com/13024480/129516595-0d7e9718-4352-49ef-ae86-6e822105527f.png">
  
<img width="28%" alt="Profile Page, Creating Profile" src="https://user-images.githubusercontent.com/13024480/129516724-30f14195-4c57-45ea-b132-df6ad738bc31.png">
</div>
 
<img width="70%" alt="Profile Page, Profile View" src="https://user-images.githubusercontent.com/13024480/129516932-1e1857e4-2883-4c5b-86df-ccdf34381c5a.png">

#### 3. Feed Page

On the feed page users are shown the profiles of other users one-by-one and given the option to like or dislike. If a user has not yet created a profile, they will be prompted to do so before being shown other profiles.

<img width="70%" alt="Feed Page, No Profile" src="https://user-images.githubusercontent.com/13024480/129516660-ea9b21e4-ab78-4583-91ff-6e62e664ad3b.png">
<img width="70%" alt="Feed Page" src="https://user-images.githubusercontent.com/13024480/129671593-cf90fc71-f88e-4804-b072-61eb7311968f.png">

#### 4. Messaging Page

Once two users match, a conversation between them is automatically created. Matching with a user is the only way to begin a conversation. Similar to most messaging apps, the conversations appear along the left side, sorted from top to bottom by most recent activity. If the screen width becomes too small, the conversations are displayed as icons. The conversation list, as well as the conversation viewer, are individually scrollable. When a new message is sent / recieved, that conversation will move to the top of the list and the date will be appear in the conversation if this is the first message of the day. Clicking on a user's icon within a conversation will display their profile, and clicking on the broken heart icon will instantly unmatch with the user and delete the conversation.

<img width="70%" alt="Messages Page" src="https://user-images.githubusercontent.com/13024480/129670270-5b05b2d7-14bb-42f2-a378-62979d49bd88.png">

<img width="70%" alt="Messages Page Compact" src="https://user-images.githubusercontent.com/13024480/129670419-69467440-3358-41c9-9e11-d87ca1595c83.png">


#### 5. Settings Page

The Settings Page offers the ability to update one's account settings. 

Options include:
- Updating email preferences
- Updating email address
- Updating password
- Deleting Account

<img width="70%" alt="Settings Page, 1/2" src="https://user-images.githubusercontent.com/13024480/129584696-cead3b45-5d04-4ac5-a403-f7c872d36f57.png">

<img width="70%" alt="Settings Page, 2/2" src="https://user-images.githubusercontent.com/13024480/129584770-8b4251d8-b71b-4773-96f8-e7f5e60cb0df.png">

### Backend (Mark)

The backend was built in Java using Spark, as well as MySQL for the database.

#### - Storing Accounts

When a user creates an account, it is assigned a randomly generated user ID that is used throughout the database. This way, the email & password can be changed while maintaining a proper database structure.

#### - Cookies

Cookies are generated on the backend that last for 3 hours. These cookies are used to allow users to stay logged in and are required in all requests.

#### - Feed Algorithm

The feed is generated by first showing all users that liked the current user and then sorting the rest of the users by their similarity to the current user. This similarity score is found by calculating the overlap in the two users' interests.
