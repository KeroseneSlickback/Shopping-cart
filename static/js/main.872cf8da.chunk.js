(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{11:function(t,e,i){t.exports={header:"MainNavBar_header__2K9b0",icon:"MainNavBar_icon__1t1rj",navi:"MainNavBar_navi__26ZBI",home:"MainNavBar_home__3iL1s",link:"MainNavBar_link__1JOLs",cart:"MainNavBar_cart__2P3og",span:"MainNavBar_span__2Vnr8"}},14:function(t,e,i){t.exports={item:"ItemBlock_item__2xIlG",image:"ItemBlock_image__3zycY",imageDiv:"ItemBlock_imageDiv__3q70Q",desc:"ItemBlock_desc__1Hrd-",bottomDesc:"ItemBlock_bottomDesc__1iGAw"}},17:function(t,e,i){t.exports={cartDiv:"ShoppingCart_cartDiv__3QEw1",sectionDiv:"ShoppingCart_sectionDiv__QxFyY",checkout:"ShoppingCart_checkout__FrbUZ",totalDiv:"ShoppingCart_totalDiv__1S-fY"}},23:function(t,e,i){t.exports={home:"Home_home__3ojrq",itemGrid:"Home_itemGrid__2wdb0"}},32:function(t,e,i){},33:function(t,e,i){},40:function(t,e,i){"use strict";i.r(e);var a=i(1),c=i(26),n=i.n(c),s=i(13),r=(i(32),i(2)),o=(i(33),i(11)),l=i.n(o),u=i(10),j=i(24),d=i(4),b=i(0),m=Object(a.createContext)({cart:[],totalCart:0,total:0,addToCart:function(t){},removeFromCart:function(t){},itemInCart:function(t){},changeQuantity:function(t){}}),O=function(t){var e=Object(a.useState)([]),i=Object(d.a)(e,2),c=i[0],n=i[1],s=Object(a.useState)(0),r=Object(d.a)(s,2),o=r[0],l=r[1],O=Object(a.useState)(0),h=Object(d.a)(O,2),_=h[0],p=h[1];Object(a.useEffect)((function(){var t=c.reduce((function(t,e){return t+e.quantity}),0);l(t);var e=c.reduce((function(t,e){return t+e.quantity*e.price}),0);p(parseFloat(e).toFixed(2))}),[c]);var v={cart:c,totalCart:o,total:_,addToCart:function(t,e){n((function(i){var a=Object(j.a)(i),c=a.findIndex((function(e){return e.id===t.id}));if(c>=0){var n=i[c].quantity+e;return a.splice(c,1,Object(u.a)(Object(u.a)({},t),{},{quantity:n})),a}return i.concat(Object(u.a)(Object(u.a)({},t),{},{quantity:e}))}))},removeFromCart:function(t){n((function(e){return e.filter((function(e){return e.id!==t}))}))},changeQuantity:function(t,e){n((function(i){var a=Object(j.a)(i),c=a.findIndex((function(e){return e.id===t}));return a.splice(c,1,Object(u.a)(Object(u.a)({},i[c]),{},{quantity:e})),a}))}};return Object(b.jsx)(m.Provider,{value:v,children:t.children})},h=m;var _=function(){var t=Object(a.useContext)(h);return Object(b.jsxs)("header",{className:l.a.header,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:l.a.icon,children:"Shopping Cart App"})}),Object(b.jsxs)("div",{className:l.a.navi,children:[Object(b.jsx)("div",{className:l.a.home,children:Object(b.jsx)(s.b,{to:"/",className:l.a.link,children:Object(b.jsx)("p",{children:"Home"})})}),Object(b.jsx)("div",{className:l.a.cart,children:Object(b.jsxs)(s.b,{to:"/shopping-cart",className:l.a.link,children:[Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABN0lEQVRIx2NgGM7gf/1/GFhMLYN+/1egjkH//0+h3IPO/0kHt/4rYTPqJBlGFWIzKIBkY/7818ZmEOP/K2DpSoLBwPj/LFjlHFwKYsHSL/9zEjAoBqzuy38pXApY/t8HK8nBawzH/4dgVU34FGWBlTz4z4pHTTlYzYv/PPhtew5WFo9Thcj/D2AVGYQCEmLftf+MOOQnQuVZCBnE9/89WGkQVlmV/z/Bsr7EpPEWqJ31WOARsNwB4jKLLYFk+O+/CXEGbSdgUANxxrhCC5QWrF6r+G9FnDFM/y+ADZpJaWFiAzbm838JSg0qBBt0Eau3UKEDfoO8iC5C6gkVEKupYhA4uD3/11HsNWrWcibAbPAZiE1Il0VWKP7/LTQM3mEmAfyyqEqTkIIzlTRZGhlELa9RLbCHEwAAzDjcMcF63UIAAAAASUVORK5CYII=",alt:"Shopping Cart"}),Object(b.jsx)("p",{children:"Shopping Cart"}),Object(b.jsx)("span",{className:l.a.span,children:t.totalCart})]})})]})]})};var p=function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)("main",{children:t.children})]})},v=i(14),x=i.n(v);var f=function(t){return Object(b.jsxs)("div",{className:x.a.item,children:[Object(b.jsx)("div",{className:x.a.imageDiv,children:Object(b.jsx)("img",{className:x.a.image,src:t.img,alt:"productImage"})}),Object(b.jsxs)("div",{className:x.a.desc,children:[Object(b.jsx)("p",{children:t.title}),Object(b.jsxs)("div",{className:x.a.bottomDesc,children:[Object(b.jsxs)("p",{children:["$",t.price]}),Object(b.jsx)("button",{onClick:function(){t.quickView(t.num)},children:"Quick View"})]})]})]})},C=i.p+"static/media/closeSVG.244b6687.svg",g=i(9),N=i.n(g);var A=function(t){var e=Object(a.useState)(1),i=Object(d.a)(e,2),c=i[0],n=i[1];return Object(b.jsxs)("div",{className:N.a.modal,children:[Object(b.jsx)("img",{className:N.a.productImg,src:t.image,alt:t.title}),Object(b.jsx)("h2",{children:t.title}),Object(b.jsx)("p",{children:t.desc}),Object(b.jsxs)("div",{className:N.a.quickBottom,children:[Object(b.jsxs)("h2",{children:["$",t.price]}),Object(b.jsxs)("div",{className:N.a.quantity,children:[Object(b.jsx)("input",{type:"button",value:"-",className:N.a.addMinus,onClick:function(){1!==c&&n((function(t){return t-1}))}}),Object(b.jsx)("input",{type:"number",step:"1",min:"1",max:"",name:"quantity",value:c,onChange:function(t){n(parseInt(t.target.value))},className:N.a.inputQuantity}),Object(b.jsx)("input",{type:"button",value:"+",className:N.a.addMinus,onClick:function(){n((function(t){return t+1}))}})]}),Object(b.jsx)("button",{className:N.a.addCart,onClick:function(){t.onConfirm(t.id,c)},children:"Add to Cart"})]}),Object(b.jsx)("img",{className:N.a.closeBtn,onClick:t.closeModal,src:C,alt:"close"})]})};var y=function(t){return Object(b.jsx)("div",{className:"backdrop",onClick:t.closeModal})},D=i(23),k=i.n(D);var B=function(){var t=Object(a.useContext)(h),e=Object(a.useState)([]),i=Object(d.a)(e,2),c=i[0],n=i[1],s=Object(a.useState)(!1),r=Object(d.a)(s,2),o=r[0],l=r[1],j=Object(a.useState)(),m=Object(d.a)(j,2),O=m[0],_=m[1];function p(t){var e=c.find((function(e){return e.id===t}));l(!0),_(e)}function v(){l(!1)}return Object(a.useEffect)((function(){fetch("https://fakestoreapi.com/products?limit=9").then((function(t){return t.json()})).then((function(t){return n(t)}))}),[]),Object(b.jsxs)("div",{className:k.a.home,children:[Object(b.jsx)("h1",{children:"Our Amazing Selection"}),Object(b.jsx)("div",{className:k.a.itemGrid,children:c.map((function(t){return Object(b.jsx)(f,{num:t.id,img:t.image,title:t.title,price:t.price,quickView:p},t.id)}))}),o?Object(b.jsx)(A,{id:O.id,image:O.image,title:O.title,desc:O.description,price:O.price,closeModal:v,onConfirm:function(e,i){var a=c.find((function(t){return t.id===e}));t.addToCart(Object(u.a)({},a),i),l(!1)}}):null,o?Object(b.jsx)(y,{closeModal:v}):null]})},M=i(5),q=i.n(M);var I=function(t){var e=Object(a.useState)(t.quantity),i=Object(d.a)(e,2),c=i[0],n=i[1],s=Object(a.useContext)(h);return Object(a.useEffect)((function(){s.changeQuantity(t.id,c)}),[c]),Object(b.jsxs)("div",{className:q.a.container,children:[Object(b.jsx)("div",{className:q.a.imageDiv,children:Object(b.jsx)("img",{src:t.image,alt:t.title,className:q.a.image})}),Object(b.jsxs)("div",{className:q.a.infoDiv,children:[Object(b.jsx)("h3",{className:q.a.title,children:t.title}),Object(b.jsxs)("div",{className:q.a.adjustDiv,children:[Object(b.jsxs)("div",{className:q.a.quantity,children:[Object(b.jsx)("input",{type:"button",value:"-",className:q.a.addMinus,onClick:function(){1!==c&&n((function(t){return t-1}))}}),Object(b.jsx)("input",{type:"number",step:"1",min:"1",max:"",name:"quantity",value:c,onChange:function(t){n(parseInt(t.target.value))},className:q.a.inputQuantity}),Object(b.jsx)("input",{type:"button",value:"+",className:q.a.addMinus,onClick:function(){n((function(t){return t+1}))}})]}),Object(b.jsx)("button",{className:q.a.delete,onClick:function(){return e=t.id,void s.removeFromCart(e);var e},children:"Delete"}),Object(b.jsx)("div",{className:q.a.priceDiv,children:Object(b.jsxs)("p",{children:["$",t.price," each"]})})]})]}),Object(b.jsx)("div",{className:q.a.totalDiv,children:Object(b.jsxs)("h4",{children:["Item total: $",parseFloat(t.price*t.quantity).toFixed(2)]})})]})},S=i(17),L=i.n(S);var V=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),i=e[0],c=e[1],n=Object(a.useContext)(h);return Object(a.useEffect)((function(){c(n.cart)}),[n]),Object(b.jsxs)("div",{className:L.a.cartDiv,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Shopping list"})}),Object(b.jsxs)("div",{className:L.a.sectionDiv,children:[Object(b.jsx)("div",{children:i.map((function(t){return Object(b.jsx)(I,{image:t.image,title:t.title,quantity:t.quantity,price:t.price,id:t.id},t.id)}))}),Object(b.jsxs)("div",{className:L.a.totalDiv,children:[Object(b.jsxs)("h2",{children:["Subtotal: $",n.total]}),Object(b.jsx)("button",{className:L.a.checkout,children:"Checkout"})]})]})]})};var w=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(p,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/",exact:!0,children:Object(b.jsx)(B,{})}),Object(b.jsx)(r.a,{path:"/shopping-cart",children:Object(b.jsx)(V,{})})]})})})};n.a.render(Object(b.jsx)(O,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))},5:function(t,e,i){t.exports={container:"CartList_container__3Ctre",imageDiv:"CartList_imageDiv__22CDK",image:"CartList_image__grd8C",infoDiv:"CartList_infoDiv__3AqCA",title:"CartList_title__QWFTa",adjustDiv:"CartList_adjustDiv__1zQvZ",priceDiv:"CartList_priceDiv__3_0yH",totalDiv:"CartList_totalDiv__IRKdF",quantity:"CartList_quantity__ZIB4K",addMinus:"CartList_addMinus__2McaB",inputQuantity:"CartList_inputQuantity__mI3CN",delete:"CartList_delete__2nX1O"}},9:function(t,e,i){t.exports={modal:"ViewModal_modal__2nhMJ",productImg:"ViewModal_productImg__4pnDN",closeBtn:"ViewModal_closeBtn__1GwiS",addCart:"ViewModal_addCart__1gTyW",quickBottom:"ViewModal_quickBottom__Y08lc",quantity:"ViewModal_quantity__2XVia",addMinus:"ViewModal_addMinus__1DeTm",inputQuantity:"ViewModal_inputQuantity__dA-Iz"}}},[[40,1,2]]]);
//# sourceMappingURL=main.872cf8da.chunk.js.map