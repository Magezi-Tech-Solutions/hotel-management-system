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

// Alerts
function closeAlert(event) {
  let element = event.target;
  while (element.nodeName !== "BUTTON") {
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}


// modal
function toggleModal(modalID) {
  document.getElementById(modalID).classList.toggle("hidden");
  document.getElementById(modalID + "-backdrop").classList.toggle("hidden");
  // document.getElementById(modalID).classList.toggle("flex");
  document.getElementById(modalID + "-backdrop").classList.toggle("flex");
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

/*---------------------------------------------------------------------
              LoaderInit
-----------------------------------------------------------------------*/

const loaderInit = () => {
  const loader = document.querySelector('.loader')
  setTimeout(() => {
    loader.classList.add('hidden')
  }, 200)
}

document.addEventListener('DOMContentLoaded', (event) => {
  loaderInit()
})

// nouiSlider

const rangeSlider = document.querySelectorAll('.range-slider');

Array.from(rangeSlider, (elem) => {
  if (typeof noUiSlider !== typeof undefined) {
    noUiSlider.create(elem, {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    })
  }
})

const slider = document.querySelectorAll('.slider');

Array.from(slider, (elem) => {
  if (typeof noUiSlider !== typeof undefined) {
    noUiSlider.create(elem, {
      start: 50,
      connect: [true, false],
      range: {
        'min': 0,
        'max': 100
      }
    })
  }
})

// vanillaDatepicker

const datepickers = document.querySelectorAll('.vanila-datepicker')
Array.from(datepickers, (elem) => {
  if (typeof Datepicker !== typeof undefined) {
    new Datepicker(elem)
  }
})
const daterangePickers = document.querySelectorAll('.vanila-daterangepicker')
Array.from(daterangePickers, (elem) => {
  if (typeof Datepicker !== typeof undefined) {
    new DateRangePicker(elem)
  }
})
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

/*---------------------------------------------------------------------
Circle Progress
-----------------------------------------------------------------------*/

const progressBar = document.getElementsByClassName('circle-progress')
if (typeof progressBar !== typeof undefined) {
  Array.from(progressBar, (elem) => {
    const minValue = elem.getAttribute('data-min-value')
    const maxValue = elem.getAttribute('data-max-value')
    const value = elem.getAttribute('data-value')
    const type = elem.getAttribute('data-type')
    if (elem.getAttribute('id') !== '' && elem.getAttribute('id') !== null) {
      new CircleProgress('#' + elem.getAttribute('id'), {
        min: minValue,
        max: maxValue,
        value: value,
        textFormat: type,
      });
    }
  })
}



/*---------------------------------------------------------------------
              CounterUp 2
-----------------------------------------------------------------------*/
if (window.counterUp !== undefined) {
  const counterUp = window.counterUp["default"];
  const counterUp2 = document.querySelectorAll('.counter')
  Array.from(counterUp2, (el) => {
    if (typeof Waypoint !== typeof undefined) {
      const waypoint = new Waypoint({
        element: el,
        handler: function () {
          counterUp(el, {
            duration: 1000,
            delay: 10,
          });
          this.destroy();
        },
        offset: "bottom-in-view",
      });
    }
  })
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


// function scrollToReveal() {
//   return {
//     sticky: false,
//     lastPos: window.scrollY + 0,
//     scroll() {
//       this.sticky = window.scrollY > this.$refs.navbar.offsetHeight && this.lastPos > window.scrollY;
//       this.lastPos = window.scrollY;
//     }
//   }
// }
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

// carousel
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// leaflet map
const elem = document.getElementById('map')
// Initialize the map
if (elem) {
  const map = L.map(elem)

  // Get the tile layer from OpenStreetMaps
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    // Specify the maximum zoom of the map
    maxZoom: 19,
  }).addTo(map);

  // Set the view of the map
  // with the latitude, longitude and the zoom value
  map.setView([48.8584, 2.2945], 16);

  // Set the map view to the user's location
  // Uncomment below to set map according to user location
  // map.locate({setView: true, maxZoom: 16});

  // Show a market at the position of the Eiffel Tower
  let eiffelMarker = L.marker([48.8584, 2.2945]).addTo(map);

  // Bind popup to the marker with a popup
  eiffelMarker.bindPopup("Eiffel Tower").openPopup();


}

/*---------------------------------------------------------------------
Flatpickr
-----------------------------------------------------------------------*/
const date_flatpickr = document.querySelectorAll('.date_flatpicker')
Array.from(date_flatpickr, (elem) => {
  console.log(elem, flatpickr);
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})

/*---------------------------------------------------------------------
Range Flatpickr
-----------------------------------------------------------------------*/
const range_flatpicker = document.querySelectorAll('.range_flatpicker')
Array.from(range_flatpicker, (elem) => {
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      mode: "range",
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})
/*---------------------------------------------------------------------
Inline Flatpickr
-----------------------------------------------------------------------*/
const inline_flatpickr = document.querySelectorAll('.inline_flatpickr')
Array.from(inline_flatpickr, (elem) => {
  if (typeof flatpickr !== typeof undefined) {
    flatpickr(elem, {
      inline: true,
      minDate: "today",
      dateFormat: "Y-m-d",
    })
  }
})


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

function Direction(dir_id) {
  if (dir_id == "ltr") {
    const html = document.querySelector("html");
    // html.removeAttribute('dir','rtl');
    html.setAttribute('dir', 'ltr');
  }
  else {
    const html = document.querySelector("html");
    // html.removeAttribute('dir','ltr');
    html.setAttribute('dir', 'rtl');
  }
}
// function black() {
//   document.getElementById('sid').style.backgroundColor = "black";
//   document.getElementById('sid1').style.color = "white";
// }

// function blue() {
//   document.getElementById('sid').style.backgroundColor = "#4e68ea";
// }

// function white() {
//   document.getElementById('sid').style.backgroundColor = "white";
// }

function transparent() {
  document.getElementById('sid').style.backgroundColor = "transparent";
  document.getElementById('side').style.backgroundColor = "transparent";
}
function black() {
  document.getElementById('sid').style.backgroundColor = "#212529";
  document.getElementById('side').style.backgroundColor = "#212529";
}





