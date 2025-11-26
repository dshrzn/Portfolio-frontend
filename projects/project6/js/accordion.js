function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion__header');
        const content = item.querySelector('.accordion__content');
        const icon = item.querySelector('.accordion__icon');
        
        header.addEventListener('click', function() {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion__content').style.maxHeight = null;
                }
            });
            

            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    const tabs = document.querySelectorAll('.tabs__btn');
    const tabContents = document.querySelectorAll('.tab-content');


    function switchTab(event) {
        const targetTab = event.target;

        tabs.forEach(tab => tab.classList.remove('active'));


        targetTab.classList.add('active');

        tabContents.forEach(content => content.classList.remove('active'));


        const targetTabContent = document.getElementById(targetTab.dataset.tab);
        targetTabContent.classList.add('active');
    }


    tabs.forEach(tab => {
        tab.addEventListener('click', switchTab);
    });
}