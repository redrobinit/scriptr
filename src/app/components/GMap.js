App.Components.GMap = React.createClass({
    map: null,
    marker: null,
    infoWindow: null,

    render: function() {
        return (
            <div className="GMap">
                <div ref="map_canvas"></div>
            </div>
        );
    },

    componentDidMount: function() {
        this.map = this.createMap();
        this.marker = this.createMarker();
        this.infoWindow = this.createInfoWindow();

        google.maps.event.addListener(this.map, 'zoom_changed', this.handleZoomChange);
        google.maps.event.addListener(this.map, 'dragend', this.handleDragEnd);
    },

    createMap: function() {
        var coords = this.props.coords;
        var mapOptions = {
            minZoom: 9,
            zoom: 10,
            center: new google.maps.LatLng(this.props.coords.lat, this.props.coords.lon)
        };

        return new google.maps.Map(this.refs.map_canvas.getDOMNode(), mapOptions);
    },

    createInfoWindow: function() {
        var content = '<div class="info-window">Content</div>';
        return new google.mapx.InfoWindow({
            map: this.map,
            anchor: this.marker,
            content: content
        });
    },

    handleDragEnd: function() {
    },

    handleZoomChange: function() {
    }
});
