import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {SvgType} from '@app/shared/interfaces/svg-types.enum';

declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss']
})
export class HereMapComponent implements OnInit, AfterViewInit {

  @ViewChild('map')
  public mapElement!: ElementRef;
  // ! removes null and undefined from the type

  @Input()
  private _apikey: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  @Input()
  public width: any;

  @Input()
  public height: any;

  ui: any;

  markerIconMarkup = '<svg class="map-marker" width="96px" height="96px" viewBox="0 -8 480 480" xmlns="http://www.w3.org/2000/svg"><path d="m472 194.335938v-2.335938c0-70.691406-57.308594-128-128-128h-208c-70.691406 0-128 57.308594-128 128v112c0 70.691406 57.308594 128 128 128h208c70.691406 0 128-57.308594 128-128zm0 0" fill="#c3c5c7"/><path d="m136 64h208c70.691406 0 128 57.308594 128 128s-57.308594 128-128 128h-208c-70.691406 0-128-57.308594-128-128s57.308594-128 128-128zm0 0" fill="#d1d4d6"/><path d="m136 288c-53.019531 0-96-42.980469-96-96s42.980469-96 96-96h208c53.019531 0 96 42.980469 96 96s-42.980469 96-96 96zm0 0" fill="#4398d1"/><g fill="#d1d4d6"><path d="m232 0h16v80h-16zm0 0"/><path d="m152 0h16v80h-16zm0 0"/><path d="m392 8h16v80h-16zm0 0"/><path d="m312 0h16v80h-16zm0 0"/><path d="m72 8h16v80h-16zm0 0"/></g><path d="m248 0h32v32h-32zm0 0" fill="#e3584b"/><path d="m168 0h32v32h-32zm0 0" fill="#e3584b"/><path d="m408 8h32v32h-32zm0 0" fill="#e3584b"/><path d="m328 0h32v32h-32zm0 0" fill="#e3584b"/><path d="m88 8h32v32h-32zm0 0" fill="#e3584b"/><path d="m476.28125 255.078125c2.433594-10.179687 3.679688-20.609375 3.71875-31.078125 0-4.417969-3.582031-8-8-8s-8 3.582031-8 8c-.035156 37.699219-17.820312 73.183594-48 95.777344v-15.777344c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v26.046875c-17.242188 9.167969-36.472656 13.960937-56 13.953125h-96v-24c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v24h-96c-19.527344.007812-38.757812-4.785156-56-13.953125v-26.046875c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v15.777344c-30.179688-22.59375-47.964844-58.078125-48-95.777344 0-4.417969-3.582031-8-8-8s-8 3.582031-8 8c.0390625 10.46875 1.285156 20.898438 3.71875 31.078125-2.28125 1.417969-3.6835938 3.898437-3.71875 6.585937v2.335938c.0429688 46.867188 24.230469 90.402344 64 115.199219v36.800781c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-28.207031c17.578125 8.027343 36.675781 12.191406 56 12.207031h208c19.324219-.015625 38.421875-4.179688 56-12.207031v28.207031c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-36.800781c39.769531-24.796875 63.957031-68.332031 64-115.199219v-2.335938c-.035156-2.6875-1.4375-5.167968-3.71875-6.585937zm-456.089844 39.867187c11.007813 17.921876 25.996094 33.066407 43.808594 44.253907v20.609375c-21.433594-16.128906-36.851562-38.960938-43.808594-64.863282zm323.808594 89.054688h-208c-19.527344.007812-38.757812-4.785156-56-13.953125v-22.253906c17.578125 8.027343 36.675781 12.191406 56 12.207031h208c19.324219-.015625 38.421875-4.179688 56-12.207031v22.253906c-17.242188 9.167969-36.472656 13.960937-56 13.953125zm72-24.222656v-20.578125c17.808594-11.179688 32.796875-26.3125 43.808594-44.222657-6.96875 25.878907-22.386719 48.6875-43.808594 64.800782zm0 0" fill="#b1b3b5"/><path d="m120 352h240v112h-240zm0 0" fill="#c3c5c7"/><path d="m120 344h240v48h-240zm0 0" fill="#d1d4d6"/><path d="m240 424c8.835938 0 16 7.164062 16 16v24h-32v-24c0-8.835938 7.164062-16 16-16zm0 0" fill="#a5a6a8"/><path d="m304 424c8.835938 0 16 7.164062 16 16v24h-32v-24c0-8.835938 7.164062-16 16-16zm0 0" fill="#a5a6a8"/><path d="m176 424c8.835938 0 16 7.164062 16 16v24h-32v-24c0-8.835938 7.164062-16 16-16zm0 0" fill="#a5a6a8"/><path d="m136 288h208c31.65625-.015625 61.269531-15.640625 79.144531-41.769531 15.996094-32.753907 9.960938-72.003907-15.144531-98.4375v-27.144531c-4.917969-4.425782-10.28125-8.332032-16-11.65625v25.34375c-5.039062-3.28125-10.398438-6.039063-16-8.222657v-24.511719c-5.203125-1.851562-10.554688-3.238281-16-4.152343v24.078125c-5.277344-.996094-10.632812-1.507813-16-1.527344v-24h-16v24h-16v-24h-16v24h-16v-24h-16v24h-16v-24h-16v24h-16v-24h-16v24h-16v-24h-16v24h-16v-24h-16v24c-5.367188.019531-10.722656.53125-16 1.527344v-24.078125c-5.445312.914062-10.796875 2.300781-16 4.152343v24.511719c-5.601562 2.183594-10.960938 4.941407-16 8.222657v-25.34375c-5.71875 3.324218-11.082031 7.230468-16 11.65625v27.144531c-25.105469 26.433593-31.140625 65.683593-15.144531 98.4375 17.875 26.128906 47.488281 41.753906 79.144531 41.769531zm-64-112.800781v48.800781h16v-69.511719c4.816406-4.335937 10.199219-7.996093 16-10.886719v32.398438h16v-38.144531c5.246094-1.214844 10.613281-1.839844 16-1.855469v24h16v-24h16v24h16v-24h16v24h16v-24h16v24h16v-24h16v24h16v-24h16v24h16v-24h16v24h16v-24c5.386719.015625 10.753906.640625 16 1.855469v46.144531h16v-40.398438c5.800781 2.890626 11.183594 6.550782 16 10.886719v69.511719h16v-48.800781c11.488281 22.300781 10.519531 48.976562-2.554688 70.382812-13.070312 21.410157-36.359374 34.453125-61.445312 34.417969h-208c-25.085938.035156-48.375-13.007812-61.445312-34.417969-13.074219-21.40625-14.042969-48.082031-2.554688-70.382812zm0 0" fill="#3181bd"/><path d="m136 288c-35.347656 0-64-28.652344-64-64s28.652344-64 64-64h208c35.347656 0 64 28.652344 64 64s-28.652344 64-64 64zm0 0" fill="#fd6d2f"/><path d="m144 192h192v96h-192zm0 0" fill="#88b337"/><path d="m336 184h-192c-4.417969 0-8 3.582031-8 8v96h16v-88h80v16.800781c-15.472656 3.109375-27.652344 15.058594-31.0625 30.46875-3.410156 15.410157 2.59375 31.382813 15.308594 40.730469h47.507812c12.714844-9.347656 18.71875-25.320312 15.308594-40.730469-3.410156-15.410156-15.589844-27.359375-31.0625-30.46875v-16.800781h80v88h16v-96c0-4.417969-3.582031-8-8-8zm-104 94.527344c-9.585938-3.339844-16.007812-12.378906-16.007812-22.527344s6.421874-19.1875 16.007812-22.527344zm32-22.527344c-.042969 10.132812-6.445312 19.148438-16 22.527344v-45.054688c9.554688 3.378906 15.957031 12.394532 16 22.527344zm0 0" fill="#dee1e3"/></svg>';
  markerAnimatedIconMarkup = '<svg version="1.1" width="96px" height="96px" viewBox="0 0 320 320" fill="crimson" stroke="#f00" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  <defs>    <path id="r1">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin"/>    </path>    <path id="r2">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+1s"/>    </path>    <path id="r3">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+2s"/>    </path>    <path id="r4">      <animate id="p1" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+3s"/>    </path>    <path id="r5">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+4s"/>    </path>    <path id="r6">      <animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>      <animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="p1.begin+5s"/>    </path>  </defs>  <use xlink:href="#r1"/>  <use xlink:href="#r1" transform="rotate(60 160 160)"/>  <use xlink:href="#r1" transform="rotate(120 160 160)"/>  <use xlink:href="#r1" transform="rotate(180 160 160)"/>  <use xlink:href="#r1" transform="rotate(240 160 160)"/>  <use xlink:href="#r1" transform="rotate(300 160 160)"/>  <use xlink:href="#r2" transform="rotate(30 160 160)"/>  <use xlink:href="#r2" transform="rotate(90 160 160)"/>  <use xlink:href="#r2" transform="rotate(150 160 160)"/>  <use xlink:href="#r2" transform="rotate(210 160 160)"/>  <use xlink:href="#r2" transform="rotate(270 160 160)"/>  <use xlink:href="#r2" transform="rotate(330 160 160)"/>  <use xlink:href="#r3"/>  <use xlink:href="#r3" transform="rotate(60 160 160)"/>  <use xlink:href="#r3" transform="rotate(120 160 160)"/>  <use xlink:href="#r3" transform="rotate(180 160 160)"/>  <use xlink:href="#r3" transform="rotate(240 160 160)"/>  <use xlink:href="#r3" transform="rotate(300 160 160)"/>  <use xlink:href="#r4" transform="rotate(30 160 160)"/>  <use xlink:href="#r4" transform="rotate(90 160 160)"/>  <use xlink:href="#r4" transform="rotate(150 160 160)"/>  <use xlink:href="#r4" transform="rotate(210 160 160)"/>  <use xlink:href="#r4" transform="rotate(270 160 160)"/>  <use xlink:href="#r4" transform="rotate(330 160 160)"/>  <use xlink:href="#r5"/>  <use xlink:href="#r5" transform="rotate(60 160 160)"/>  <use xlink:href="#r5" transform="rotate(120 160 160)"/>  <use xlink:href="#r5" transform="rotate(180 160 160)"/>  <use xlink:href="#r5" transform="rotate(240 160 160)"/>  <use xlink:href="#r5" transform="rotate(300 160 160)"/>  <use xlink:href="#r6" transform="rotate(30 160 160)"/>  <use xlink:href="#r6" transform="rotate(90 160 160)"/>  <use xlink:href="#r6" transform="rotate(150 160 160)"/>  <use xlink:href="#r6" transform="rotate(210 160 160)"/>  <use xlink:href="#r6" transform="rotate(270 160 160)"/>  <use xlink:href="#r6" transform="rotate(330 160 160)"/></svg>';

  public constructor() { }

  public ngOnInit() { }

  public ngAfterViewInit() {
    const platform = new H.service.Platform({
      'apikey': this._apikey
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.vector.normal.map,
      {
        zoom: 15,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    // enable map controls
    this.ui = H.ui.UI.createDefault(map, defaultLayers);

    // Enable the event system on the map instance:
    const mapEvents = new H.mapevents.MapEvents(map);

    map.addEventListener('tap', function (evt: any) {
      const coord = map.screenToGeo(evt.currentPointer.viewportX,
        evt.currentPointer.viewportY);
      console.log('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
        ((coord.lat > 0) ? 'N' : 'S') +
        ' ' + Math.abs(coord.lng.toFixed(4)) +
        ((coord.lng > 0) ? 'E' : 'W'));
    });

    // Instantiate the default behavior, providing the mapEvents object:
    const behavior = new H.mapevents.Behavior(mapEvents);

    this.addInfoBubble(map, this.ui);

  }

  addInfoBubble(map: any, ui: any) {
    const group = new H.map.Group();

    map.addObject(group);

    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt: any) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      const bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);

    this.addMarkerToGroup(group, {lat: 46.770439, lng: 23.591423},
      '<div style="font-size:16px;padding:20px;color:white;background-color:#1877f2;width:250px;">' +
      '<a style="font-weight: bold;color: white; text-decoration: none"href="http://www.mcfc.co.uk" target="_blank">Manchester City</a>' +
      '</div><div style="padding:20px;background-color: #f9f9f9; font-size:16px;">City of Manchester Stadium<br>Capacity: 48,000</div>', SvgType.SVG);

    this.addMarkerToGroup(group, {lat: 46.780454, lng: 23.601433},
      '<div><a href="http://www.liverpoolfc.tv" target="_blank">Liverpool</a>' +
      '</div><div >Anfield<br>Capacity: 45,362</div>', SvgType.ANIMATED_SVG);
  }

  addMarkerToGroup(group: any, coordinates: any, html: any, type: SvgType) {
    let icon, marker;
    switch (type) {
      case SvgType.ANIMATED_SVG: {
        icon = new H.map.DomIcon(this.markerAnimatedIconMarkup);
        marker = new H.map.DomMarker(coordinates, {icon: icon});
        break;
      }
      case SvgType.SVG: {
        icon =  new H.map.Icon(this.markerIconMarkup);
        marker =  new H.map.Marker(coordinates, {icon: icon});
        break;
      }
    }

    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
  }

}
