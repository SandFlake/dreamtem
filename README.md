# Group Project - Recipe Genie 

Don't know what to eat? Recipe Genie can help you decide!

This tool can be used to help you decide what food you can make with two ingredients you have laying around at home. 
You can save your favourite recipes for later use, and delete them when you've become bored of them.


## Prerequisites: 

### Frontend:
 * React
 * Local storage

### API:

In order to fetch data from the Edamam API, you need to make call to the following URL:

* 'https://api.edamam.com/search?q=${ingredient1},${ingredient2}&app_id=<YOUR_APP_ID_HERE>&app_key=<YOUR_KEY_HERE>&from=0&to=30';

A key is provided in the project, but if you need to make more than 50 requests calls,
you will need to request a key from [here](https://www.edamam.com/) and put it in the above URL in the <YOUR_KEY_HERE> space.



## Installing

Clone the repo into a directory of your choice. 

After cloning this repo, navigate into your directory in the terminal and run the following command in folder "dreamtem": 

```
npm install
```

Then install local storage to the project by running the following command: 

```
npm install local-storage --save
```

Then run the project with this command:

```
npm start 
```



