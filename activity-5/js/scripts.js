(function (){
    // Package data array (simulated data source, such as JSON or database recordset)
    var data = [
        {
            name: 'settings sync',
            description: 'synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines.',
            author: 'Shan Khan',
            url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
            downloads: '1496406',
            stars: '598',
            price: 'free',
            selector: 'p1'
        },
        {
            name: 'trailing spaces',
            description: 'Highlight trailing spaces and delete them in a flash!',
            author: 'Shardul Mahadik',
            url: 'https://marketplace.visualstudio.com/items?itemName=shardulm94.trailing-spaces',
            downloads: '343113',
            stars: '30',
            price: 'Free',
            selector: 'p2'
        },
        {
            name: 'ESlint',
            description: 'Integrates ESLint JavaScript into VS Code.',
            author: 'Dirk Baeumer',
            url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
            downloads: '8289581',
            stars: '139',
            price: 'free',
            selector: 'p3'
        }
    ];

    // (VS) Package constructor function
    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    // Returns today's date, formatted
    var getTodaysDate = function(){
        var today = new Date();
        return today.toDateString();
    };
    var getEl = function (id) {
        return document.getElementById(id);
    }
    var writePackageInfo = function(package){
        //Get reference to DOM elements
        var selector = package.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars'),

            textContext = package.name;
            descEl.textContent = package.description;
            authEl.textContent = package.author;
            downloadEl.textContent = package.getFormattedDownloads();
            starsEl.textContent = package.getFormattedStars();
    }
    //write data
    dateEl = getEl('date');
    dateEl.textContext = getTodaysDate();
    
    // var settings = new Package(data[0]);
    // writePackageInfo(settings);

    // var spaces = new Package(data[1]);
    // writePackageInfo(spaces);

    // var eslint = new Package(data[2]);
    // writePackageInfo(eslint);

    for (var i = 0; i < data.length; i++){
        var package = new Package(data[i]);
        writePackageInfo(package);
    }
}());