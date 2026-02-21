var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_BeforeResurvey_1 = new ol.format.GeoJSON();
var features_BeforeResurvey_1 = format_BeforeResurvey_1.readFeatures(json_BeforeResurvey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BeforeResurvey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BeforeResurvey_1.addFeatures(features_BeforeResurvey_1);
var lyr_BeforeResurvey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BeforeResurvey_1, 
                style: style_BeforeResurvey_1,
                popuplayertitle: 'Before Resurvey',
                interactive: true,
                title: '<img src="styles/legend/BeforeResurvey_1.png" /> Before Resurvey'
            });
var format_AfterResurvey_2 = new ol.format.GeoJSON();
var features_AfterResurvey_2 = format_AfterResurvey_2.readFeatures(json_AfterResurvey_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AfterResurvey_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AfterResurvey_2.addFeatures(features_AfterResurvey_2);
var lyr_AfterResurvey_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AfterResurvey_2, 
                style: style_AfterResurvey_2,
                popuplayertitle: 'After Resurvey',
                interactive: true,
                title: '<img src="styles/legend/AfterResurvey_2.png" /> After Resurvey'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_BeforeResurvey_1.setVisible(true);lyr_AfterResurvey_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_BeforeResurvey_1,lyr_AfterResurvey_2];
lyr_BeforeResurvey_1.set('fieldAliases', {'V_Name': 'V_Name', 'DMV_Code': 'DMV_Code', 'Parcel_num': 'Parcel_num', });
lyr_AfterResurvey_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ENJOYER': 'ENJOYER', 'KHATA NO': 'KHATA NO', 'CHALTA': 'CHALTA', 'SY NO': 'SY NO', 'ADANGAL EX': 'ADANGAL EX', 'lp_no': 'lp_no', 'area': 'area', 'perimeter': 'perimeter', 'area1': 'area1', });
lyr_BeforeResurvey_1.set('fieldImages', {'V_Name': 'TextEdit', 'DMV_Code': 'TextEdit', 'Parcel_num': 'TextEdit', });
lyr_AfterResurvey_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'ENJOYER': 'TextEdit', 'KHATA NO': 'TextEdit', 'CHALTA': 'TextEdit', 'SY NO': 'TextEdit', 'ADANGAL EX': 'TextEdit', 'lp_no': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'area1': 'TextEdit', });
lyr_BeforeResurvey_1.set('fieldLabels', {'V_Name': 'inline label - visible with data', 'DMV_Code': 'inline label - visible with data', 'Parcel_num': 'inline label - visible with data', });
lyr_AfterResurvey_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'ENJOYER': 'inline label - visible with data', 'KHATA NO': 'inline label - visible with data', 'CHALTA': 'hidden field', 'SY NO': 'inline label - visible with data', 'ADANGAL EX': 'hidden field', 'lp_no': 'inline label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'hidden field', 'area1': 'inline label - visible with data', });
lyr_AfterResurvey_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});