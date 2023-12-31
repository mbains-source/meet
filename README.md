#**Meet App README**

##**Application Link**
https://mbains-source.github.io/meet/


##Objective of this application: To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.


<pre>
 
##Get project running using terminal

App is hosted on gh-pages.

Note to replace [PROJECT_FOLDER_NAME] with the name you want

Clone git repository:
git clone https://github.com/mbains-source/meet.git [PROJECT_FOLDER_NAME]
cd [PROJECT_FOLDER_NAME] npm i

Run app on localhost:
cd [PROJECT_FOLDER_NAME] npm run start

Run test:
cd [PROJECT_FOLDER_NAME]
npm run start
</pre>

<pre>
**Description:** For this achievement, I had the opportunity to refine my skills in test-driven development by
creating a progressive web application using react. This app will hereafter be called meet and uses the google
calendar API to fetch upcoming events by city. This app also uses Serverless functions (AWS Lambda) to reduce 
 backend maintenance, build a scalable & always available application, and allow for offline user access.
</pre>

<pre>
**Tech Stack used:**
- React (more specifically, create react app boilerplate)
- React Testing Library
- Github Pages
- Google Calendar API
- AWS Lambda (Serverless Functions)
- Google OAuthetication 2
- Recharts
- Jest
</pre>



-------------------------------------------------------------------------------------------------------------------------------
<pre>
**Feature 2: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.**

** Scenario 1: An event element is collapsed by default.**

- Given: When a query result is returned;

- When: User is viewing the results of the query;

- Then: Event elements are collapsed by default;

** Scenario 2: User can expand an event to see details.**

- Given: When user is viewing a specific event in query search results;

- When: A user wants to learn more about an event by clicking on show details;

- Then: User is able to expand event by clicking on show details button;

** Scenario 3: User can collapse an event to hide details.**

- Given: When user is viewing a specific event in query search results;

- When: A user wants to minimize an event after reading about its details;

- Then: User is able to collapse event by clicking on show details button;
</pre>

<pre>
**Feature 3: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.**

 Scenario 1: When user hasn’t specified a number, 32 events are shown by default

- Given: The user hasn’t specified a number of events in the app;

- When: The user is shown a list of events resulting from the search;

- Then: The default number of events shown is 32;

 Scenario 2: User can change the number of events displayed.

- Given : A user would like to change the number of events displayed;

- When: User is specifying query parameters such as number of events displayed;

- Then: The user is able to change the number of events displayed;

</pre>

<pre>
 **Feature 4: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.**

 Scenario 1: Show cached data when there’s no internet connection.

- Given: User has no internet connection;

- When: User opens Meet app;

- Then: User is able to view cached data;

 Scenario 2: Show error when user changes search settings (city, number of events).

- Given: User opens app and views cached data from previous search when online;

- When: The user attempts to change the search settings whilst their device is offline;

- Then: The user is shown an error message;

</pre>

<pre>
**Feature 5: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.**

Scenario 1: User can install the meet app as a shortcut on their device home screen.

- Given: The user enjoys using the meet app but wants a shortcut on their device home screen;

- When: The user follows device instructions to install meet app as a shortcut on home screen;

- Then: The user is able to install the meet app as a shortcut on their device home screen;

</pre>

<pre>
**Feature 6: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.**

 Scenario 1: Show a chart with the number of upcoming events in each city.

- Given: User wants to be shown a chart with upcoming events in each city;

- When: User utilizes data visualization feature in app;

- Then: The user is shown a chart with the number of upcoming events in each city;
 </pre>

 
 
