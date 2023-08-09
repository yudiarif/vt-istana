(function(){
    var script = {
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  "this.Container_CD42DC64_D9FE_BCC7_4191_F16A9ACBD60A",
  "this.MapViewer",
  "this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13",
  "this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB"
 ],
 "scrollBarVisible": "rollOver",
 "start": "this.init(); this.set('mute', true); this.syncPlaylists([this.DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499_playlist,this.mainPlayList]); this.DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499_playlist.set('selectedIndex', 0)",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11",
 "hfovMin": "150%",
 "id": "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
 "overlays": [
  "this.overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255",
  "this.overlay_CE11007F_C06E_DA81_41C7_431521B55D71",
  "this.overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": 3.28,
   "class": "AdjacentPanorama",
   "backwardYaw": -180,
   "panorama": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
   "distance": 1
  },
  {
   "yaw": -168.53,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.12,
   "panorama": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "x": 1332.64,
   "angle": 0,
   "y": 2625.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
 "hfovMax": 130
},
{
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 0,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out"
  }
 ]
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 2550,
 "label": "ruang tangah",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5.png",
    "width": 1942,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_lq.png",
    "width": 199,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 328
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB",
  "this.overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_t.png",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "height": 4200
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "16",
 "hfovMin": "150%",
 "id": "panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
 "overlays": [
  "this.overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
  "this.overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
  "this.overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
  "this.overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
  "this.overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
  "this.overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
  "this.overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -180,
   "class": "AdjacentPanorama",
   "backwardYaw": -1.02,
   "panorama": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "x": 1364.79,
   "angle": 0,
   "y": 1407.64,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  "this.PanoramaPlayListItem_C31032C7_D97B_C5C1_4191_EE0950D5BEA5",
  "this.PanoramaPlayListItem_C31152C7_D97B_C5C1_41D8_07C567A1E334",
  "this.PanoramaPlayListItem_C30EC2C7_D97B_C5C1_41E4_1CC435920AED",
  "this.PanoramaPlayListItem_C30E32C7_D97B_C5C1_41E5_FB6228512CCA"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C32D43B2_D97B_C443_41A5_A549BAC014BC",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
 "thumbnailUrl": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_t.png",
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
 "label": "Photo Album MODAL5-SLIDE4",
 "class": "PhotoAlbum"
},
{
 "playList": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
 "thumbnailUrl": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_t.png",
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
 "label": "Photo Album MODAL5-SLIDE7",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 179.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C3204400_D97B_CC3F_41E8_0359031F211C",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
 "thumbnailUrl": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_t.png",
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
 "label": "Photo Album MODAL5-SLIDE3",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C33FF325_D97B_C441_41E9_084F78C9B88F",
 "class": "PanoramaCamera"
},
{
 "class": "Photo",
 "thumbnailUrl": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0_t.jpg",
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0.jpg"
   }
  ]
 },
 "label": "MODAL5-SLIDE7",
 "duration": 5000,
 "height": 2250
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "7",
 "hfovMin": "143%",
 "id": "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
 "overlays": [
  "this.overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97",
  "this.overlay_CF4C40D0_D947_C5DF_41D9_557D85050442"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -0.12,
   "class": "AdjacentPanorama",
   "backwardYaw": -168.53,
   "panorama": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "x": 1267.4,
   "angle": -1.08,
   "y": 3086.01,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C31482B8_D97B_C44F_41D5_AD1B6F9C26E1, 0)",
   "media": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer"
  }
 ],
 "id": "playList_C31482B8_D97B_C44F_41D5_AD1B6F9C26E1",
 "class": "PlayList"
},
{
 "class": "Photo",
 "thumbnailUrl": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0_t.jpg",
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0.jpg"
   }
  ]
 },
 "label": "MODAL5-SLIDE4",
 "duration": 5000,
 "height": 2250
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 2550,
 "label": "halaman",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609.png",
    "width": 1942,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_lq.png",
    "width": 199,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 328
   }
  ]
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48",
  "this.overlay_D24615D7_C063_2581_41DE_8D08150632AD"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.34,
 "thumbnailUrl": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_t.png",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "fieldOfViewOverlayRadiusScale": 0.21,
 "maximumZoomFactor": 1.2,
 "height": 4200
},
{
 "class": "Photo",
 "thumbnailUrl": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0_t.jpg",
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0.jpg"
   }
  ]
 },
 "label": "MODAL5-SLIDE5",
 "duration": 5000,
 "height": 2250
},
{
 "initialPosition": {
  "yaw": -176.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C3362373_D97B_C4C1_41D0_05B1E655FD7D",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 2.46,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera",
 "class": "PanoramaCamera"
},
{
 "playList": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
 "thumbnailUrl": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_t.png",
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
 "label": "Photo Album MODAL5-SLIDE9",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera",
 "class": "PanoramaCamera"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C312A2B8_D97B_C44F_41D0_53BBD622E725, 0)",
   "media": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer"
  }
 ],
 "id": "playList_C312A2B8_D97B_C44F_41D0_53BBD622E725",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 178.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2C6C47D_D97B_CCC1_41E9_2C7B664897C8",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499_playlist",
 "class": "PlayList"
},
{
 "class": "Photo",
 "thumbnailUrl": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0_t.jpg",
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0.jpg"
   }
  ]
 },
 "label": "MODAL5-SLIDE3",
 "duration": 5000,
 "height": 2250
},
{
 "touchControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "displayPlaybackBar": true
},
{
 "class": "Photo",
 "thumbnailUrl": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0_t.jpg",
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
 "width": 4000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0.jpg"
   }
  ]
 },
 "label": "MODAL5-SLIDE9",
 "duration": 5000,
 "height": 2250
},
{
 "playList": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
 "thumbnailUrl": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_t.png",
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
 "label": "Photo Album MODAL5-SLIDE5",
 "class": "PhotoAlbum"
},
{
 "initialPosition": {
  "yaw": 11.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "camera_C2D5B43E_D97B_CC43_41CA_0DAEEB975E40",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C31542B8_D97B_C44F_41E9_141FB9B5B28A, 0)",
   "media": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer"
  }
 ],
 "id": "playList_C31542B8_D97B_C44F_41E9_141FB9B5B28A",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C315C2B8_D97B_C44F_41E6_3D8BCE784B32, 0)",
   "media": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer"
  }
 ],
 "id": "playList_C315C2B8_D97B_C44F_41E6_3D8BCE784B32",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_C31212B8_D97B_C44F_41E9_0547AC64D7C7, 0)",
   "media": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
   "class": "PhotoAlbumPlayListItem",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer"
  }
 ],
 "id": "playList_C31212B8_D97B_C44F_41E9_0547AC64D7C7",
 "class": "PlayList"
},
{
 "viewerArea": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
 "id": "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "rowCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "rowCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "rowCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "14",
 "hfovMin": "150%",
 "id": "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
 "overlays": [
  "this.overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6",
  "this.overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "yaw": -1.02,
   "class": "AdjacentPanorama",
   "backwardYaw": -180,
   "panorama": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
   "distance": 1
  },
  {
   "yaw": -180,
   "class": "AdjacentPanorama",
   "backwardYaw": 3.28,
   "panorama": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
   "distance": 1
  }
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "vfov": 180,
 "mapLocations": [
  {
   "map": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "x": 1357.64,
   "angle": 0,
   "y": 2339.79,
   "class": "PanoramaMapLocation"
  }
 ],
 "thumbnailUrl": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
 "hfovMax": 130
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "progressBottom": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 0.5,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "paddingLeft": 0,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "transitionDuration": 500,
 "shadow": false,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CD42DC64_D9FE_BCC7_4191_F16A9ACBD60A",
 "backgroundOpacity": 0.3,
 "children": [
  "this.DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499"
 ],
 "scrollBarVisible": "rollOver",
 "right": "0.91%",
 "width": "18.025%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "1.77%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "60.033%",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "map navigation"
 }
},
{
 "progressBarBorderSize": 0,
 "id": "MapViewer",
 "width": "17.939%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "right": "0.94%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "55.139%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 0.5,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "6.52%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "transitionDuration": 500,
 "shadow": false,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "MapViewer"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13",
 "left": "19.38%",
 "children": [
  "this.WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18",
  "this.IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "width": "61.236%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "12.38%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "73.083%",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container14134"
 },
 "visible": false
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB",
 "left": "0%",
 "children": [
  "this.Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A"
 ],
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "creationPolicy": "inAdvance",
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "click": "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
 "paddingLeft": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "paddingTop": 0,
 "visible": false,
 "gap": 10
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 34.24,
   "yaw": 3.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.24
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_C32D43B2_D97B_C443_41A5_A549BAC014BC); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CE62DA62_C063_EE83_41DA_62E9B7FAB50A",
   "pitch": -23.24,
   "hfov": 34.24,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.28,
   "distance": 100
  }
 ],
 "id": "overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 37.11,
   "yaw": -168.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.41
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC, this.camera_C3204400_D97B_CC3F_41E8_0359031F211C); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_CE62FA62_C063_EE83_41DA_A7CF5B01462F",
   "pitch": -22.41,
   "hfov": 37.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.53,
   "distance": 100
  }
 ],
 "id": "overlay_CE11007F_C06E_DA81_41C7_431521B55D71",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -84.57,
 "pitch": 80.99,
 "bleaching": 0.7,
 "id": "overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 172.43,
  "x": 1271.43,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 2257.14,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 165.29,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1271.43,
  "y": 2257.14,
  "width": 172.43,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0.png",
     "width": 131,
     "class": "ImageResourceLevel",
     "height": 125
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 165.29
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB",
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 186.71,
  "x": 1271.43,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1_map.gif",
     "width": 20,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 1335.71,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 143.86,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1271.43,
  "y": 1335.71,
  "width": 186.71,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1.png",
     "width": 142,
     "class": "ImageResourceLevel",
     "height": 109
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 143.86
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E",
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 35.02,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.23
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_C2C6C47D_D97B_CCC1_41E9_2C7B664897C8); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D1AE9587_C061_6582_41E6_6C54247EEE1D",
   "pitch": -31.23,
   "hfov": 35.02,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -180,
   "distance": 100
  }
 ],
 "id": "overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.5,
   "yaw": 70.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_1_0_map.gif",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": 6.97
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C31482B8_D97B_C44F_41D5_AD1B6F9C26E1.set('selectedIndex', -1); }, this); this.playList_C31482B8_D97B_C44F_41D5_AD1B6F9C26E1.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.5,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_0.png",
      "width": 119,
      "class": "ImageResourceLevel",
      "height": 152
     }
    ]
   },
   "pitch": 6.97,
   "yaw": 70.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 57.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_1_0_map.gif",
      "width": 62,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 8.04
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C315C2B8_D97B_C44F_41E6_3D8BCE784B32.set('selectedIndex', -1); }, this); this.playList_C315C2B8_D97B_C44F_41E6_3D8BCE784B32.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.96,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_0.png",
      "width": 125,
      "class": "ImageResourceLevel",
      "height": 149
     }
    ]
   },
   "pitch": 8.04,
   "yaw": 57.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.29,
   "yaw": 58.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_1_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 55
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C31542B8_D97B_C44F_41E9_141FB9B5B28A.set('selectedIndex', -1); }, this); this.playList_C31542B8_D97B_C44F_41E9_141FB9B5B28A.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.29,
   "roll": 0,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 111
     }
    ]
   },
   "pitch": -3.43,
   "yaw": 58.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.27,
   "yaw": 65.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.43
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C312A2B8_D97B_C44F_41D0_53BBD622E725.set('selectedIndex', -1); }, this); this.playList_C312A2B8_D97B_C44F_41D0_53BBD622E725.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB718ECF_D94A_5DC1_41D5_1459B6223DA1",
   "pitch": -3.43,
   "hfov": 3.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 65.45,
   "distance": 100
  }
 ],
 "id": "overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.68,
   "yaw": 75.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.8
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C31212B8_D97B_C44F_41E9_0547AC64D7C7.set('selectedIndex', -1); }, this); this.playList_C31212B8_D97B_C44F_41E9_0547AC64D7C7.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_CB760ED1_D94A_5DC1_41C7_424F06E03CAF",
   "pitch": -3.8,
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.48,
   "distance": 100
  }
 ],
 "id": "overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.85,
   "yaw": 49.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.26
  }
 ],
 "data": {
  "label": "Circle 360 2"
 },
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, true, 0, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "image": "this.AnimatedImageResource_C8DCE946_D946_44C3_4199_F23D3281A262",
   "pitch": -12.26,
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 49.61,
   "distance": 100
  }
 ],
 "id": "overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2",
 "class": "HotspotPanoramaOverlay"
},
{
 "media": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C31032C7_D97B_C5C1_4191_EE0950D5BEA5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C31032C7_D97B_C5C1_4191_EE0950D5BEA5",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera"
},
{
 "media": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C31152C7_D97B_C5C1_41D8_07C567A1E334, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C31152C7_D97B_C5C1_41D8_07C567A1E334",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera"
},
{
 "media": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C30EC2C7_D97B_C5C1_41E4_1CC435920AED, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C30EC2C7_D97B_C5C1_41E4_1CC435920AED",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera"
},
{
 "media": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_C30E32C7_D97B_C5C1_41E5_FB6228512CCA, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_C30E32C7_D97B_C5C1_41E5_FB6228512CCA",
 "class": "PanoramaPlayListItem",
 "camera": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera"
},
{
 "items": [
  {
   "media": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.3,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.49
  }
 ],
 "data": {
  "label": "Arrow 04b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_C2D5B43E_D97B_CC43_41CA_0DAEEB975E40); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_C2AA09DE_D946_C7C3_41DF_955700BE0714",
   "pitch": -25.49,
   "hfov": 25.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.12,
   "distance": 100
  }
 ],
 "id": "overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97",
 "class": "HotspotPanoramaOverlay"
},
{
 "bleachingDistance": 0.4,
 "yaw": -70.24,
 "pitch": 73.62,
 "bleaching": 0.7,
 "id": "overlay_CF4C40D0_D947_C5DF_41D9_557D85050442",
 "class": "LensFlarePanoramaOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 131.94,
  "x": 1201.43,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 3023.57,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 124.87,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1201.43,
  "y": 3023.57,
  "width": 131.94,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0.png",
     "width": 100,
     "class": "ImageResourceLevel",
     "height": 95
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 124.87
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48",
 "class": "AreaHotspotMapOverlay"
},
{
 "useHandCursor": true,
 "map": {
  "width": 108.14,
  "x": 1278.57,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 24
    }
   ]
  },
  "y": 2542.86,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 165.29,
  "offsetX": 0
 },
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 1278.57,
  "y": 2542.86,
  "width": 108.14,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1.png",
     "width": 82,
     "class": "ImageResourceLevel",
     "height": 125
    }
   ]
  },
  "class": "HotspotMapOverlayImage",
  "height": 165.29
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_D24615D7_C063_2581_41DE_8D08150632AD",
 "class": "AreaHotspotMapOverlay"
},
{
 "items": [
  {
   "media": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "media": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   }
  }
 ],
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "progressBarBorderSize": 0,
 "id": "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
 "left": "0%",
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "progressBottom": 2,
 "transitionMode": "blending",
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 0.5,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "paddingLeft": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "transitionDuration": 500,
 "shadow": false,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeight": 10,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 28.5,
   "yaw": -1.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.85
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8, this.camera_C33FF325_D97B_C441_41E9_084F78C9B88F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D1AF2587_C061_6582_41E6_E6D513B82800",
   "pitch": -14.85,
   "hfov": 28.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.02,
   "distance": 100
  }
 ],
 "id": "overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6",
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.04
  }
 ],
 "data": {
  "label": "Arrow 04c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_C3362373_D97B_C4C1_41D0_05B1E655FD7D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_D1AED587_C061_6582_41B2_1D48998998FE",
   "pitch": -49.04,
   "hfov": 24.7,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -180,
   "distance": 100
  }
 ],
 "id": "overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91",
 "class": "HotspotPanoramaOverlay"
},
{
 "fontFamily": "Arial",
 "id": "DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499",
 "left": "0%",
 "width": "99.587%",
 "backgroundOpacity": 0.9,
 "popUpShadow": false,
 "popUpFontColor": "#000000",
 "rollOverPopUpBackgroundColor": "#CCCCCC",
 "borderRadius": 4,
 "popUpBackgroundOpacity": 0.9,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 20,
 "arrowColor": "#8A8A8A",
 "top": "0%",
 "paddingRight": 5,
 "popUpShadowSpread": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#999999"
 ],
 "popUpBorderRadius": 0,
 "minWidth": 200,
 "height": "8.152%",
 "popUpShadowBlurRadius": 6,
 "fontSize": 14,
 "paddingLeft": 5,
 "popUpShadowOpacity": 0,
 "borderSize": 0,
 "popUpGap": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 0,
 "class": "DropDown",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "fontStyle": "normal",
 "paddingTop": 0,
 "playList": "this.DropDown_CD29C795_D9FB_CC41_41B1_15A9E32B7499_playlist",
 "selectedPopUpBackgroundColor": "#33CCFF",
 "fontWeight": "normal",
 "textDecoration": "none",
 "popUpBackgroundColor": "#FFFFFF",
 "fontColor": "#333333",
 "data": {
  "name": "DropDown1204"
 }
},
{
 "id": "WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "insetBorder": false,
 "url": "https://museumnasional.iheritage-virtual.id/koleksi/02/keramikteksing/",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "0%",
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame14181"
 }
},
{
 "id": "IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "maxHeight": 50,
 "maxWidth": 50,
 "right": "0.15%",
 "width": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "top": "0%",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF.png",
 "click": "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton14992"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A",
 "left": "15%",
 "children": [
  "this.Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3"
 ],
 "scrollBarVisible": "rollOver",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "right": "15%",
 "shadowOpacity": 0.3,
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "top": "10%",
 "verticalAlign": "top",
 "paddingRight": 0,
 "bottom": "10%",
 "scrollBarWidth": 10,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "layout": "vertical",
 "paddingLeft": 0,
 "borderSize": 0,
 "shadowVerticalLength": 0,
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25,
 "shadowSpread": 1
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE62DA62_C063_EE83_41DA_62E9B7FAB50A",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_CE62FA62_C063_EE83_41DA_A7CF5B01462F",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D1AE9587_C061_6582_41E6_6C54247EEE1D",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_CB718ECF_D94A_5DC1_41D5_1459B6223DA1",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_CB760ED1_D94A_5DC1_41C7_424F06E03CAF",
 "rowCount": 6,
 "frameCount": 22
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_C8DCE946_D946_44C3_4199_F23D3281A262",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_C2AA09DE_D946_C7C3_41DF_955700BE0714",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D1AF2587_C061_6582_41E6_E6D513B82800",
 "rowCount": 6,
 "frameCount": 21
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_D1AED587_C061_6582_41B2_1D48998998FE",
 "rowCount": 6,
 "frameCount": 21
},
{
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3",
 "backgroundOpacity": 0.3,
 "children": [
  "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
  "this.IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "layout": "absolute",
 "height": "100%",
 "paddingLeft": 0,
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "gap": 10,
 "class": "Container",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0
},
{
 "maxHeight": 60,
 "id": "IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "maxWidth": 60,
 "right": 20,
 "width": "6.47%",
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6_rollover.png",
 "minHeight": 50,
 "propagateClick": true,
 "top": 20,
 "paddingRight": 0,
 "height": "10.204%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "paddingLeft": 0,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6_pressed.jpg",
 "paddingBottom": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6.png",
 "click": "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
 "shadow": false,
 "transparencyActive": false,
 "paddingTop": 0,
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
}],
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "class": "Player",
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player451"
 },
 "scripts": {
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 },
 "paddingTop": 0,
 "downloadEnabled": false,
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
