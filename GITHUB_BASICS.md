# GitHub Basics Guide

## What Is GitHub?

GitHub is a website that stores your code online using a system called **Git**.
Think of it like Google Drive, but specifically designed for code.

---

## How Is a Repository Organized?

A **repository** (or "repo") is basically a **project folder**. Yes — you get
the **whole folder**, including all subfolders and files inside it.

```
My-Repository/            <-- This is your repo (the whole folder)
├── src/                  <-- A subfolder
│   ├── app.js
│   └── helpers.js
├── images/
│   └── logo.png
├── README.md             <-- Describes your project
└── package.json
```

**Key point:** A repository = one project folder with everything in it. You
control all the files and folders inside.

---

## Can You Create a New Repository?

**Yes!** Anyone with a GitHub account can create unlimited repositories.

### How to create one:
1. Go to [github.com](https://github.com)
2. Click the **"+"** button (top-right corner)
3. Click **"New repository"**
4. Give it a name
5. Choose **Public** (anyone can see) or **Private** (only you can see)
6. Click **"Create repository"**

That's it — you now have a project folder on GitHub.

---

## Core Concepts

### Commits
A **commit** is a saved snapshot of your changes. Think of it like pressing
"Save" in a video game — you can always go back to any previous save.

```
Commit 1: "Added homepage"
Commit 2: "Fixed typo in title"
Commit 3: "Added contact page"
```

### Branches
A **branch** is a separate copy of your code where you can experiment without
affecting the original. The default branch is usually called `main`.

```
main         ●----●----●
                   \
feature-branch      ●----●   <-- experiment here safely
```

When your experiment works, you **merge** it back into `main`.

### Clone vs Fork
- **Clone** = Download a copy of a repo to your computer
- **Fork** = Make your own copy of someone else's repo on GitHub

### Pull Requests
A **pull request** (PR) is how you propose changes. You're saying: "Hey, I made
some changes on my branch — please review and merge them into main."

---

## Common Workflow

1. **Clone** the repo to your computer
2. **Create a branch** for your changes
3. **Edit** files (you have full access to the whole folder)
4. **Commit** your changes (save a snapshot)
5. **Push** your branch to GitHub
6. **Open a Pull Request** to merge into main

---

## Quick Glossary

| Term        | Meaning                                          |
|-------------|--------------------------------------------------|
| Repo        | Your project folder on GitHub                    |
| Commit      | A saved snapshot of changes                      |
| Branch      | A parallel version of your code                  |
| Clone       | Download a repo to your computer                 |
| Fork        | Copy someone else's repo to your account         |
| Push        | Upload your local changes to GitHub              |
| Pull        | Download the latest changes from GitHub          |
| Pull Request| A proposal to merge changes into another branch  |
| Main        | The default/primary branch                       |
| Merge       | Combine one branch's changes into another        |
