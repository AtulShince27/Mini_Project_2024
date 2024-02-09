# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Steps to Run the Project on your device locally 

- First clone this repository

# 1. Download Vite on your device (if you don't have it already)

- Download Vite gloabally preferably. Open your terminal (Windows Command Prompt) and type the following command:
  ```shell
  # With NPM:
   npm install vite -g
  ```

# 2. Download all the dependencies 

- Download the dependencies for the Client

  - Change into client directory: 
    cd mini-project-client
  - Download:
    ```shell
     # With NPM:
     npm install
     # With Yarn:
     yarn
     ```

- Download the dependencies for the Server
  - Change into client directory:
    cd ../mini-project-server
  - Download: 
     ```shell
     # With NPM:
     npm install
     # With Yarn:
     yarn
     ```

# 3. Run the Client 

 - Change into client directory:
      cd mini-project-client
 - Run the client:
> ```shell
> # With NPM:
> npm run dev
> # With Yarn:
> yarn run dev
> ```

## Your Guide to Contributing to this project:

# 1. Cloning the Github Project :

 - Clone the project using the following command:
> ```shell
> git clone https://github.com/AtulShince27/Mini_Project_2024/
> ```

# 2. After making changes to the project , Creating a New Branch:

 - Create a new branch that stages and commits all your changes using the following command:

> ```shell
> git checkout -B "branchName"
> ```
 - Once the new branch is created, you will automatically be present in the new branch. To view and change your current branch use the following command:

> ```shell
> # Viewing current branch:
> git branch
> # Changing to another branch:
> git checkout <branchName>
> ```
 - On running the "git branch" command your current branch highlighted with a star in the terminal.

# 3. Staging and Commiting Changes: 

- Here are the commands you should use to add changes to the staging area and to make commits:

> ```shell
> # Staging Changes:
> git add <fileName>
> # Staging All Changes Made:
> git add .
> # Commiting changes:
> git commit -m "Your commit message."
> ```

# 4. Pushing changes to the origin branch: 

- Use this command once you've commited all the necessary changes:

> ```shell
> # Pushing Commits:
> git push origin <branchName>
> ```

# 5. Create a Pull Request for your branch on the Github page:

- Create a pull request and add a reviewer who can review all the changes and merge the pull request with the origin/master branch of the project.

## Font Family and Styling Guide: 

# Login and SignIn Page:
> ```shell
> # Font Family
> font-family: 'IBM Plex Mono', monospace;
> # Heading
> font-size : 32px;
> font-weight: semibold
> # paragraph and input elements
> font-size : 16px;
> font-weight: regular;
> # Input when active:
> border-color: #55E5B4;
> # Input :
> border-color : #8E8E93
> # Button
> background-color: #60BB58;
> # Wrong Input and Forgot Password:
>  # Forgot password
>   color : #FF4448;
>  # Input
>   color : #FF4448;
> ```


# Home and Groups Page:
> ```shell
> # Font Family
> font-family: 'IBM Plex Mono', monospace;
> # Heading
> font-size : 48px;
> font-weight: bold
> # paragraph elements 
> font-size : 16px;
> font-weight: regular;
> # Document Colors:
> paragraph : #000000, #6DECB5
> Heading : #000000
> background colors: #FFFFFF, #276261, #1D3D3F
> ```
