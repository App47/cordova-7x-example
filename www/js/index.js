
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // configure the agent
        app47.configureAgent("578f8287db8fe908ba0004d7");

        // set up onResume, onPause event handlers to pass to Agent
        document.addEventListener('resume', this.onResume.bind(this), false);
        document.addEventListener('pause', this.onPause.bind(this), false);

        // set up event handlers for buttons
        var eventButton = document.getElementById('event-btn');
        eventButton.addEventListener('click', this.onEventClick.bind(this), false);

        var logButton = document.getElementById('log-btn');
        logButton.addEventListener('click', this.onLogClick.bind(this), false);

    },


    onResume: function() {
        app47.onResume();
    },

    onPause: function() {
        app47.onPause();
    },

    onEventClick: function() {
         app47.genericEvent("Generic Event Clicked");
         alert("Sent Generic Event");
    },

    onLogClick: function() {
         app47.info("Log Button Clicked");
         alert("Sent Log");
    }

};

app.initialize();