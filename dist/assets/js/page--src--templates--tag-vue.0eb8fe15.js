(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{229:function(t,e){},236:function(t,e,s){"use strict";var o=s(229),a=s.n(o);e.default=a.a},243:function(t,e,s){"use strict";s.r(e);s(96);var o={metaInfo:function(){return{title:this.$route.params.id}},computed:{posts:function(){return this.$page.tag.belongsTo.edges.map((function(t){return t.node}))}}},a=s(9),n=s(236),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{title:this.$route.params.id}},[s("div",[s("main",[s("h2",{staticClass:"font-displayB"},[t._v("All "+t._s(t.$route.params.id)+" posts")]),t._l(t.posts,(function(e){return s("article",{key:e.id,staticClass:"posts p-4 my-4 bg-white border-l-2 border-secondary rounded"},[s("div",{staticClass:"md:flex mb-4"},[s("h3",{staticClass:"w-3/4 font-display"},[t._v(t._s(e.title))]),s("g-link",{staticClass:"md:flex md:justify-end md:inline-block md:w-1/4",attrs:{to:e.path}},[s("button",{staticClass:"p-2 h-12 bg-white border border-callout font-displayB text-callout font-bold hover:bg-primary hover:text-white hover:border-white shadow-lg rounded"},[t._v("Read more")])])],1),s("div",{staticClass:"flex mb-4 items-end"},[s("p",{staticClass:"w-2/3 no-margin font-mono text-sm"},[t._v(t._s(e.date))]),s("p",{staticClass:"w-1/3 flex justify-end no-margin font-mono text-sm"},[t._v(t._s(e.timeToRead)+" min to read")])]),s("p",{staticClass:"mt-4 font-body"},[t._v(t._s(e.excerpt))])])}))],2)])])}),[],!1,null,null,null);"function"==typeof n.default&&Object(n.default)(i);e.default=i.exports}}]);