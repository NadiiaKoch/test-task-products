"use strict";(self.webpackChunktest_task_products=self.webpackChunktest_task_products||[]).push([[45],{8045:function(e,n,i){i.r(n),i.d(n,{HomePage:function(){return H}});var t=i(47313),r=i(34953),c=i(63984),l=i(46417);function d(){return(0,l.jsx)(c.Z,{sx:{width:"100%"},spacing:2,children:(0,l.jsx)(r.Z,{severity:"error",children:"Something went wrong!"})})}var s=i(79176),a=i(57829);function o(){return(0,l.jsx)(a.Z,{sx:{width:"100%"},children:(0,l.jsx)(s.Z,{})})}var u=i(66835),h=i(51629),x=i(70501),g=i(1413),p=i(9289),m=i(78899),j=i(47131),f=i(17551),Z=i(51997),b=i(56352),v=i(56449);function S(e){var n=(0,b.I0)(),i=(0,v.mS)().actions,t=e.numSelected,r=e.selected;return(0,l.jsx)(p.Z,{sx:(0,g.Z)({pl:{sm:2},pr:{xs:1,sm:1}},t>0&&{bgcolor:function(e){return(0,f.Fq)(e.palette.primary.main,e.palette.action.activatedOpacity)}}),children:(0,l.jsx)(m.Z,{title:"Delete",children:(0,l.jsx)(j.Z,{onClick:function(){n(i.removeProduct({ids:r}))},children:(0,l.jsx)(Z.Z,{})})})})}var k=i(23477),w=i(24076),y=i(67478),P=i(46330),C=i(82558),R=i(50282),q=[{id:"id",numeric:!1,disablePadding:!0,label:"id"},{id:"thumbnail",numeric:!1,disablePadding:!1,disableSorting:!0,label:"Photo"},{id:"title",numeric:!1,disablePadding:!1,label:"Title"},{id:"description",numeric:!1,disablePadding:!1,label:"Description"},{id:"price",numeric:!0,disablePadding:!1,label:"Price"},{id:"rating",numeric:!0,disablePadding:!1,label:"Rating"},{id:"stock",numeric:!0,disablePadding:!1,label:"Stock"},{id:"category",numeric:!1,disablePadding:!1,label:"Category"}];function A(e){var n=e.onSelectAllClick,i=e.order,t=e.orderBy,r=e.numSelected,c=e.rowCount,d=e.onRequestSort;return(0,l.jsx)(k.Z,{children:(0,l.jsxs)(w.Z,{children:[(0,l.jsx)(y.Z,{padding:"checkbox",children:(0,l.jsx)(P.Z,{color:"primary",indeterminate:r>0&&r<c,checked:c>0&&r===c,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),q.map((function(e){return(0,l.jsx)(y.Z,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&i,children:e.disableSorting?e.label:(0,l.jsxs)(C.Z,{active:t===e.id,direction:t===e.id?i:"asc",onClick:(n=e.id,function(e){d(e,n)}),children:[e.label,t===e.id?(0,l.jsx)(a.Z,{component:"span",sx:R.Z,children:"desc"===i?"sorted descending":"sorted ascending"}):null]})},e.id);var n}))]})})}var B=i(29439),I=i(53046);function _(e,n,i){return n[i]<e[i]?-1:n[i]>e[i]?1:0}var D=function(){var e=(0,v.mS)().actions,n=(0,b.I0)(),i=(0,b.v9)(I.n),r=i.loading,c=i.error,l=i.productListState,d=t.useState("asc"),s=(0,B.Z)(d,2),a=s[0],o=s[1],u=t.useState("category"),h=(0,B.Z)(u,2),x=h[0],g=h[1],p=t.useState([]),m=(0,B.Z)(p,2),j=m[0],f=m[1],Z=t.useState(0),S=(0,B.Z)(Z,2),k=S[0],w=S[1],y=t.useState(30),P=(0,B.Z)(y,2),C=P[0],R=P[1];(0,t.useEffect)((function(){n(e.getProducts({}))}),[]);var q=function(e,n){var i=e.map((function(e,n){return[e,n]}));return i.sort((function(e,i){var t=n(e[0],i[0]);return 0!==t?t:e[1]-i[1]})),i.map((function(e){return e[0]}))}((null===l||void 0===l?void 0:l.products)||[],function(e,n){return"desc"===e?function(e,i){return _(e,i,n)}:function(e,i){return-_(e,i,n)}}(a,x)).slice(k*C,k*C+C),A=k>0?Math.max(0,(1+k)*C-q.length):0;return{productTotal:(null===l||void 0===l?void 0:l.total)||0,loading:r,error:c,rows:q,order:a,orderBy:x,selected:j,page:k,rowsPerPage:C,emptyRows:A,isSelected:function(e){return-1!==j.indexOf(e)},handleChangeRowsPerPage:function(e){R(parseInt(e.target.value,10)),w(0)},handleClick:function(e,n){var i=j.indexOf(n),t=[];-1===i?t=t.concat(j,n):0===i?t=t.concat(j.slice(1)):i===j.length-1?t=t.concat(j.slice(0,-1)):i>0&&(t=t.concat(j.slice(0,i),j.slice(i+1))),f(t)},handleSelectAllClick:function(e){if(e.target.checked){var n=q.map((function(e){return e.id}));f(n)}else f([])},handleRequestSort:function(e,n){o(x===n&&"asc"===a?"desc":"asc"),g(n)}}};function O(){return(0,l.jsx)(c.Z,{sx:{width:"100%"},spacing:2,children:(0,l.jsx)(r.Z,{severity:"info",children:"No products left"})})}var T=i(57861);function F(e){var n=e.rows,i=e.emptyRows,t=e.isSelected,r=e.handleClick;return(0,l.jsxs)(T.Z,{children:[n.map((function(e,n){var i=t(e.id),c="enhanced-table-checkbox-".concat(n);return(0,l.jsxs)(w.Z,{hover:!0,onClick:function(n){return r(n,e.id)},role:"checkbox","aria-checked":i,tabIndex:-1,selected:i,sx:{cursor:"pointer"},children:[(0,l.jsx)(y.Z,{padding:"checkbox",children:(0,l.jsx)(P.Z,{color:"primary",checked:i,inputProps:{"aria-labelledby":c}})}),(0,l.jsx)(y.Z,{component:"th",id:c,scope:"row",padding:"none",children:e.id}),(0,l.jsx)(y.Z,{align:"left",children:(0,l.jsx)("img",{width:"60px",src:e.thumbnail,alt:e.title})}),(0,l.jsx)(y.Z,{align:"left",children:e.title}),(0,l.jsx)(y.Z,{align:"left",children:e.description}),(0,l.jsx)(y.Z,{align:"right",children:e.price}),(0,l.jsx)(y.Z,{align:"right",children:e.rating}),(0,l.jsx)(y.Z,{align:"right",children:e.stock}),(0,l.jsx)(y.Z,{align:"left",children:e.category})]},e.id)})),i>0&&(0,l.jsx)(w.Z,{style:{height:53*i},children:(0,l.jsx)(y.Z,{colSpan:6})})]})}function z(){var e=D(),n=e.selected,i=e.rows,t=e.order,r=e.orderBy,c=e.emptyRows,d=e.isSelected,s=e.handleClick,o=e.handleSelectAllClick,g=e.handleRequestSort;return(0,l.jsx)(a.Z,{sx:{width:"100%"},children:i.length?(0,l.jsxs)(x.Z,{sx:{width:"100%",mb:2},children:[(0,l.jsx)(S,{selected:n,numSelected:n.length}),(0,l.jsx)(h.Z,{children:(0,l.jsxs)(u.Z,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,l.jsx)(A,{selected:n,numSelected:n.length,order:t,orderBy:r,onSelectAllClick:o,onRequestSort:g,rowCount:i.length}),(0,l.jsx)(F,{isSelected:d,emptyRows:c,rows:i,handleClick:s})]})})]}):(0,l.jsx)(O,{})})}var E=i(65964);function H(){var e=D(),n=e.loading,i=e.error;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(E.ql,{children:[(0,l.jsx)("title",{children:"Products"}),(0,l.jsx)("meta",{name:"description",content:"A Boilerplate application homepage"})]}),n&&!i&&(0,l.jsx)(o,{}),(0,l.jsx)(z,{}),i&&(0,l.jsx)(d,{})]})}}}]);