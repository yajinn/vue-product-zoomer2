# Welcome to Vue Product Zoomer for Nuxt 👋

> A Image Zoomer For Eshop Website.Saving Your Time...

## Install

```sh
npm install vue-product-zoom
```

## Usage

```sh
import ProductZoomer from 'vue-product-zoom'
Vue.use(ProductZoomer)

<ProductZoomer
  :base-images="images"
  :base-zoomer-options="zoomerOptions"
/>

```

### Options

#### images

```sh
{
    {
      'thumbs':    // optional, if not present will use normal_size instead
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    },
    {
      'normal_size':  // required
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    },
    {
      'large_size':    //optional, if not present will use normal_size instead
      [
        {'id':'unique id', 'url': 'image url'},
        {'id':'unique id', 'url': 'image url'}
      ]
    }
 }
```

#### zoomerOptions

```sh
{
    zoomFactor: 3, // scale for zoomer
    pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
    hoverDelay: 300, // how long after the zoomer take effect
    namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
    move_by_click:false // move image by click thumb image or by mouseover
    scroll_items: 5, // thumbs for scroll
    choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
    scroller_button_style: "line",
    scroller_position: "left",
    zoomer_pane_position: "right"
}
```

## Author

👤 **Raymond Cheng**

- Twitter: [@akulubala](https://twitter.com/akulubala)
- Github: [@akulubala](https://github.com/akulubala)

- Fixed for Nuxt (thsnyzkn)
