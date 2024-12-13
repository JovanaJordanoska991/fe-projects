
// Footer 
function moveMkAl() {
  const logoContainer = document.querySelector('.footer-logo-container');
  const mkAl = document.querySelector('.footer-mk-al');
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    if (!logoContainer.contains(mkAl)) {
      logoContainer.appendChild(mkAl);
    }
  } else {
    const socialMediaContainer = document.querySelector('.social-media-container');
    if (!socialMediaContainer.contains(mkAl)) {
      socialMediaContainer.insertBefore(mkAl, socialMediaContainer.firstChild);
    }
  }
}

window.addEventListener('load', moveMkAl);
window.addEventListener('resize', moveMkAl);


// // Route
const hideAllSections = () => {
  document.querySelectorAll("section").forEach(section => {
    section.classList.remove('active');
  });
};

const showSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.classList.add('active');
  }
};

const handleRoute = () => {
  const currentHashRoute = location.hash.slice(1) || 'home';
  hideAllSections();
  showSection(currentHashRoute);
};

window.addEventListener('load', handleRoute);
window.addEventListener('hashchange', handleRoute);

if (!location.hash) {
  location.hash = '#home';
}



document.addEventListener('DOMContentLoaded', () => {
    // Remove elements with the class 'profile'
    document.querySelectorAll('.profile').forEach(element => {
        element.remove();
    });

    // Remove elements with the class 'profile-button'
    document.querySelectorAll('.profile-button').forEach(element => {
        element.remove();
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authOptions = document.querySelector('.auth-options');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-visible');
        authOptions.classList.toggle('auth-options-visible');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const filters = document.querySelectorAll('.btn-custom');
    const videoCards = document.querySelectorAll('.card');

    const activeFilters = new Set(JSON.parse(sessionStorage.getItem('activeFilters')) || []);

    // Function to update video visibility based on filters
    const updateVideos = () => {
        videoCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (activeFilters.size === 0 || activeFilters.has(category)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    };

    // Function to handle filter click
    const handleFilterClick = (event) => {
        const filter = event.target.closest('.btn-custom');
        const filterCategory = filter.getAttribute('data-filter');

        if (activeFilters.has(filterCategory)) {
            activeFilters.delete(filterCategory);
            filter.classList.remove('active');
        } else {
            activeFilters.add(filterCategory);
            filter.classList.add('active');
        }

        sessionStorage.setItem('activeFilters', JSON.stringify([...activeFilters]));
        updateVideos();
    };

    // Attach click event to each filter button
    filters.forEach(filter => {
        filter.addEventListener('click', handleFilterClick);
        const filterCategory = filter.getAttribute('data-filter');
        if (activeFilters.has(filterCategory)) {
            filter.classList.add('active');
        }
    });

    // Initial update of videos based on saved filters
    updateVideos();
});



// Profile
const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const authOptions = document.querySelector('.auth-options');
    const header = document.querySelector('.header');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-visible');
        authOptions.classList.toggle('auth-options-visible');
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    document.addEventListener("DOMContentLoaded", function() {
        const badgesContainer = document.getElementById("badges-container");
        const userActivity = {
          watchedVideos: 5, 
          postedComments: 1
        };

        const badges = [
          {
            condition: userActivity.watchedVideos >= 5,
            src: "./img/badge.png",
            alt: "Изгледани 5 видеа"
          },
          {
            condition: userActivity.postedComments >= 1,
            src: "./img/badge (1).png",
            alt: "Активност во дискусија"
          }
        ];

        badges.forEach(badge => {
          if (badge.condition) {
            const badgeElement = document.createElement("img");
            badgeElement.src = badge.src;
            badgeElement.alt = badge.alt;
            badgesContainer.appendChild(badgeElement);
          }
        });
      });