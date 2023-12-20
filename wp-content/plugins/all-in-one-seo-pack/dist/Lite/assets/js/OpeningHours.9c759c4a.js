import{f as v}from"./links.3e8e8c78.js";import{B as S}from"./Checkbox.7c6e2d91.js";import{B as R}from"./RadioToggle.93a1ca7d.js";import{C as z}from"./Blur.358c8df3.js";import{C as w}from"./SettingsRow.16d577c1.js";import{r as c,o as u,c as g,d as o,w as i,a as s,D as l,t,b as h,f}from"./vue.runtime.esm-bundler.c7867100.js";import{_ as x}from"./_plugin-vue_export-helper.8da217d5.js";import{R as T}from"./RequiredPlans.f78e0586.js";import{C as U}from"./Card.b865c4d6.js";import{C as A}from"./ProBadge.7dd200c8.js";import{C}from"./Index.317ca5d6.js";import{C as k}from"./Cta.c79b927c.js";import{A as V}from"./AddonConditions.e9e2aede.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.ab8f4241.js";import"./Checkmark.881c08fd.js";import"./Row.de10a580.js";import"./addons.de5dcd6e.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./license.23316df2.js";import"./index.3770af44.js";import"./Caret.111317e1.js";import"./Tooltip.216f85ac.js";import"./Slide.80fca05f.js";import"./constants.238e5b7b.js";const B={components:{BaseCheckbox:S,BaseRadioToggle:R,CoreBlur:z,CoreSettingsRow:w},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},F={class:"aioseo-opening-hours-blur"},M={class:"aioseo-col col-xs-12 text-xs-left"},L={class:"aioseo-col col-xs-12 text-xs-left"},G={class:"aioseo-col col-xs-12 text-xs-left mt-16"},N={class:"aioseo-col col-xs-12 text-xs-left"},P={class:"aioseo-col-flex text-xs-left"},I={class:"aioseo-col-day text-xs-left"},q={class:"aioseo-col-hours text-xs-left"},D=s("span",{class:"separator"},"-",-1),E={class:"aioseo-col-alwaysopen text-xs-left"},K={class:"aioseo-col-flex text-xs-left"},W={class:"aioseo-col-day text-xs-left"},Z={class:"aioseo-col-hours text-xs-left"},j=s("span",{class:"separator"},"-",-1),J={class:"aioseo-col-alwaysopen text-xs-left"},Q={class:"aioseo-col-flex text-xs-left"},X={class:"aioseo-col-day text-xs-left"},Y={class:"aioseo-col-hours text-xs-left"},ss=s("span",{class:"separator"},"-",-1),os={class:"aioseo-col-alwaysopen text-xs-left"},es={class:"aioseo-col-flex text-xs-left"},ts={class:"aioseo-col-day text-xs-left"},ns={class:"aioseo-col-hours text-xs-left"},is=s("span",{class:"separator"},"-",-1),ls={class:"aioseo-col-alwaysopen text-xs-left"},as={class:"aioseo-col-flex text-xs-left"},rs={class:"aioseo-col-day text-xs-left"},cs={class:"aioseo-col-hours text-xs-left"},ds=s("span",{class:"separator"},"-",-1),_s={class:"aioseo-col-alwaysopen text-xs-left"},us={class:"aioseo-col-flex text-xs-left"},ps={class:"aioseo-col-day text-xs-left"},ms={class:"aioseo-col-hours text-xs-left"},hs=s("span",{class:"separator"},"-",-1),fs={class:"aioseo-col-alwaysopen text-xs-left"},gs={class:"aioseo-col-flex text-xs-left"},xs={class:"aioseo-col-day text-xs-left"},$s={class:"aioseo-col-hours text-xs-left"},ys=s("span",{class:"separator"},"-",-1),Hs={class:"aioseo-col-alwaysopen text-xs-left"};function Os(n,$,y,m,e,H){const p=c("base-radio-toggle"),d=c("core-settings-row"),_=c("base-toggle"),a=c("base-select"),r=c("base-checkbox"),b=c("core-blur");return u(),g("div",F,[o(b,null,{default:i(()=>[o(d,{name:e.strings.showOpeningHours,class:"info-openinghours-row",align:""},{content:i(()=>[s("div",M,[o(p,{name:"openingHours",modelValue:!0,options:[{label:n.$constants.GLOBAL_STRINGS.no,value:!1},{label:n.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["options"])])]),_:1},8,["name"]),o(d,{name:e.strings.hours,class:"info-hours-row",align:""},{content:i(()=>[s("div",L,[o(_,null,{default:i(()=>[l(t(e.strings.open247),1)]),_:1})]),s("div",G,[o(_,null,{default:i(()=>[l(t(e.strings.use24hFormat),1)]),_:1})]),s("div",N,[s("div",P,[s("div",I,t(e.strings.monday),1),s("div",q,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),D,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",E,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",K,[s("div",W,t(e.strings.tuesday),1),s("div",Z,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),j,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",J,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",Q,[s("div",X,t(e.strings.wednesday),1),s("div",Y,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ss,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",os,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",es,[s("div",ts,t(e.strings.thursday),1),s("div",ns,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),is,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",ls,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",as,[s("div",rs,t(e.strings.friday),1),s("div",cs,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ds,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",_s,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",us,[s("div",ps,t(e.strings.saturday),1),s("div",ms,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),hs,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",fs,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])]),s("div",gs,[s("div",xs,t(e.strings.sunday),1),s("div",$s,[o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"09:00"},null,8,["options"]),ys,o(a,{size:"medium",options:n.$constants.HOURS_24H_FORMAT,modelValue:"17:00"},null,8,["options"])]),s("div",Hs,[o(r,{size:"medium"},{default:i(()=>[l(t(e.strings.open24h),1)]),_:1}),o(r,{size:"medium",class:"closed-label"},{default:i(()=>[l(t(e.strings.closed),1)]),_:1})])])])]),_:1},8,["name"])]),_:1})])}const bs=x(B,[["render",Os]]);const vs={setup(){return{licenseStore:v()}},components:{Blur:bs,RequiredPlans:T,CoreCard:U,CoreProBadge:A,Cta:C},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup informs Google about your business details like name, address, phone number, hours, and price range, which can appear in a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is a %1$s Feature",this.$td),"PRO")}}}},Ss={class:"aioseo-opening-hours"};function Rs(n,$,y,m,e,H){const p=c("core-pro-badge"),d=c("blur"),_=c("required-plans"),a=c("cta"),r=c("core-card");return u(),g("div",Ss,[o(r,{slug:"localBusinessOpeningHours",noSlide:!0},{header:i(()=>[s("span",null,t(e.strings.openingHours),1),o(p)]),default:i(()=>[o(d),o(a,{"cta-link":n.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":e.strings.ctaButtonText,"learn-more-link":n.$links.getUpsellUrl("local-seo",null,n.$isPro?"pricing":"liteUpgrade"),"feature-list":e.features,"align-top":"","hide-bonus":!m.licenseStore.isUnlicensed},{"header-text":i(()=>[l(t(e.strings.ctaHeader),1)]),description:i(()=>[o(_,{addon:"aioseo-local-business"}),l(" "+t(e.strings.locationInfo1),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])]),_:1})])}const O=x(vs,[["render",Rs]]),zs={mixins:[V],components:{OpeningHours:O,Cta:k,Lite:O},data(){return{addonSlug:"aioseo-local-business",strings:{openingHours:this.$t.__("Opening Hours Settings",this.$td)}}}},ws={class:"aioseo-opening-hours"};function Ts(n,$,y,m,e,H){const p=c("opening-hours",!0),d=c("cta"),_=c("lite");return u(),g("div",ws,[n.shouldShowMain?(u(),h(p,{key:0})):f("",!0),n.shouldShowUpdate||n.shouldShowActivate?(u(),h(d,{key:1,"card-slug":"localBusinessOpeningHours","header-text":e.strings.openingHours,"align-top":""},null,8,["header-text"])):f("",!0),n.shouldShowLite?(u(),h(_,{key:2})):f("",!0)])}const to=x(zs,[["render",Ts]]);export{to as default};