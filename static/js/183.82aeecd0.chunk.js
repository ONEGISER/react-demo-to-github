(this["webpackJsonppopulation-arcgis"]=this["webpackJsonppopulation-arcgis"]||[]).push([[183],{1383:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return E}));var r=o(0),i=o(136),l=o(134),s=(o(106),o(2)),a=o(721),n=o(23),c=o(44),p=o(1),y=(o(17),o(12),o(51)),b=o(10),u=o(86),d=o(47),h=o(423),j=o(593),O=o(722),v=o(723),S=o(594),m=o(592),g=o(183),f=o(206),C=o(203),G=o(522),w=o(221),k=o(256);const P=["atom","xml"],_={base:f.a,key:"type",typeMap:{"simple-line":C.a},errorContext:"symbol"},x={base:f.a,key:"type",typeMap:{"picture-marker":G.a,"simple-marker":w.a},errorContext:"symbol"},R={base:f.a,key:"type",typeMap:{"simple-fill":k.a},errorContext:"symbol"};let F=class extends(Object(j.a)(Object(S.a)(Object(O.a)(Object(v.a)(Object(m.a)(Object(a.a)(h.a))))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readFeatureCollections(e,t){return t.featureCollection.layers.forEach((e=>{var t;const o=e.layerDefinition.drawingInfo.renderer.symbol;o&&"esriSFS"===o.type&&(null==(t=o.outline)?void 0:t.style.includes("esriSFS"))&&(o.outline.style="esriSLSSolid")})),t.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(c.m)(this.url,P)||"GeoRSS":e||""}set title(e){this._set("title",e)}load(e){const t=Object(s.l)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(n.p).then((()=>this._fetchService(t))).then((e=>{this.read(e,{origin:"service"})}))),Promise.resolve(this)}async hasDataChanged(){const e=await this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0}async _fetchService(e){var t;const o=this.spatialReference,{data:r}=await Object(l.default)(i.a.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:Object(d.m)(o)?void 0:null!=(t=o.wkid)?t:JSON.stringify(o)},signal:e});return r}_hasGeometry(e){var t,o;return null!=(t=null==(o=this.featureCollections)?void 0:o.some((t=>{var o,r;return(null==(o=t.featureSet)?void 0:o.geometryType)===e&&(null==(r=t.featureSet.features)?void 0:r.length)>0})))&&t}};Object(r.a)([Object(p.b)()],F.prototype,"description",void 0),Object(r.a)([Object(p.b)()],F.prototype,"featureCollections",void 0),Object(r.a)([Object(y.a)("service","featureCollections",["featureCollection.layers"])],F.prototype,"readFeatureCollections",null),Object(r.a)([Object(p.b)({type:u.a,json:{name:"lookAtExtent"}})],F.prototype,"fullExtent",void 0),Object(r.a)([Object(p.b)(g.c)],F.prototype,"id",void 0),Object(r.a)([Object(p.b)(g.e)],F.prototype,"legendEnabled",void 0),Object(r.a)([Object(p.b)({types:_,json:{write:!0}})],F.prototype,"lineSymbol",void 0),Object(r.a)([Object(p.b)({type:["show","hide"]})],F.prototype,"listMode",void 0),Object(r.a)([Object(p.b)({types:x,json:{write:!0}})],F.prototype,"pointSymbol",void 0),Object(r.a)([Object(p.b)({types:R,json:{write:!0}})],F.prototype,"polygonSymbol",void 0),Object(r.a)([Object(p.b)({type:["GeoRSS"]})],F.prototype,"operationalLayerType",void 0),Object(r.a)([Object(p.b)(g.o)],F.prototype,"url",void 0),Object(r.a)([Object(p.b)({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],F.prototype,"title",null),Object(r.a)([Object(p.b)({readOnly:!0,json:{read:!1},value:"geo-rss"})],F.prototype,"type",void 0),F=Object(r.a)([Object(b.a)("esri.layers.GeoRSSLayer")],F);const E=F}}]);
//# sourceMappingURL=183.82aeecd0.chunk.js.map