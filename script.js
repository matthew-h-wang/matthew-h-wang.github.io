document.addEventListener("DOMContentLoaded", function(event) { 
    M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {coverTrigger:false, hover:false});
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
});