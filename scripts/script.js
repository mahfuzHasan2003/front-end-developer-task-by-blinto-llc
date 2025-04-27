// All user reviews are stored in this array.
const users = [
   {
      name: "X_AE_A-13",
      designation: "Product Designer, slothUI",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur ad-zzz-ing elit. Proin vel urna at metus tempor mattis, or not, whatever.",
      profile_pic: "https://i.pinimg.com/736x/b8/82/83/b882836fa749f501aefa935d19e19977.jpg"
   },
   {
      name: "Azunyan U. Wu",
      designation: "CEO, nextlife.ai",
      rating: 3.5,
      review: "Posuere urna nec tincidunt praesent semper feugiat nibh sed. Velit dignissim sodales ut eu.",
      profile_pic: "https://i.pinimg.com/736x/6a/93/ca/6a93ca4205e6ac88c2f5b0dde45f9526.jpg"
   },
   {
      name: "Mechatronics Yi",
      designation: "CTO, fin4win.ai",
      rating: 4,
      review: "Sit amet est placerat in. Blandit cursus risus at ultrices mi tempus imperdiet. Volutpat commodo sed egestas egestas fringilla phasellus. Tincidunt eget nullam non nisi.",
      profile_pic: "https://i.pinimg.com/736x/f1/e2/24/f1e2244a6085dc06f93ad749d8fc1b22.jpg"
   },
   {
      name: "Oarack Babama",
      designation: "Former President of US",
      rating: 5,
      review: "Nisi porta lorem mollis aliquam ut porttitor leo. Sed odio morbi quis commodo. Arcu non odio euismod lacinia at quis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae.",
      profile_pic: "https://i.pinimg.com/736x/8d/c3/65/8dc36536235b58372cc588d75027bcff.jpg"
   },
   {
      name: "Saylor Twift",
      designation: "Famous Singer",
      rating: 4.5,
      review: "Accumsan tortor posuere ac ut consequat. Quis varius quam quisque id diam vel. Commodo odio aenean sed adipiscing diam donec adipiscing. Vel pharetra vel turpis nunc eget.",
      profile_pic: "https://i.pinimg.com/736x/0d/00/fa/0d00faf7e0a04fe724ecd886df774e4c.jpg"
   },
   {
      name: "Asuna Yuuki",
      designation: "Virtual Swordsman",
      rating: 3.5,
      review: "Venenatis cras sed felis eget velit aliquet. Velit scelerisque in dictum non consectetur. Felis eget velit aliquet sagittis. Ultricies integer quis auctor elit sed vulputate mi.",
      profile_pic: "https://i.pinimg.com/736x/1a/b0/57/1ab057650845289c60a9173d24b0857f.jpg"
   },
   {
      name: "Boe Jiden",
      designation: "Former President Of Canada",
      rating: 2.5,
      review: "Sagittis eu volutpat odio facilisis mauris sit amet massa. Urna et pharetra pharetra massa.",
      profile_pic: "https://i.pinimg.com/736x/e2/f6/eb/e2f6eb4121dfed995f225bd3ee356504.jpg"
   },
   {
      name: "Vermillion D. Gray",
      designation: "CEO, hacklife.ai",
      rating: 5,
      review: "Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Nec nam aliquam sem et tortor consequat id porta nibh. Viverra suspendisse. Lacus sed viverra tellus in hac habitasse platea dictumst. Elit at imperdiet dui accumsan.",
      profile_pic: "https://i.pinimg.com/736x/8b/bc/31/8bbc3169e91d25fdd43f9b31306917ee.jpg"
   },
   {
      name: "Zuckman Wu",
      designation: "CEO, tech4life.ai",
      rating: 4,
      review: "Viverra accumsan in nisl nisi scelerisque eu. Vitae congue eu consequat ac felis donec.",
      profile_pic: "https://i.pinimg.com/736x/19/1f/8c/191f8ca0779f3ae6fd5cc40f117f3dea.jpg"
   }
];

/* ------------------------- Testimonial Section ------------------------- */
// Adding reviews to the page dynamically
const reviewWrapper = document.getElementById("reviews-wrapper");
users.forEach((user) => {
   const reviewContainer = `
   <div class="review-container">
      <span class="user-ratings">
      ${"<i class='fa-solid fa-star'></i>".repeat(Math.floor(user.rating)) + "<i class='fa-regular fa-star-half-stroke'></i>".repeat(Math.ceil(user.rating % 1)) + "<i class='fa-regular fa-star'></i>".repeat(5 - Math.ceil(user.rating))}
      </span>
      <p class="review">${user.review}</p>
      <div class="profile middle">
         <img src=${user.profile_pic} alt=${user.name}>
         <div>
            <h4>${user.name}</h4>
            <p>${user.designation}</p>
         </div>
      </div>
   </div>`;
   reviewWrapper.innerHTML += reviewContainer;
});



/* ------------------------- NAV BAR TOGGLE ------------------------- */
const navBar = document.getElementById("mobile-nav-container");
const navBarToggle = document.getElementById("hamburger");
const navBarClose = document.getElementById("nav-close");
const navElementsOnMobile = document.querySelectorAll(".links-and-btns a, .links-and-btns button");

const removeActive = () => {
   navBar.classList.remove("active");
   document.documentElement.removeAttribute('data-lock-scroll');
}

// adding event listener to nav bar toggle button
navBarToggle.addEventListener("click", () => {
   navBar.classList.add("active");
   document.documentElement.setAttribute('data-lock-scroll', 'true');
});

// removing nav bar on clicking nav links or close button
navElementsOnMobile.forEach((element) => {
   element.addEventListener("click", () => removeActive());
});
navBarClose.addEventListener("click", () => removeActive());