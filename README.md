## Website Performance Optimization portfolio project

This is a Udacity Frontend Developer course project used to showcase optimizations made to a sample
portfolio website. The aim was to optimize this online portfolio for speed!
In particular, to optimize the critical rendering path and make this page render
as quickly as possible by applying the techniques in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

### Getting started

### How to setup and run the portfolio site

This website is using Grunt task runner to optimize files, i.e. minify JS, CSS,
HTML files and to optimize the images (both the compression level and
sizes for responsiveness). Grunt is also used to run `ngrok` and Google PageSpeed
test to measure the speed score.

1. Open up a shell and cd into the `dist` directory
1. Start the Python's SimpleHTTPServer on port 8080:
   ```
   $ python -m SimpleHTTPServer 8080
   ```
1. Open up another shell and run `grunt` from the project root directory - this will prepare the whole
site in the target `dist` directory and automatically run ngrok and Page Speed
Insights to measure the performance of the website (index)
1. The speed measurement should be 90 or more otherwise the Pagespeed Insights grunt task will issue an error
1. You can now also open up your browser and head to http://localhost:8080 to view the page

### Using the online PageSpeed Index site manually

You can also manually run the local server and `ngrok` to host the website temporarily and
open it up inside the [PageSpeed Insights website](https://developers.google.com/speed/pagespeed/insights/) in order to perform a speed measurement.

1. Open up a shell and cd into the `dist` directory
1. If not already started, start the Python's SimpleHTTPServer on port 8080:
   ```
   $ python -m SimpleHTTPServer 8080
   ```
1. Open up another shell, go to `dist` directory and start `ngrok` on port `8080`:
   ```
   $ ngrok http 8080
   ```
   This will give you a publicly accessible hostname, e.g. http://f8aa9dcc.ngrok.io
1. Now open up [PageSpeed Insights website](https://developers.google.com/speed/pagespeed/insights/)
   in the browser of your choice and paste the address provided by the ngrok in
   the previous step.

### Optimizations performed on the portfolio project

#### Part 1: Optimize PageSpeed Insights score for index.html

List of optimizations performed:

1. Javascript files minification using `grunt-contrib-uglify`.
1. HTML files minification using `grunt-contrib-htmlmin`.
1. CSS files minification using `grunt-contrib-cssmin`.
1. Different resized versions of the image `views/images/pizzeria.jpg` in `index.html` depending
   on the viewport and display sizes by using `grunt-responsive-images`.
1. Image files compression and quality change using `grunt-contrib-imagemin`.
1. Downloaded referenced remote thumbnail photos and changed `href` links in `index.html` to point
   to local versions of those images to avoid fetching from other sites and to be able
   to minify/compress those images as well.
1. Used `media=print` for CSS styles related to printing in file `print.css`.
1. Isolated CSS styles related to mobile view into file `under480.css` and used media
   query for screens up to 480px only.
1. Inlined critical CSS styles related to above-the-fold content into the HTML to
   avoid initial render blocking, while using `rel="preload"` attribute for the
   referenced CSS files to make them non render blocking.
1. Removed Google fonts loading from the HTML and using `@font-face` inside `style.css` to
   download Google fonts. Since `style.css` is not render blocking, initial render
   will be performed first before Google fonts are also downloaded.
1. Made the JS file http://www.google-analytics.com/analytics.js load asynchronously
   using `async` tag attribute so it doesn't block HTML parsing.


#### Part 2: Optimize Frames per Second in pizza.html

To optimize `views/pizza.html`, I had to modify `views/js/main.js` until the frames per second rate was 60 fps or higher.<br>
Here are the related and all other optimizations I performed:

1. Different resized versions of the image `views/images/pizzeria.jpg` in `views/pizza.html` depending
   on the viewport and display sizes by using `grunt-responsive-images` grunt plugin.
1. In the function `resizePizzas(size)` basically what I did was moved all the
   JS code which was querying the DOM and styles to the beginning of the function and JS code
   for changing the styles to the bottom. In that way I eliminated layout thrashing (forced synchronous layouts) when
   changing the size of the pizzas using the slider, which had a huge performance impact.
1. Also, when changing the pizza sizes in function `changePizzaSizes(size)`, pizza sizes
   were calculated in a loop which was also causing forced synchronous layouts. I removed the loop
   and calculated the size for only one pizza, which is enough because the size is the same for all pizzas.
1. The for-loop which creates and appends all of the pizzas when the page loads was causing layout thrashing.
   I moved the `getElementById()` call to before the loop to avoid it.
1. Eliminated layout thrashing from the function `updatePositions()` that is used to move the pizzas
   in the background while scrolling which had impact on scrolling framerate.
1. Triggering the function `updatePositions()` on scroll through `requestAnimationFrame()` to optimize rendering time
   and ultimately the framerate.
1. Promoted the elements containing the `.mover` class (background pizzas) to separate layers to avoid repainting and
   compositing the whole page while scrolling - by using `will-change: transform` in `views/css/style.css`.
1. Reduced the number of background pizzas which affected the scrolling performance.
   The number of rows of pizzas is now calculated based on the viewport height.

### Open source projects and other apps used

- https://github.com/gruntjs/grunt
- https://github.com/gruntjs/grunt-contrib-uglify
- https://github.com/gruntjs/grunt-contrib-cssmin
- https://github.com/gruntjs/grunt-contrib-htmlmin
- https://github.com/andismith/grunt-responsive-images
- https://github.com/gruntjs/grunt-contrib-imagemin
- https://www.npmjs.com/package/grunt-pagespeed
- https://www.npmjs.com/package/ngrok
