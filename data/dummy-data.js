import Gallery from "../models/gallery";
import Category from "../models/category";
import Image from "../models/image";

export const CATEGORIES = [
  new Category(
    "c1",
    "Japan",
    "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
    "JapanGallery"
  ),
  new Category(
    "c2",
    "Canada",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxQj1ii5I3JW0fhYoMrjCOwSDT4gz969fQKQ&usqp=CAU",
    "CanadaGallery"
  ),
];

const CanadaGallery = [
  new Gallery(
    "canada1",
    "Montreal",
    "https://www.outfrontmedia.ca/-/media/images/ofmcanada/markets/montreal/montreal-hero.jpg",
    10,
    [
      new Image(
        "montreal1",
        "",
        "https://ville.montreal.qc.ca/affaires/img/skyline-1600.jpg"
      ),
      new Image(
        "montreal2",
        "",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f2/6b/caption.jpg?w=600&h=400&s=1"
      ),
    ]
  ),
  new Gallery(
    "canada2",
    "Ontario",
    "https://www.immigration.ca/wp-content/uploads/2018/01/Ontario-13.jpg",
    13,
    [
      new Image(
        "ontario1",
        "",
        "https://www.thoughtco.com/thmb/D6wqoW9xFydBCxG9vkQJ1P7bm-c=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-685015187-597dd84a519de2001182016b.jpg"
      ),
      new Image(
        "ontario2",
        "",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/a2/ontario.jpg?w=1100&h=600&s=1"
      ),
    ]
  ),
  new Gallery(
    "canada3",
    "Ottawa",
    "https://www.canadianbusiness.com/wp-content/uploads/2019/09/G500-REGION-OTTAWA-960x540.jpg",
    8,
    [
      new Image(
        "ottawa1",
        "",
        "https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20200624134121&hash=69328985F09305B8D5FFD44766B77D53"
      ),
      new Image(
        "ottawa2",
        "",
        "https://www.magazinediscover.com/wp-content/uploads/2019/12/OTTAWA-3.jpg"
      ),
    ]
  ),
];

const JapanGallery = [
  new Gallery(
    "japan1",
    "Tokyo",
    "https://japan-magazine.jnto.go.jp/jnto2wm/wp-content/uploads/1608_special_TOTO_main.jpg",
    6,
    [
      new Image(
        "tokyo1",
        "",
        "https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg"
      ),
      new Image(
        "tokyo2",
        "",
        "https://i0.wp.com/www.director.co.uk/wp-content/uploads/Tokyo-city-landscape.jpg?fit=1000%2C500&ssl=1"
      ),
    ]
  ),
  new Gallery(
    "japan2",
    "Osaka",
    "https://www.budgetdirect.com.au/blog/wp-content/uploads/2018/03/Japan-Travel-Guide.jpg",
    9,
    [
      new Image(
        "osaka1",
        "",
        "https://img.itinari.com/pages/images/original/0afe2310-ecf1-42ae-ba94-c6d9276d858b-istock-522473665.jpg?ch=DPR&dpr=1&w=1600&s=6b2e0ee23c973a0d07e3e44fb4bc1251"
      ),
      new Image(
        "osaka2",
        "",
        "https://ayfnhq.org/wp-content/uploads/2018/11/osaka-3-1130x650.jpg"
      ),
    ]
  ),
];

export const ALL_GALLARIES = [
  { id: "CanadaGallery", galleries: CanadaGallery },
  { id: "JapanGallery", galleries: JapanGallery },
];
