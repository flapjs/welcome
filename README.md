# Flap.js Welcome Page

> A browser-based welcome page solution befitting an awesome web app.

---

## Purpose
A welcome page for [Flap.js](https://github.com/flapjs/FLAPJS-WebApp). Plain and simple.

## Table of Contents
* [Getting Started](#getting-started)
* [Setting Up for Developers](#setting-up-for-developers)
* [Running the Program](#running-the-program)

---

## Getting Started
Just try it out! (There's not much else to it.)

---

## Setting Up for Developers
### Installing [Node.js](https://nodejs.org/en/)
This is required to test the program. Just get the current version and install it.

### Installing [Git](https://git-scm.com/)
This is required to edit the program remotely. Just get the current version and install it. The repository is hosted at [GitHub](https://github.com/flapjs/welcome).

### Installing [Atom.io](https://atom.io/)
This is not required, but recommended (by me). Just get the current version and install it.

Otherwise, you just need a text editor to write JavaScript, HTML, and CSS.

**Note:** Be sure to get the compatible versions for your operating system.

#### Recommended Atom Packages
* [Teletype](https://teletype.atom.io/)
  * A pair programming package for collaborative programming in real-time.
* [PlatformIO IDE Terminal](https://atom.io/packages/platformio-ide-terminal)
  * An integrated terminal for the `Atom.io` editor. Allows you easy access to run commands.

### Getting the remote repository
Open a command line or terminal and enter a directory to where to copy the project repository. This can be anywhere in your local file system (like your home directory). For example:

```
cd ~/
```

Then, clone the [repo](https://github.com/flapjs/welcome.git) to the directory.

```
git clone https://github.com/flapjs/welcome.git
```

Navigate into the directory of the repository.

```
cd welcome
```

To ensure and verify the state of the repository enter the following command:

```
git status
```

### Installing dependencies
Open a command line or terminal and enter into the project directory. This should be where you've copied the remote repository. Following the previous example:

```
cd ~/welcome
```

If you want to inspect the contents of this directory, it should contain the project files, such as `package.json`.

Then run the following command:

```
npm install
```

This should automatically start installing the dependencies (as listed in `package.json`). After it finishes, it should create a directory called `node_modules`, which contains all required dependencies.

**Note:** The `node_modules` directory sometimes contains files unique to each platform so this directory SHOULD NOT be committed to the repository.

**Note:** If a `package-lock.json` is created, it should be committed to the repo. It should not be ignored.

After that, the project is ready to run. _Happy coding!_

---

## Running the Program
After saving any changes to a file, open a command line or terminal and enter into the project directory.

**Note:** If using the recommended `Atom.io` package, the in-editor terminal is automatically opened at the project directory. (No need to `cd` every time!)

### Production Build
To "compile" the scripts for public distribution:

```
npm run build
```

**Note:** This will bundle all the resources and assets required into `dist`. It will also "uglify" the code to reduce size and apply other optimizations.

Then, open `index.html` in your web browser. Either by just opening the file itself or running the command:

```
open index.html
```

### Development Build
Another way to quickly run, or test, the program:

```
npm start
```

This will run all appropriate commands to bundle and build the program, then will run it in your default web browser. It is also hot loaded and in development mode, so changes will be reflected on save and debug messages are more human-readable.

**Note:** Running this way will start a local server on the machine at default port, or what is defined in `webpack.config.js`. Therefore, only one instance of the server can be open at one time (but as many clients as you want).
