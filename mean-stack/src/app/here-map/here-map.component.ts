import {Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit} from '@angular/core';

declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
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
    const ui = H.ui.UI.createDefault(map, defaultLayers);

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

  }

}
