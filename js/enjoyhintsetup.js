//initialize instance
var enjoyhint_instance = new EnjoyHint({});

//simple config.
//Only one step - highlighting(with description) "New" button
//hide EnjoyHint after a click on the button.
var enjoyhint_script_steps = [{
    "next .A1": 'Click slots to select'
}, {
    "next .quick-selection": "Use quick selection to select all at once"
}, {
    "next #slot-sel-area": "<span style=\"color:white; background-color:grey\">Search and add courses</span>"
}, {
    "next #fb-comment-id": "<span style=\"color:white; background-color:grey\">Interact with others</span>"
}, {
    "next #starGitHub": "Star the repo on GitHub"
}, {
    "click #fb-like-share": 'Like and Share',
    showSkip: false
}];

//set script config
enjoyhint_instance.set(enjoyhint_script_steps);

//run Enjoyhint script
enjoyhint_instance.run();