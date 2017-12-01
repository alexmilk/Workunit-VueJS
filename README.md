# Kaltura Debugging station based on VueJS.

The MW debugging instance consolidated the right tools for the job to allow support engineers debug, investigate and test various player related issues and tasks, the instance contains links to 3rd party tools online, as well as a built in VPAAS search engine and the main testing application that binds itself to the embedded player. Engineers can modify the embed code at runtime, add flashvars, plugins and other scripts to manipulate the player behavior during the investigation.

## Getting Started

### Cloning the instance
First, clone the instance to your local apache or XAMP documents folder and make sure you have the mwEmbed project cloned to your server as well - 

```
git clone https://github.com/alexmilk/mw-Debugger-Unit.git
git clone https://github.com/kaltura/mwEmbed.git
```

### Using the instance

Once you load the instance, a jQuery modal will request the initial embed params, make sure to supply the partner id, player id and the entry id to complete the initial embed process.

Explore the different functions on the instance to get yourself familiar with its capabilities, note that the functionality is pretty straight forward and does not require any high technical knowledge before using it.

The instance is using the locally cloned mwEmbed as the main player library, this configuration can be changed using the 'Change embed code' button, simply select the CDN option to switch over to an 'online' version of the player.

## Compatibility

The instance is compatible on most browser versions and types, please make sure the instance is running on a local server and not from the desktop and etc.

## License

This project is licensed under the MIT License. http://www.opensource.org/licenses/mit-license.php