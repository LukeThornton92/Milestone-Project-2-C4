# **Connect 4**

## **Site Overview**

Connect 4 is a classic

Please find the live site via the following URL - https://lukethornton92.github.io/Milestone-Project-2-C4/

<img src="" alt="Proof of Responsiveness">

## Table of contents:

1. [**Site Overview**](#site-overview)
2. [**Planning stage**](#planning-stage)
   - [**_Target Audiences_**](#target-audiences)
   - [**_User Stories_**](#user-stories)
   - [**_Site Aims_**](#site-aims)
   - [**_How Will This Be Achieved_**](#how-will-this-be-achieved)
   - [**_Wireframes_**](#wireframes)
   - [**_Colour Scheme_**](#colour-scheme)
   - [**_Typography_**](#typography)
3. [**Features**](#features)
4. [**Future Enhancements**](#future-enhancements)
5. [**Testing**](#testing)
6. [**Deployment**](#deployment)
7. [**Credits**](#credits)
   - [**_Honourable Mentions_**](#honourable-mentions)
   - [**_General Reference_**](#general-refrence)
   - [**_Content_**](#content)
   - [**_Media_**](#media)

---

## **Planning stage**

### **Target Audiences:**

- Users will be predominantly children.
- Users looking to spend sometime playing a fun, simple game.
- Users looking to challenge a friend.
- Users looking for a fun twist on a classic game.

### **User Stories:**

- As a user, I want to have an entertaining experience.
- As a user, I want to under stand the rules of the game quickly and easily.
- As a user, I want the site to have big and clear buttons for navigation.
- As a user, I want the site to be accessible to all ages and abilities.
- As a user, I want to be able to play the game on all possible devices.

### **Site Aims:**

- To be intuitive to use, especially for a younger audience.
- To be visually appealing, running with a theme such as Space/Ocean/Jungle.
- To have a clear UI, to be easily navigated without any "dead ends".
- To be fun.
- To be a interesting take on an tried and tested game.

### **How Will This Be Achieved:**

- The site will have bold vibrant colours.
- Large eye catching buttons with clear indication of purpose.
- The site will be optimized for mobile play.
- The site will be easy to read.

### **Research:**

### **Wireframes:**

To organize my thoughts and prevent scope creep, I created a wire frame for this project. Below are links to each of the mobile and desktop versions of the site.

I have shown 2 different themes for the mobile desktop versions, please toggle the following dropdowns to view the wireframe images.

#### **Mobile Wireframes:**

   <details><summary>Mobile Home Screen</summary>
   <img src="assets/images/C4-wireframe-Mobile-Home.png" alt="">
   </details>

   <details><summary>Mobile Rules Screen</summary>
   <img src="assets/images/C4-wireframe-Mobile-Rules.png" alt="">
   </details>

   <details><summary>Mobile Game Screen</summary>
   <img src="assets/images/C4-wireframe-Mobile-Game.png" alt="">
   </details>

   <details><summary>Mobile Winner Screen</summary>
   <img src="assets/images/C4-wireframe-Mobile-Endgame.png" alt="">
   </details>

#### **Desktop wireframes:**

   <details><summary>Desktop Home Screen</summary>
   <img src="assets/images/C4-wireframes-Desktop-Home.png" alt="">
   </details>

   <details><summary>Desktop Rules Screen</summary>
   <img src="assets/images/C4-wireframe-Desktop-Rules.png" alt="">
   </details>

   <details><summary>Desktop Game Screen</summary>
   <img src="assets/images/C4-wireframe-Desktop-Game.png" alt="">
   </details>

   <details><summary>Desktop Winner Screen</summary>
   <img src="assets/images/C4-wireframe-Desktop-Endgame.png" alt="">
   </details>

### **Colour Scheme and theme:**

Knowing this site is aimed at children I wanted to focus on a colour scheme that would be lively enough to capture the attention of a younger audience, while also maintaining a nice user experience for all ages. The first thing I wanted to ensure was a visually stimulating and themed background, as my intention was for the theme to be easily customisable to fit a range of potential topics.

My first idea was a ocean theme, but after searching for potential backgrounds online I couldn't find anything that really stuck out, so after review some other potential themes such as forests and beaches I settled on space as it is a personal interest of mine.

After a little hunting and refining my search I found something [perfect](https://www.vecteezy.com/vector-art/1110375-stars-and-planets-in-outer-space), something that would pop with colour against a dark (not black) background and with a drawn aesthetic. From this image I was able to pick out my darker tones but I was still in search of 2 contrasting lighter tones that would complement the game. Connect 4 is classically played with Red tiles and Yellow tiles, so after a little while playing with the varying shades and tones I was able to find 2 that I personally liked and that worked well against the backdrop, completing my colour scheme.

<img src="assets/images/MSP2 Colour pallete.png" alt="Colour palette inspiring site">

### **Typography**

After doing a little research into fonts, I found a useful [article](https://varrojoanna.com/the-easiest-fonts-for-kids-to-read/) talking about children and the fonts they find easiest to read, seeing as this game is aimed at a younger audience I thought it best to ensure that children were the focus when it came to the typography. I chose to use googles 'Andika' after reviewing all the recommendations, I felt this was the best middle ground for young and older players.

- All fonts were sourced from Google fonts, as stated in the credits.

---

## **Features**

Below are some of the features currently within the site.

### **Home Page:**

### **Wallpaper and back-panel:**

### **Hiding pages:**

### **Buttons:**

### **Swap sides:**

### **Rules:**

### **Modal:**

### **The Game:**

### **Winner:**

### **Draw:**

### **Restart:**

### **404:**

---

## **Testing**

### **validator testing:**

#### **CSS:**

After running the site through the CSS validator I got no errors.

<img src="assets/images/MSP2 CSS validation.png" alt="CSS validator proof">

#### **HTML:**

After running the site through the HTML validator I got 5 errors.

<img src="assets/images/MSP2 HTML validation.png" alt="HTML validator initial run proof">

- 2 errors for the 2 home page buttons, the text was sat within a H2 tag. This has now been changed to the text sitting within the button and a new class being made that overrides the generic buttons styling.

- 2 errors for unclosed div's, throughout the build process I had been moving parts around to change how they appear, in this process I had accidentally removed some div's closing tags. This has been resolved and the site was unaffected.

- The final error for the body resolved itself once the above was fixed and retested.

<img src="assets/images/" alt="HTML validator 0 error proof">

#### **Javascript:**

### **LightHouse Testing:**

Using the LightHouse in my Google DevTools I was able to optimise my website for Performance, Accessibility, SEA and best practices.

---

## **Future-Enhancements**

The following is a list of future enhancements that I would like to implement given more time and/or knowledge.

- A change in theme, as shown in my initial wireframes I was interested in the idea of changing the overall theme depending on the users preference. This would include the background image them being selected from a number of natural scenes and the colour of the tiles being selected from a colour wheel from the rules/settings menu.

- I spent a little time trying to implement the tiles being meteors, I was really trying to avoid have a connect 4 board just sat on top of a background, I wanted the individual tiles to be themed as well.

- Given more time and skill I would have liked to modify the board its self so it sat behind a themed image, so it looked like the board was part of the theme. With the current space theme if could have been made of rockets or made to look like a space station.

- If I was looking to release this website to be played between friends I would like to introduce a way of playing with a friend on a different machine, so the 2 players wouldn't need to share a screen, this was something I noticed during my research.

- Animation, I would like to implement 2 forms of animation, one being a drop animation that would simulate a tile piece falling, the other being the tile floating about the board following a curser or finger. I feel this would help add a sense of realism and it is one of the few physical elements to the game, which could feel lost on the digital format.

## **Deployment**

The site was deployed to GitHub pages. The steps to deploy are as follows:

- From this project's repository, navigate to the settings tab

- From the left hand menu, select pages.

- From the source section drop-down menu, select the Main Branch.

- Once the main branch has been selected, the page will refresh and provide a link to the live project.

You can find the live site via the following URL - https://lukethornton92.github.io/Milestone-Project-2-C4/

---

## **Credits**

### **Honorable mentions:**

This project could not have happened without the support of the following people listed in no particular order:

-

### **General reference:**

- The project was influenced by the Code Institutes code along project called Love running. Whilst I have tried to deviate as much as possible there may be some similarities in the code.
- I relied upon W3schools, ChatGPT and stack overflow for general references throughout the project.

### **Content:**

- All content was written by myself

### **Media:**

-
