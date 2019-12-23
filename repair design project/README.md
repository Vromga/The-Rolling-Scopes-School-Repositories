# repair-design-project

This is the landing page of an elite repair company.

To start the project, click on the index.html

The following technologies were used to develop the site:

- HTML5
- CSS3
- SCSS
##Variables
In SCSS write global variables:
###Color
- $accent: #E3B873;
- $black: #131313;
- $white: #ffffff;
- $white_opacity50: rgba(255, 255, 255, .50);
###Font size
- $fz: 16px; -global font size (write in HTML tag)
- $fzcalc: 100% / $fz; -calculating font size px to percent

##Mixins
You can change fonts in one click. Change fonts-family in head SCSS file in mixin patterns.

####Mixins for align text or make grid.
- `@mixin grid($columns: 1fr, $row: 1fr) {
  display: grid;
  grid-template-columns: $columns;
  grid-template-rows: $row;
}` - _this mixin for make grid table defaults one cell and one row_ 

- `@mixin flex($horizontal: center, $vertical: center) {
  display: flex;
  justify-content: $horizontal;
  align-items: $vertical;
}` - _this mixin for make flex container, used for align items center._

- `@mixin justify-inner($horizontal: center, $vertical: center) {
  justify-self: $horizontal;
  align-self: $vertical;
}` - _this mixin for align individual item in grid table_

##@Media
Project adaptive for mobile resolution in 375px and desktop 1440px and have responsive for another resolution.
  

 

