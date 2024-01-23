## Part-2

Here I have provided the code to verify that our API is working fine or not. Axios has been added as the dependency to make the API call and weather service has also been written which is responsible for making the call.

Your task is just to get the API_KEY by registering for Open Weather Map API and adding it in the .env file VITE_APP_API_KEY.

### Instructions

- Visit [Open Weather Map Registration Page](https://home.openweathermap.org/users/sign_up) and register yourself. You need to be registered to get the API_KEY that will be required for making call to Open Weather Map Service.

- Once registered successfully, [Login](https://home.openweathermap.org/users/sign_up) using your credentials, and visit the [API Keys](https://home.openweathermap.org/api_keys) section. There you will find the API_KEY required.

- Copy your API_KEY and in .env file provided. Your .env file should look like -

```
VITE_APP_API_KEY=${API_KEY}
```

where API_KEY is your key that you copied.

- Once this is done, click on the CHECK_API button. If everything is configured successfully, then you should get SUCCESS_MESSAGE, and also the actual response in console.

## Few important points

- Data like API_KEY is sensitive information, so we never share it with anyone and make use of .env file to store such information, which is never uploaded on Github or wherever your remote repository lies. So you will always find .env file added in .gitignore.

  In this lab for explanation purpose, it has not been added in .gitignore, so that you have access to the .env file and can add API_KEY there and also learn how to use any environment variable in VITE application. You can study more about it from [here.](https://vitejs.dev/guide/env-and-mode)

- For this part the request has been hardcoded because the purpose of this part is to make sure you have got the API_KEY configured and its working properly. In next part we will actually be taking user input and making calls to the Open Weather Map service based on that.

- In .env file, don't make any changes to the name of our environment variable. All environment variables in Vite Application are required to be prefixed with VITE\_ . There you just need to add your API_KEY.

- This part won't have any solution added, because its quite straightforward and requires you to just register and get the API_KEY. In order to pass this lab you need to have correct configuration done, there is only a single test written for it.
