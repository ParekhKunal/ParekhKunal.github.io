---
title: 'React App to Github Pages'
subtitle: 'Step-by-Step Guide: Deploying Your React App on GitHub Pages'
date: '2024-02-01'
---

"For developers, creating a web application is always fascinating, particularly when entering the world of programming for the first time. After a lot of effort, you construct the application's front end and want to show the world your talent, your creativity, and of course your labour of love. There's a chance that some of the people are already aware with the free hosting website where they may host their application. Github Pages, which can be used to deliver static web pages, may be known to some of you. Here is a link where you may verify that if you don't know. Hosting a Free Static Website with GitHub

## Basic Terminologies

<hr style="width:100px;margin-bottom:25px">
**1. React:** A well-known JavaScript toolkit created by Facebook that is used to generate and manage adaptable user interface components.

**2. Git:** An incredible free and open-source version control solution for managing both little and big projects. It is used to coordinate with other programmers and keep track of source code modifications as software is being developed.

**3. GitHub**: A platform for hosting code and version control. Projects related to web development are worked on and stored there.

**4. Github Pages:** You can use this to transform your GitHub repositories into a classy website to display your projects, portfolio, documentation, or anything else you want to make live. Just keep in mind that you won't need to set up a database or a server.

## Prerequisites

<hr style="width:100px;margin-bottom:25px">
**1.** Download Git and do the standard installation.

**2.** NodeJS and npm should be installed in a suitable version. The command to check the installation and version is available here.

```bash
node --version
```

```bash
npm --version
```

**3.** Install create-react-app in a suitable version. The command to check the installation and version is available here.

```bash
create-react-app --version
```

If it’s not installed then use the command below to install it globally.

```bash
npm install -g create-react-app
```

**4.** A GitHub account.

## Now comes the fun part (Procedure)

**1.** Use the command shown below to build a React application in your system. We are calling this application "react-deploy." You will upload this application to GitHub Pages. In your directory, this procedure will generate a brand-new folder called "react-deploy."

_Note you can give the name of your React as per your choice_

```bash
npx create-react-app react-deploy
```

**2.** After entering your new application, issue the command below to launch it. Your application will be running on a local development server at http://localhost:3000, as you can see.

```bash
#change directory
$ cd react-deploy
#run application in the development environment
$ npm start
```

**3.** Create a new repository on GitHub after ensuring that your application functions flawlessly and error-free on a local server. The name we're giving it is "my-app," which is different from the name you gave your application in the preceding stage. However, you may also pick "react-deploy" as the name of your GitHub repository. You are entirely in charge.

**4.** Install the gh-pages package as a “dev-dependency” of the app.

```bash
#install gh-pages package
npm install gh-pages --save-dev
```

**5.** Add some properties to the app’s package.json file. At the top level, add a homepage property. Take a look at the example given below…

```bash
"homepage": "http://parekhkunal.github.io/react-deploy",
```

Now you need to add two more properties. In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:

```bash
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
 //...
}
```

*Once the above thing is done your file package.json will look something like this… Next, if you are using the Router from react-router-dom then you need to change the Browser router tags to*

```bash
//...
  BrowserRouter basename={process.env.PUBLIC_URL}
//...
```

**6.** Create a local git repository in the app's folder, and then add the GitHub repository as a "remote" source. The gh-pages package will then be able to understand where you want it to deploy your app in step 7. Additionally, it will enable git to understand where to send your source code (specifically, the commits on your master branch) in step 8.

```bash
#create a new git repository
$ git init
#add remote repository
$ git remote add origin https://github.com/ParekhKunal/react-deploy.git
```

**7.** And now for the magic. To publish your code to GitHub pages, use the command below to create a production build of your application.

```bash
#deploy application
$ npm run deploy
```

*I'm done now. If you want to confirm that your React application is published on GitHub pages, simply scroll down in the settings tab of your application in your Github repository. What you will see will look like this: In our case, the app is accessible at: https://parekhkunal.github.io/react-deploy/*

**8.** At this time, if you go through the GitHub repository, you'll see that while the gh-pages branch did exist, the master branch did not. It indicates that rather than the app's source code, the latter included the app's built code. So use the command below to create a default master branch and push your source code there.

```bash
#add all changed file paths to staged changes
$ git add .
```

```bash
#commit all staged changes
$ git commit -m "Create a React app and publish it to GitHub Pages"
```

```bash
#pushed local repository to remote repository on GitHub
$ git push origin master
```

*The GitHub repository is once more explored after this final step. You'll see that the app's source code was now located in a branch called master. In your GitHub repository, you will see something similar to this.*

*Providing Feedback and Seeking Motivation for Future*


