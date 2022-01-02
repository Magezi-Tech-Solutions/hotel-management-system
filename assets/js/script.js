document.addEventListener('alpine:init', () => {
  Alpine.data('sidebar', () => ({
    selected: null,
    toggle(value) {
      if (value !== this.selected) {
        this.selected = value
      } else {
        this.selected = null
      }
    },
    init() {
      if (document.querySelector('.active') !== null) {
        const active = document.querySelector('.active').dataset.sidebarParent
        if (active !== undefined) {
          this.selected = active
        }
      }
    }
  }))
})

function toggleTooltip(event, placement, popoverID) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  Popper.createPopper(element, document.getElementById(popoverID), {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],

    placement: placement,
  });
  document.getElementById(popoverID).classList.toggle("hidden");
}

// //   popovers
function openPopover(event, placement, popoverID) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  Popper.createPopper(element, document.getElementById(popoverID), {
    placement: placement
  });
  document.getElementById(popoverID).classList.toggle("hidden");
}

//   Dropdown
function openDropdown(event, dropdownID) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  var popper = Popper.createPopper(element, document.getElementById(dropdownID), {
    placement: 'bottom-start'
  });
  document.getElementById(dropdownID).classList.toggle("hidden");
  document.getElementById(dropdownID).classList.toggle("block");
}





// tabpane Nav
function changeAtiveTab(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}

function changeAtivepillTab(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}

// preview and code
function changetabpane(event, wrapperID, color, tabID) {
  let tabsWrapper = document.getElementById(wrapperID);
  let tabsAnchors = tabsWrapper.querySelectorAll("[data-tab-toggle]");
  let tabsContent = tabsWrapper.querySelectorAll("[data-tab-content]");

  for (let i = 0; i < tabsAnchors.length; i++) {
    if (tabsAnchors[i].getAttribute("data-tab-toggle") === tabID) {
      tabsAnchors[i].classList.remove("text-" + color + "-500");
      tabsAnchors[i].classList.remove("bg-white");
      tabsAnchors[i].classList.add("text-white");
      tabsAnchors[i].classList.add("bg-" + color + "-500");
      tabsContent[i].classList.remove("hidden");
      tabsContent[i].classList.add("block");
    } else {
      tabsAnchors[i].classList.add("text-" + color + "-500");
      tabsAnchors[i].classList.add("bg-white");
      tabsAnchors[i].classList.remove("text-white");
      tabsAnchors[i].classList.remove("bg-" + color + "-500");
      tabsContent[i].classList.add("hidden");
      tabsContent[i].classList.remove("block");
    }
  }
}

// sidebar-toggle
const sidebarToggle = document.querySelectorAll('[data-toggle="sidebar"]')
Array.from(sidebarToggle, (sidebarTogglebtn) => {
  sidebarTogglebtn.addEventListener("click", () => {
    // document.getElementsByTagName('ASIDE').classList.toggle('sidebar-mini')
    const sidebar = document.querySelector('.sidebar')
    if (sidebar.classList.contains('sidebar-mini')) {
      sidebar.classList.remove('sidebar-mini')
    } else {
      sidebar.classList.add('sidebar-mini')
    }
  })
})

// dual-compact-toggle
const dualcompactToggle = document.querySelectorAll('[data-toggle="dual-compact"]')
Array.from(dualcompactToggle, (dualcompactTogglebtn) => {
  dualcompactTogglebtn.addEventListener("click", () => {
    // document.getElementsByTagName('ASIDE').classList.toggle('sidebar-mini')
    const sidebar1 = document.querySelector('.dual-compact')
    if (sidebar1.classList.contains('dual-compact-mini')) {
      sidebar1.classList.remove('dual-compact-mini')
    } else {
      sidebar1.classList.add('dual-compact-mini')
    }
  })
})

function slideout() {
  return {
    open: false,
    usedKeyboard: false,
    init() {
      this.$watch('open', value => {
        value && this.$refs.closeButton.focus()
        this.toggleOverlay()
      })
      this.toggleOverlay()
    },
    toggleOverlay() {
      document.body.classList[this.open ? 'add' : 'remove']('h-screen', 'overflow-hidden')
    }
  }
}

function toggleNavbar(collapseID, cID, sID) {
  document.getElementById(collapseID).classList.toggle("hidden");
  document.getElementById(collapseID).classList.toggle("flex");
  document.getElementById(cID).classList.toggle("hidden");
  document.getElementById(cID).classList.toggle("block");
  document.getElementById(sID).classList.toggle("hidden");
  document.getElementById(sID).classList.toggle("block");
}


// scrollbar
let Scrollbar
if (typeof Scrollbar !== typeof null) {
  if (document.querySelectorAll(".data-scrollbar").length) {
    Scrollbar = window.Scrollbar

    Scrollbar.init(document.querySelector('.data-scrollbar'), {
      continuousScrolling: false,
    })
  }
}





/*------------------------
Back To Top
--------------------------*/
if (document.querySelectorAll("back-to-top").length) {
  window.onscroll = function () { scrollFunction() };
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*------------------------
scrollspy
--------------------------*/



window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    console.log(entries)
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      console.log(id)
      if (entry.intersectionRatio > 0) {
        if (id == 'scrollspyHeading1' || id == 'scrollspyHeading2' || id == 'scrollspyHeading3' || id == 'scrollspyHeading4' || id == 'scrollspyHeading5' || id == 'dropdown') {
          document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.add('active');
        }
      } else {
        if (id == 'scrollspyHeading1' || id == 'scrollspyHeading2' || id == 'scrollspyHeading3' || id == 'scrollspyHeading4' || id == 'scrollspyHeading5' || id == 'dropdown') {
          document.querySelector(`div li a[href="#${id}"]`).parentElement.classList.remove('active');
        }
      }
    });
  });

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});




function openNav() {
  document.getElementById("mySidenav").style.width = "450px";
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.body.style.backgroundColor = "white";
}

function darkMode(click_id) {
  if (click_id == "dark") {
    const html = document.querySelector("html");
    html.classList.add('dark');
  }
  else {
    const html = document.querySelector("html");
    html.classList.remove('dark');
  }
}

function autoMode(click_id) {
  if (click_id == "auto") {
    const html = document.querySelector('html');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}



function transparent() {
  document.getElementById('sid').style.backgroundColor = "transparent";
  document.getElementById('side').style.backgroundColor = "transparent";
}
function black() {
  document.getElementById('sid').style.backgroundColor = "#212529";
  document.getElementById('side').style.backgroundColor = "#212529";
}





