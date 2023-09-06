# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
- Desktop Screenshot: (./screenshot/Frontend Mentor Advice generator app - Desktop.png)
- Mobile Screenshot: (./screenshot\Frontend Mentor Advice generator app - Mobile.png)

### Links

- Solution URL: (https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub?share=true)
- Live Site URL: (https://julie-gz.github.io/advice-generator-app/)

## My process

### Built with

- HTML
- CSS
- Flexbox
- Custom Variables
- Vanilla JavaScript

### What I learned
- In this challenge I wanted to try using the srcset and sizes attributes to create a responsive image. Although this may not be the best scenario for using this method, I thought it was simple enough to try and apply it.

```html
        <img src="./images/pattern-divider-mobile.svg" srcset="./images/pattern-divider-desktop.svg 444w" sizes="(min-width: 768px) 100%" alt="divider">
```

- I used Async Await in the JS file to manage the advice generator. This is the first time I've used it in a project and I felt a bit uncomfortable, but I intend to use it more until I am comfortable with it.

### Continued development

- I want to use responsive image methods.on more complex projects in order to fully understand they work, as well as the situations where one method would be more suitable than the other.

### Useful resources
- (https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/): A guide to responsive images.
- (https://web.dev/responsive-images/): A great article by google that explains responsive image methods and when best to use them.

## Author
- Frontend Mentor - [@Julie-Gz](https://www.frontendmentor.io/profile/Julie-Gz)