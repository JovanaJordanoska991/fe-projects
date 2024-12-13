// Navbar

// Navigation
const mainMenu = document.querySelector('.main-menu');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const menu_items = document.querySelectorAll('nav .main-menu li a');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// Filter cards

        document.querySelector("#filter-coding").addEventListener("click", filterCoding);
        document.querySelector("#filter-design").addEventListener("click", filterDesign);
        document.querySelector("#filter-marketing").addEventListener("click", filterMarketing);

        function filterCoding() {
            hideAllCards();

            var codingCards = document.querySelectorAll(".coding");
            codingCards.forEach(codingCard => {
                codingCard.style.display = "inline-block";
            });
        }

        function filterDesign() {
            hideAllCards();

            var designCards = document.querySelectorAll(".design");
            designCards.forEach(designCard => {
                designCard.style.display = "inline-block";
            });
        }

        function filterMarketing() {
            hideAllCards();

            var marketingCards = document.querySelectorAll(".marketing");
            marketingCards.forEach(marketingCard => {
                marketingCard.style.display = "inline-block";
            });
        }

        function hideAllCards() {
            var allCards = document.querySelectorAll(".card");  

            allCards.forEach(card => {
                card.style.display = "none";
            });
        }

        function showAllCards() {
            var allCards = document.querySelectorAll(".card");  

            allCards.forEach(card => {
                card.style.display = "inline-block";
            });
        }


        // Get all filter items
        const filterItems = document.querySelectorAll('.project-filter-item');

        filterItems.forEach(item => {
            item.addEventListener('click', () => {
                
                filterItems.forEach(item => {
                    item.classList.remove('active');
                });
                
                item.classList.add('active');
            });
        });
