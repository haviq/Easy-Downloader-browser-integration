
<a href="https://addons.mozilla.org/en-US/firefox/addon/ab-download-manager/"><img src="https://img.shields.io/amo/v/ab-download-manager?label=Firefox&logo=firefoxbrowser" alt="Firefox Add-ons Version"></a>
<a href="https://chromewebstore.google.com/detail/bbobopahenonfdgjgaleledndnnfhooj"> <img src="https://img.shields.io/chrome-web-store/v/bbobopahenonfdgjgaleledndnnfhooj?label=Chrome&logo=googlechrome" alt="Chrome Web Store Version"></a>

# AB Download Manager Browser Integration Repository

> If you are looking for the main app repository, use [this link](https://github.com/amir1376/ab-download-manager).
## Usage

In order to use this extension you need to [install](https://abdownloadmanager.com/#download) AB Download Manager.

### This extension does the following

- Adds a `Download With AB DM` in browser's context menu
- Automatically captures download links when the user wants to download the file from their browser
- Show a `Download Selected` popup when the user selects some section of the page that contains links

## How To Build
In order to build this extension locally:
> I am developing this on `Windows` using `npm`, but it should have the same result on other build environments.
```bash
# install dependencies
npm i

# for firefox
npm run pack:firefox
# for chrome
npm run pack:chrome
```

The output zip file containing the extension will be placed at `./dist/<browser_name>.zip`.

## Repositories And Source Code

There are multiple repositories related to the **AB Download Manager** project:

| Repository                                                                                                 | Description                                                                   |
|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| [Main Application](https://github.com/amir1376/ab-download-manager)                                        | Contains the  **Application** that runs on your  **device**                   |
| [Browser Integration](https://github.com/amir1376/ab-download-manager-browser-integration)  (You are here) | Contains the **Browser Extension** to be installed on your  **browser**       |
| [Website](https://github.com/amir1376/ab-download-manager-website)                                         | Contains the **AB Download Manager** [website](https://abdownloadmanager.com) |

I spent a lot of time to create this project.

If you like my work, Please consider giving it a ⭐.
Thanks ❤️
