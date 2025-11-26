function initTabs() {
    const tabsContainers = document.querySelectorAll('.tabs');
    
    tabsContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tabs__btn');
        const tabPanes = document.querySelectorAll('.tab__pane');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                

                tabs.forEach(t => t.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                

                this.classList.add('active');
                document.getElementById(tabId).classList.add('active');
            });
        });
    });
}