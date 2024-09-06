import logo from './logo.png'
import add_icon from './add_icon.png'
import order_icon from './order_icon.png'
import profile_image from './profile_image.png'
import upload_area from './upload_area.png'
import parcel_icon from './parcel_icon.png'


export const url = 'http://localhost:4000'

import basket_icon from './basket_icon.png'
import lo from './lo.png'
import search_icon from './search_icon.png'
import menu_1 from './Tajin.jpeg'
import menu_2 from './Couscous.jpeg'
import menu_3 from './Briouate.jpeg'
import menu_4 from './Harira.jpeg'
import menu_5 from './Msimnat.jpeg'
import menu_7 from './Passtilla.jpeg'

import Chicken_Rfissa from './Chicken Rfissa.jpeg'
import seffa from './seffa.jpeg'
import Tanjia_Marrakchia from './Tanjia Marrakchia.jpeg'
import Couscous from './Couscous.jpeg'
import Azkif from './Azkif.jpeg'
import Bastilla from './Bastilla.jpeg'


import Strawberries from './Strawberries.jpg'
import Lemon from './Lemon.jpg'
import Spinach from './Spinach.jpg'
import Peas from './Peas.jpg'
import Asparagus from './Asparagus.jpg'
import  Blueberry from './Blueberry.jpg'



import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import rating_starts from './rating_starts.png'


import Table5 from './Table_5.jpg'
import Table4 from './Table_4.jpeg'
import Table3 from './Table_3.jpeg'
import Table2 from './Table_2.jpeg'
import Table1 from './Table_1.jpeg'


export const table_list = [
    {
        _id: "1",
        name: "Table 1",
        image: Table1,

    },
    {
        _id: "2",
        name: "Table 2",
        image: Table2,

    }, {
        _id: "3",
        name: "Table 3",
        image: Table3,

    }, {
        _id: "4",
        name: "Table 4",
        image: Table4,

    }, {
        _id: "5",
        name: "Table 5",
        image: Table5,

    }]


export const assets = {
    logo,
    lo,
    basket_icon,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    add_icon,
    order_icon,
    profile_image,
    upload_area,
    parcel_icon
    
   
    
      
}

export const saison_Ingr = [
    {
        _id: "1",
        name: "Asparagus",
        image: Asparagus
    },
    
    {
        _id: "3",
        name: "Peas",
        image: Peas
    },
    {
        _id: "4",
        name: "Spinach",
        image: Spinach
    },
    {
        _id: "5",
        name: "Lemon",
        image: Lemon
    },
    {
        _id: "6",
        name: "Blueberry",
        image: Blueberry

    },
    
    
    {
        _id: "9",
        name: "Strawberries",
        image: Strawberries
    }]

export const menu_list = [
    {
        menu_name: "Tajin",
        menu_image: menu_1
    },
    {
        menu_name: "Couscous",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Harira",
        menu_image: menu_4
    },
    {
        menu_name: "Breads",
        menu_image: menu_5
    },
    {
        menu_name: "Pastilla",
        menu_image: menu_7
    }]

export const food_list = [
    {
        _id: "1",
        name: "Chicken Rfissa",
        image: Chicken_Rfissa,
        price: 145,
        description: "Moroccan Chicken Rfissa Trid with Chicken and Lentils.",
        category: ""
    },
    {
        _id: "2",
        name: "Seffa",
        image: seffa,
        price: 130,
        description: "Moroccan Seffa with cinamon, almonds and suggar.",
        category: ""
    }, {
        _id: "3",
        name: "Tanjia Marrakchia",
        image: Tanjia_Marrakchia,
        price: 100,
        description: "Tanjia of beef with shank, lemon, and numerous spices.",
        category: ""
    }, {
        _id: "4",
        name: "Moroccan Couscous",
        image: Couscous,
        price: 80,
        description: "Delicious couscous with seven vegitables.",
        category: ""
    }, {
        _id: "5",
        name: "Moroccan Soup",
        image: Azkif,
        price: 50,
        description: "Soup with chickpeas, beef, or lamb stew meat, and rice.",
        category: ""
    }, {
        _id: "6",
        name: "Pastilla",
        image: Bastilla,
        price: 160,
        description: "Seafood Bastilla with crispy pastry, calamari and fish filling.",
        category: ""
    }]


    export const foodItems = [
        { id: 1,image: seffa, name: "Tomato Soup", category: "Soup", price: 100, amount: 1,description: "A classic tomato soup with fresh tomatoes, herbs, and spices." },
        { id: 2,image: Bastilla, name: "Chicken Noodle Soup", category: "Soup", price: 120,amount: 1, description: "Hearty chicken noodle soup made with tender chicken" },
        { id: 3,image: Azkif, name: "Chocolate Cake", category: "Desserts", price: 80,amount: 1, description: "Decadent chocolate cake topped with rich chocolate ganache." },
        { id: 4,image: Chicken_Rfissa, name: "Cheesecake", category: "Desserts", price: 90, amount: 1,description: "Creamy cheesecake with a graham cracker crust." },
        { id: 5,image: Blueberry, name: "Orange Juice", category: "Juices", price: 40,amount: 1, description: "Freshly squeezed orange juice, packed with Vijimin C." },
        { id: 6,image: Strawberries, name: "Apple Juice", category: "Juices", price: 40,amount: 1, description: "Refreshing apple juice made from crisp, ripe apples." },
        { id: 7,image: Lemon, name: "Caesar Salad", category: "Juices", price: 85, amount: 1,description: "Classic Caesar salad with romaine lettuce, croutons." },
        { id: 8,image: Asparagus, name: "Margherita Pizza", category: "Tagine", price: 110, amount: 1,description: "Traditional Margherita pizza topped with tomato sauce." },
        { id: 9,image: Peas, name: "Grilled Salmon", category: "Soup", price: 150,amount: 1, description: "Grilled salmon fillet served with seasonal vegetables." },
        { id: 10,image: Peas, name: "Beef Burger", category: "Tagine", price: 130, amount: 1,description: "Juicy beef burger topped with lettuce, tomato, onion." },
    ];