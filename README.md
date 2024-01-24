## Part-4

Now as final optional exercise, you will learn how to deploy your application on [Render.](https://render.com/)

### Pre-requisites

- A GitHub repository, having the final working code of the application.
- An account on Render. If you aren't registered till now, go ahead and register yourself there.

### Instructions

- After registration, login into your Render account.
- On the dashboard, you will have to connect the [GitHub account](https://github.com/login?integration=render&return_to=%2Fapps%2Frender%2Finstallations%2Fnew) on which the code of application is stored. Login using your GitHub credentials, then you will be given option either to give access to all of your repositories or atleast a single one of them. Make the choice accordingly. If you want to give access to only a single repository, then select that one which is having the code of the application.
- After doing this and clicking on Save, head back to dashboard. Now we are ready to deploy our applicaiton on Render and make it LIVE.
- On dashboard, click on +New button, and then select the [Static Site](https://dashboard.render.com/select-repo?type=static) option.
- Now you will be shown all the repositories, which you have given access to Render. Out of these repositories, select our target repository, having the code of applicaiton, and click on Connect.
- Now you will have to enter the details, like service name, branch, root directory, build command and so on.
- In service name enter the name of your choice, in branch enter the name of your branch on which final code is present.
- In root directory, specify the path where package.json is located in your repository (most likely to be "./", unless you are having a different repository structure or are having code inside any sub-folder in the repository.)
- In build command, enter the command that will be used to build the application. Like in case of npm, it would be -

```
npm install; npm run build
```

- In publish directory, specify "./dist".
- Now in environment variables section, add the name of the environment variable that will be used to communicate with Open Weather API, which in our case would look like -

```
VITE_APP_API_KEY=${YOUR_API_KEY}
```

- After entering all these details, click on Create Static Site. It will trigger the deployment process. It will take some time to build your application, and if you have setup everything correctly, then after some time you will see the message that your service is LIVE, and you will be having the LIVE_URL of the application ! Share it with your friends and show them your work.

## Important Point

- This is a general guide on how to deploy your application on Render, assuming you are using the same code and repository structure that we completed in previous lab. In case you are having your own code and using a different valid env variable name, or having some different repository structure or using some different js runtime, then your configuration will be different from the one that we discussed here.

Just search for it on Google, and you will find the correct way to setup this for any of your own repository.
