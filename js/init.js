const myFullpage = new fullpage("#fullpage", {
  //options here
  licenseKey: "A_ONE",
  autoScrolling: true,
  scrollHorizontally: true,
  anchors: [
    "intro",
    "east_course",
    "south_course",
    "west_course",
    "family_site",
  ],
  onLeave: function (origin, destination, direction) {
    const header = document.querySelector("#header");
    const beforeAnchor = origin.anchor;
    const nowAnchor = destination.anchor;
    let beforeText;

    if (nowAnchor === "family_site") {
      header.classList.add("white_bg");
      beforeText = document.querySelector(`.${beforeAnchor} .animation_txt`);
      beforeText.classList.remove("active_now");
    } else {
      header.classList.remove("white_bg");
      beforeText = document.querySelector(`.${beforeAnchor} .animation_txt`);
      if (beforeText) {
        beforeText.classList.remove("active_now");
      }
      const activeText = document.querySelector(`.${nowAnchor} .animation_txt`);
      activeText.classList.add("active_now");
    }
  },
});

const aniTextInit = () => {
  const nowAnchor = myFullpage.getActiveSection().anchor;
  if (nowAnchor !== "family_site") {
    const activeText = document.querySelector(`.${nowAnchor} .animation_txt`);
    activeText.classList.add("active_now");
  }
};
const quickMenuInit = () => {
  const slideBtn = document.querySelector("#quick_menu .slide_btn");
  const quickMenu = document.querySelector("#quick_menu");
  const menu = document.querySelector("#quick_menu .menu");

  slideBtn.addEventListener("click", () => {
    slideBtn.classList.toggle("clicked");
    quickMenu.classList.toggle("clicked");
    menu.classList.toggle("clicked");
  });
};
const calendarInit = () => {
  flatpickr("#datepicker", {
    inline: true,
    locale: "ko",
  });
};
const popupInit = () => {
  const reservBtn = document.querySelector(
    "#quick_menu .menu > ul .reserv_btn button"
  );
  const closeBtn = document.querySelector("#pop_up .close_btn");
  const popup = document.querySelector("#pop_up");

  reservBtn.addEventListener("click", () => {
    popup.classList.add("clicked");
  });
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("clicked");
  });
};

const init = () => {
  aniTextInit();
  quickMenuInit();
  calendarInit();
  popupInit();
};

init();
