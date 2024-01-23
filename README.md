## Part-1

Here I have provided you the starting code for our Weather Application Project.

It has been created [Vite.](https://vitejs.dev/guide/) You can read the docs if you are not sure how to setup a React project with Vite.

In this lab, your task is to configure Tailwind CSS in the existing project.

If you check out the [Official Documentation](https://tailwindcss.com/docs/guides/vite) of Tailwind CSS, for how to configure it in a Vite project, there you will find a bunch of instructions, and those are what we are gonna follow.

### Instructions

- Since we already are having an existing Vite project, so we will skip step 1 of creating a vite project and will be performing step 2 directly. In the terminal below, while in root directory only, execute the following commands -

```

npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```

These commands will add tailwind dependencies as a dev dependency in our project, and add two files - tailwind.config.js and postcss.config.js.

- Once you have successfully executed these commands, then in the tailwind.config.js file, copy and paste the following code, and save it -

```

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

If you notice, here we are just changing the **content** section of our tailwind.config.js file, and in that array **passing the path values where our tailwind styling should be applied.**

- In the index.css file, remove the existing code and add the following code and save -

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- With this now we are ready to start using Tailwind CSS in our project. To check out that tailwind has been properly configured in our project, go to App.jsx file, there you will find a single div with id **app-container**. On that div apply the following classes -

```

className="max-w-7xl mx-auto h-screen grid place-content-center bg-gray-200"

```

- This will place the text in the center of screen, give the height of 100vh and apply background color as light-gray. Read about rest of the classes yourself and understand what are they doing.

## Important NOTE, Read carefully

Initially when the lab is started, the server won't be running. Its intentional and requires you to complete all the steps first. In case you try to run tests before starting the server, the 4th test will always fail because it requires server to be running on default port (1337). So optimal way of completing this lab is to perform Steps 1 till 3, and verify they are working. Then add the required classes on div#app-container and then start the server by executing - 

```
npm run dev
```

### About Tailwind CSS

Instead of targetting the elements with meaningful classes / ids and then applying styling to them, tailwind allows us to apply the styles directly on the elements, which saves a lot of time switching to and fro between css and html/js files, and thereby enhancing the productivity and overall developer experience.

Hence tailwind CSS is a way to quickly and efficiently add styling to our applications, and is not difficult to learn if your fundamentals of CSS are clear. (Having intuitive classNames gives us an idea what styling would be applied).
