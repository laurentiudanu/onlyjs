var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.body.classList.add("loaded-doc");

  if(document.querySelector(".m-h .nav-trigger")){
    document.querySelector(".m-h .nav-trigger").addEventListener("click", function(e){ 
      document.body.classList.toggle("mobile-nav-active");
      e.preventDefault(); 
    });
  }

  if(document.querySelector(".tabs")){
  	console.log("tabs detected");
  	// select the first tab content instance and make it active
  	document.querySelector(".tabs .tab-entry").classList.add("active");

    // iterate over each nav item and assign custom on-click action
    document.querySelectorAll(".tabs .tab-nav a").forEach(box => {
      box.addEventListener("click", function(e){
        let tabToShow = box.getAttribute("href");
        document.querySelectorAll(".tabs .tab-entry").forEach(tbentry => {
          tbentry.classList.remove("active");        
        });
        document.querySelector(tabToShow).classList.add("active");
        e.preventDefault(); 
      });   
    })
  }

  //check if element has a specific class name
  if(document.querySelector("body").classList.contains("loaded-doc")) {
    console.log("document has been loaded");
  }

  var el = document.querySelector(".copy-block");
  // append to the element's content
  el.innerHTML += "<p class='appended'>Hello World appended!</p>";
  // prepend to the element's content
  el.innerHTML = "<p class='prepended'>Hello World prepended!</p>" + el.innerHTML;

  document.querySelector(".copy-block .appended").addEventListener("click", function(e){ 
    alert("appended has been clicked");
    e.preventDefault(); 
  });


  var sel = document.getElementById("selector");
  sel.value = '3';
  var selectedValText = sel.options[sel.selectedIndex].text;
  var selectedVal = sel.options[sel.selectedIndex].getAttribute("value");
  console.log("Selected option text: "+selectedValText);
  console.log("Selected option value: "+selectedVal);

  document.getElementById('selector').addEventListener('change', function() {
    console.log('You selected: ', this.value);
  });


});