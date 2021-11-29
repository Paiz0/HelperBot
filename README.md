# HelperBot
 An entry level Discord bot that is highly customizable and allows for custom made commands.

Description:
This bot allows the user to customize and custom make any commands that the specific user wishes for. 
There are some basic commands that I found amusing and useful in my Discord servers. 


Contributions:
To contribute to this project, please refer to the issues page and request to take on an issue. Fork the project and then commit any changes you've made
to the fork, describe what you've done as a post in the issue's thread, then send a pull request. I will review your PR and if it's all good to go I'll commit it to the main branch. 


Setup:(these instruction are made based on a Windows machine)
--To start this project, you need to download node.js and you'll need a discord account with either the program or the web client open. 
  https://nodejs.org/en/
  https://discord.com/

--Then you'll need to go to: https://discord.com/developers/applications and click on the "Applications" button on the top right. 
![Screenshot 2021-11-28 225303](https://user-images.githubusercontent.com/79292635/143821640-adbd3ec1-9d4a-4bdd-bf7c-3ad4091df393.png)

--Then you'll need to go to the "bot" section of the page and enable your bot.

--Finally go to the "OAuth2" tab on that same page and create an invite link for your bot.
  ![Screenshot 2021-11-28 224845](https://user-images.githubusercontent.com/79292635/143821839-b337ff7d-0b04-446c-971b-609ee842f193.png)
     select the options in the screenshot, and then you'll have a link genereate at the bottom, this link will allow the bot to join your server.

--Afterwards, on the bot page of developer page, locate the bot's token and copy it. 
![image](https://user-images.githubusercontent.com/79292635/143822067-73161e4f-85bd-4db8-8a91-9100b627f364.png)

--paste that token in the clinet.login('INSERT TOKEN HERE') at the bottom of "main.js". 
![Screenshot 2021-11-28 230048](https://user-images.githubusercontent.com/79292635/143822379-c4e9186f-b7d8-4bf3-b651-4d33ff14d650.png)

--Lastly, open a command console in the root directory of the project files and launch the bot by typing the command "node ." in the console. 
  The bot will greet you with a "HelperBot is ready for action!" in the console to let you know it's running and ready to go. 
![image](https://user-images.githubusercontent.com/79292635/143823233-7f8d1984-208a-49e2-94b3-eb46fec0afb0.png)

Usage:
You can start using the bot by issuing the "~commands" command in your Discord server to view a list of the currently available commands.
