Author: Samuel Joy

GPU-ADDA

This project only has front-end (HTML/CSS/jQuery)and little bit of backend (jQuery/JavaScript).
The page consists of 4 pages (home,shop,contact us,login).

1. GPU-ADDA(main.html)
   This is the home page, here you can see a slideshow (js on backend) then some image grid with some css properties
   then a video embed from youtube and some articles. In the header the social media tags won't direct you to anywhere.
   There is also a footer.The scroll bar is also edited through -webkit-scrollbar

2. SHOP(shop.html)
   Here users can browse throgh the products. Here the listed products is displayed through flex (display:flex; flex-direction:row;flex-wrap:wrap)
   Each products have some css property(scale,etc). This page is DYNAMIC i.e. the search bar is realtime, the logic is written in jQuery (shop.js)      
   Even the filter is in realtime, it filters the list from low to high price, high to low, Alphabetical order(A-Z) and reverse(Z-A). The logic for 
   filter is also written in jQuery(shop.js) 
   There is no particular page for each product since that would be too much of time consuming task hence the clicking on products won't take you anywhere. 
   Here the overflow-y is set to scroll.

3. About Us(about.html)
   This page is very basic it just contains some written materials

4. Login (login.html)
   This is the login page, this page is backed by validating functions written in jQuery

All the html files are inside the folder (GPU ADDA), all the js files are inside the script folder, jQuery script is inside the library folder, all the images
are inside the image folder and all the CSS files are inside the CSS folder.