(this["webpackJsonpday-01"]=this["webpackJsonpday-01"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),r=c.n(n),l=(c(9),c(3)),i=(c(10),c(0));var j=function(e){for(var t=e.meal.strYoutube.replace("https://www.youtube.com/watch?v=",""),c=[],s=1;s<=20&&e.meal["strIngredient".concat(s)];s++)c.push("".concat(e.meal["strIngredient".concat(s)]," - ").concat(e.meal["strMeasure".concat(s)]));return Object(i.jsxs)("div",{className:"meal-container",children:[Object(i.jsx)("div",{className:"meal-img",children:Object(i.jsx)("img",{src:e.meal.strMealThumb,alt:""})}),Object(i.jsxs)("div",{className:"meal-description",children:[Object(i.jsx)("h2",{className:"meal-header",children:e.meal.strMeal}),Object(i.jsxs)("p",{className:"meal-tags",children:[e.meal.strCategory?Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Category:"})," ",e.meal.strCategory]}):"",e.meal.strArea?Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Area:"})," ",e.meal.strArea]}):"",e.meal.strTags?Object(i.jsxs)("span",{children:[Object(i.jsx)("strong",{children:"Tags:"})," ",e.meal.strTags.split(",").join(", ")]}):""]}),Object(i.jsx)("div",{className:"meal-instruction",children:e.meal.strInstructions})]}),Object(i.jsxs)("div",{className:"meal-ingredients",children:[Object(i.jsx)("h3",{children:"Ingredients:"}),Object(i.jsx)("ul",{children:c.map((function(e,t){return Object(i.jsx)("li",{children:e},t)}))}),Object(i.jsx)("h3",{children:"Video Recipe:"}),Object(i.jsx)("div",{className:"video-responsive",children:Object(i.jsx)("iframe",{frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0,title:"video",src:"https://www.youtube.com/embed/".concat(t)})})]})]})};var d=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(null),r=Object(l.a)(n,2),d=r[0],o=r[1];return Object(i.jsxs)("div",{className:"App-container",children:[Object(i.jsxs)("div",{className:"meal-header",children:[Object(i.jsx)("h1",{children:"Feeling Hungry?"}),Object(i.jsx)("h3",{children:"Get a random meal by clicking below"}),Object(i.jsx)("p",{onClick:function(){fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){a(e.meals[0])}),(function(e){o({error:e})}))},className:"get-btn",children:"Get Meal \ud83c\udf54"})]}),d?Object(i.jsx)("div",{children:d}):c?Object(i.jsx)(j,{meal:c}):Object(i.jsx)("div",{})]})};var o=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{className:"App-header",children:"Mackral's Coding Challenge - #001 of #100Days100Projects"}),Object(i.jsx)("div",{className:"App-content",children:Object(i.jsx)(d,{})}),Object(i.jsx)("footer",{className:"App-footer",children:Object(i.jsxs)("div",{children:["Part of ",Object(i.jsx)("span",{className:"hashtag",children:"#100Days100Projects"})]})})]})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.4e1a312a.chunk.js.map