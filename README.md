# To Implement this task I am using Next.js (React Framework) as recommended by [react](https://react.dev/)

# Run -> npm install and then Run -> npm run dev

# Front-end assignment at Etraveli Group

For this assignment you'll create an app for listing Star Wars movies. The data should be fetched from the following endpoint: https://swapi.dev/api/films/?format=json.

## Description

When the app is loaded, a list of the movies should be displayed as the image below shows:

![Default view](https://user-images.githubusercontent.com/709159/39311980-a0bc7b08-496e-11e8-8171-5f4c04cf1bd2.png)

There should be a way to order the movies by `Year` or `Episode` as the select menu shows in the image below:

![Sort by year of episode](https://user-images.githubusercontent.com/709159/39311979-a09dd338-496e-11e8-9183-57ae82a511cb.png)

When clicking on a movie in the list, a detailed view of it should be displayed in the right hand side of the application. In this case, ”Episode V - The Empire Strikes Back” is chosen (when no movie is selected, a default text should be displayed instead):
![Episode V details](https://user-images.githubusercontent.com/709159/39311976-a080c3f6-496e-11e8-88df-64642a3ef681.png)

Additionally, there should be a way to filter the movies by entering their name in the text input:

![Filter out specific movies](https://user-images.githubusercontent.com/709159/39311975-a05fde48-496e-11e8-9078-8040572b02b5.png)

**Feel free to add any extra features as you like!**

**The images above are just en example layout, but the final result should aim to have the same features, and somewhat same layout**.

## Bonus assignment

For an extra assignment, you could add ratings and posters for your movies. This data should be fetched from the second endpoint: https://www.omdbapi.com/. To use this API, you will need an apikey: `2a1ad4b`

When a movie is selected, there should be a preview of the poster image and the ratings from Imdb, Rotten Tomatoes and MetaCritics in the detail view.
Also an average rating should be calculated from the three ratings.

<img width="1416" alt="Screenshot 2022-11-25 at 15 38 39" src="https://user-images.githubusercontent.com/19295785/204007727-1023f65b-0707-46e0-9fc9-4d82d6651ab2.png">

There should be a way to order the movies by `Ratings` as the select menu shows in the image below:

<img width="1413" alt="Screenshot 2022-11-25 at 15 39 51" src="https://user-images.githubusercontent.com/19295785/204007611-15e1d6ea-7c9b-405b-be39-b07856f62a72.png">

**The image is just an example layout, feel free to design the layout of the bonus assignment yourself.**

## Tooling

At Etraveli Group, we're developing primary using React and Redux, but you're free to complete this assignment in whichever way you're comfortable with. The only requirement we have is that it should be written in JavaScript or Typescript.

For this assignment, you should create a repository in Git and commit all your changes in it. How you will hand in your code is explained below.

## Handing in the assignment

You can hand in your assignment by creating a repository on GitHub and pushing it there. If you don't have a GitHub account, you can ZIP the repository and send it to us by email.
