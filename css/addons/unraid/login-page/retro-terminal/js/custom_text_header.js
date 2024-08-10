 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
I8,        8        ,8I    db         88888888ba   888b      88  88  888b      88    ,ad8888ba,   
`8b       d8b       d8'   d88b        88      "8b  8888b     88  88  8888b     88   d8"'    `"8b  
 "8,     ,8"8,     ,8"   d8'`8b       88      ,8P  88 `8b    88  88  88 `8b    88  d8'            
  Y8     8P Y8     8P   d8'  `8b      88aaaaaa8P'  88  `8b   88  88  88  `8b   88  88             
  `8b   d8' `8b   d8'  d8YaaaaY8b     88""""88'    88   `8b  88  88  88   `8b  88  88      88888  
   `8a a8'   `8a a8'  d8""""""""8b    88    `8b    88    `8b 88  88  88    `8b 88  Y8,        88  
    `8a8'     `8a8'  d8'        `8b   88     `8b   88     `8888  88  88     `8888   Y8a.    .a88  
     `8'       `8'  d8'          `8b  88      `8b  88      `888  88  88      `888    `"Y88888P"   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
