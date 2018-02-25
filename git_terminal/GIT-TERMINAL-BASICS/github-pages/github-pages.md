autoscale: true
footer: © New York Code + Design Academy 2016
slidenumbers: true

# [fit] GitHub Pages

---

# What is GitHub Pages

GitHub pages is a free service that will allow you to host static websites from a github repository

A guide and more info can be found here:
[https://pages.github.com/](https://pages.github.com/)

---

# Step 1 - Creating a repo

The first thing you need is a repository

Navigate to GitHub and smack that plus button!

You're going to want to name that repo using this template:
username.github.io

Make sure you use your *actual* username i.e. (zachfeldman.github.io)

---

# Step 2 - Cloning the repo

Let's clone that repo we just made on to our local machine

```bash
$ git clone https://github.com/username/username.github.io
```

---

# Step 3 - Add some content

Now let's cd into it and add an index file

```bash
$ cd username.github.io
```

You can create a file AND add text into it at the same time using the echo command

```bash
$ echo "Hello World" > index.html
```

---

# Step 4 - Commit and push

Now let's get our new index.html file committed and pushed onto our github repo!

```bash
$ git add -A
$ git commit -m "Initial commit"
$ git push origin master
```

---

# Step 5 - Rejoice

Navigate to 'username.github.io' - where username is your *actual* username

:)
