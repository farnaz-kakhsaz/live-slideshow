# Live Slideshow

> This project was created based on my other library [react-slideshow-with-pagination](https://github.com/farnaz-kakhsaz/react-slideshow-with-pagination) to show its potential in action.

![Slideshow Screenshots](https://user-images.githubusercontent.com/37678729/100906760-c5274000-34de-11eb-9660-8c6f96c89676.png)

This [**Live Slideshow**](https://farnaz-kakhsaz.github.io/live-slideshow) project was created to show the capability of my other library the [react-slideshow-with-pagination](https://github.com/farnaz-kakhsaz/react-slideshow-with-pagination), so go ahead and remove or upload as many photos as you want.
The [react-slideshow-with-pagination](https://github.com/farnaz-kakhsaz/react-slideshow-with-pagination) can have pagination (numbers or dots) and arrow buttons for changing screens and dozens of other feature that help to customize the slideshow as much as possible. Also, check out the [demo](https://farnaz-kakhsaz.github.io/live-slideshow/) from a mobile device (real or emulated) it's fully responsive.

<img src="https://user-images.githubusercontent.com/37678729/100887466-40cac200-34ca-11eb-861e-a98ca4d296cf.gif" alt="Responsive Slideshow" width="100%">

<img src="https://user-images.githubusercontent.com/37678729/100887764-97380080-34ca-11eb-9f3e-3a8292ae0b06.gif" alt="Slideshow with Pagination and Arrows" width="100%">

## Installation:

```properties
npm install --save react-slideshow-with-pagination
```

## How to use:

Import the `SlideshowWithPagination` from `react-slideshow-with-pagination` and just like that you have a fully responsive slideshow with pagination and arrow buttons.

**Note that you can use the library with the pagination and arrow buttons feature (only) or you can use it with the pagination and arrow buttons along with the preset card features** which have almost anything you expect from the slideshow. For example, you can have one card (item) or multiple cards (items) in one screen of the slideshow, and if the width of the screen decreases it will change them to one card per screen. You can control when this happens by passing one of the breakpoint values (`'xs'`, `'sm'`, `'md'`, `'lg'` or `'xl'`) to the `showOneCardForWidthLower` property. And dozens of features that can be found [here](#the-api-documentation).

```JSX
import React from "react";
import SlideshowWithPagination from "react-slideshow-with-pagination";

import Image1 from "../assets/images/image-1.jpg";
import Image2 from "../assets/images/image-2.jpg";
import Image3 from "../assets/images/image-3.jpg";
import Image4 from "../assets/images/image-4.jpg";

const CARDS_DETAILS = [
  { image: Image1, title: "1" },
  { image: Image2, title: "2" },
  { image: Image3, title: "3" },
  { image: Image4, title: "4" },
]

const Slideshow = () => {
  return (
    // Slideshow with preset card features along with pagination and arroww buttons
    <SlideshowWithPagination
      options={CARDS_DETAILS}
      showNumbers={true}
      showDots={true}
      showArrows={true}
      numberOfCardsPerScreen={3}
      showOneCardForWidthLower="sm"
      slideshowContainerMaxWidth={false}
      cardWidth={500}
      cardHeight={300}
    />
    // Slideshow with pagination and arrow buttons feature (only)
    <SlideshowWithPagination
      showNumbers={true}
      showDots={true}
      showArrows={true}
    >
      {CARDS_DETAILS.map((item, index) => (
        <React.Fragment key={index}>
          <img src={item.image} alt={item.title} />
          <p>{item.title}</p>
        </React.Fragment>
      ))}
    </SlideshowWithPagination>
  );
};

export default Slideshow
```

> **Note:** Use `option` property only when you want to have access to the built-in card feature otherwise only pass items as children to slideshow (which in this case you only have pagination and arrows buttons).

## The API documentation:

### The `react-slideshow-with-pagination` API:

> **Important Note:** You have to choose between passing your array (or items) as `children` to the slideshow (which provides only pagination and arrow buttons feature) or passing your array to the `options` property (which then in addition to the pagination and arrow buttons, you also have access to provided cards with dozens of features) because some properties only work when an array is passed to the `options` property. But keep it in mind that you must pass the array to the `options` property only with this accepted format: `[{ image: "imageAddrress", title: "cardTitle" }, ...]`.

| Name                       | Type           | Default                                                                | When does this property work?               | Description                                                                                                                                          |
| -------------------------- | -------------- | ---------------------------------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ----- | ---------------------------- | ------------------------------------------------------------- | --------------------------------------------------------- |
| children                   | node           | -                                                                      | -                                           | Use this property to provide your slides (with this property only pagination and arrow buttons are available).                                       |
| options                    | array          | Accepted format: `[{image: "imageAddrress", title: "cardTitle"}, ...]` | -                                           | Use this property to provide your slides (with this property in addition to pagination and arrow buttons, provided card features are available too). |
| showNumbers                | bool           | `false`                                                                | With both `children` and `options` property | If `true`, the number pagination will be shown under the slideshow.                                                                                  |
| showDots                   | bool           | `false`                                                                | With both `children` and `options` property | If `true`, the dot pagination will be shown under the slideshow.                                                                                     |
| showArrows                 | bool           | `false`                                                                | With both `children` and `options` property | If `true`, two arrow buttons for changing the screen will be shown on the left and right of the slideshow screen.                                    |
| autoplay                   | bool           | `true`                                                                 | With both `children` and `options` property | If `false`, the autoplay behavior will be disabled.                                                                                                  |
| enableMouseEvents          | bool           | `true`                                                                 | With both `children` and `options` property | If `false`, it will disable mouse events. The `enableMouseEvents` property will allow the user to perform the relevant swipe actions with a mouse.   |
| numberOfCardsPerScreen     | number         | `3`                                                                    | Only with `options` property                | It shows the number of cards per each screen (only for width upper than what is set with the `showOneCardForWidthLower` property).                   |
| showOneCardForWidthLower   | string         | `'xs'                                                                  | 'sm'                                        | 'md'                                                                                                                                                 | 'lg'                            | 'xl'` | Only with `options` property | For width lower than this, it shows only one card per screen. |
| slideshowContainerMaxWidth | string         | `false                                                                 | 'xs'                                        | 'sm'                                                                                                                                                 | 'md'                            | 'lg'  | 'xl'`                        | Only with `options` property                                  | Defines the maximum width of the entire slideshow screen. |
| cardsContainerJustify      | string         | `'space-around'`                                                       | Only with `options` property                | Control the distributes space between and around cards (for more than one card per screen) along the main axis.                                      |
| cardWidth                  | number         | `390`                                                                  | Only with `options` property                | Defines the width of each card.                                                                                                                      |
| cardHeight                 | number         | `245`                                                                  | Only with `options` property                | Defines the height of each card                                                                                                                      |
| cardMarginX                | number         | `0`                                                                    | Only with `options` property                | Defines the horizontal margin between cards.                                                                                                         |
| cardMarginY                | number         | `0`                                                                    | Only with `options` property                | Defines the vertical margin between cards.                                                                                                           |
| textColor                  | string         | `'rgba(0, 0, 0, 0.87)'`                                                | Only with `options` property                | Determine the color of the number pagination and the cards title.                                                                                    |
| lightColorBtn              | string         | `'#bdbdbd'`                                                            | Only with `options` property                | Determine the color of the dots and arrow buttons.                                                                                                   |
| darkColorBtn               | string         | `'#616161'`                                                            | Only with `options` property                | Determine the color of the dots and arrow buttons when selected or hovered.                                                                          |
| paginationMarginTop        | number         | `3`                                                                    | Only with `options` property                | Defines the top margin between the pagination (number or dot) and the cards.                                                                         |
| interval                   | number         | `5000`                                                                 | With both `children` and `options` property | Delay between autoplay transitions (in ms).                                                                                                          |
| springConfig               | object         | `{duration: '1s', easeFunction: 'ease-in-out', delay: '0s'}`           | With both `children` and `options` property | This is the config used to create CSS transitions. This is useful to change the dynamic of the transition.                                           |
| direction                  | `'incremental' | 'decremental'`                                                         | `'incremental'`                             | With both `children` and `options` property                                                                                                          | This is the autoplay direction. |

### The `react-swipeable-views` API:

I used [`react-swipeable-views`](https://github.com/oliviertassinari/react-swipeable-views) library for this project. So its properties can be passed to the `react-slideshow-with-pagination` as well. You can find out the full API documentation list of `react-swipeable-views` [here](https://react-swipeable-views.com/api/api/).

## License:

This project is licensed under the terms of the
[MIT](https://github.com/farnaz-kakhsaz/react-slideshow-with-pagination/blob/master/LICENSE) license.
