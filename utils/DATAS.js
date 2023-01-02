import CONSTANTS from "./CONSTANTS";

const { PHONES, TABS, SIMO, BRANDS } = CONSTANTS;
export const PRODUCT_LIST = [PHONES, TABS, SIMO];

export const PHONE_BRAND_LIST = [
  {
    id: "phonebrand_1",
    title: BRANDS.APPLE,
    img: "applePhone.png",
  },
  {
    id: "phonebrand_2",
    title: BRANDS.SAMSUNG,
    img: "honorPhone.png",
  },
  {
    id: "phonebrand_3",
    title: BRANDS.HONOR,
    img: "samsungPhone.png",
  },
];

export const TAB_BRAND_LIST = [
  {
    id: "tabbrand_1",
    title: BRANDS.APPLE,
    img: "ipad.jpeg",
  },
  {
    id: "tabbrand_2",
    title: BRANDS.SAMSUNG,
    img: "samsungTablet.jpeg",
  },
  {
    id: "tabbrand_3",
    title: BRANDS.LENOVO,
    img: "lenovoTab.jpeg",
  },
];

export const SIMO_LIST = ["Pay Monthly", "Pay as you Go", "Topup"];

export const PHONE_LIST = {
  [BRANDS.APPLE]: [
    {
      id: "phone_apple_1",
      title: "Apple iPhone12",
      img: "iPhone12.jpeg",
      erText:
        "iPhone 12. Now in purple. Pushes everything forward with superfast 5G¹. A14 Bionic, the fastest chip in a smartphone.",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "A14 Bionic chip",
      disp: "6.1-inch Super Retina XDR display",
      price: "Price: £631.47",
      imgObj: {
        path: "apple/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 2,
      },
    },
    {
      id: "phone_apple_2",
      title: "Apple iPhone12 Pro",
      img: "iPhone12Pro.jpeg",
      erText:
        "Ceramic Shield, tougher than any smartphone glass. A14 Bionic chip, the fastest chip ever in a smartphone",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Apple A14 Bionic",
      disp: "6.1-inch Super Retina XDR display",
      price: "Price: £999",
      imgObj: {
        path: "apple/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 2,
      },
    },
    {
      id: "phone_apple_3",
      title: "Apple iPhone13",
      img: "iPhone13.jpeg",
      erText:
        "Cinematic mode adds shallow depth of field and shifts focus automatically in your videos",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "16-core Neural Engine",
      disp: "6.6 AMOLED 2x Display",
      price: "Price: £799",
      imgObj: {
        path: "apple/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 2,
      },
    },
  ],
  [BRANDS.SAMSUNG]: [
    {
      id: "phone_samsung_1",
      title: "Samsung Galaxy S22",
      img: "galaxyS22.jpeg",
      erText:
        "Capture and share every epic moment, day or night, on the dynamic S22",
      erText1:
        "Create unreal content to share with your friends, phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Octa-Core",
      disp: "6.1 Dynamic AMOLED 2X 2340 x 1080 (FHD+) Gorilla Glass 7",
      price: "Price: £699",
      imgObj: {
        path: "samsung/scene.gltf",
        translateY: 1.5,
        translateX: -0.09,
        scale: 0.1,
      },
    },
    {
      id: "phone_samsung_2",
      title: "Samsung Galaxy S22+",
      img: "galaxyS22P.jpeg",
      erText:
        "Experience colour-rich and immersive entertainment on a 6.6-inch Dynamic AMOLED 2X display with 1750nit brightness.",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Octa-Core",
      disp: "6.6 AMOLED 2x Display",
      price: "Price: £749",
      imgObj: {
        path: "samsung/scene.gltf",
        translateY: 1.5,
        translateX: -0.09,
        scale: 0.1,
      },
    },
    {
      id: "phone_samsung_3",
      title: "Samsung Galaxy S22 Ultra",
      img: "ultra.jpeg",
      erText:
        "Break the rules of innovation with the S22 Ultra. Multitask with the most advanced S Pen yet and enjoy epic performance.",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Octa-Core",
      disp: "6.8 AMOLED 2x Display",
      price: "Price: £799",
      imgObj: {
        path: "samsung/scene.gltf",
        translateY: 1.5,
        translateX: -0.09,
        scale: 0.1,
      },
    },
  ],
  [BRANDS.HONOR]: [
    {
      id: "phone_honor_1",
      title: "Honor 70",
      img: "honor70.jpeg",
      erText: "8GB+128GB/Midnight Black/54MP Dual Main Camera IMX800 Sensor",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Qualcomm SM7325-AE Snapdragon 778G+ 5G (6 nm)",
      disp: "6.67 OLED Display",
      price: "Price: £679",
      imgObj: {
        path: "honor/scene.gltf",
        translateY: 1.35,
        translateX: -0.1,
        scale: 0.15,
      },
    },
    {
      id: "phone_honor_2",
      title: "Honor Magic4 Pro",
      img: "magic4.jpeg",
      erText: "8GB+256GB/Black/Powerful 50MP Triple-Camera",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 256 GB ROM",
      proc: "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
      disp: "6.81 OLED Display",
      price: "Price: £1165",
      imgObj: {
        path: "honor/scene.gltf",
        translateY: 1.35,
        translateX: -0.1,
        scale: 0.15,
      },
    },
    {
      id: "phone_honor_3",
      title: "Honor Magic4 Lite 5G",
      img: "magic4Lite.jpeg",
      erText: "5G/6GB+128GB/Ocean Blue/66W HONOR SuperCharge",
      erText1: "phone with 5g compatible",
      specs: "RAM | ROM : 6 GB RAM | 128 GB ROM",
      proc: "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
      disp: "6.6 AMOLED 2x Display",
      price: "Price: £419",
      imgObj: {
        path: "honor/scene.gltf",
        translateY: 1.35,
        translateX: -0.1,
        scale: 0.15,
      },
    },
  ],
};

export const TAB_LIST = {
  [BRANDS.APPLE]: [
    {
      id: "tab_apple_1",
      title: "Apple iPad 10.2",
      img: "iPad10.jpeg",
      erText:
        "The new iPad has a beautiful 10.2-inch Retina display, powerful A13 Bionic chip",
      erText1:
        "An Ultra Wide front camera with Center Stage, and works with Apple Pencil and the Smart Keyboard",
      specs: "RAM | ROM : 3 GB RAM | 64 GB ROM",
      proc: "iPadOS 15, up to iPadOS 15.7, upgradable to iPadOS 16.1",
      disp: "10.2 Retina IPS LCD Display",
      price: "Price: £369",
      imgObj: {
        path: "ipad/scene.gltf",
        translateY: 1.35,
        translateX: -0.09,
        scale: 1.2,
      },
    },
    {
      id: "tab_apple_2",
      title: "Apple iPad Pro 11",
      img: "iPad11.jpeg",
      erText: "iPad Pro 11” features a brilliant 11-inch Liquid Retina display",
      erText1:
        "A stunning dual camera system, and all-day battery life, with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "iPadOS 16.1 Apple GPU (10-core graphics)",
      disp: "11.0 Liquid Retina IPS LCD, 120Hz, HDR10, Dolby Vision, 600 nits Display",
      price: "Price: £999",
      imgObj: {
        path: "ipad/scene.gltf",
        translateY: 1.35,
        translateX: -0.09,
        scale: 1.2,
      },
    },
    {
      id: "tab_apple_3",
      title: "Apple iPad Pro 12.9",
      img: "iPad12.jpeg",
      erText:
        "iPad Pro 12.9” boasts a big and beautiful 12.9-inch Liquid Retina XDR display with ProMotion",
      erText1: "with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "iPadOS 16.1 Apple GPU (10-core graphics)",
      disp: "12.9 Liquid Retina XDR mini-LED LCD, 120Hz, HDR10, Dolby Vision, 1000 nits (typ), 1600 nits (peak) Display",
      price: "Price: £1249",
      imgObj: {
        path: "ipad/scene.gltf",
        translateY: 1.35,
        translateX: -0.09,
        scale: 1.2,
      },
    },
  ],
  [BRANDS.SAMSUNG]: [
    {
      id: "tab_samsung_1",
      title: "Samsung Galaxy Tab A7 Lite",
      img: "a7lite.jpeg",
      erText: "Galaxy Tab A7 helps you master the art of multi-tasking",
      erText1:
        "Keeps you entertained with a wide 10.4-inch crystal-clear display",
      specs: "RAM | ROM : 3 GB RAM | 32 GB ROM",
      proc: "Android 11, upgradable to Android 12, One UI 4.1",
      disp: "8.7 TFT LCD Display",
      price: "Price: £140",
      imgObj: {
        path: "microsoft_tablet/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 1.2,
      },
    },
    {
      id: "tab_samsung_2",
      title: "Samsung Galaxy Tab S6 Lite",
      img: "s6lite.jpeg",
      erText:
        "The Samsung Tab S6 Lite entertains the whole family, at home or on the road",
      erText1: "With a huge display and superb AKG sound.",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Android 12, One UI 4.0",
      disp: "10.4 TFT LCD Display",
      price: "Price: £799",
      imgObj: {
        path: "microsoft_tablet/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 1.2,
      },
    },
    {
      id: "tab_samsung_3",
      title: "Samsung Galaxy Tab S8 Ultra",
      img: "s8ultra.jpeg",
      erText:
        "Immerse yourself in vibrant entertainment with the S8 Ultra’s huge 14.6 inches display",
      erText1: "Eye-popping Super AMOLED technology, with 5g compatible",
      specs: "RAM | ROM : 8 GB RAM | 128 GB ROM",
      proc: "Android 12, upgradable to Android 13, One UI 5",
      disp: "14.6 Super AMOLED, 120Hz, HDR10+ Display",
      price: "Price: £949",
      imgObj: {
        path: "microsoft_tablet/scene.gltf",
        translateY: 1.5,
        translateX: -0.1,
        scale: 1.2,
      },
    },
  ],
  [BRANDS.LENOVO]: [
    {
      id: "tab_lenovo_1",
      title: "Tab K10",
      img: "k10.webp",
      erText:
        "This product from Lenovo has a high-res 1920x1200 screen and provides a storage of 64 GB",
      erText1: "Capture your best moments with an eight-megapixel camera",
      specs: "RAM | ROM : 4 GB RAM | 64 GB ROM",
      proc: "Android 11",
      disp: "10.3 IPS LCD, 330 nits (typ) Display",
      price: "Price: £229",
      imgObj: {
        path: "lenovo/scene.gltf",
        translateY: 1.4,
        translateX: -0.3,
        scale: 0.016,
      },
    },
    {
      id: "tab_lenovo_2",
      title: "Tab M10", // data is for Lenovo Tab M10 HD Gen 2, ToDo: Update- title, image and price
      img: "m10.webp",
      erText: "The Lenovo Tab M10 HD is a 2nd gen 25.6cms (10.1).",
      erText1:
        "HD tablet that packs a wallop while sporting a premium metal design",
      specs: "RAM | ROM : 4 GB RAM | 64 GB ROM",
      proc: "Android 10",
      disp: "10.1 IPS LCD, 400 nits (typ) Display",
      price: "Price: £399",
      imgObj: {
        path: "lenovo/scene.gltf",
        translateY: 1.4,
        translateX: -0.3,
        scale: 0.016,
      },
    },
    {
      id: "tab_lenovo_3",
      title: "Tab M10 Plus",
      img: "m10plus.webp",
      erText: "Lenovo Tab M10 Plus (3rd generation) 10.6 inches",
      erText1: "128GB WiFi Gray + Book Case Gray",
      specs: "RAM | ROM : 4 GB RAM | 128 GB ROM",
      proc: "Android 9.0 (Pie)",
      disp: "6.6 AMOLED 2x Display",
      price: "Price: £257",
      imgObj: {
        path: "lenovo/scene.gltf",
        translateY: 1.4,
        translateX: -0.3,
        scale: 0.016,
      },
    },
  ],
};