# Dark Mode

> Define in html the buttom click with the class **.dark-mode-toggle**
```
 $(".dark-mode-toggle").on("click", function () {
    if ($("body").hasClass("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  });
```

> Sample:
```html
 <a class="nav-link dark-mode-toggle" href="#">
    <i class="ion-contrast"></i>
    <span class="d-none d-md-inline">Dark Mode</span> 
</a>

```

## Style in .scss
[theme .scss](theme.scss)
```scss
.dark-mode{
    *{
        background-color: #222!important;
        color: white!important;
    }
    .btn{
        border: 1px solid;
    }
   
}
```

## Output .css
```css
.dark-mode * {
  background-color: #222 !important;
  color: white !important; 
}

.dark-mode .btn {
  border: 1px solid; 
}
  ```

