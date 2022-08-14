const content = document.querySelector(".content");
const ioholder = document.querySelector(".oi-holder");
const pageWidth = document.documentElement.clientWidth;

let fileName = "codetopic", quality = 5, format = "png";

  function ocExport(val){
    if (val == 0) {
      document.querySelector(".export-drop").style.display = "flex";
    } else {
      document.querySelector(".export-drop").style.display = "none";
    }
  }
  
  const qualityBtn = document.querySelectorAll(".quality button");
  const formatBtn = document.querySelectorAll(".format button");

  qualityBtn.forEach(btn => {
    btn.addEventListener("click", function() { quality = btn.innerHTML; });
  });
  
  formatBtn.forEach(btn => {
    btn.addEventListener("click", function() { format = btn.innerHTML; });
  });

  function exportImg(){
    const title = document.querySelector("#title");
    if (title.value == "") {
      title.style.display = "none";
      setTimeout(function () {title.style.display = "block";}, 3000);
    } else {
      title.style.display = "block";
    }
    
		html2canvas(content, {scale: quality}).then(
			function (canvas){
				let img = new Image();
				img.src = canvas.toDataURL();
				
				var a = document.createElement("a");
				a.href = img.src;
				a.download = `${fileName}.${format}`;
				a.click();
			}
		);
	}
	
	function updateRect() {
	  let outputDis = document.querySelector("#output");
	  let filler = document.querySelector(".filler");
	  
	  if (filler.offsetHeight < outputDis.offsetHeight) {
	    if (pageWidth < 800) {
		    filler.style.height = outputDis.offsetHeight + 20 + "px";
	    } else {
	 	    filler.style.height = outputDis.offsetHeight + 40 + "px";
	    }
	    
	  } else if (filler.offsetHeight > outputDis.offsetHeight) {
      if (pageWidth < 800) {
        filler.style.height = outputDis.offsetHeight + 20 + "px";
      } else {
        filler.style.height = outputDis.offsetHeight + 40 + "px";
      }
	  }
	  
	  if (output.innerHTML == "") {
	    if (pageWidth < 800) {
	       filler.style.height = "3em";
	    } else {
	       filler.style.height = "6em";
	    }
	  }
	  
	}
	
	const langBtn = document.querySelectorAll(".lang-content button");
	const themeBtn = document.querySelectorAll(".hl-content button");
	const bgBtn = document.querySelectorAll(".bg-content button");
	const padBtn = document.querySelectorAll(".pad-content button");
	const opaBtn = document.querySelectorAll(".opacity-content button");
	const fontzBtn = document.querySelectorAll(".font-content button");
  const dropBtn = document.querySelectorAll("[class*='btn']");

	langBtn.forEach(btn => {
	  btn.addEventListener("click", function() { lang(btn.innerHTML) })
	});
	
	themeBtn.forEach(btn => {
	  btn.addEventListener("click", function() { theme(btn.innerHTML) })
	});
	
	bgBtn.forEach(btn => {
	  btn.addEventListener("click", function() { background(btn.innerHTML) })
	});
	
	padBtn.forEach(btn => {
	  btn.addEventListener("click", function() { padding(btn.innerHTML) })
	});
	
	opaBtn.forEach(btn => {
	  btn.addEventListener("click", function() { opacity(btn.innerHTML) })
	});
	
	fontzBtn.forEach(btn => {
	  btn.addEventListener("click", function() { fontSize(btn.innerHTML) })
	});

	function theme(val){
	  document.querySelector("#theme").href = `highlight/styles/${val}.min.css`;
	}
	
	function lang(val){
	  let output = document.querySelector("#output");
	  output.classList = val;
    hljs.highlightElement(output);
	}
	
	function background(val){
	  if (val == "Violet") {content.style.background = "linear-gradient( 83.2deg, rgba(150,93,233,1) 10.8%, rgba(99,88,238,1) 94.3%)";}
	  if (val == "Sky") {content.style.background = "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";}
	  if (val == "Warm") {content.style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% )";}
	  if (val == "Ocean") {content.style.background = "linear-gradient(to top, #4481eb 0%, #04befe 100%)";}
	  if (val == "Sunset") {content.style.background = "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)";}
	  if (val == "Light") {content.style.background = "#ECF0F3";}
	  if (val == "Dark") {content.style.background = "rgb(100, 100, 100)";}
	  if (val == "Transparant") {content.style.background = "none";}
	}
	
	function padding(val){
	  if (val == "20"){ioholder.style.width = "90%"; ioholder.style.margin = "5%";}
	  if (val == "40"){ioholder.style.width = "80%"; ioholder.style.margin = "10%";}
	  if (val == "60"){ioholder.style.width = "70%"; ioholder.style.margin = "15%";}
	  updateRect();
	}
	
	function opacity(val){
	  let output = document.querySelector("#output");
    output.style.opacity = val / 100;	  
    console.log('matane');
	  updateRect();
	}
	
	function fontSize(val){
	  let output = document.querySelector("#output");
	  let input = document.querySelector("#input");
	  
	  if (pageWidth < 800) {
	    input.style = `font-size: ${val}px;`;
	    output.style = `font-size: ${val}px;`;    
	  } else {
	    input.style = `font-size: ${val * 2}px;`;
	    output.style = `font-size: ${val * 2}px;`;
	  }
	  
	  updateRect();
	}
