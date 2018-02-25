autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# Command Line Interface

---


### Lesson Objectives:
- Differentiate between a GRAPHICAL USER INTERFACE (GUI) and COMMAND LINE INTERFACE (CLI)
- Explain the 3 reasons the CLI is better for developers than the GUI
- Make changes from the CLI
- Name the parts of the command line prompt
- Describe ABSOLUTE vs. RELATIVE path
- Define WORKING DIRECTORY


---


### Context: why do I need to know about the COMMAND LINE
All of you learned about tools like Command Line during the prework, but we're going to review these concepts because they are crucial to developers.

These are skills we absolutely expect you to master during the class. You will use them to turn in homework on a daily basis and you will use them daily at your jobs.


---


### Intro - What is the Command line?
One of the most basic tools in every day developer life is the COMMAND LINE. The CLI is the way developers interface with their computers. What do I mean by that? I mean it's the way you make your computer do simple tasks, such as creating or deleting a file, and more complex tasks, like compiling code. The concept is simple: you type a command into the COMMAND LINE and the computer executes it.


---


## GUI
- Open a Finder window and move around the file system, create folder + file on desktop
- This Finder window is what is meant by GUI! It's as simple as that.
- But why is it called a GUI, why does it have a name at all?!
- Before 1960s the GUI didn't exist, there was only the Terminal. The GUI was built as an easier way for non-techies to control their computer.


---


#### File structure

The file structure on your computer can be drawn in a tree-like shape, like this:

![inline](https://faculty1.coloradocollege.edu/~sburns/UnixTutorial/tree.gif)


---


### Let's draw!

*Let's draw on the board the structure of your computer down to a file on your Desktop.*


If you have a mac, your tree will look something like this:

- Root (/)
  - Applications
  - Network
  - System
  - Users
    - Guest
    - LizaRamo (home, ~)
      - Desktop
      - Downloads
      - Music
      - Pics
      - etc.


---


### Important shortcuts: root & home  

- The **root** is denoted by a forward slash: `/`
- And **home** is denoted by a tilde: `~`


---


## GUI vs. COMMAND LINE
- Remember when we created a new folder using the GUI? Now let's do that using the CLI
- Use Spotlight to open TERMINAL
- Navigate to the same file as in GUI side by side
- We can use the CLI to get to the same file.


---


### The GUI is better for devs

But why should we learn to use the COMMAND LINE when we could just use the GUI?
1. The CLI is faster
2. It's the professional way to do things as a developer
3. There are some things you can only do from the CLI


---


### Parts of the COMMAND LINE prompt:
```bash

$ ~/Desktop/lessons lizaramo

```

Structure:
- Working directory | Name of your computer  | $Command
- working directory?


---


### Working directory
- Simplest definition: where you are in the file system
- Memorize this: `pwd` ---> this command tells you where you are within the file system
- `~/Desktop/kitten-pics`


---


### Navigating: relative and absolute paths

Let's go back to the file structure drawing.

Let's say you're in the `desktop` in the CLI. How do we get from here to the directory `puppy-pics`?

We need to figure out the directory's `path`. Is `puppy-pics` on the desktop, or buried within 3 other directories?

Here is the **relative** path to the directory. This path depends on where you are **right now:**

```bash
./fun/animals/puppies/puppy-pics
```

---

But this is useless if you aren't always in that location.

Instead, we can use the **absolute path**, which begins with one of the shortcuts we learned earlier: root `/` or home `~`.

From the **root** directory, our path is:

```bash
$ /Users/LizaRamo/Desktop/fun/animals/puppies/puppy-pics
```

From our **home** directory, our path is:

```bash
$ ~/Desktop/fun/animals/puppies/puppy-pics
```


---


### What do you think the benefit of navigating from the root would be?

- Check to make sure no confusion over how to navigate to a specific location from the root.


---


### What's in a name

*Let's pause for a moment to talk about terms.*

- Don't get confused by the terminology: CLI, command line, Terminal, shell, console, etc.
- For now, use all of these interchangeably  
- **CLI:** Command Line Interface
- **Command line:** A generic term for CLI
- **Terminal:** name of Apple's CLI app


---


### I do: common commands
- `pwd`
- `ls`
- `cd`
- `.`
- `..`
- `mkdir`
- `touch`
- `mv` `mv [old file path] [destination file path]`
- `cp` `cp -r [source] [destination]` ---> difference between mv & cp
- `rm`


---

## Exercises

- Example: Create a directory on your desktop called 'my-folder'
  - `mkdir ~/Desktop/my-folder`
- Navigate into that directory
- Display your current location
- Create an **HTML** file in your directory called `my-file`
- Create a **markdown** file called `my-second-file`
- List all the files in your directory
- Move `my-file.html` to your desktop
- Rename this file to `hello.html`
- Copy `my-second-file.md` to the desktop
- Delete `my-file.html`

---

### Further reading:

- [Learn Command Line the Hard Way](http://cli.learncodethehardway.org/book/)
- [Command Line Tutorial](http://www.davidbaumgold.com/tutorials/command-line/)
