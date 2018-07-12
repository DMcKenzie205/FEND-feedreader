# FeedReader Project

## Table of Contents

* [Project Overview](#Project_Overview)
* [Installation](#Installation)
* [Tests Built](#Tests_Built)

## Project Overview

This project is a simple demonstration of testing against the code you write using the [Jasmine] framework (http://jasmine.github.io/).

This is part of the Udacity Front-End NanoDegree and the majority of the code was provided. Changes have been made to the following files as part of this project.

* index.html
* js/app.js
* jasmine/spec/feedreader.js

The original repository can be found at (https://github.com/udacity/frontend-nanodegree-feedreader).


## Installation

Clone the GitHub repository.

`$ git clone https://github.com/DMcKenzie205/fend-project-memory-game.git` 
`$ cd fend-project-memory-game`

Open index.html in your browser.

Jasmine Framework version used is `jasmine-2.1.2`


## Tests Built

The following is a list of the tests that were added to Jasmine to test the functionality of the FeedReader.

###RSS Feeds
1. Ensure that the allFeeds variable has been defined and that it is not empty.

2. Check that each URL in the allFeeds object is defined and that the URL is not empty.

3. Check that each name in the allFeeds object is defined and that the name is not empty.

###The Menu
4. Ensure the menu element is hidden by default.

5. Ensure the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.

###Initial Entries
6. Ensure when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

7. Ensure when a new feed is loaded by the loadFeed function that the content actually changes.

