(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[5],{106:function(e,t,r){e.exports={ContainerSlider:"Slider_ContainerSlider__3P0HM",Img:"Slider_Img__3KBVZ",ImgMobile:"Slider_ImgMobile__1XC8t",SlideFirst:"Slider_SlideFirst__2OTrE",Slide:"Slider_Slide__1OCNr",SlideActive:"Slider_SlideActive__2QLbt",BtnSlide:"Slider_BtnSlide__2_11g",Prev:"Slider_Prev__3MTY5",Next:"Slider_Next__2J60z",DotContainer:"Slider_DotContainer__PK6JH",Dot:"Slider_Dot__3QN_a",ActiveDot:"Slider_ActiveDot__tcerd"}},109:function(e,t,r){e.exports={ProductsListContainer:"ProductsPage_ProductsListContainer__tSLyb",DisplayProducts:"ProductsPage_DisplayProducts__3zcts",Products:"ProductsPage_Products__1OAxN",BgImage:"ProductsPage_BgImage__3strI",Image:"ProductsPage_Image__1MZEE",ProductContainer:"ProductsPage_ProductContainer__3fyOt",CatBig:"ProductsPage_CatBig__3TuXn",Heart:"ProductsPage_Heart__2W2Bf",ProductImg:"ProductsPage_ProductImg__1DPcY",Color:"ProductsPage_Color__ul2yO",Variants:"ProductsPage_Variants__2FYUY",Desc:"ProductsPage_Desc__29Eg3",Notes:"ProductsPage_Notes__1giFd",LearnMore:"ProductsPage_LearnMore__100NC",MobileTitle:"ProductsPage_MobileTitle__1sxkm",mymove:"ProductsPage_mymove__12Qk7"}},110:function(e,t,r){e.exports={TopSlider:"TopSlider_TopSlider__1mSoa"}},124:function(e,t,r){"use strict";r.r(t);var i=r(31);var a=r(1),n=r(2),c=r(23),s=r(109),o=r.n(s),l=r(110),d=r.n(l),u=r(3),m=r(106),b=r.n(m),j=r(39),g=r(28),_=r(0);function v(e){var t=e.direction,r=e.moveSlide;return Object(_.jsx)("button",{onClick:r,className:"next"===t?[b.a.BtnSlide,b.a.Next].join(" "):[b.a.BtnSlide,b.a.Prev].join(" "),children:Object(_.jsx)("img",{src:"next"===t?g.a:j.a,alt:"next"===t?">":"<"})})}function h(e){var t=e.imgs,r=t.length,i=Object(a.useState)(1),n=Object(u.a)(i,2),c=n[0],s=n[1];Object(a.useEffect)((function(){var e=setTimeout((function(){c!==r?s((function(e){return e+1})):c===r&&s(1)}),4e3);return function(){clearTimeout(e)}}),[c,r]);return Object(_.jsxs)("div",{className:b.a.ContainerSlider,children:[t.map((function(e,t){return 0===t?Object(_.jsxs)("div",{className:[b.a.SlideFirst,c===t+1?b.a.SlideActive:null].join(" "),children:[Object(_.jsx)("img",{src:e.web,alt:"opps",width:"100%",height:"100%",className:b.a.Img}),Object(_.jsx)("img",{src:e.web,alt:"opps",width:"100%",className:b.a.ImgMobile})]},e.web):Object(_.jsxs)("div",{className:[b.a.Slide,c===t+1?b.a.SlideActive:null].join(" "),children:[Object(_.jsx)("img",{src:e.web,alt:"opps",width:"100%",height:"100%",className:b.a.Img}),Object(_.jsx)("img",{src:e.web,alt:"opps",width:"100%",className:b.a.ImgMobile})]},e.web)})),Object(_.jsx)(v,{moveSlide:function(){c!==r?s(c+1):c===r&&s(1)},direction:"next"}),Object(_.jsx)(v,{moveSlide:function(){1!==c?s(c-1):1===c&&s(r)},direction:"prev"}),Object(_.jsx)("div",{className:b.a.DotContainer,children:Array.from({length:r}).map((function(e,t){return Object(_.jsx)("div",{onClick:function(){return function(e){s(e)}(t+1)},className:[b.a.Dot,c===t+1?b.a.ActiveDot:null].join(" ")},t)}))})]})}var f={"water-softener":[{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694617/rein/softner/12_a81orx.jpg",mobile:""},{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694612/rein/softner/13_f5btut.jpg",mobile:""}],"water-purifiers":[{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694673/rein/undersink/7_txxf88.jpg",mobile:""},{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694670/rein/undersink/8_cw386g.jpg",mobile:""},{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694669/rein/undersink/9_elbknr.jpg",mobile:""},{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694665/rein/undersink/10_qrglxc.jpg",mobile:""},{web:"https://res.cloudinary.com/ishandev/image/upload/v1638694661/rein/undersink/11_1_ptb765.jpg",mobile:""}]};var p=function(){var e=Object(n.h)();return Object(_.jsx)("section",{className:d.a.TopSlider,children:Object(_.jsx)(h,{imgs:f[e.name]})})},O=r(60);t.default=function(){var e=Object(n.h)(),t="blue";switch(t){case"yellow":t="#ffaa4e";break;case"blue":t="#2189ff";break;case"red":t="#ef3434";break;default:t="blue"}var r,a=[],s=function(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=Object(i.a)(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,c=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw c}}}}(c.a);try{for(s.s();!(r=s.n()).done;){var l=r.value;e.name===l.route&&(a=l.product)}}catch(u){s.e(u)}finally{s.f()}var d=a.map((function(e){return Object(_.jsxs)("div",{className:o.a.Products,children:[Object(_.jsx)("div",{className:o.a.BgImage,style:{backgroundImage:""!==e.bimg?"url(".concat("/react"+e.bimg):"url(".concat("/react","/Imgs/img",1,".png")}}),Object(_.jsxs)("div",{className:o.a.ProductContainer,children:[Object(_.jsx)("div",{className:o.a.CatBig,style:{backgroundColor:t},children:"NEW"}),Object(_.jsx)("div",{className:o.a.Heart,children:Object(_.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABdUlEQVRIie3Uz0pVURQG8J/eQYhNnIghoYEOAnOUolAjMQmnOsqpTnwB50FEL5BJjQVHgk2j7Ama+ADhH5o48V+i4Glw1uZc45zr9d4a1QeLfTjrW9+39jl7L/6jBTzAO+ziEnt4j6E6zjA+RO4yuKtR2xAzOEZWEhdYxFI8l3GO8KxR50l8C2PoxkjsKMNVRIY1PArOGD7WmQyUGSSRrYoGlusMlis4yeRtWXI3ko+rtoiViCqMh8b3suR5JLsbCNyEu6HxM73orEvuxTrYhkGqTVrXDL7G+qINg4VYt8uSE/LtHaO/BfH7OJEfgvEq0kaYfELtFuI1fI7a9UbEXhwEcbVJ8Q75ncjwA303FTzFWRS8bMLgVXDP8KTJpkwrju3r6PJ3dOCNYozMNiueMK+YOWuu/5Oa4rNcYO624glTivm0iS7cURyGUzxvVTxhEoch+CUii3eT7YonPJTPlzSW9zH6p8QT7uEbduSX6q+gJ+Ifwi/RUWkZqr7ftAAAAABJRU5ErkJggg==",alt:""})}),Object(_.jsx)("div",{className:o.a.ProductImg,children:Object(_.jsx)("img",{src:"/react"+e.Pimg,alt:""})}),Object(_.jsx)("div",{children:Object(_.jsx)("div",{className:o.a.MobileTitle,children:e.name})}),Object(_.jsxs)("div",{className:o.a.Variants,children:["Variants:",Object(_.jsx)("div",{children:e.types.map((function(e){return Object(_.jsx)("div",{children:e},e)}))})]}),Object(_.jsx)("div",{className:o.a.Desc,children:e.sub}),Object(_.jsx)("ul",{className:o.a.Notes,children:e.points.map((function(e){return Object(_.jsx)("li",{children:e},e)}))}),Object(_.jsx)("div",{className:o.a.LearnMore,children:"Learn More"})]})]},e.name)}));return Object(_.jsxs)("main",{className:o.a.ProductsPage,children:[Object(_.jsx)(p,{}),Object(_.jsx)("section",{className:o.a.ProductsListContainer,children:d}),Object(_.jsx)(O.a,{})]})}}}]);
//# sourceMappingURL=5.78592a58.chunk.js.map