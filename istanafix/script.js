(function(){
    var script = {
 "definitions": [{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "halaman",
 "id": "map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
 "thumbnailUrl": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_t.png",
 "class": "Map",
 "width": 2550,
 "fieldOfViewOverlayRadiusScale": 0.21,
 "image": {
  "levels": [
   {
    "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609.png",
    "width": 1942,
    "height": 3200,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_lq.png",
    "width": 199,
    "height": 328,
    "class": "ImageResourceLevel",
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayInsideOpacity": 0.34,
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "height": 4200,
 "overlays": [
  "this.overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48",
  "this.overlay_D24615D7_C063_2581_41DE_8D08150632AD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.46,
  "class": "PanoramaCameraPosition",
  "pitch": -2.46
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_CB90A340_DA1E_2F34_4194_AA344B58C5AA",
 "class": "PanoramaCamera"
},
{
 "items": [
  "this.PanoramaPlayListItem_CBB4221D_DA1E_294C_41DA_8902B4AA7060",
  "this.PanoramaPlayListItem_CBB37224_DA1E_297C_41D2_8D454CF3A6B0",
  "this.PanoramaPlayListItem_CBB2922A_DA1E_2974_41E5_79DF9DBD063E",
  "this.PanoramaPlayListItem_CBB2022C_DA1E_294C_41E7_D76571CE26E5"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_CBB59214_DA1E_295C_41E5_7D69E0A0AF24, 0)",
   "media": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CBB59214_DA1E_295C_41E5_7D69E0A0AF24",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_CBB7220B_DA1E_2934_41C2_491ED7C8DAA7, 0)",
   "media": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CBB7220B_DA1E_2934_41C2_491ED7C8DAA7",
 "class": "PlayList"
},
{
 "label": "Photo Album MODAL5-SLIDE4",
 "playList": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
 "thumbnailUrl": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_t.png",
 "class": "PhotoAlbum"
},
{
 "label": "Photo Album MODAL5-SLIDE3",
 "playList": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
 "thumbnailUrl": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_t.png",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.53,
   "yaw": -0.12,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6"
  }
 ],
 "hfovMin": "143%",
 "hfov": 360,
 "label": "7",
 "id": "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
 "thumbnailUrl": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "x": 1267.4,
   "angle": -1.08,
   "y": 3086.01,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97",
  "this.overlay_CF4C40D0_D947_C5DF_41D9_557D85050442"
 ]
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE9",
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
 "thumbnailUrl": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0_t.jpg",
 "class": "Photo",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE3",
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
 "thumbnailUrl": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0_t.jpg",
 "class": "Photo",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C84C73E2_DA1E_2EF4_41E8_D8A2003A8158",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -180,
   "yaw": -1.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8"
  },
  {
   "backwardYaw": 3.28,
   "yaw": -180,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
 "thumbnailUrl": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "x": 1357.64,
   "angle": 0,
   "y": 2339.79,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6",
  "this.overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91"
 ]
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_CBB61213_DA1E_2954_41D5_37C2F2CADFF9, 0)",
   "media": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CBB61213_DA1E_2954_41D5_37C2F2CADFF9",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.02,
   "yaw": -180,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
 "thumbnailUrl": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "x": 1364.79,
   "angle": 0,
   "y": 1407.64,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
  "this.overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
  "this.overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
  "this.overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
  "this.overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
  "this.overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
  "this.overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C879B3AC_DA1E_2F4C_4197_5E4905F71CAA",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_CB9AC307_DA1E_2F3C_41E3_E2F086407340",
 "class": "PanoramaCamera"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera",
 "class": "PanoramaCamera"
},
{
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_acceleration",
 "gyroscopeEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_CB82E2D0_DA1E_2ED4_41D3_C025AC701C65",
 "class": "PanoramaCamera"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -180,
   "yaw": 3.28,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2"
  },
  {
   "backwardYaw": -0.12,
   "yaw": -168.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
 "thumbnailUrl": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
 "class": "Panorama",
 "mapLocations": [
  {
   "map": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "x": 1332.64,
   "angle": 0,
   "y": 2625.5,
   "class": "PanoramaMapLocation"
  }
 ],
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/0/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255",
  "this.overlay_CE11007F_C06E_DA81_41C7_431521B55D71",
  "this.overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8"
 ]
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE7",
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
 "thumbnailUrl": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0_t.jpg",
 "class": "Photo",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera",
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "targetPitch": 0,
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement"
  }
 ],
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 }
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE5",
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
 "thumbnailUrl": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0_t.jpg",
 "class": "Photo",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "label": "Photo Album MODAL5-SLIDE7",
 "playList": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
 "thumbnailUrl": "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_t.png",
 "class": "PhotoAlbum"
},
{
 "viewerArea": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
 "id": "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer"
},
{
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "label": "Photo Album MODAL5-SLIDE9",
 "playList": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
 "thumbnailUrl": "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_t.png",
 "class": "PhotoAlbum"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_CBB68211_DA1E_2954_41E9_9753E95CFDF1, 0)",
   "media": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CBB68211_DA1E_2954_41E9_9753E95CFDF1",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "id": "camera_C866136F_DA1E_2FCC_41D5_E5DA9C7A3098",
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_CBB7820A_DA1E_2934_41D2_9E55EE687899, 0)",
   "media": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
   "player": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_CBB7820A_DA1E_2934_41D2_9E55EE687899",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  },
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F_playlist",
 "class": "PlayList"
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "label": "ruang tangah",
 "id": "map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
 "thumbnailUrl": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_t.png",
 "class": "Map",
 "width": 2550,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "image": {
  "levels": [
   {
    "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5.png",
    "width": 1942,
    "height": 3200,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_lq.png",
    "width": 199,
    "height": 328,
    "class": "ImageResourceLevel",
    "tags": "preload"
   }
  ],
  "class": "ImageResource"
 },
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "initialZoomFactor": 1,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "minimumZoomFactor": 0.5,
 "height": 4200,
 "overlays": [
  "this.overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB",
  "this.overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E"
 ]
},
{
 "label": "Photo Album MODAL5-SLIDE5",
 "playList": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
 "thumbnailUrl": "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_t.png",
 "class": "PhotoAlbum"
},
{
 "duration": 5000,
 "label": "MODAL5-SLIDE4",
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
 "thumbnailUrl": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0_t.jpg",
 "class": "Photo",
 "width": 4000,
 "image": {
  "levels": [
   {
    "url": "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 2250
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "transitionDuration": 500,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "minWidth": 100,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 0.5,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MapViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "right": "2.9%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "transitionDuration": 500,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "minWidth": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressOpacity": 1,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "maxHeight": 320,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "displayTooltipInTouchScreens": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 0.5,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 92,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "maxWidth": 200,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "maxHeight": 400,
 "maxWidth": 600,
 "children": [
  "this.WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18",
  "this.IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF"
 ],
 "id": "Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container14134"
 },
 "minWidth": 1,
 "visible": false,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A"
 ],
 "id": "Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB",
 "left": "0%",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "top": "0%",
 "contentOpaque": false,
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "class": "Container",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "--PHOTOALBUM"
 },
 "minWidth": 1,
 "visible": false,
 "propagateClick": true,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "textDecoration": "none",
 "arrowBeforeLabel": false,
 "maxHeight": 40,
 "maxWidth": 201,
 "popUpShadowColor": "#000000",
 "popUpFontColor": "#000000",
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "height": "6.525%",
 "id": "DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F",
 "popUpBackgroundColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "fontFamily": "Arial",
 "right": "2.83%",
 "borderSize": 0,
 "popUpBackgroundOpacity": 0.9,
 "selectedPopUpBackgroundColor": "#333333",
 "width": "18.207%",
 "popUpShadow": false,
 "fontColor": "#FFFFFF",
 "minHeight": 10,
 "popUpGap": 0,
 "selectedPopUpFontColor": "#FFFFFF",
 "top": "7.5%",
 "backgroundColor": [
  "#666666"
 ],
 "fontSize": 14,
 "data": {
  "name": "DropDown1204"
 },
 "backgroundOpacity": 0.9,
 "class": "DropDown",
 "popUpShadowBlurRadius": 6,
 "gap": 0,
 "popUpShadowOpacity": 0,
 "paddingLeft": 5,
 "shadow": false,
 "popUpBorderRadius": 0,
 "paddingTop": 0,
 "paddingRight": 5,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "arrowColor": "#FFFFFF",
 "minWidth": 200,
 "propagateClick": false,
 "borderRadius": 4,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0
 ],
 "playList": "this.DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F_playlist",
 "popUpShadowSpread": 1
},
{
 "map": {
  "width": 131.94,
  "x": 1201.43,
  "image": {
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0_map.gif",
     "width": 16,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 3023.57,
  "offsetY": 0,
  "height": 124.87,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1201.43,
  "height": 124.87,
  "y": 3023.57,
  "width": 131.94,
  "image": {
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0.png",
     "width": 100,
     "height": 95,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 108.14,
  "x": 1278.57,
  "image": {
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1_map.gif",
     "width": 16,
     "height": 24,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 2542.86,
  "offsetY": 0,
  "height": 165.29,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1278.57,
  "height": 165.29,
  "y": 2542.86,
  "width": 108.14,
  "image": {
   "levels": [
    {
     "url": "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1.png",
     "width": 82,
     "height": 125,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_D24615D7_C063_2581_41DE_8D08150632AD",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "media": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CBB4221D_DA1E_294C_41DA_8902B4AA7060, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera",
 "id": "PanoramaPlayListItem_CBB4221D_DA1E_294C_41DA_8902B4AA7060",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CBB37224_DA1E_297C_41D2_8D454CF3A6B0, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera",
 "id": "PanoramaPlayListItem_CBB37224_DA1E_297C_41D2_8D454CF3A6B0",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CBB2922A_DA1E_2974_41E5_79DF9DBD063E, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera",
 "id": "PanoramaPlayListItem_CBB2922A_DA1E_2974_41E5_79DF9DBD063E",
 "class": "PanoramaPlayListItem"
},
{
 "media": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_CBB2022C_DA1E_294C_41E7_D76571CE26E5, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "camera": "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera",
 "id": "PanoramaPlayListItem_CBB2022C_DA1E_294C_41E7_D76571CE26E5",
 "class": "PanoramaPlayListItem"
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_CB82E2D0_DA1E_2ED4_41D3_C025AC701C65); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C2AA09DE_D946_C7C3_41DF_955700BE0714",
   "pitch": -25.49,
   "yaw": -0.12,
   "distance": 100
  }
 ],
 "id": "overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97",
 "data": {
  "label": "Arrow 04b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.3,
   "yaw": -0.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "pitch": 73.62,
 "yaw": -70.24,
 "id": "overlay_CF4C40D0_D947_C5DF_41D9_557D85050442",
 "class": "LensFlarePanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8, this.camera_C866136F_DA1E_2FCC_41D5_E5DA9C7A3098); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.5,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1AF2587_C061_6582_41E6_E6D513B82800",
   "pitch": -14.85,
   "yaw": -1.02,
   "distance": 100
  }
 ],
 "id": "overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.5,
   "yaw": -1.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.85,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_C879B3AC_DA1E_2F4C_4197_5E4905F71CAA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.7,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1AED587_C061_6582_41B2_1D48998998FE",
   "pitch": -49.04,
   "yaw": -180,
   "distance": 100
  }
 ],
 "id": "overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 24.7,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_C84C73E2_DA1E_2EF4_41E8_D8A2003A8158); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.02,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_D1AE9587_C061_6582_41E6_6C54247EEE1D",
   "pitch": -31.23,
   "yaw": -180,
   "distance": 100
  }
 ],
 "id": "overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.02,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CBB7820A_DA1E_2934_41D2_9E55EE687899.set('selectedIndex', -1); }, this); this.playList_CBB7820A_DA1E_2934_41D2_9E55EE687899.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_0.png",
      "width": 119,
      "height": 152,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.97,
   "roll": 0,
   "yaw": 70.29
  }
 ],
 "id": "overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.5,
   "yaw": 70.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_1_0_map.gif",
      "width": 59,
      "height": 76,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CBB7220B_DA1E_2934_41C2_491ED7C8DAA7.set('selectedIndex', -1); }, this); this.playList_CBB7220B_DA1E_2934_41C2_491ED7C8DAA7.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_0.png",
      "width": 125,
      "height": 149,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.04,
   "roll": 0,
   "yaw": 57.57
  }
 ],
 "id": "overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 10.96,
   "yaw": 57.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_1_0_map.gif",
      "width": 62,
      "height": 74,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 8.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CBB68211_DA1E_2954_41E9_9753E95CFDF1.set('selectedIndex', -1); }, this); this.playList_CBB68211_DA1E_2954_41E9_9753E95CFDF1.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_0.png",
      "width": 83,
      "height": 111,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43,
   "roll": 0,
   "yaw": 58.35
  }
 ],
 "id": "overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
 "data": {
  "label": "Polygon"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.29,
   "yaw": 58.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_1_0_map.gif",
      "width": 41,
      "height": 55,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CBB61213_DA1E_2954_41D5_37C2F2CADFF9.set('selectedIndex', -1); }, this); this.playList_CBB61213_DA1E_2954_41D5_37C2F2CADFF9.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.27,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB718ECF_D94A_5DC1_41D5_1459B6223DA1",
   "pitch": -3.43,
   "yaw": 65.45,
   "distance": 100
  }
 ],
 "id": "overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.27,
   "yaw": 65.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.43,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_CBB59214_DA1E_295C_41E5_7D69E0A0AF24.set('selectedIndex', -1); }, this); this.playList_CBB59214_DA1E_295C_41E5_7D69E0A0AF24.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CB760ED1_D94A_5DC1_41C7_424F06E03CAF",
   "pitch": -3.8,
   "yaw": 75.48,
   "distance": 100
  }
 ],
 "id": "overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
 "data": {
  "label": "Info 01"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.68,
   "yaw": 75.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "areas": [
  {
   "click": "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, true, 0, null, null, false)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_C8DCE946_D946_44C3_4199_F23D3281A262",
   "pitch": -12.26,
   "yaw": 49.61,
   "distance": 100
  }
 ],
 "id": "overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2",
 "data": {
  "label": "Circle 360 2"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.85,
   "yaw": 49.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_CB9AC307_DA1E_2F3C_41E3_E2F086407340); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.24,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE62DA62_C063_EE83_41DA_62E9B7FAB50A",
   "pitch": -23.24,
   "yaw": 3.28,
   "distance": 100
  }
 ],
 "id": "overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 34.24,
   "yaw": 3.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_0_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.24,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC, this.camera_CB90A340_DA1E_2F34_4194_AA344B58C5AA); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 37.11,
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_CE62FA62_C063_EE83_41DA_A7CF5B01462F",
   "pitch": -22.41,
   "yaw": -168.53,
   "distance": 100
  }
 ],
 "id": "overlay_CE11007F_C06E_DA81_41C7_431521B55D71",
 "data": {
  "label": "Arrow 04c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.11,
   "yaw": -168.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_1_0_0_map.gif",
      "width": 38,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ]
},
{
 "bleaching": 0.7,
 "bleachingDistance": 0.4,
 "pitch": 80.99,
 "yaw": -84.57,
 "id": "overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8",
 "class": "LensFlarePanoramaOverlay"
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
 "left": "0%",
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 1,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "transitionDuration": 500,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "minWidth": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "height": "100%",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 0.5,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": "0%",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "class": "ViewerArea",
 "paddingLeft": 0,
 "shadow": false,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#FFFFFF",
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 0,
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#666666"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "map": {
  "width": 172.43,
  "x": 1271.43,
  "image": {
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0_map.gif",
     "width": 16,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 2257.14,
  "offsetY": 0,
  "height": 165.29,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1271.43,
  "height": 165.29,
  "y": 2257.14,
  "width": 172.43,
  "image": {
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0.png",
     "width": 131,
     "height": 125,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "map": {
  "width": 186.71,
  "x": 1271.43,
  "image": {
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1_map.gif",
     "width": 20,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "offsetX": 0,
  "y": 1335.71,
  "offsetY": 0,
  "height": 143.86,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "image": {
  "x": 1271.43,
  "height": 143.86,
  "y": 1335.71,
  "width": 186.71,
  "image": {
   "levels": [
    {
     "url": "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1.png",
     "width": 142,
     "height": 109,
     "class": "ImageResourceLevel"
    }
   ],
   "class": "ImageResource"
  },
  "class": "HotspotMapOverlayImage"
 },
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E",
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay"
},
{
 "items": [
  {
   "camera": {
    "class": "PhotoCamera",
    "scaleMode": "fit_inside"
   },
   "media": "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "height": "100%",
 "id": "WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18",
 "left": "0%",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "scrollEnabled": true,
 "url": "https://museumnasional.iheritage-virtual.id/koleksi/02/keramikteksing/",
 "top": "0%",
 "minWidth": 1,
 "insetBorder": false,
 "backgroundOpacity": 1,
 "class": "WebFrame",
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "WebFrame14181"
 },
 "backgroundColor": [
  "#FFFFFF"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF",
 "width": 50,
 "right": "0.15%",
 "borderSize": 0,
 "minHeight": 1,
 "verticalAlign": "middle",
 "top": "0%",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF.png",
 "height": 50,
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, false, 0, null, null, false)",
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton14992"
 },
 "minWidth": 1,
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "maxHeight": 400,
 "children": [
  "this.Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3"
 ],
 "minWidth": 1,
 "id": "Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A",
 "left": "0%",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "scrollBarColor": "#000000",
 "right": "0%",
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "shadowBlurRadius": 25,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "class": "Container",
 "gap": 10,
 "shadowOpacity": 0.3,
 "paddingLeft": 0,
 "shadow": true,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "propagateClick": false,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "borderRadius": 0,
 "overflow": "visible",
 "scrollBarWidth": 10,
 "maxWidth": 650
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_1_HS_0_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C2AA09DE_D946_C7C3_41DF_955700BE0714",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D1AF2587_C061_6582_41E6_E6D513B82800",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D1AED587_C061_6582_41B2_1D48998998FE",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D1AE9587_C061_6582_41E6_6C54247EEE1D",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CB718ECF_D94A_5DC1_41D5_1459B6223DA1",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 22,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CB760ED1_D94A_5DC1_41C7_424F06E03CAF",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_C8DCE946_D946_44C3_4199_F23D3281A262",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_0_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CE62DA62_C063_EE83_41DA_62E9B7FAB50A",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_1_HS_1_0.png",
   "width": 480,
   "height": 300,
   "class": "ImageResourceLevel"
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_CE62FA62_C063_EE83_41DA_A7CF5B01462F",
 "frameDuration": 41,
 "class": "AnimatedImageResource"
},
{
 "scrollBarWidth": 10,
 "children": [
  "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
  "this.IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6"
 ],
 "height": "100%",
 "id": "Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3",
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "width": "100%",
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "paddingBottom": 0,
 "data": {
  "name": "Container photo"
 },
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ]
},
{
 "pressedIconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6_pressed.jpg",
 "transparencyActive": false,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6",
 "right": 20,
 "borderSize": 0,
 "horizontalAlign": "right",
 "minHeight": 50,
 "verticalAlign": "top",
 "top": 20,
 "iconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6.png",
 "paddingRight": 0,
 "width": "6.47%",
 "mode": "push",
 "backgroundOpacity": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_CD8EAD5C_D9CE_7CC7_41E9_DDE9A66A37B6_rollover.png",
 "paddingLeft": 0,
 "shadow": false,
 "click": "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
 "paddingTop": 0,
 "minWidth": 50,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton X"
 },
 "height": "10.204%",
 "propagateClick": true,
 "borderRadius": 0,
 "cursor": "hand"
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.MapViewer",
  "this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13",
  "this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB",
  "this.DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.init(); this.set('mute', true); this.syncPlaylists([this.DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F_playlist,this.mainPlayList]); this.DropDown_CA487EE1_DA02_F6F4_414B_8B038EA6FE8F_playlist.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scripts": {
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "minWidth": 20,
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "contentOpaque": false,
 "class": "Player",
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingLeft": 0,
 "shadow": false,
 "paddingTop": 0,
 "paddingRight": 0,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "visible",
 "data": {
  "name": "Player451"
 }
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
