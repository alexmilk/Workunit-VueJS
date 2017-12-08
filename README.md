# Kaltura Debugging station based on VueJS.

The MW debugging instance consolidated the right tools for the job to allow support engineers debug, investigate and test various player related issues and tasks, the instance contains links to 3rd party tools online, as well as a built in VPAAS search engine and the main testing application that binds itself to the embedded player. Engineers can modify the embed code at runtime, add flashvars, plugins and other scripts to manipulate the player behavior during the investigation.

## Getting Started

### Cloning the instance
First, clone the instance to your local apache or XAMP documents folder and make sure you have the mwEmbed project cloned to your server as well - 

```
git clone https://github.com/alexmilk/Workunit-VueJS.git
git clone https://github.com/kaltura/mwEmbed.git
```

### Using the instance

Once you load the instance, a jQuery modal will request the initial embed params, make sure to supply the partner id, player id and the entry id to complete the initial embed process. The initial embed params logic will not let you create an incorrectly inputted embed code. Note that the submit button will become enabled once the embed params are valid.

Explore the different functions on the instance to get yourself familiar with its capabilities, note that the functionality is pretty straight forward and does not require any high technical knowledge before using it.

The instance is using the locally cloned mwEmbed as the main player library, in case you are running the instance from an online endpoint, the embed type will change to accommodate the protocol which the instance is running on. For example - on HTTPS the modal will only enable secure embeds.

## Compatibility

The instance is compatible on most browser versions and types, please make sure you are not disabling javascript on your browser.

## License

This project is licensed under the MIT License. http://www.opensource.org/licenses/mit-license.php

###### Copyright information

The project was designed and created by Alex Milkis 2017, please use the instance for the purpose it was made for and follow the instructions to make sure it is running optimally.