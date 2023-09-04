<script>
  import Map from "ol/Map";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import View from "ol/View";
  import { OSM, Vector as VectorSource } from "ol/source";

  import "ol/ol.css";
  import { GeoJSON } from "ol/format";
  //   import geoJson from "../../geoJson/countries.geojson";

  let mapId = 20;
  let map;

  const setupMap = (node) => {
    map = new Map({
      target: node.id,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        // vectorLayer,
        new VectorLayer({
          source: new VectorSource({
            format: new GeoJSON(),
            // features: new GeoJSON().readFeature($geoJson),

            url: "../../geoJson",
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    });
  };
</script>

<section>
  <div id={mapId} class="map" use:setupMap />
</section>

<style>
  .map {
    width: 100%;
    height: 100vh;
  }
</style>
