(function () {
  var script = {
    start:
      "this.init(); this.set('mute', true); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F], 'gyroscopeAvailable'); this.syncPlaylists([this.DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6_playlist,this.mainPlayList]); this.DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391].forEach(function(component) { component.set('visible', false); }) }",
    data: {
      name: "Player451",
    },
    children: ["this.MainViewer", "this.MapViewer", "this.Container_CDD323C2_DF8B_F53C_41E3_2CDCF7687BF7", "this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13", "this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB"],
    height: "100%",
    id: "rootPlayer",
    width: "100%",
    layout: "absolute",
    scrollBarWidth: 10,
    paddingBottom: 0,
    borderRadius: 0,
    overflow: "visible",
    minHeight: 20,
    propagateClick: false,
    backgroundPreloadEnabled: true,
    verticalAlign: "top",
    desktopMipmappingEnabled: false,
    definitions: [
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 0,
          pitch: 0,
        },
        id: "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        class: "PlayList",
        id: "mainPlayList",
        items: [
          "this.PanoramaPlayListItem_F4CCFBB2_E002_A4DB_41E5_3F3EF9884E81",
          "this.PanoramaPlayListItem_F4CC2BB2_E002_A4DB_41E5_BA83C9C67874",
          "this.PanoramaPlayListItem_F4CF9BB2_E002_A4DB_41D2_97E38EE2989D",
          "this.PanoramaPlayListItem_F4CEFBB2_E002_A4DB_41E6_AA3946C5B915",
        ],
      },
      {
        class: "PlayList",
        id: "DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6_playlist",
        items: [
          {
            begin: "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
            media: "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
            class: "MapPlayListItem",
            player: "this.MapViewerMapPlayer",
          },
          {
            begin: "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
            media: "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
            class: "MapPlayListItem",
            player: "this.MapViewerMapPlayer",
          },
        ],
      },
      {
        thumbnailUrl: "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0_t.jpg",
        duration: 5000,
        label: "MODAL5-SLIDE5",
        id: "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
        width: 4000,
        class: "Photo",
        image: {
          levels: [
            {
              url: "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0.jpg",
              class: "ImageResourceLevel",
            },
          ],
          class: "ImageResource",
        },
        height: 2250,
      },
      {
        easing: "quad_in",
        class: "SlideInEffect",
        id: "effect_4CD06BFB_5705_AD47_41BD_DD626E481855",
        from: "left",
        duration: 400,
      },
      {
        class: "PlayList",
        id: "playList_F4C83BA3_E002_A4FA_41E3_3D7118D0B606",
        items: [
          {
            begin: "this.loopAlbum(this.playList_F4C83BA3_E002_A4FA_41E3_3D7118D0B606, 0)",
            media: "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
            class: "PhotoAlbumPlayListItem",
            player: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
          },
        ],
      },
      {
        playList: "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
        thumbnailUrl: "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_t.png",
        label: "Photo Album MODAL5-SLIDE9",
        class: "PhotoAlbum",
        id: "album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
      },
      {
        easing: "quad_in",
        class: "SlideOutEffect",
        id: "effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E",
        to: "left",
        duration: 400,
      },
      {
        thumbnailUrl: "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0_t.jpg",
        duration: 5000,
        label: "MODAL5-SLIDE4",
        id: "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
        width: 4000,
        class: "Photo",
        image: {
          levels: [
            {
              url: "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0.jpg",
              class: "ImageResourceLevel",
            },
          ],
          class: "ImageResource",
        },
        height: 2250,
      },
      {
        thumbnailUrl: "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0_t.jpg",
        duration: 5000,
        label: "MODAL5-SLIDE7",
        id: "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
        width: 4000,
        class: "Photo",
        image: {
          levels: [
            {
              url: "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0.jpg",
              class: "ImageResourceLevel",
            },
          ],
          class: "ImageResource",
        },
        height: 2250,
      },
      {
        thumbnailUrl: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
        partial: false,
        label: "7",
        id: "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
        hfovMin: "143%",
        frames: [
          {
            thumbnailUrl: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_t.jpg",
            class: "CubicPanoramaFrame",
            front: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/f/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            top: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/u/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            right: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/r/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            back: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/b/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            bottom: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/d/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            left: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0/l/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
          },
        ],
        hfovMax: 130,
        mapLocations: [
          {
            map: "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
            x: 1267.4,
            class: "PanoramaMapLocation",
            angle: -1.08,
            y: 3086.01,
          },
        ],
        class: "Panorama",
        adjacentPanoramas: [
          {
            panorama: "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
            backwardYaw: -168.53,
            class: "AdjacentPanorama",
            yaw: -0.12,
            distance: 1,
          },
        ],
        vfov: 180,
        overlays: ["this.overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97", "this.overlay_CF4C40D0_D947_C5DF_41D9_557D85050442"],
        pitch: 0,
        hfov: 360,
      },
      {
        easing: "quad_in",
        class: "SlideOutEffect",
        id: "effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6",
        to: "left",
        duration: 400,
      },
      {
        playList: "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
        thumbnailUrl: "media/album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_t.png",
        label: "Photo Album MODAL5-SLIDE7",
        class: "PhotoAlbum",
        id: "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
      },
      {
        thumbnailUrl: "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0_t.jpg",
        duration: 5000,
        label: "MODAL5-SLIDE9",
        id: "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
        width: 4000,
        class: "Photo",
        image: {
          levels: [
            {
              url: "media/album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0.jpg",
              class: "ImageResourceLevel",
            },
          ],
          class: "ImageResource",
        },
        height: 2250,
      },
      {
        class: "PlayList",
        id: "playList_F4CACBA3_E002_A4FA_41E0_DA6E3EF8F19A",
        items: [
          {
            begin: "this.loopAlbum(this.playList_F4CACBA3_E002_A4FA_41E0_DA6E3EF8F19A, 0)",
            media: "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3",
            class: "PhotoAlbumPlayListItem",
            player: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
          },
        ],
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 178.98,
          pitch: 0,
        },
        id: "camera_F51BDD0A_E002_9DCA_41E4_CD3529EFA716",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        easing: "quad_in",
        class: "SlideInEffect",
        id: "effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368",
        from: "left",
        duration: 400,
      },
      {
        class: "MapPlayer",
        viewerArea: "this.MapViewer",
        id: "MapViewerMapPlayer",
        movementMode: "constrained",
      },
      {
        playList: "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
        thumbnailUrl: "media/album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_t.png",
        label: "Photo Album MODAL5-SLIDE5",
        class: "PhotoAlbum",
        id: "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 11.47,
          pitch: 0,
        },
        id: "camera_F53E4C2F_E002_A3C9_41D0_C4CFD842E85F",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        thumbnailUrl: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_t.png",
        fieldOfViewOverlayInsideColor: "#FFFFFF",
        label: "Ruang Tengah",
        id: "map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
        fieldOfViewOverlayInsideOpacity: 0.4,
        class: "Map",
        image: {
          levels: [
            {
              url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5.png",
              width: 1942,
              class: "ImageResourceLevel",
              height: 3200,
            },
            {
              url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_lq.png",
              width: 199,
              class: "ImageResourceLevel",
              height: 328,
              tags: "preload",
            },
          ],
          class: "ImageResource",
        },
        maximumZoomFactor: 1.2,
        width: 2550,
        fieldOfViewOverlayRadiusScale: 0.3,
        initialZoomFactor: 1,
        overlays: ["this.overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB", "this.overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E"],
        fieldOfViewOverlayOutsideColor: "#000000",
        scaleMode: "fit_outside",
        minimumZoomFactor: 0.5,
        fieldOfViewOverlayOutsideOpacity: 0,
        height: 4200,
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 2.46,
          pitch: -2.46,
        },
        id: "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        class: "PlayList",
        id: "playList_F4C8CBA3_E002_A4FA_4190_A9AD63B12487",
        items: [
          {
            begin: "this.loopAlbum(this.playList_F4C8CBA3_E002_A4FA_4190_A9AD63B12487, 0)",
            media: "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581",
            class: "PhotoAlbumPlayListItem",
            player: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
          },
        ],
      },
      {
        thumbnailUrl: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_t.png",
        fieldOfViewOverlayInsideColor: "#FFFFFF",
        label: "Halaman",
        id: "map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
        fieldOfViewOverlayInsideOpacity: 0.34,
        class: "Map",
        image: {
          levels: [
            {
              url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609.png",
              width: 1942,
              class: "ImageResourceLevel",
              height: 3200,
            },
            {
              url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_lq.png",
              width: 199,
              class: "ImageResourceLevel",
              height: 328,
              tags: "preload",
            },
          ],
          class: "ImageResource",
        },
        maximumZoomFactor: 1.2,
        width: 2550,
        fieldOfViewOverlayRadiusScale: 0.21,
        initialZoomFactor: 1,
        overlays: ["this.overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48", "this.overlay_D24615D7_C063_2581_41DE_8D08150632AD"],
        fieldOfViewOverlayOutsideColor: "#000000",
        scaleMode: "fit_outside",
        minimumZoomFactor: 0.5,
        fieldOfViewOverlayOutsideOpacity: 0,
        height: 4200,
      },
      {
        thumbnailUrl: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
        partial: false,
        label: "16",
        id: "panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
        hfovMin: "150%",
        frames: [
          {
            thumbnailUrl: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_t.jpg",
            class: "CubicPanoramaFrame",
            front: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/f/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            top: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/u/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            right: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/r/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            back: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/b/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            bottom: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/d/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            left: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0/l/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
          },
        ],
        hfovMax: 130,
        mapLocations: [
          {
            map: "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
            x: 1364.79,
            class: "PanoramaMapLocation",
            angle: 0,
            y: 1407.64,
          },
        ],
        class: "Panorama",
        adjacentPanoramas: [
          {
            panorama: "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
            backwardYaw: -1.02,
            class: "AdjacentPanorama",
            yaw: -180,
            distance: 1,
          },
        ],
        vfov: 180,
        overlays: [
          "this.overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
          "this.overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
          "this.overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
          "this.overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
          "this.overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
          "this.overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
          "this.overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2",
        ],
        pitch: 0,
        hfov: 360,
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 0,
          pitch: 0,
        },
        id: "camera_F5077D39_E002_9DD6_41E4_E63BB5E53661",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        class: "PhotoAlbumPlayer",
        viewerArea: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
        id: "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 179.88,
          pitch: 0,
        },
        id: "camera_F5270C7D_E002_9C49_41EB_667F1D80250E",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        playList: "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
        thumbnailUrl: "media/album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_t.png",
        label: "Photo Album MODAL5-SLIDE4",
        class: "PhotoAlbum",
        id: "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7",
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: -176.72,
          pitch: 0,
        },
        id: "camera_F5734D68_E002_9C76_41B2_F7B7FF8A9096",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        thumbnailUrl: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
        partial: false,
        label: "11",
        id: "panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
        hfovMin: "150%",
        frames: [
          {
            thumbnailUrl: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_t.jpg",
            class: "CubicPanoramaFrame",
            front: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/f/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            top: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/u/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            right: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/r/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            back: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/b/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            bottom: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/d/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            left: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0/l/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
          },
        ],
        hfovMax: 130,
        mapLocations: [
          {
            map: "this.map_CFADC1FE_C061_FD82_41E3_0133DA9B5609",
            x: 1332.64,
            class: "PanoramaMapLocation",
            angle: 0,
            y: 2625.5,
          },
        ],
        class: "Panorama",
        adjacentPanoramas: [
          {
            panorama: "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
            backwardYaw: -0.12,
            class: "AdjacentPanorama",
            yaw: -168.53,
            distance: 1,
          },
          {
            panorama: "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
            backwardYaw: -180,
            class: "AdjacentPanorama",
            yaw: 3.28,
            distance: 1,
          },
        ],
        vfov: 180,
        overlays: ["this.overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255", "this.overlay_CE11007F_C06E_DA81_41C7_431521B55D71", "this.overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8"],
        pitch: 0,
        hfov: 360,
      },
      {
        thumbnailUrl: "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0_t.jpg",
        duration: 5000,
        label: "MODAL5-SLIDE3",
        id: "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
        width: 4000,
        class: "Photo",
        image: {
          levels: [
            {
              url: "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0.jpg",
              class: "ImageResourceLevel",
            },
          ],
          class: "ImageResource",
        },
        height: 2250,
      },
      {
        buttonToggleHotspots: "this.IconButton_CDD3B3C2_DF8B_F53C_41CD_B4A5C764DC01",
        viewerArea: "this.MainViewer",
        gyroscopeEnabled: true,
        mouseControlMode: "drag_rotation",
        class: "PanoramaPlayer",
        id: "MainViewerPanoramaPlayer",
        buttonToggleGyroscope: "this.IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F",
        gyroscopeVerticalDraggingEnabled: true,
        displayPlaybackBar: true,
        buttonCardboardView: "this.IconButton_CDD273C2_DF8B_F53C_41D2_66BA3CE5505D",
        touchControlMode: "drag_acceleration",
      },
      {
        playList: "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
        thumbnailUrl: "media/album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_t.png",
        label: "Photo Album MODAL5-SLIDE3",
        class: "PhotoAlbum",
        id: "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
      },
      {
        class: "PlayList",
        id: "playList_F4CB4BA3_E002_A4FA_41E9_D2168630D3B2",
        items: [
          {
            begin: "this.loopAlbum(this.playList_F4CB4BA3_E002_A4FA_41E9_D2168630D3B2, 0)",
            media: "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1",
            class: "PhotoAlbumPlayListItem",
            player: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
          },
        ],
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 0,
          pitch: 0,
        },
        id: "camera_F5118CCB_E002_9C49_41E4_2BC6503A2FDB",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        class: "PlayList",
        id: "playList_F4CBBBA3_E002_A4FA_41DB_65450452B04C",
        items: [
          {
            begin: "this.loopAlbum(this.playList_F4CBBBA3_E002_A4FA_41DB_65450452B04C, 0)",
            media: "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9",
            class: "PhotoAlbumPlayListItem",
            player: "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BBPhotoAlbumPlayer",
          },
        ],
      },
      {
        automaticZoomSpeed: 10,
        class: "PanoramaCamera",
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 0,
          pitch: 0,
        },
        id: "panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        thumbnailUrl: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
        partial: false,
        label: "14",
        id: "panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
        hfovMin: "150%",
        frames: [
          {
            thumbnailUrl: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_t.jpg",
            class: "CubicPanoramaFrame",
            front: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/f/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            top: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/u/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            right: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/r/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            back: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/b/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            bottom: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/d/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
            left: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/0/{row}_{column}.jpg",
                  colCount: 3,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1536,
                  rowCount: 3,
                  height: 1536,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/1/{row}_{column}.jpg",
                  colCount: 2,
                  class: "TiledImageResourceLevel",
                  tags: "ondemand",
                  width: 1024,
                  rowCount: 2,
                  height: 1024,
                },
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0/l/2/{row}_{column}.jpg",
                  colCount: 1,
                  class: "TiledImageResourceLevel",
                  tags: ["ondemand", "preload"],
                  width: 512,
                  rowCount: 1,
                  height: 512,
                },
              ],
              class: "ImageResource",
            },
          },
        ],
        hfovMax: 130,
        mapLocations: [
          {
            map: "this.map_D0EB49EA_C066_ED82_41E5_32582275D1F5",
            x: 1357.64,
            class: "PanoramaMapLocation",
            angle: 0,
            y: 2339.79,
          },
        ],
        class: "Panorama",
        adjacentPanoramas: [
          {
            panorama: "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
            backwardYaw: -180,
            class: "AdjacentPanorama",
            yaw: -1.02,
            distance: 1,
          },
          {
            panorama: "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
            backwardYaw: 3.28,
            class: "AdjacentPanorama",
            yaw: -180,
            distance: 1,
          },
        ],
        vfov: 180,
        overlays: ["this.overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6", "this.overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91"],
        pitch: 0,
        hfov: 360,
      },
      {
        automaticZoomSpeed: 10,
        displayMovements: [
          {
            easing: "linear",
            class: "TargetRotationalCameraDisplayMovement",
            duration: 1000,
          },
          {
            easing: "cubic_in_out",
            class: "TargetRotationalCameraDisplayMovement",
            targetPitch: 0,
            targetStereographicFactor: 0,
            duration: 3000,
          },
        ],
        class: "PanoramaCamera",
        displayOriginPosition: {
          class: "RotationalCameraDisplayPosition",
          yaw: 0,
          stereographicFactor: 1,
          pitch: -90,
          hfov: 165,
        },
        initialPosition: {
          class: "PanoramaCameraPosition",
          yaw: 0,
          pitch: 0,
        },
        id: "panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera",
        initialSequence: {
          movements: [
            {
              easing: "cubic_in",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
            {
              easing: "linear",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 323,
            },
            {
              easing: "cubic_out",
              class: "DistancePanoramaCameraMovement",
              yawSpeed: 2.66,
              yawDelta: 18.5,
            },
          ],
          restartMovementOnUserInteraction: false,
          class: "PanoramaCameraSequence",
        },
      },
      {
        toolTipPaddingRight: 6,
        toolTipBorderSize: 1,
        id: "MainViewer",
        left: 0,
        toolTipPaddingTop: 4,
        playbackBarProgressBackgroundColorRatios: [0],
        progressBorderRadius: 0,
        paddingBottom: 0,
        width: "100%",
        borderRadius: 0,
        toolTipDisplayTime: 600,
        toolTipPaddingLeft: 6,
        playbackBarHeadShadowBlurRadius: 3,
        playbackBarLeft: 0,
        progressBackgroundColorRatios: [0],
        minHeight: 1,
        toolTipBorderRadius: 3,
        playbackBarHeadBackgroundColorRatios: [0, 1],
        playbackBarHeadHeight: 15,
        progressBarBorderColor: "#FFFFFF",
        progressBackgroundColorDirection: "vertical",
        progressBorderColor: "#000000",
        progressBarBackgroundColorRatios: [0],
        playbackBarBottom: 5,
        minWidth: 1,
        borderSize: 0,
        toolTipBorderColor: "#767676",
        paddingRight: 0,
        playbackBarHeadOpacity: 1,
        playbackBarProgressBackgroundColorDirection: "vertical",
        progressBarBackgroundColor: ["#666666"],
        progressBackgroundColor: ["#FFFFFF"],
        toolTipShadowSpread: 0,
        toolTipOpacity: 1,
        class: "ViewerArea",
        toolTipFontSize: "1.11vmin",
        playbackBarBackgroundColor: ["#FFFFFF"],
        playbackBarHeadWidth: 6,
        toolTipShadowBlurRadius: 3,
        playbackBarHeight: 10,
        toolTipTextShadowColor: "#000000",
        height: "100%",
        shadow: false,
        playbackBarBackgroundColorDirection: "vertical",
        toolTipTextShadowBlurRadius: 3,
        playbackBarRight: 0,
        progressBarBorderSize: 0,
        playbackBarProgressBorderSize: 0,
        toolTipPaddingBottom: 4,
        playbackBarProgressBorderRadius: 0,
        progressBarBorderRadius: 0,
        toolTipFontWeight: "normal",
        paddingLeft: 0,
        toolTipShadowColor: "#333333",
        paddingTop: 0,
        playbackBarHeadShadowHorizontalLength: 0,
        playbackBarBorderRadius: 0,
        transitionDuration: 500,
        playbackBarHeadBorderRadius: 0,
        playbackBarProgressBorderColor: "#000000",
        toolTipShadowOpacity: 1,
        toolTipFontStyle: "normal",
        progressLeft: 0,
        playbackBarHeadBorderColor: "#000000",
        playbackBarHeadBorderSize: 0,
        playbackBarProgressOpacity: 1,
        toolTipShadowHorizontalLength: 0,
        playbackBarBorderSize: 0,
        propagateClick: false,
        toolTipTextShadowOpacity: 0,
        toolTipShadowVerticalLength: 0,
        toolTipFontFamily: "Arial",
        vrPointerSelectionColor: "#FF6600",
        playbackBarBackgroundOpacity: 1,
        top: 0,
        playbackBarHeadShadowColor: "#000000",
        playbackBarHeadBackgroundColor: ["#111111", "#666666"],
        vrPointerSelectionTime: 2000,
        progressRight: 0,
        firstTransitionDuration: 0,
        progressOpacity: 1,
        playbackBarHeadShadowVerticalLength: 0,
        displayTooltipInTouchScreens: true,
        progressBarBackgroundColorDirection: "vertical",
        playbackBarHeadShadow: true,
        progressBottom: 0,
        toolTipBackgroundColor: "#F6F6F6",
        toolTipFontColor: "#606060",
        progressHeight: 10,
        playbackBarHeadBackgroundColorDirection: "vertical",
        progressBackgroundOpacity: 1,
        playbackBarProgressBackgroundColor: ["#3399FF"],
        playbackBarOpacity: 1,
        vrPointerColor: "#FFFFFF",
        progressBarOpacity: 0.5,
        playbackBarHeadShadowOpacity: 0.7,
        transitionMode: "blending",
        playbackBarBorderColor: "#FFFFFF",
        progressBorderSize: 0,
        data: {
          name: "Main Viewer",
        },
      },
      {
        maxWidth: 130,
        toolTipPaddingRight: 6,
        toolTipBorderSize: 1,
        id: "MapViewer",
        toolTipPaddingTop: 4,
        playbackBarProgressBackgroundColorRatios: [0],
        progressBorderRadius: 0,
        toolTipPaddingLeft: 6,
        width: "100%",
        borderRadius: 0,
        toolTipDisplayTime: 600,
        right: "0.91%",
        playbackBarHeadShadowBlurRadius: 3,
        playbackBarLeft: 0,
        progressBackgroundColorRatios: [0],
        minHeight: 1,
        toolTipBorderRadius: 3,
        paddingBottom: 0,
        playbackBarHeadBackgroundColorRatios: [0, 1],
        playbackBarHeadHeight: 15,
        progressBarBorderColor: "#FFFFFF",
        progressBackgroundColorDirection: "vertical",
        progressBorderColor: "#000000",
        progressBarBackgroundColorRatios: [0],
        playbackBarBottom: 0,
        minWidth: 1,
        borderSize: 0,
        toolTipBorderColor: "#767676",
        paddingRight: 0,
        playbackBarHeadOpacity: 1,
        playbackBarProgressBackgroundColorDirection: "vertical",
        progressBarBackgroundColor: ["#666666"],
        progressBackgroundColor: ["#FFFFFF"],
        toolTipShadowSpread: 0,
        toolTipOpacity: 1,
        class: "ViewerArea",
        toolTipFontSize: "1.11vmin",
        playbackBarBackgroundColor: ["#FFFFFF"],
        playbackBarHeadWidth: 6,
        toolTipShadowBlurRadius: 3,
        playbackBarHeight: 10,
        toolTipTextShadowColor: "#000000",
        height: "100%",
        shadow: false,
        playbackBarBackgroundColorDirection: "vertical",
        toolTipTextShadowBlurRadius: 3,
        toolTipPaddingBottom: 4,
        playbackBarRight: 0,
        progressBarBorderSize: 0,
        playbackBarProgressBorderSize: 0,
        playbackBarProgressBorderRadius: 0,
        progressBarBorderRadius: 0,
        toolTipFontWeight: "normal",
        paddingLeft: 0,
        toolTipShadowColor: "#333333",
        paddingTop: 0,
        maxHeight: 230,
        playbackBarBorderRadius: 0,
        transitionDuration: 500,
        playbackBarHeadShadowHorizontalLength: 0,
        playbackBarHeadBorderRadius: 0,
        playbackBarProgressBorderColor: "#000000",
        toolTipShadowOpacity: 1,
        toolTipFontStyle: "normal",
        progressLeft: 0,
        playbackBarHeadBorderColor: "#000000",
        playbackBarHeadBorderSize: 0,
        playbackBarProgressOpacity: 1,
        toolTipShadowHorizontalLength: 0,
        playbackBarBorderSize: 0,
        propagateClick: false,
        toolTipTextShadowOpacity: 0,
        toolTipShadowVerticalLength: 0,
        toolTipFontFamily: "Arial",
        vrPointerSelectionColor: "#FF6600",
        playbackBarBackgroundOpacity: 1,
        top: 7,
        playbackBarHeadShadowColor: "#000000",
        playbackBarHeadBackgroundColor: ["#111111", "#666666"],
        vrPointerSelectionTime: 2000,
        progressRight: 0,
        firstTransitionDuration: 0,
        progressOpacity: 1,
        playbackBarHeadShadowVerticalLength: 0,
        displayTooltipInTouchScreens: true,
        progressBarBackgroundColorDirection: "vertical",
        playbackBarHeadShadow: true,
        progressBottom: 2,
        toolTipBackgroundColor: "#F6F6F6",
        toolTipFontColor: "#606060",
        progressHeight: 10,
        playbackBarHeadBackgroundColorDirection: "vertical",
        progressBackgroundOpacity: 1,
        playbackBarProgressBackgroundColor: ["#3399FF"],
        playbackBarOpacity: 1,
        vrPointerColor: "#FFFFFF",
        progressBarOpacity: 0.5,
        playbackBarHeadShadowOpacity: 0.7,
        transitionMode: "blending",
        playbackBarBorderColor: "#FFFFFF",
        progressBorderSize: 0,
        data: {
          name: "Floor Plan",
        },
      },
      {
        children: ["this.Container_CDD283C2_DF8B_F53C_41E4_1D8886EB07B1", "this.Container_CDD2D3C2_DF8B_F53C_41E2_E279D9FFB49F"],
        height: "100%",
        id: "Container_CDD323C2_DF8B_F53C_41E3_2CDCF7687BF7",
        left: "0%",
        backgroundOpacity: 0,
        width: 330,
        layout: "absolute",
        scrollBarWidth: 10,
        borderRadius: 0,
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "top",
        top: "0%",
        paddingRight: 0,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        gap: 10,
        scrollBarMargin: 2,
        minWidth: 1,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "--- LEFT PANEL 2",
        },
      },
      {
        maxHeight: 400,
        children: ["this.WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18", "this.IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF"],
        scrollBarOpacity: 0.5,
        id: "Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13",
        left: "0%",
        backgroundOpacity: 0.3,
        layout: "absolute",
        scrollBarWidth: 10,
        borderRadius: 0,
        right: "0%",
        overflow: "scroll",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: false,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        top: "0%",
        bottom: 0,
        paddingRight: 0,
        borderSize: 0,
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        minWidth: 1,
        shadow: false,
        contentOpaque: false,
        visible: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        maxWidth: 600,
        data: {
          name: "Container14134",
        },
      },
      {
        children: ["this.Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A"],
        id: "Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB",
        left: "0%",
        backgroundOpacity: 0.6,
        layout: "absolute",
        scrollBarWidth: 10,
        right: "0%",
        borderRadius: 0,
        creationPolicy: "inAdvance",
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        top: "0%",
        bottom: "0%",
        minWidth: 1,
        borderSize: 0,
        paddingRight: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        click: "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        backgroundColor: ["#000000", "#000000"],
        shadow: false,
        contentOpaque: false,
        visible: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "--PHOTOALBUM",
        },
      },
      {
        paddingLeft: 0,
        maxHeight: 60,
        id: "IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391",
        backgroundOpacity: 0,
        width: 30,
        paddingBottom: 0,
        borderRadius: 0,
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        transparencyActive: true,
        minWidth: 1,
        borderSize: 0,
        mode: "toggle",
        paddingRight: 0,
        class: "IconButton",
        pressedIconURL: "skin/IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391_pressed.png",
        height: 30,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391.png",
        maxWidth: 60,
        data: {
          name: "IconButton Fullscreen",
        },
      },
      {
        media: "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC",
        class: "PanoramaPlayListItem",
        player: "this.MainViewerPanoramaPlayer",
        begin: "this.setMapLocation(this.PanoramaPlayListItem_F4CCFBB2_E002_A4DB_41E5_3F3EF9884E81, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
        camera: "this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_camera",
        id: "PanoramaPlayListItem_F4CCFBB2_E002_A4DB_41E5_3F3EF9884E81",
      },
      {
        media: "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6",
        class: "PanoramaPlayListItem",
        player: "this.MainViewerPanoramaPlayer",
        begin: "this.setMapLocation(this.PanoramaPlayListItem_F4CC2BB2_E002_A4DB_41E5_BA83C9C67874, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
        camera: "this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_camera",
        id: "PanoramaPlayListItem_F4CC2BB2_E002_A4DB_41E5_BA83C9C67874",
      },
      {
        media: "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2",
        class: "PanoramaPlayListItem",
        player: "this.MainViewerPanoramaPlayer",
        begin: "this.setMapLocation(this.PanoramaPlayListItem_F4CF9BB2_E002_A4DB_41D2_97E38EE2989D, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
        camera: "this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_camera",
        id: "PanoramaPlayListItem_F4CF9BB2_E002_A4DB_41D2_97E38EE2989D",
      },
      {
        media: "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8",
        class: "PanoramaPlayListItem",
        end: "this.trigger('tourEnded')",
        player: "this.MainViewerPanoramaPlayer",
        begin: "this.setMapLocation(this.PanoramaPlayListItem_F4CEFBB2_E002_A4DB_41E6_AA3946C5B915, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 0)",
        camera: "this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8_camera",
        id: "PanoramaPlayListItem_F4CEFBB2_E002_A4DB_41E6_AA3946C5B915",
      },
      {
        class: "PhotoPlayList",
        id: "album_D4AB1E33_D93A_5C41_41B3_F7917134E581_AlbumPlayList",
        items: [
          {
            media: "this.album_D4AB1E33_D93A_5C41_41B3_F7917134E581_0",
            class: "PhotoPlayListItem",
            camera: {
              class: "PhotoCamera",
              scaleMode: "fit_outside",
            },
          },
        ],
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_F53E4C2F_E002_A3C9_41D0_C4CFD842E85F); this.mainPlayList.set('selectedIndex', 1)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29E372A_DF79_9D4C_41CE_672EE54D4A20",
            pitch: -25.49,
            class: "HotspotPanoramaOverlayImage",
            yaw: -0.12,
            hfov: 25.3,
            distance: 100,
          },
        ],
        id: "overlay_CDE2F61D_C063_2681_41BE_851DE0F8EB97",
        data: {
          label: "Arrow 04b",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: -0.12,
            image: {
              levels: [
                {
                  url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0_HS_0_0_0_map.gif",
                  width: 27,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -25.49,
            hfov: 25.3,
          },
        ],
        rollOverDisplay: false,
      },
      {
        bleachingDistance: 1,
        class: "LensFlarePanoramaOverlay",
        yaw: -69.83,
        pitch: 45.36,
        bleaching: 0.2,
        id: "overlay_CF4C40D0_D947_C5DF_41D9_557D85050442",
      },
      {
        class: "PhotoPlayList",
        id: "album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_AlbumPlayList",
        items: [
          {
            media: "this.album_C8049E6B_D946_DCC1_41E2_61B1DE85F9E3_0",
            class: "PhotoPlayListItem",
            camera: {
              class: "PhotoCamera",
              scaleMode: "fit_outside",
            },
          },
        ],
      },
      {
        class: "PhotoPlayList",
        id: "album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_AlbumPlayList",
        items: [
          {
            media: "this.album_C843D8B9_D95A_4441_41D0_B0DCFBF5C2D1_0",
            class: "PhotoPlayListItem",
            camera: {
              class: "PhotoCamera",
              scaleMode: "fit_outside",
            },
          },
        ],
      },
      {
        map: {
          width: 172.43,
          x: 1271.43,
          class: "HotspotMapOverlayMap",
          image: {
            levels: [
              {
                url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0_map.gif",
                width: 16,
                class: "ImageResourceLevel",
                height: 16,
              },
            ],
            class: "ImageResource",
          },
          y: 2257.14,
          offsetY: 0,
          height: 165.29,
          offsetX: 0,
        },
        class: "AreaHotspotMapOverlay",
        areas: [
          {
            class: "HotspotMapOverlayArea",
            mapColor: "#FF0000",
            click: "this.mainPlayList.set('selectedIndex', 2)",
          },
        ],
        image: {
          x: 1271.43,
          y: 2257.14,
          width: 172.43,
          class: "HotspotMapOverlayImage",
          image: {
            levels: [
              {
                url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_0.png",
                width: 131,
                class: "ImageResourceLevel",
                height: 125,
              },
            ],
            class: "ImageResource",
          },
          height: 165.29,
        },
        useHandCursor: true,
        id: "overlay_D1604A97_C06F_2F82_41E2_BD792D73B8CB",
        data: {
          label: "Image",
        },
        rollOverDisplay: false,
      },
      {
        map: {
          width: 186.71,
          x: 1271.43,
          class: "HotspotMapOverlayMap",
          image: {
            levels: [
              {
                url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1_map.gif",
                width: 20,
                class: "ImageResourceLevel",
                height: 16,
              },
            ],
            class: "ImageResource",
          },
          y: 1335.71,
          offsetY: 0,
          height: 143.86,
          offsetX: 0,
        },
        class: "AreaHotspotMapOverlay",
        areas: [
          {
            class: "HotspotMapOverlayArea",
            mapColor: "#FF0000",
            click: "this.mainPlayList.set('selectedIndex', 3)",
          },
        ],
        image: {
          x: 1271.43,
          y: 1335.71,
          width: 186.71,
          class: "HotspotMapOverlayImage",
          image: {
            levels: [
              {
                url: "media/map_D0EB49EA_C066_ED82_41E5_32582275D1F5_HS_1.png",
                width: 142,
                class: "ImageResourceLevel",
                height: 109,
              },
            ],
            class: "ImageResource",
          },
          height: 143.86,
        },
        useHandCursor: true,
        id: "overlay_D1F271B1_C061_7D81_41CD_D3FBB5A3241E",
        data: {
          label: "Image",
        },
        rollOverDisplay: false,
      },
      {
        map: {
          width: 131.94,
          x: 1201.43,
          class: "HotspotMapOverlayMap",
          image: {
            levels: [
              {
                url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0_map.gif",
                width: 16,
                class: "ImageResourceLevel",
                height: 16,
              },
            ],
            class: "ImageResource",
          },
          y: 3023.57,
          offsetY: 0,
          height: 124.87,
          offsetX: 0,
        },
        class: "AreaHotspotMapOverlay",
        areas: [
          {
            class: "HotspotMapOverlayArea",
            mapColor: "#FF0000",
            click: "this.mainPlayList.set('selectedIndex', 0)",
          },
        ],
        image: {
          x: 1201.43,
          y: 3023.57,
          width: 131.94,
          class: "HotspotMapOverlayImage",
          image: {
            levels: [
              {
                url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_0.png",
                width: 100,
                class: "ImageResourceLevel",
                height: 95,
              },
            ],
            class: "ImageResource",
          },
          height: 124.87,
        },
        useHandCursor: true,
        id: "overlay_CF1CDDBC_C061_6587_41DB_4FEC502CAF48",
        data: {
          label: "Image",
        },
        rollOverDisplay: false,
      },
      {
        map: {
          width: 108.14,
          x: 1278.57,
          class: "HotspotMapOverlayMap",
          image: {
            levels: [
              {
                url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1_map.gif",
                width: 16,
                class: "ImageResourceLevel",
                height: 24,
              },
            ],
            class: "ImageResource",
          },
          y: 2542.86,
          offsetY: 0,
          height: 165.29,
          offsetX: 0,
        },
        class: "AreaHotspotMapOverlay",
        areas: [
          {
            class: "HotspotMapOverlayArea",
            mapColor: "#FF0000",
            click: "this.mainPlayList.set('selectedIndex', 1)",
          },
        ],
        image: {
          x: 1278.57,
          y: 2542.86,
          width: 108.14,
          class: "HotspotMapOverlayImage",
          image: {
            levels: [
              {
                url: "media/map_CFADC1FE_C061_FD82_41E3_0133DA9B5609_HS_1.png",
                width: 82,
                class: "ImageResourceLevel",
                height: 125,
              },
            ],
            class: "ImageResource",
          },
          height: 165.29,
        },
        useHandCursor: true,
        id: "overlay_D24615D7_C063_2581_41DE_8D08150632AD",
        data: {
          label: "Image",
        },
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_F51BDD0A_E002_9DCA_41E4_CD3529EFA716); this.mainPlayList.set('selectedIndex', 2)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29C2737_DF79_9D44_41E4_4351D6A38827",
            pitch: -31.23,
            class: "HotspotPanoramaOverlayImage",
            yaw: -180,
            hfov: 35.02,
            distance: 100,
          },
        ],
        id: "overlay_D2175A91_C061_2F81_41D0_F31B6B3A12D6",
        data: {
          label: "Arrow 04c",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: -180,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0_0_map.gif",
                  width: 38,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -31.23,
            hfov: 35.02,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click:
              "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F4C8CBA3_E002_A4FA_4190_A9AD63B12487.set('selectedIndex', -1); }, this); this.playList_F4C8CBA3_E002_A4FA_4190_A9AD63B12487.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            yaw: 70.29,
            hfov: 10.5,
            class: "HotspotPanoramaOverlayImage",
            distance: 50,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_0.png",
                  width: 119,
                  class: "ImageResourceLevel",
                  height: 152,
                },
              ],
              class: "ImageResource",
            },
            pitch: 6.97,
            roll: 0,
          },
        ],
        id: "overlay_D5FFCB41_D93E_C4C1_41A8_4384F2BFDEC7",
        data: {
          label: "Polygon",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 70.29,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_3_1_0_map.gif",
                  width: 59,
                  class: "ImageResourceLevel",
                  height: 76,
                },
              ],
              class: "ImageResource",
            },
            pitch: 6.97,
            hfov: 10.5,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click:
              "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F4C83BA3_E002_A4FA_41E3_3D7118D0B606.set('selectedIndex', -1); }, this); this.playList_F4C83BA3_E002_A4FA_41E3_3D7118D0B606.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            yaw: 57.57,
            hfov: 10.96,
            class: "HotspotPanoramaOverlayImage",
            distance: 50,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_0.png",
                  width: 125,
                  class: "ImageResourceLevel",
                  height: 149,
                },
              ],
              class: "ImageResource",
            },
            pitch: 8.04,
            roll: 0,
          },
        ],
        id: "overlay_C9B40350_D94F_C4DF_41B7_E5FD5B299A94",
        data: {
          label: "Polygon",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 57.57,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_4_1_0_map.gif",
                  width: 62,
                  class: "ImageResourceLevel",
                  height: 74,
                },
              ],
              class: "ImageResource",
            },
            pitch: 8.04,
            hfov: 10.96,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click:
              "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F4CBBBA3_E002_A4FA_41DB_65450452B04C.set('selectedIndex', -1); }, this); this.playList_F4CBBBA3_E002_A4FA_41DB_65450452B04C.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            yaw: 58.35,
            hfov: 7.29,
            class: "HotspotPanoramaOverlayImage",
            distance: 50,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_0.png",
                  width: 83,
                  class: "ImageResourceLevel",
                  height: 111,
                },
              ],
              class: "ImageResource",
            },
            pitch: -3.43,
            roll: 0,
          },
        ],
        id: "overlay_D6499702_D94B_CC43_41CC_EFD02FF63903",
        data: {
          label: "Polygon",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 58.35,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_5_1_0_map.gif",
                  width: 41,
                  class: "ImageResourceLevel",
                  height: 55,
                },
              ],
              class: "ImageResource",
            },
            pitch: -3.43,
            hfov: 7.29,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click:
              "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F4CB4BA3_E002_A4FA_41E9_D2168630D3B2.set('selectedIndex', -1); }, this); this.playList_F4CB4BA3_E002_A4FA_41E9_D2168630D3B2.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D2923748_DF79_9DCD_41D1_17370FE7676F",
            pitch: -3.43,
            class: "HotspotPanoramaOverlayImage",
            yaw: 65.45,
            hfov: 3.27,
            distance: 100,
          },
        ],
        id: "overlay_C97B14E6_D95E_CDC3_41C8_9546AD474038",
        data: {
          label: "Info 01",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 65.45,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0_0_map.gif",
                  width: 16,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -3.43,
            hfov: 3.27,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click:
              "this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_F4CACBA3_E002_A4FA_41E0_DA6E3EF8F19A.set('selectedIndex', -1); }, this); this.playList_F4CACBA3_E002_A4FA_41E0_DA6E3EF8F19A.set('selectedIndex', 0); this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D291C74A_DF79_9DCC_41BE_D838E73E88CE",
            pitch: -3.8,
            class: "HotspotPanoramaOverlayImage",
            yaw: 75.48,
            hfov: 3.68,
            distance: 100,
          },
        ],
        id: "overlay_C90A650C_D95A_4C47_41DC_C165B7249A29",
        data: {
          label: "Info 01",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 75.48,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0_0_map.gif",
                  width: 16,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -3.8,
            hfov: 3.68,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, true, 0, null, null, false)",
          },
        ],
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D291474C_DF79_9DC4_41E2_E1A17203419D",
            pitch: -12.26,
            class: "HotspotPanoramaOverlayImage",
            yaw: 49.61,
            hfov: 4.85,
            distance: 100,
          },
        ],
        id: "overlay_C8A855D2_D949_CFC3_41E2_075FAFB574A2",
        data: {
          label: "Circle 360 2",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 49.61,
            image: {
              levels: [
                {
                  url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0_0_map.gif",
                  width: 16,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -12.26,
            hfov: 4.85,
          },
        ],
        rollOverDisplay: false,
      },
      {
        toolTipPaddingRight: 6,
        toolTipBorderSize: 1,
        id: "ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB",
        left: "0%",
        toolTipPaddingTop: 4,
        playbackBarProgressBackgroundColorRatios: [0],
        progressBorderRadius: 0,
        paddingBottom: 0,
        width: "100%",
        borderRadius: 0,
        toolTipDisplayTime: 600,
        toolTipPaddingLeft: 6,
        playbackBarHeadShadowBlurRadius: 3,
        playbackBarLeft: 0,
        progressBackgroundColorRatios: [0],
        minHeight: 1,
        toolTipBorderRadius: 3,
        playbackBarHeadBackgroundColorRatios: [0, 1],
        playbackBarHeadHeight: 15,
        progressBarBorderColor: "#FFFFFF",
        progressBackgroundColorDirection: "vertical",
        progressBorderColor: "#000000",
        progressBarBackgroundColorRatios: [0],
        playbackBarBottom: 0,
        minWidth: 1,
        borderSize: 0,
        toolTipBorderColor: "#767676",
        paddingRight: 0,
        playbackBarHeadOpacity: 1,
        playbackBarProgressBackgroundColorDirection: "vertical",
        progressBarBackgroundColor: ["#666666"],
        progressBackgroundColor: ["#FFFFFF"],
        toolTipShadowSpread: 0,
        toolTipOpacity: 1,
        class: "ViewerArea",
        toolTipFontSize: 12,
        playbackBarBackgroundColor: ["#FFFFFF"],
        playbackBarHeadWidth: 6,
        toolTipShadowBlurRadius: 3,
        playbackBarHeight: 10,
        toolTipTextShadowColor: "#000000",
        height: "100%",
        shadow: false,
        playbackBarBackgroundColorDirection: "vertical",
        toolTipTextShadowBlurRadius: 3,
        playbackBarRight: 0,
        progressBarBorderSize: 0,
        playbackBarProgressBorderSize: 0,
        toolTipPaddingBottom: 4,
        playbackBarProgressBorderRadius: 0,
        progressBarBorderRadius: 0,
        toolTipFontWeight: "normal",
        paddingLeft: 0,
        toolTipShadowColor: "#333333",
        paddingTop: 0,
        playbackBarHeadShadowHorizontalLength: 0,
        playbackBarBorderRadius: 0,
        transitionDuration: 500,
        playbackBarHeadBorderRadius: 0,
        playbackBarProgressBorderColor: "#000000",
        toolTipShadowOpacity: 1,
        toolTipFontStyle: "normal",
        progressLeft: 0,
        playbackBarHeadBorderColor: "#000000",
        playbackBarHeadBorderSize: 0,
        playbackBarProgressOpacity: 1,
        toolTipShadowHorizontalLength: 0,
        playbackBarBorderSize: 0,
        propagateClick: false,
        toolTipTextShadowOpacity: 0,
        toolTipShadowVerticalLength: 0,
        toolTipFontFamily: "Arial",
        vrPointerSelectionColor: "#FF6600",
        playbackBarBackgroundOpacity: 1,
        top: "0%",
        playbackBarHeadShadowColor: "#000000",
        playbackBarHeadBackgroundColor: ["#111111", "#666666"],
        vrPointerSelectionTime: 2000,
        progressRight: 0,
        firstTransitionDuration: 0,
        progressOpacity: 1,
        playbackBarHeadShadowVerticalLength: 0,
        displayTooltipInTouchScreens: true,
        progressBarBackgroundColorDirection: "vertical",
        playbackBarHeadShadow: true,
        progressBottom: 2,
        toolTipBackgroundColor: "#F6F6F6",
        toolTipFontColor: "#606060",
        progressHeight: 10,
        playbackBarHeadBackgroundColorDirection: "vertical",
        progressBackgroundOpacity: 1,
        playbackBarProgressBackgroundColor: ["#3399FF"],
        playbackBarOpacity: 1,
        vrPointerColor: "#FFFFFF",
        progressBarOpacity: 0.5,
        playbackBarHeadShadowOpacity: 0.7,
        transitionMode: "blending",
        playbackBarBorderColor: "#FFFFFF",
        progressBorderSize: 0,
        data: {
          name: "Viewer photoalbum 1",
        },
      },
      {
        class: "PhotoPlayList",
        id: "album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_AlbumPlayList",
        items: [
          {
            media: "this.album_C90E853F_D94A_4C41_41D6_7DE775BD58C7_0",
            class: "PhotoPlayListItem",
            camera: {
              class: "PhotoCamera",
              scaleMode: "fit_outside",
            },
          },
        ],
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2, this.camera_F5118CCB_E002_9C49_41E4_2BC6503A2FDB); this.mainPlayList.set('selectedIndex', 2)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29DE730_DF79_9D5C_41E8_BCBFB2FD787C",
            pitch: -23.24,
            class: "HotspotPanoramaOverlayImage",
            yaw: 3.28,
            hfov: 34.24,
            distance: 100,
          },
        ],
        id: "overlay_CE66F48A_C06F_3B83_41BA_1682F05DC255",
        data: {
          label: "Arrow 04c",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: 3.28,
            image: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0_HS_0_0_0_map.gif",
                  width: 38,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -23.24,
            hfov: 34.24,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC, this.camera_F5270C7D_E002_9C49_41EB_667F1D80250E); this.mainPlayList.set('selectedIndex', 0)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29D3732_DF79_9D5D_41E5_2E19FF1D4500",
            pitch: -22.41,
            class: "HotspotPanoramaOverlayImage",
            yaw: -168.53,
            hfov: 37.11,
            distance: 100,
          },
        ],
        id: "overlay_CE11007F_C06E_DA81_41C7_431521B55D71",
        data: {
          label: "Arrow 04c",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: -168.53,
            image: {
              levels: [
                {
                  url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0_HS_1_0_0_map.gif",
                  width: 38,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -22.41,
            hfov: 37.11,
          },
        ],
        rollOverDisplay: false,
      },
      {
        bleachingDistance: 1,
        class: "LensFlarePanoramaOverlay",
        yaw: -93.99,
        pitch: 48.63,
        bleaching: 0.2,
        id: "overlay_CF8AC3A4_D947_C447_41D2_75696C55CCE8",
      },
      {
        paddingLeft: 0,
        maxHeight: 60,
        id: "IconButton_CDD3B3C2_DF8B_F53C_41CD_B4A5C764DC01",
        backgroundOpacity: 0,
        width: 30,
        paddingBottom: 0,
        borderRadius: 0,
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        transparencyActive: true,
        minWidth: 1,
        borderSize: 0,
        mode: "toggle",
        paddingRight: 0,
        class: "IconButton",
        pressedIconURL: "skin/IconButton_CDD3B3C2_DF8B_F53C_41CD_B4A5C764DC01_pressed.png",
        height: 30,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_CDD3B3C2_DF8B_F53C_41CD_B4A5C764DC01.png",
        maxWidth: 60,
        data: {
          name: "IconButton Hs visibility",
        },
      },
      {
        paddingLeft: 0,
        maxHeight: 60,
        id: "IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F",
        backgroundOpacity: 0,
        width: 34,
        paddingBottom: 0,
        borderRadius: 0,
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        transparencyActive: true,
        minWidth: 1,
        borderSize: 0,
        mode: "toggle",
        paddingRight: 0,
        class: "IconButton",
        pressedIconURL: "skin/IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F_pressed.png",
        height: 34,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F.png",
        maxWidth: 60,
        data: {
          name: "IconButton Gyroscopic",
        },
      },
      {
        paddingLeft: 0,
        maxHeight: 60,
        id: "IconButton_CDD273C2_DF8B_F53C_41D2_66BA3CE5505D",
        backgroundOpacity: 0,
        width: 30,
        paddingBottom: 0,
        borderRadius: 0,
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        transparencyActive: true,
        minWidth: 1,
        borderSize: 0,
        mode: "push",
        paddingRight: 0,
        class: "IconButton",
        height: 30,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_CDD273C2_DF8B_F53C_41D2_66BA3CE5505D.png",
        maxWidth: 60,
        data: {
          name: "IconButton VR",
        },
      },
      {
        class: "PhotoPlayList",
        id: "album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_AlbumPlayList",
        items: [
          {
            media: "this.album_D6DB33F5_D949_CBC1_41E1_36A631AE71C9_0",
            class: "PhotoPlayListItem",
            camera: {
              class: "PhotoCamera",
              scaleMode: "fit_outside",
            },
          },
        ],
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA532D88_C061_658E_41C3_F09BD88038B8, this.camera_F5077D39_E002_9DD6_41E4_E63BB5E53661); this.mainPlayList.set('selectedIndex', 3)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29C9734_DF79_9D44_41B1_E65A0E813D91",
            pitch: -14.85,
            class: "HotspotPanoramaOverlayImage",
            yaw: -1.02,
            hfov: 28.5,
            distance: 100,
          },
        ],
        id: "overlay_D255E571_C063_FA81_41DB_B33D4A5A3EE6",
        data: {
          label: "Arrow 04c",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: -1.02,
            image: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0_0_map.gif",
                  width: 38,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -14.85,
            hfov: 28.5,
          },
        ],
        rollOverDisplay: false,
      },
      {
        class: "HotspotPanoramaOverlay",
        areas: [
          {
            class: "HotspotPanoramaOverlayArea",
            mapColor: "#FF0000",
            click: "this.startPanoramaWithCamera(this.panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6, this.camera_F5734D68_E002_9C76_41B2_F7B7FF8A9096); this.mainPlayList.set('selectedIndex', 1)",
          },
        ],
        enabledInCardboard: true,
        useHandCursor: true,
        items: [
          {
            image: "this.AnimatedImageResource_D29CF735_DF79_9D44_41BD_ADDC9F21BFB1",
            pitch: -49.04,
            class: "HotspotPanoramaOverlayImage",
            yaw: -180,
            hfov: 24.7,
            distance: 100,
          },
        ],
        id: "overlay_D37D85EA_C061_2583_41B6_DDBB9052CC91",
        data: {
          label: "Arrow 04c",
        },
        maps: [
          {
            class: "HotspotPanoramaOverlayMap",
            yaw: -180,
            image: {
              levels: [
                {
                  url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0_0_map.gif",
                  width: 38,
                  class: "ImageResourceLevel",
                  height: 16,
                },
              ],
              class: "ImageResource",
            },
            pitch: -49.04,
            hfov: 24.7,
          },
        ],
        rollOverDisplay: false,
      },
      {
        children: ["this.Container_CDD2F3C2_DF8B_F53C_41E9_8FDB3A84ABED", "this.IconButton_CDD2E3C2_DF8B_F53C_41C9_F584545D00B9"],
        height: "100%",
        id: "Container_CDD283C2_DF8B_F53C_41E4_1D8886EB07B1",
        left: "0%",
        backgroundOpacity: 0,
        width: 66,
        layout: "absolute",
        scrollBarWidth: 10,
        borderRadius: 0,
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        top: "0%",
        paddingRight: 0,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        gap: 10,
        scrollBarMargin: 2,
        minWidth: 1,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "- COLLAPSE",
        },
      },
      {
        children: ["this.Container_CDD2C3C2_DF8B_F53C_41D3_D0D9C7605A57", "this.IconButton_CDD333C2_DF8B_F53C_41E5_BAC3DAE1D466"],
        height: "100%",
        id: "Container_CDD2D3C2_DF8B_F53C_41E2_E279D9FFB49F",
        left: "0%",
        backgroundOpacity: 0,
        width: "100%",
        layout: "absolute",
        scrollBarWidth: 10,
        borderRadius: 0,
        creationPolicy: "inAdvance",
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "top",
        top: "0%",
        paddingRight: 0,
        scrollBarColor: "#000000",
        borderSize: 0,
        scrollBarVisible: "rollOver",
        class: "Container",
        gap: 10,
        scrollBarMargin: 2,
        minWidth: 1,
        shadow: false,
        contentOpaque: false,
        visible: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "- EXPANDED",
        },
      },
      {
        insetBorder: false,
        id: "WebFrame_C8885C67_D979_FCC1_41E1_E4CC44028C18",
        left: "0%",
        backgroundOpacity: 1,
        width: "100%",
        paddingBottom: 0,
        borderRadius: 0,
        url: "https://museumnasional.iheritage-virtual.id/koleksi/02/keramikteksing/",
        minHeight: 1,
        propagateClick: false,
        backgroundColorRatios: [0],
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        paddingRight: 0,
        class: "WebFrame",
        backgroundColorDirection: "vertical",
        scrollEnabled: true,
        backgroundColor: ["#FFFFFF"],
        shadow: false,
        data: {
          name: "WebFrame14181",
        },
        paddingTop: 0,
        paddingLeft: 0,
        height: "100%",
      },
      {
        paddingLeft: 0,
        maxHeight: 50,
        id: "IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF",
        backgroundOpacity: 0,
        width: 50,
        borderRadius: 0,
        right: "0.15%",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: false,
        verticalAlign: "middle",
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        transparencyActive: false,
        mode: "push",
        click: "this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, false, 0, null, null, false); this.setComponentVisibility(this.Container_C8EDBC87_D97B_BC41_41E1_FB154CB4DC13, false, 0, null, null, false)",
        paddingRight: 0,
        class: "IconButton",
        height: 50,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_CB797206_D94B_C443_41C4_EB43465AEBFF.png",
        maxWidth: 50,
        data: {
          name: "IconButton14992",
        },
      },
      {
        maxHeight: 400,
        maxWidth: 650,
        children: ["this.Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3"],
        scrollBarOpacity: 0.5,
        id: "Container_CD8F5D5B_D9CE_7CC1_41E2_BF0FDAE3020A",
        left: "0%",
        backgroundOpacity: 1,
        layout: "vertical",
        shadowColor: "#000000",
        shadowHorizontalLength: 0,
        borderRadius: 0,
        shadowOpacity: 0.3,
        right: "0%",
        overflow: "visible",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: false,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        top: "0%",
        bottom: "0%",
        paddingRight: 0,
        borderSize: 0,
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        scrollBarWidth: 10,
        minWidth: 1,
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        shadowVerticalLength: 0,
        scrollBarMargin: 2,
        shadow: true,
        contentOpaque: false,
        horizontalAlign: "center",
        paddingTop: 0,
        paddingLeft: 0,
        shadowBlurRadius: 25,
        data: {
          name: "Global",
        },
        shadowSpread: 1,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA061D93_C061_2582_41E7_0C709DDC7BFC_0_HS_0_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 420,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29E372A_DF79_9D4C_41CE_672EE54D4A20",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_0_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 300,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29C2737_DF79_9D44_41E4_4351D6A38827",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 22,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_6_0.png",
            width: 460,
            class: "ImageResourceLevel",
            height: 690,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D2923748_DF79_9DCD_41D1_17370FE7676F",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 22,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_7_0.png",
            width: 460,
            class: "ImageResourceLevel",
            height: 690,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D291C74A_DF79_9DCC_41BE_D838E73E88CE",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 24,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA532D88_C061_658E_41C3_F09BD88038B8_0_HS_8_0.png",
            width: 800,
            class: "ImageResourceLevel",
            height: 1200,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D291474C_DF79_9DC4_41E2_E1A17203419D",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0_HS_0_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 300,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29DE730_DF79_9D5C_41E8_BCBFB2FD787C",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA504374_C061_DE87_41D4_C2A41DEFA4E6_0_HS_1_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 300,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29D3732_DF79_9D5D_41E5_2E19FF1D4500",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_0_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 300,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29C9734_DF79_9D44_41B1_E65A0E813D91",
        frameDuration: 41,
      },
      {
        colCount: 4,
        frameCount: 21,
        rowCount: 6,
        levels: [
          {
            url: "media/panorama_CA5368A3_C061_2B82_41B3_C71332C4A0E2_0_HS_1_0.png",
            width: 480,
            class: "ImageResourceLevel",
            height: 300,
          },
        ],
        class: "AnimatedImageResource",
        id: "AnimatedImageResource_D29CF735_DF79_9D44_41BD_ADDC9F21BFB1",
        frameDuration: 41,
      },
      {
        height: "100%",
        id: "Container_CDD2F3C2_DF8B_F53C_41E9_8FDB3A84ABED",
        left: "0%",
        backgroundOpacity: 0.19,
        width: 36,
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0],
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        paddingRight: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        backgroundColor: ["#CCCCCC"],
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "Container black",
        },
      },
      {
        cursor: "hand",
        maxHeight: 50,
        id: "IconButton_CDD2E3C2_DF8B_F53C_41C9_F584545D00B9",
        left: 10,
        backgroundOpacity: 0,
        width: 44,
        paddingBottom: 0,
        borderRadius: 0,
        rollOverIconURL: "skin/IconButton_CDD2E3C2_DF8B_F53C_41C9_F584545D00B9_rollover.png",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "middle",
        top: "40%",
        bottom: "40%",
        paddingRight: 0,
        borderSize: 0,
        transparencyActive: true,
        mode: "push",
        click:
          "this.setComponentVisibility(this.Container_CDD2D3C2_DF8B_F53C_41E2_E279D9FFB49F, true, 0, this.effect_4CD06BFB_5705_AD47_41BD_DD626E481855, 'showEffect', false); this.setComponentVisibility(this.Container_CDD283C2_DF8B_F53C_41E4_1D8886EB07B1, false, 0, this.effect_4DE9D19D_5705_5DFD_41C8_A84F2FF661E6, 'hideEffect', false)",
        class: "IconButton",
        minWidth: 1,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        paddingLeft: 0,
        iconURL: "skin/IconButton_CDD2E3C2_DF8B_F53C_41C9_F584545D00B9.png",
        maxWidth: 50,
        data: {
          name: "IconButton arrow",
        },
      },
      {
        children: ["this.Container_CDD273C2_DF8B_F53C_41D9_5935A77C3631", "this.Container_CDD0E3C2_DF8B_F53C_41E9_3D4FB3629CF8"],
        height: "100%",
        id: "Container_CDD2C3C2_DF8B_F53C_41D3_D0D9C7605A57",
        left: "0%",
        backgroundOpacity: 0.08,
        width: 300,
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 40,
        borderRadius: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0],
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        paddingRight: 40,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        backgroundColor: ["#999999"],
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 40,
        paddingLeft: 40,
        scrollBarOpacity: 0.5,
        data: {
          name: "Container",
        },
      },
      {
        cursor: "hand",
        maxHeight: 50,
        id: "IconButton_CDD333C2_DF8B_F53C_41E5_BAC3DAE1D466",
        backgroundOpacity: 0,
        width: 44,
        borderRadius: 0,
        right: 9,
        rollOverIconURL: "skin/IconButton_CDD333C2_DF8B_F53C_41E5_BAC3DAE1D466_rollover.png",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: true,
        verticalAlign: "middle",
        top: "40%",
        bottom: "40%",
        paddingRight: 0,
        borderSize: 0,
        transparencyActive: true,
        mode: "push",
        click:
          "this.setComponentVisibility(this.Container_CDD2D3C2_DF8B_F53C_41E2_E279D9FFB49F, false, 0, this.effect_62AD73E7_74A7_9CF6_41C5_55E9CFDD3B7E, 'hideEffect', false); this.setComponentVisibility(this.Container_CDD283C2_DF8B_F53C_41E4_1D8886EB07B1, true, 0, this.effect_4E3E2032_5705_DAC6_41CE_6A6E562AB368, 'showEffect', false)",
        class: "IconButton",
        minWidth: 1,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        paddingLeft: 0,
        iconURL: "skin/IconButton_CDD333C2_DF8B_F53C_41E5_BAC3DAE1D466.png",
        maxWidth: 50,
        data: {
          name: "IconButton collapse",
        },
      },
      {
        children: ["this.ViewerAreaLabeled_CD8F6D5B_D9CE_7CC1_41C0_C6A3D30729BB", "this.IconButton_EF889149_E003_A5B6_4195_842A7201CF9F"],
        height: "100%",
        id: "Container_CD8F7D5B_D9CE_7CC1_41DD_6274F91CE6E3",
        backgroundOpacity: 0.3,
        width: "100%",
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "visible",
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        paddingRight: 0,
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "Container photo",
        },
      },
      {
        children: [
          "this.Container_CDD253C2_DF8B_F53C_41D0_ACCC787A139C",
          "this.Button_CDD243C2_DF8B_F53C_41A5_B9E71B47A5F7",
          "this.Container_CDD3B3C2_DF8B_F53C_41AA_4F7D1338EF1C",
          "this.Button_CDD393C2_DF8B_F53C_41D2_35EA5C820830",
          "this.Container_CDD373C2_DF8B_F53C_41DD_CD8B193A4C85",
          "this.DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6",
        ],
        id: "Container_CDD273C2_DF8B_F53C_41D9_5935A77C3631",
        left: "0%",
        backgroundOpacity: 0,
        width: "100%",
        layout: "vertical",
        scrollBarWidth: 10,
        borderRadius: 0,
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "middle",
        top: "8.9%",
        bottom: "20.12%",
        paddingRight: 0,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        class: "Container",
        gap: 0,
        scrollBarMargin: 2,
        minWidth: 1,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "-Container buttons",
        },
      },
      {
        children: ["this.Container_CDD213C2_DF8B_F53C_41DA_50BE374B9FDD", "this.Container_CDD203C2_DF8B_F53C_41E6_D6D985C436CE"],
        id: "Container_CDD0E3C2_DF8B_F53C_41E9_3D4FB3629CF8",
        backgroundOpacity: 0,
        width: "100%",
        layout: "vertical",
        scrollBarWidth: 10,
        borderRadius: 0,
        right: "0%",
        overflow: "scroll",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: true,
        verticalAlign: "bottom",
        bottom: "0%",
        minWidth: 1,
        scrollBarColor: "#000000",
        borderSize: 0,
        scrollBarVisible: "rollOver",
        paddingRight: 0,
        class: "Container",
        gap: 10,
        scrollBarMargin: 2,
        height: 120,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "-Container footer",
        },
      },
      {
        paddingLeft: 0,
        maxHeight: 50,
        id: "IconButton_EF889149_E003_A5B6_4195_842A7201CF9F",
        backgroundOpacity: 0,
        width: 50,
        borderRadius: 0,
        right: "0.15%",
        minHeight: 1,
        paddingBottom: 0,
        propagateClick: false,
        verticalAlign: "middle",
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        transparencyActive: false,
        mode: "push",
        click: "this.setComponentVisibility(this.Container_CD8EFD5C_D9CE_7CC7_41D2_3FD5DEB9CEFB, false, 0, null, null, false)",
        paddingRight: 0,
        class: "IconButton",
        height: 50,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_EF889149_E003_A5B6_4195_842A7201CF9F.png",
        maxWidth: 50,
        data: {
          name: "IconButton14992",
        },
      },
      {
        scrollBarOpacity: 0.5,
        id: "Container_CDD253C2_DF8B_F53C_41D0_ACCC787A139C",
        backgroundOpacity: 0.3,
        width: "100%",
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        paddingRight: 0,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        height: 1,
        data: {
          name: "line",
        },
      },
      {
        textDecoration: "none",
        paddingLeft: 10,
        fontFamily: "Lato",
        shadowBlurRadius: 6,
        data: {
          name: "Button Tour Info",
        },
        backgroundColor: ["#000000", "#000000"],
        id: "Button_CDD243C2_DF8B_F53C_41A5_B9E71B47A5F7",
        backgroundOpacity: 0,
        width: "100%",
        iconBeforeLabel: true,
        shadowColor: "#000000",
        borderRadius: 0,
        paddingBottom: 0,
        rollOverBackgroundOpacity: 0.8,
        iconHeight: 32,
        minHeight: 1,
        iconWidth: 32,
        propagateClick: true,
        borderColor: "#000000",
        verticalAlign: "middle",
        backgroundColorRatios: [0, 1],
        pressedBackgroundOpacity: 1,
        rollOverBackgroundColorRatios: [0],
        minWidth: 1,
        borderSize: 0,
        mode: "push",
        rollOverBackgroundColor: ["#5CA1DE"],
        paddingRight: 0,
        fontSize: 18,
        layout: "horizontal",
        label: "RUANG TENGAH",
        class: "Button",
        backgroundColorDirection: "vertical",
        gap: 5,
        click: "this.mainPlayList.set('selectedIndex', 2)",
        fontColor: "#FFFFFF",
        shadow: false,
        horizontalAlign: "left",
        fontStyle: "normal",
        paddingTop: 0,
        cursor: "hand",
        height: 50,
        fontWeight: "bold",
        shadowSpread: 1,
      },
      {
        children: ["this.Container_D0EB1D0F_DFB0_8747_41D5_89FAF402BD1C"],
        scrollBarOpacity: 0.5,
        id: "Container_CDD3B3C2_DF8B_F53C_41AA_4F7D1338EF1C",
        backgroundOpacity: 0.3,
        width: "100%",
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        paddingRight: 0,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        height: 1,
        data: {
          name: "line",
        },
      },
      {
        textDecoration: "none",
        paddingLeft: 10,
        fontFamily: "Lato",
        shadowBlurRadius: 6,
        data: {
          name: "Button Panorama List",
        },
        backgroundColor: ["#000000", "#000000"],
        id: "Button_CDD393C2_DF8B_F53C_41D2_35EA5C820830",
        backgroundOpacity: 0,
        width: "100%",
        iconBeforeLabel: true,
        shadowColor: "#000000",
        borderRadius: 0,
        paddingBottom: 0,
        rollOverBackgroundOpacity: 0.8,
        iconHeight: 32,
        minHeight: 1,
        iconWidth: 32,
        propagateClick: true,
        borderColor: "#000000",
        verticalAlign: "middle",
        backgroundColorRatios: [0, 1],
        pressedBackgroundOpacity: 1,
        rollOverBackgroundColorRatios: [0],
        minWidth: 1,
        borderSize: 0,
        mode: "push",
        rollOverBackgroundColor: ["#5CA1DE"],
        paddingRight: 0,
        fontSize: 18,
        layout: "horizontal",
        label: "HALAMAN",
        class: "Button",
        backgroundColorDirection: "vertical",
        gap: 23,
        click: "this.mainPlayList.set('selectedIndex', 0)",
        fontColor: "#FFFFFF",
        shadow: false,
        horizontalAlign: "left",
        fontStyle: "normal",
        paddingTop: 0,
        cursor: "hand",
        height: 50,
        fontWeight: "bold",
        shadowSpread: 1,
      },
      {
        scrollBarOpacity: 0.5,
        id: "Container_CDD373C2_DF8B_F53C_41DD_CD8B193A4C85",
        backgroundOpacity: 0.3,
        width: "100%",
        layout: "absolute",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        paddingRight: 0,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        height: 1,
        data: {
          name: "line",
        },
      },
      {
        textDecoration: "none",
        fontFamily: "Leelawadee",
        popUpShadowOpacity: 0,
        popUpShadowBlurRadius: 6,
        arrowColor: "#FFFFFF",
        id: "DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6",
        popUpShadowColor: "#000000",
        backgroundOpacity: 0.9,
        popUpFontColor: "#000000",
        popUpBorderRadius: 0,
        data: {
          name: "DropDown1204",
        },
        paddingBottom: 0,
        width: "100%",
        borderRadius: 4,
        playList: "this.DropDown_CF82B40F_DFD0_8547_41D5_57600ED7DEB6_playlist",
        minHeight: 20,
        popUpShadowSpread: 1,
        propagateClick: false,
        backgroundColorRatios: [0],
        arrowBeforeLabel: false,
        popUpBackgroundColor: "#FFFFFF",
        minWidth: 200,
        borderSize: 0,
        popUpGap: 0,
        selectedPopUpBackgroundColor: "#333333",
        rollOverPopUpBackgroundColor: "#FFFFFF",
        fontSize: 14,
        label: "PILIH PETA",
        popUpBackgroundOpacity: 0.9,
        paddingRight: 5,
        class: "DropDown",
        backgroundColorDirection: "vertical",
        gap: 0,
        fontColor: "#FFFFFF",
        selectedPopUpFontColor: "#FFFFFF",
        backgroundColor: ["#666666"],
        shadow: false,
        popUpShadow: false,
        horizontalAlign: "center",
        fontStyle: "normal",
        paddingTop: 0,
        paddingLeft: 5,
        height: "11.895%",
        fontWeight: "bold",
      },
      {
        scrollBarOpacity: 0.5,
        id: "Container_CDD213C2_DF8B_F53C_41DA_50BE374B9FDD",
        backgroundOpacity: 1,
        width: 40,
        layout: "horizontal",
        scrollBarWidth: 10,
        paddingBottom: 0,
        borderRadius: 0,
        overflow: "visible",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0],
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        backgroundColor: ["#5CA1DE"],
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        scrollBarMargin: 2,
        paddingRight: 0,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        height: 2,
        data: {
          name: "blue line",
        },
      },
      {
        children: [
          "this.IconButton_CDD273C2_DF8B_F53C_41D2_66BA3CE5505D",
          "this.IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391",
          "this.IconButton_CDD3B3C2_DF8B_F53C_41CD_B4A5C764DC01",
          "this.IconButton_CDD3E3C2_DF8B_F53C_41E7_6902D066222F",
          "this.IconButton_F314D731_E001_6DD6_41E9_E323CF5FE682",
        ],
        scrollBarOpacity: 0.5,
        id: "Container_CDD203C2_DF8B_F53C_41E6_D6D985C436CE",
        backgroundOpacity: 0,
        width: "100%",
        layout: "horizontal",
        scrollBarWidth: 10,
        borderRadius: 0,
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        minWidth: 1,
        scrollBarColor: "#000000",
        paddingRight: 0,
        borderSize: 0,
        scrollBarVisible: "rollOver",
        class: "Container",
        gap: 13,
        scrollBarMargin: 2,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        height: 40,
        data: {
          name: "-Container settings",
        },
      },
      {
        id: "Container_D0EB1D0F_DFB0_8747_41D5_89FAF402BD1C",
        left: "0%",
        backgroundOpacity: 0.3,
        layout: "absolute",
        scrollBarWidth: 10,
        right: "0%",
        borderRadius: 0,
        paddingBottom: 0,
        overflow: "scroll",
        minHeight: 1,
        propagateClick: true,
        verticalAlign: "top",
        backgroundColorRatios: [0, 1],
        top: "0%",
        minWidth: 1,
        borderSize: 0,
        scrollBarColor: "#000000",
        scrollBarVisible: "rollOver",
        backgroundColor: ["#FFFFFF", "#FFFFFF"],
        class: "Container",
        backgroundColorDirection: "vertical",
        gap: 10,
        paddingRight: 0,
        scrollBarMargin: 2,
        height: 1,
        shadow: false,
        contentOpaque: false,
        horizontalAlign: "left",
        paddingTop: 0,
        paddingLeft: 0,
        scrollBarOpacity: 0.5,
        data: {
          name: "line",
        },
      },
      {
        paddingLeft: 0,
        maxHeight: 101,
        id: "IconButton_F314D731_E001_6DD6_41E9_E323CF5FE682",
        backgroundOpacity: 0,
        width: 44,
        paddingBottom: 0,
        borderRadius: 0,
        rollOverIconURL: "skin/IconButton_F314D731_E001_6DD6_41E9_E323CF5FE682_rollover.png",
        minHeight: 1,
        propagateClick: false,
        verticalAlign: "middle",
        transparencyActive: true,
        minWidth: 1,
        borderSize: 0,
        mode: "push",
        click: "if(!this.MapViewer.get('visible')){ this.setComponentVisibility(this.MapViewer, true, 0, null, null, false) } else { this.setComponentVisibility(this.MapViewer, false, 0, null, null, false) }",
        paddingRight: 0,
        class: "IconButton",
        height: 44,
        shadow: false,
        horizontalAlign: "center",
        paddingTop: 0,
        cursor: "hand",
        iconURL: "skin/IconButton_F314D731_E001_6DD6_41E9_E323CF5FE682.png",
        maxWidth: 101,
        data: {
          name: "IconButton Floorplan",
        },
      },
    ],
    minWidth: 20,
    borderSize: 0,
    mobileMipmappingEnabled: false,
    scrollBarColor: "#000000",
    scrollBarVisible: "rollOver",
    vrPolyfillScale: 0.5,
    paddingRight: 0,
    class: "Player",
    gap: 10,
    scrollBarMargin: 2,
    shadow: false,
    buttonToggleFullscreen: "this.IconButton_CDD243C2_DF8B_F53C_41D3_B25227E98391",
    scripts: {
      getPlayListItemByMedia: function (playList, media) {
        var items = playList.get("items");
        for (var j = 0, countJ = items.length; j < countJ; ++j) {
          var item = items[j];
          if (item.get("media") == media) return item;
        }
        return undefined;
      },
      cloneCamera: function (camera) {
        var newCamera = this.rootPlayer.createInstance(camera.get("class"));
        newCamera.set("id", camera.get("id") + "_copy");
        newCamera.set("idleSequence", camera.get("initialSequence"));
        return newCamera;
      },
      loadFromCurrentMediaPlayList: function (playList, delta) {
        var currentIndex = playList.get("selectedIndex");
        var totalItems = playList.get("items").length;
        var newIndex = (currentIndex + delta) % totalItems;
        while (newIndex < 0) {
          newIndex = totalItems + newIndex;
        }
        if (currentIndex != newIndex) {
          playList.set("selectedIndex", newIndex);
        }
      },
      historyGoForward: function (playList) {
        var history = this.get("data")["history"][playList.get("id")];
        if (history != undefined) {
          history.forward();
        }
      },
      changePlayListWithSameSpot: function (playList, newIndex) {
        var currentIndex = playList.get("selectedIndex");
        if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) {
          var currentItem = playList.get("items")[currentIndex];
          var newItem = playList.get("items")[newIndex];
          var currentPlayer = currentItem.get("player");
          var newPlayer = newItem.get("player");
          if ((currentPlayer.get("class") == "PanoramaPlayer" || currentPlayer.get("class") == "Video360Player") && (newPlayer.get("class") == "PanoramaPlayer" || newPlayer.get("class") == "Video360Player")) {
            var newCamera = this.cloneCamera(newItem.get("camera"));
            this.setCameraSameSpotAsMedia(newCamera, currentItem.get("media"));
            this.startPanoramaWithCamera(newItem.get("media"), newCamera);
          }
        }
      },
      changeBackgroundWhilePlay: function (playList, index, color) {
        var stopFunction = function (event) {
          playListItem.unbind("stop", stopFunction, this);
          if (color == viewerArea.get("backgroundColor") && colorRatios == viewerArea.get("backgroundColorRatios")) {
            viewerArea.set("backgroundColor", backgroundColorBackup);
            viewerArea.set("backgroundColorRatios", backgroundColorRatiosBackup);
          }
        };
        var playListItem = playList.get("items")[index];
        var player = playListItem.get("player");
        var viewerArea = player.get("viewerArea");
        var backgroundColorBackup = viewerArea.get("backgroundColor");
        var backgroundColorRatiosBackup = viewerArea.get("backgroundColorRatios");
        var colorRatios = [0];
        if (color != backgroundColorBackup || colorRatios != backgroundColorRatiosBackup) {
          viewerArea.set("backgroundColor", color);
          viewerArea.set("backgroundColorRatios", colorRatios);
          playListItem.bind("stop", stopFunction, this);
        }
      },
      syncPlaylists: function (playLists) {
        var changeToMedia = function (media, playListDispatched) {
          for (var i = 0, count = playLists.length; i < count; ++i) {
            var playList = playLists[i];
            if (playList != playListDispatched) {
              var items = playList.get("items");
              for (var j = 0, countJ = items.length; j < countJ; ++j) {
                if (items[j].get("media") == media) {
                  if (playList.get("selectedIndex") != j) {
                    playList.set("selectedIndex", j);
                  }
                  break;
                }
              }
            }
          }
        };
        var changeFunction = function (event) {
          var playListDispatched = event.source;
          var selectedIndex = playListDispatched.get("selectedIndex");
          if (selectedIndex < 0) return;
          var media = playListDispatched.get("items")[selectedIndex].get("media");
          changeToMedia(media, playListDispatched);
        };
        var mapPlayerChangeFunction = function (event) {
          var panoramaMapLocation = event.source.get("panoramaMapLocation");
          if (panoramaMapLocation) {
            var map = panoramaMapLocation.get("map");
            changeToMedia(map);
          }
        };
        for (var i = 0, count = playLists.length; i < count; ++i) {
          playLists[i].bind("change", changeFunction, this);
        }
        var mapPlayers = this.getByClassName("MapPlayer");
        for (var i = 0, count = mapPlayers.length; i < count; ++i) {
          mapPlayers[i].bind("panoramaMapLocation_change", mapPlayerChangeFunction, this);
        }
      },
      openLink: function (url, name) {
        if (url == location.href) {
          return;
        }
        var isElectron = (window && window.process && window.process.versions && window.process.versions["electron"]) || (navigator && navigator.userAgent && navigator.userAgent.indexOf("Electron") >= 0);
        if (name == "_blank" && isElectron) {
          if (url.startsWith("/")) {
            var r = window.location.href.split("/");
            r.pop();
            url = r.join("/") + url;
          }
          var extension = url.split(".").pop().toLowerCase();
          if (extension != "pdf" || url.startsWith("file://")) {
            var shell = window.require("electron").shell;
            shell.openExternal(url);
          } else {
            window.open(url, name);
          }
        } else if (isElectron && (name == "_top" || name == "_self")) {
          window.location = url;
        } else {
          var newWindow = window.open(url, name);
          newWindow.focus();
        }
      },
      shareFacebook: function (url) {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + url, "_blank");
      },
      shareTwitter: function (url) {
        window.open("https://twitter.com/intent/tweet?source=webclient&url=" + url, "_blank");
      },
      pauseCurrentPlayers: function (onlyPauseCameraIfPanorama) {
        var players = this.getCurrentPlayers();
        var i = players.length;
        while (i-- > 0) {
          var player = players[i];
          if (player.get("state") == "playing") {
            if (onlyPauseCameraIfPanorama && player.get("class") == "PanoramaPlayer" && typeof player.get("video") === "undefined") {
              player.pauseCamera();
            } else {
              player.pause();
            }
          } else {
            players.splice(i, 1);
          }
        }
        return players;
      },
      getPlayListWithMedia: function (media, onlySelected) {
        var playLists = this.getByClassName("PlayList");
        for (var i = 0, count = playLists.length; i < count; ++i) {
          var playList = playLists[i];
          if (onlySelected && playList.get("selectedIndex") == -1) continue;
          if (this.getPlayListItemByMedia(playList, media) != undefined) return playList;
        }
        return undefined;
      },
      getMediaWidth: function (media) {
        switch (media.get("class")) {
          case "Video360":
            var res = media.get("video");
            if (res instanceof Array) {
              var maxW = 0;
              for (var i = 0; i < res.length; i++) {
                var r = res[i];
                if (r.get("width") > maxW) maxW = r.get("width");
              }
              return maxW;
            } else {
              return r.get("width");
            }
          default:
            return media.get("width");
        }
      },
      initGA: function () {
        var sendFunc = function (category, event, label) {
          ga("send", "event", category, event, label);
        };
        var media = this.getByClassName("Panorama");
        media = media.concat(this.getByClassName("Video360"));
        media = media.concat(this.getByClassName("Map"));
        for (var i = 0, countI = media.length; i < countI; ++i) {
          var m = media[i];
          var mediaLabel = m.get("label");
          var overlays = this.getOverlays(m);
          for (var j = 0, countJ = overlays.length; j < countJ; ++j) {
            var overlay = overlays[j];
            var overlayLabel = overlay.get("data") != undefined ? mediaLabel + " - " + overlay.get("data")["label"] : mediaLabel;
            switch (overlay.get("class")) {
              case "HotspotPanoramaOverlay":
              case "HotspotMapOverlay":
                var areas = overlay.get("areas");
                for (var z = 0; z < areas.length; ++z) {
                  areas[z].bind("click", sendFunc.bind(this, "Hotspot", "click", overlayLabel), this);
                }
                break;
              case "CeilingCapPanoramaOverlay":
              case "TripodCapPanoramaOverlay":
                overlay.bind("click", sendFunc.bind(this, "Cap", "click", overlayLabel), this);
                break;
            }
          }
        }
        var components = this.getByClassName("Button");
        components = components.concat(this.getByClassName("IconButton"));
        for (var i = 0, countI = components.length; i < countI; ++i) {
          var c = components[i];
          var componentLabel = c.get("data")["name"];
          c.bind("click", sendFunc.bind(this, "Skin", "click", componentLabel), this);
        }
        var items = this.getByClassName("PlayListItem");
        var media2Item = {};
        for (var i = 0, countI = items.length; i < countI; ++i) {
          var item = items[i];
          var media = item.get("media");
          if (!(media.get("id") in media2Item)) {
            item.bind("begin", sendFunc.bind(this, "Media", "play", media.get("label")), this);
            media2Item[media.get("id")] = item;
          }
        }
      },
      setMainMediaByName: function (name) {
        var items = this.mainPlayList.get("items");
        for (var i = 0; i < items.length; ++i) {
          var item = items[i];
          if (item.get("media").get("label") == name) {
            this.mainPlayList.set("selectedIndex", i);
            return item;
          }
        }
      },
      setComponentVisibility: function (component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout) {
        var keepVisibility = this.getKey("keepVisibility_" + component.get("id"));
        if (keepVisibility) return;
        this.unregisterKey("visibility_" + component.get("id"));
        var changeVisibility = function () {
          if (effect && propertyEffect) {
            component.set(propertyEffect, effect);
          }
          component.set("visible", visible);
          if (component.get("class") == "ViewerArea") {
            try {
              if (visible) component.restart();
              else if (component.get("playbackState") == "playing") component.pause();
            } catch (e) {}
          }
        };
        var effectTimeoutName = "effectTimeout_" + component.get("id");
        if (!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)) {
          var effectTimeout = window[effectTimeoutName];
          if (effectTimeout instanceof Array) {
            for (var i = 0; i < effectTimeout.length; i++) {
              clearTimeout(effectTimeout[i]);
            }
          } else {
            clearTimeout(effectTimeout);
          }
          delete window[effectTimeoutName];
        } else if (visible == component.get("visible") && !ignoreClearTimeout) return;
        if (applyAt && applyAt > 0) {
          var effectTimeout = setTimeout(function () {
            if (window[effectTimeoutName] instanceof Array) {
              var arrayTimeoutVal = window[effectTimeoutName];
              var index = arrayTimeoutVal.indexOf(effectTimeout);
              arrayTimeoutVal.splice(index, 1);
              if (arrayTimeoutVal.length == 0) {
                delete window[effectTimeoutName];
              }
            } else {
              delete window[effectTimeoutName];
            }
            changeVisibility();
          }, applyAt);
          if (window.hasOwnProperty(effectTimeoutName)) {
            window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];
          } else {
            window[effectTimeoutName] = effectTimeout;
          }
        } else {
          changeVisibility();
        }
      },
      setMediaBehaviour: function (playList, index, mediaDispatcher) {
        var self = this;
        var stateChangeFunction = function (event) {
          if (event.data.state == "stopped") {
            dispose.call(this, true);
          }
        };
        var onBeginFunction = function () {
          item.unbind("begin", onBeginFunction, self);
          var media = item.get("media");
          if (media.get("class") != "Panorama" || (media.get("camera") != undefined && media.get("camera").get("initialSequence") != undefined)) {
            player.bind("stateChange", stateChangeFunction, self);
          }
        };
        var changeFunction = function () {
          var index = playListDispatcher.get("selectedIndex");
          if (index != -1) {
            indexDispatcher = index;
            dispose.call(this, false);
          }
        };
        var disposeCallback = function () {
          dispose.call(this, false);
        };
        var dispose = function (forceDispose) {
          if (!playListDispatcher) return;
          var media = item.get("media");
          if ((media.get("class") == "Video360" || media.get("class") == "Video") && media.get("loop") == true && !forceDispose) return;
          playList.set("selectedIndex", -1);
          if (panoramaSequence && panoramaSequenceIndex != -1) {
            if (panoramaSequence) {
              if (panoramaSequenceIndex > 0 && panoramaSequence.get("movements")[panoramaSequenceIndex - 1].get("class") == "TargetPanoramaCameraMovement") {
                var initialPosition = camera.get("initialPosition");
                var oldYaw = initialPosition.get("yaw");
                var oldPitch = initialPosition.get("pitch");
                var oldHfov = initialPosition.get("hfov");
                var previousMovement = panoramaSequence.get("movements")[panoramaSequenceIndex - 1];
                initialPosition.set("yaw", previousMovement.get("targetYaw"));
                initialPosition.set("pitch", previousMovement.get("targetPitch"));
                initialPosition.set("hfov", previousMovement.get("targetHfov"));
                var restoreInitialPositionFunction = function (event) {
                  initialPosition.set("yaw", oldYaw);
                  initialPosition.set("pitch", oldPitch);
                  initialPosition.set("hfov", oldHfov);
                  itemDispatcher.unbind("end", restoreInitialPositionFunction, this);
                };
                itemDispatcher.bind("end", restoreInitialPositionFunction, this);
              }
              panoramaSequence.set("movementIndex", panoramaSequenceIndex);
            }
          }
          if (player) {
            item.unbind("begin", onBeginFunction, this);
            player.unbind("stateChange", stateChangeFunction, this);
            for (var i = 0; i < buttons.length; ++i) {
              buttons[i].unbind("click", disposeCallback, this);
            }
          }
          if (sameViewerArea) {
            var currentMedia = this.getMediaFromPlayer(player);
            if (currentMedia == undefined || currentMedia == item.get("media")) {
              playListDispatcher.set("selectedIndex", indexDispatcher);
            }
            if (playList != playListDispatcher) playListDispatcher.unbind("change", changeFunction, this);
          } else {
            viewerArea.set("visible", viewerVisibility);
          }
          playListDispatcher = undefined;
        };
        var mediaDispatcherByParam = mediaDispatcher != undefined;
        if (!mediaDispatcher) {
          var currentIndex = playList.get("selectedIndex");
          var currentPlayer = currentIndex != -1 ? playList.get("items")[playList.get("selectedIndex")].get("player") : this.getActivePlayerWithViewer(this.MainViewer);
          if (currentPlayer) {
            mediaDispatcher = this.getMediaFromPlayer(currentPlayer);
          }
        }
        var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;
        if (!playListDispatcher) {
          playList.set("selectedIndex", index);
          return;
        }
        var indexDispatcher = playListDispatcher.get("selectedIndex");
        if (playList.get("selectedIndex") == index || indexDispatcher == -1) {
          return;
        }
        var item = playList.get("items")[index];
        var itemDispatcher = playListDispatcher.get("items")[indexDispatcher];
        var player = item.get("player");
        var viewerArea = player.get("viewerArea");
        var viewerVisibility = viewerArea.get("visible");
        var sameViewerArea = viewerArea == itemDispatcher.get("player").get("viewerArea");
        if (sameViewerArea) {
          if (playList != playListDispatcher) {
            playListDispatcher.set("selectedIndex", -1);
            playListDispatcher.bind("change", changeFunction, this);
          }
        } else {
          viewerArea.set("visible", true);
        }
        var panoramaSequenceIndex = -1;
        var panoramaSequence = undefined;
        var camera = itemDispatcher.get("camera");
        if (camera) {
          panoramaSequence = camera.get("initialSequence");
          if (panoramaSequence) {
            panoramaSequenceIndex = panoramaSequence.get("movementIndex");
          }
        }
        playList.set("selectedIndex", index);
        var buttons = [];
        var addButtons = function (property) {
          var value = player.get(property);
          if (value == undefined) return;
          if (Array.isArray(value)) buttons = buttons.concat(value);
          else buttons.push(value);
        };
        addButtons("buttonStop");
        for (var i = 0; i < buttons.length; ++i) {
          buttons[i].bind("click", disposeCallback, this);
        }
        if (player != itemDispatcher.get("player") || !mediaDispatcherByParam) {
          item.bind("begin", onBeginFunction, self);
        }
        this.executeFunctionWhenChange(playList, index, disposeCallback);
      },
      getOverlays: function (media) {
        switch (media.get("class")) {
          case "Panorama":
            var overlays = media.get("overlays").concat() || [];
            var frames = media.get("frames");
            for (var j = 0; j < frames.length; ++j) {
              overlays = overlays.concat(frames[j].get("overlays") || []);
            }
            return overlays;
          case "Video360":
          case "Map":
            return media.get("overlays") || [];
          default:
            return [];
        }
      },
      getMediaHeight: function (media) {
        switch (media.get("class")) {
          case "Video360":
            var res = media.get("video");
            if (res instanceof Array) {
              var maxH = 0;
              for (var i = 0; i < res.length; i++) {
                var r = res[i];
                if (r.get("height") > maxH) maxH = r.get("height");
              }
              return maxH;
            } else {
              return r.get("height");
            }
          default:
            return media.get("height");
        }
      },
      setOverlayBehaviour: function (overlay, media, action) {
        var executeFunc = function () {
          switch (action) {
            case "triggerClick":
              this.triggerOverlay(overlay, "click");
              break;
            case "stop":
            case "play":
            case "pause":
              overlay[action]();
              break;
            case "togglePlayPause":
            case "togglePlayStop":
              if (overlay.get("state") == "playing") overlay[action == "togglePlayPause" ? "pause" : "stop"]();
              else overlay.play();
              break;
          }
          if (window.overlaysDispatched == undefined) window.overlaysDispatched = {};
          var id = overlay.get("id");
          window.overlaysDispatched[id] = true;
          setTimeout(function () {
            delete window.overlaysDispatched[id];
          }, 2000);
        };
        if (window.overlaysDispatched != undefined && overlay.get("id") in window.overlaysDispatched) return;
        var playList = this.getPlayListWithMedia(media, true);
        if (playList != undefined) {
          var item = this.getPlayListItemByMedia(playList, media);
          if (playList.get("items").indexOf(item) != playList.get("selectedIndex")) {
            var beginFunc = function (e) {
              item.unbind("begin", beginFunc, this);
              executeFunc.call(this);
            };
            item.bind("begin", beginFunc, this);
            return;
          }
        }
        executeFunc.call(this);
      },
      registerKey: function (key, value) {
        window[key] = value;
      },
      pauseGlobalAudiosWhilePlayItem: function (playList, index, exclude) {
        var self = this;
        var item = playList.get("items")[index];
        var media = item.get("media");
        var player = item.get("player");
        var caller = media.get("id");
        var endFunc = function () {
          if (playList.get("selectedIndex") != index) {
            if (hasState) {
              player.unbind("stateChange", stateChangeFunc, self);
            }
            self.resumeGlobalAudios(caller);
          }
        };
        var stateChangeFunc = function (event) {
          var state = event.data.state;
          if (state == "stopped") {
            this.resumeGlobalAudios(caller);
          } else if (state == "playing") {
            this.pauseGlobalAudios(caller, exclude);
          }
        };
        var mediaClass = media.get("class");
        var hasState = mediaClass == "Video360" || mediaClass == "Video";
        if (hasState) {
          player.bind("stateChange", stateChangeFunc, this);
        }
        this.pauseGlobalAudios(caller, exclude);
        this.executeFunctionWhenChange(playList, index, endFunc, endFunc);
      },
      visibleComponentsIfPlayerFlagEnabled: function (components, playerFlag) {
        var enabled = this.get(playerFlag);
        for (var i in components) {
          components[i].set("visible", enabled);
        }
      },
      playGlobalAudioWhilePlay: function (playList, index, audio, endCallback) {
        var changeFunction = function (event) {
          if (event.data.previousSelectedIndex == index) {
            this.stopGlobalAudio(audio);
            if (isPanorama) {
              var media = playListItem.get("media");
              var audios = media.get("audios");
              audios.splice(audios.indexOf(audio), 1);
              media.set("audios", audios);
            }
            playList.unbind("change", changeFunction, this);
            if (endCallback) endCallback();
          }
        };
        var audios = window.currentGlobalAudios;
        if (audios && audio.get("id") in audios) {
          audio = audios[audio.get("id")];
          if (audio.get("state") != "playing") {
            audio.play();
          }
          return audio;
        }
        playList.bind("change", changeFunction, this);
        var playListItem = playList.get("items")[index];
        var isPanorama = playListItem.get("class") == "PanoramaPlayListItem";
        if (isPanorama) {
          var media = playListItem.get("media");
          var audios = (media.get("audios") || []).slice();
          if (audio.get("class") == "MediaAudio") {
            var panoramaAudio = this.rootPlayer.createInstance("PanoramaAudio");
            panoramaAudio.set("autoplay", false);
            panoramaAudio.set("audio", audio.get("audio"));
            panoramaAudio.set("loop", audio.get("loop"));
            panoramaAudio.set("id", audio.get("id"));
            var stateChangeFunctions = audio.getBindings("stateChange");
            for (var i = 0; i < stateChangeFunctions.length; ++i) {
              var f = stateChangeFunctions[i];
              if (typeof f == "string") f = new Function("event", f);
              panoramaAudio.bind("stateChange", f, this);
            }
            audio = panoramaAudio;
          }
          audios.push(audio);
          media.set("audios", audios);
        }
        return this.playGlobalAudio(audio, endCallback);
      },
      setPanoramaCameraWithCurrentSpot: function (playListItem) {
        var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer);
        if (currentPlayer == undefined) {
          return;
        }
        var playerClass = currentPlayer.get("class");
        if (playerClass != "PanoramaPlayer" && playerClass != "Video360Player") {
          return;
        }
        var fromMedia = currentPlayer.get("panorama");
        if (fromMedia == undefined) {
          fromMedia = currentPlayer.get("video");
        }
        var panorama = playListItem.get("media");
        var newCamera = this.cloneCamera(playListItem.get("camera"));
        this.setCameraSameSpotAsMedia(newCamera, fromMedia);
        this.startPanoramaWithCamera(panorama, newCamera);
      },
      unregisterKey: function (key) {
        delete window[key];
      },
      pauseGlobalAudio: function (audio) {
        var audios = window.currentGlobalAudios;
        if (audios) {
          audio = audios[audio.get("id")];
        }
        if (audio.get("state") == "playing") audio.pause();
      },
      getPixels: function (value) {
        var result = new RegExp("((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?", "i").exec(value);
        if (result == undefined) {
          return 0;
        }
        var num = parseFloat(result[1]);
        var unit = result[4];
        var vw = this.rootPlayer.get("actualWidth") / 100;
        var vh = this.rootPlayer.get("actualHeight") / 100;
        switch (unit) {
          case "vw":
            return num * vw;
          case "vh":
            return num * vh;
          case "vmin":
            return num * Math.min(vw, vh);
          case "vmax":
            return num * Math.max(vw, vh);
          default:
            return num;
        }
      },
      getPanoramaOverlayByName: function (panorama, name) {
        var overlays = this.getOverlays(panorama);
        for (var i = 0, count = overlays.length; i < count; ++i) {
          var overlay = overlays[i];
          var data = overlay.get("data");
          if (data != undefined && data.label == name) {
            return overlay;
          }
        }
        return undefined;
      },
      showPopupImage: function (image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback) {
        var self = this;
        var closed = false;
        var playerClickFunction = function () {
          zoomImage.unbind("loaded", loadedFunction, self);
          hideFunction();
        };
        var clearAutoClose = function () {
          zoomImage.unbind("click", clearAutoClose, this);
          if (timeoutID != undefined) {
            clearTimeout(timeoutID);
          }
        };
        var resizeFunction = function () {
          setTimeout(setCloseButtonPosition, 0);
        };
        var loadedFunction = function () {
          self.unbind("click", playerClickFunction, self);
          veil.set("visible", true);
          setCloseButtonPosition();
          closeButton.set("visible", true);
          zoomImage.unbind("loaded", loadedFunction, this);
          zoomImage.bind("userInteractionStart", userInteractionStartFunction, this);
          zoomImage.bind("userInteractionEnd", userInteractionEndFunction, this);
          zoomImage.bind("resize", resizeFunction, this);
          timeoutID = setTimeout(timeoutFunction, 200);
        };
        var timeoutFunction = function () {
          timeoutID = undefined;
          if (autoCloseMilliSeconds) {
            var autoCloseFunction = function () {
              hideFunction();
            };
            zoomImage.bind("click", clearAutoClose, this);
            timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);
          }
          zoomImage.bind("backgroundClick", hideFunction, this);
          if (toggleImage) {
            zoomImage.bind("click", toggleFunction, this);
            zoomImage.set("imageCursor", "hand");
          }
          closeButton.bind("click", hideFunction, this);
          if (loadedCallback) loadedCallback();
        };
        var hideFunction = function () {
          self.MainViewer.set("toolTipEnabled", true);
          closed = true;
          if (timeoutID) clearTimeout(timeoutID);
          if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID);
          if (autoCloseMilliSeconds) clearAutoClose();
          if (hideCallback) hideCallback();
          zoomImage.set("visible", false);
          if (hideEffect && hideEffect.get("duration") > 0) {
            hideEffect.bind("end", endEffectFunction, this);
          } else {
            zoomImage.set("image", null);
          }
          closeButton.set("visible", false);
          veil.set("visible", false);
          self.unbind("click", playerClickFunction, self);
          zoomImage.unbind("backgroundClick", hideFunction, this);
          zoomImage.unbind("userInteractionStart", userInteractionStartFunction, this);
          zoomImage.unbind("userInteractionEnd", userInteractionEndFunction, this, true);
          zoomImage.unbind("resize", resizeFunction, this);
          if (toggleImage) {
            zoomImage.unbind("click", toggleFunction, this);
            zoomImage.set("cursor", "default");
          }
          closeButton.unbind("click", hideFunction, this);
          self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);
          if (audio) {
            if (stopBackgroundAudio) {
              self.resumeGlobalAudios();
            }
            self.stopGlobalAudio(audio);
          }
        };
        var endEffectFunction = function () {
          zoomImage.set("image", null);
          hideEffect.unbind("end", endEffectFunction, this);
        };
        var toggleFunction = function () {
          zoomImage.set("image", isToggleVisible() ? image : toggleImage);
        };
        var isToggleVisible = function () {
          return zoomImage.get("image") == toggleImage;
        };
        var setCloseButtonPosition = function () {
          var right = zoomImage.get("actualWidth") - zoomImage.get("imageLeft") - zoomImage.get("imageWidth") + 10;
          var top = zoomImage.get("imageTop") + 10;
          if (right < 10) right = 10;
          if (top < 10) top = 10;
          closeButton.set("right", right);
          closeButton.set("top", top);
        };
        var userInteractionStartFunction = function () {
          if (timeoutUserInteractionID) {
            clearTimeout(timeoutUserInteractionID);
            timeoutUserInteractionID = undefined;
          } else {
            closeButton.set("visible", false);
          }
        };
        var userInteractionEndFunction = function () {
          if (!closed) {
            timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);
          }
        };
        var userInteractionTimeoutFunction = function () {
          timeoutUserInteractionID = undefined;
          closeButton.set("visible", true);
          setCloseButtonPosition();
        };
        this.MainViewer.set("toolTipEnabled", false);
        var veil = this.veilPopupPanorama;
        var zoomImage = this.zoomImagePopupPanorama;
        var closeButton = this.closeButtonPopupPanorama;
        if (closeButtonProperties) {
          for (var key in closeButtonProperties) {
            closeButton.set(key, closeButtonProperties[key]);
          }
        }
        var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);
        if (audio) {
          if (stopBackgroundAudio) {
            this.pauseGlobalAudios();
          }
          this.playGlobalAudio(audio);
        }
        var timeoutID = undefined;
        var timeoutUserInteractionID = undefined;
        zoomImage.bind("loaded", loadedFunction, this);
        setTimeout(function () {
          self.bind("click", playerClickFunction, self, false);
        }, 0);
        zoomImage.set("image", image);
        zoomImage.set("customWidth", customWidth);
        zoomImage.set("customHeight", customHeight);
        zoomImage.set("showEffect", showEffect);
        zoomImage.set("hideEffect", hideEffect);
        zoomImage.set("visible", true);
        return zoomImage;
      },
      pauseGlobalAudios: function (caller, exclude) {
        if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {};
        if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = [];
        if (caller in window.pauseGlobalAudiosState) {
          return;
        }
        var audios = this.getByClassName("Audio").concat(this.getByClassName("VideoPanoramaOverlay"));
        if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios));
        var audiosPaused = [];
        var values = Object.values(window.pauseGlobalAudiosState);
        for (var i = 0, count = values.length; i < count; ++i) {
          var objAudios = values[i];
          for (var j = 0; j < objAudios.length; ++j) {
            var a = objAudios[j];
            if (audiosPaused.indexOf(a) == -1) audiosPaused.push(a);
          }
        }
        window.pauseGlobalAudiosState[caller] = audiosPaused;
        for (var i = 0, count = audios.length; i < count; ++i) {
          var a = audios[i];
          if (a.get("state") == "playing" && (exclude == undefined || exclude.indexOf(a) == -1)) {
            a.pause();
            audiosPaused.push(a);
          }
        }
      },
      init: function () {
        if (!Object.hasOwnProperty("values")) {
          Object.values = function (o) {
            return Object.keys(o).map(function (e) {
              return o[e];
            });
          };
        }
        var history = this.get("data")["history"];
        var playListChangeFunc = function (e) {
          var playList = e.source;
          var index = playList.get("selectedIndex");
          if (index < 0) return;
          var id = playList.get("id");
          if (!history.hasOwnProperty(id)) history[id] = new HistoryData(playList);
          history[id].add(index);
        };
        var playLists = this.getByClassName("PlayList");
        for (var i = 0, count = playLists.length; i < count; ++i) {
          var playList = playLists[i];
          playList.bind("change", playListChangeFunc, this);
        }
      },
      getMediaFromPlayer: function (player) {
        switch (player.get("class")) {
          case "PanoramaPlayer":
            return player.get("panorama") || player.get("video");
          case "VideoPlayer":
          case "Video360Player":
            return player.get("video");
          case "PhotoAlbumPlayer":
            return player.get("photoAlbum");
          case "MapPlayer":
            return player.get("map");
        }
      },
      executeFunctionWhenChange: function (playList, index, endFunction, changeFunction) {
        var endObject = undefined;
        var changePlayListFunction = function (event) {
          if (event.data.previousSelectedIndex == index) {
            if (changeFunction) changeFunction.call(this);
            if (endFunction && endObject) endObject.unbind("end", endFunction, this);
            playList.unbind("change", changePlayListFunction, this);
          }
        };
        if (endFunction) {
          var playListItem = playList.get("items")[index];
          if (playListItem.get("class") == "PanoramaPlayListItem") {
            var camera = playListItem.get("camera");
            if (camera != undefined) endObject = camera.get("initialSequence");
            if (endObject == undefined) endObject = camera.get("idleSequence");
          } else {
            endObject = playListItem.get("media");
          }
          if (endObject) {
            endObject.bind("end", endFunction, this);
          }
        }
        playList.bind("change", changePlayListFunction, this);
      },
      getPlayListItems: function (media, player) {
        var itemClass = (function () {
          switch (media.get("class")) {
            case "Panorama":
            case "LivePanorama":
            case "HDRPanorama":
              return "PanoramaPlayListItem";
            case "Video360":
              return "Video360PlayListItem";
            case "PhotoAlbum":
              return "PhotoAlbumPlayListItem";
            case "Map":
              return "MapPlayListItem";
            case "Video":
              return "VideoPlayListItem";
          }
        })();
        if (itemClass != undefined) {
          var items = this.getByClassName(itemClass);
          for (var i = items.length - 1; i >= 0; --i) {
            var item = items[i];
            if (item.get("media") != media || (player != undefined && item.get("player") != player)) {
              items.splice(i, 1);
            }
          }
          return items;
        } else {
          return [];
        }
      },
      existsKey: function (key) {
        return key in window;
      },
      isCardboardViewMode: function () {
        var players = this.getByClassName("PanoramaPlayer");
        return players.length > 0 && players[0].get("viewMode") == "cardboard";
      },
      setEndToItemIndex: function (playList, fromIndex, toIndex) {
        var endFunction = function () {
          if (playList.get("selectedIndex") == fromIndex) playList.set("selectedIndex", toIndex);
        };
        this.executeFunctionWhenChange(playList, fromIndex, endFunction);
      },
      playAudioList: function (audios) {
        if (audios.length == 0) return;
        var currentAudioCount = -1;
        var currentAudio;
        var playGlobalAudioFunction = this.playGlobalAudio;
        var playNext = function () {
          if (++currentAudioCount >= audios.length) currentAudioCount = 0;
          currentAudio = audios[currentAudioCount];
          playGlobalAudioFunction(currentAudio, playNext);
        };
        playNext();
      },
      keepComponentVisibility: function (component, keep) {
        var key = "keepVisibility_" + component.get("id");
        var value = this.getKey(key);
        if (value == undefined && keep) {
          this.registerKey(key, keep);
        } else if (value != undefined && !keep) {
          this.unregisterKey(key);
        }
      },
      getActivePlayerWithViewer: function (viewerArea) {
        var players = this.getByClassName("PanoramaPlayer");
        players = players.concat(this.getByClassName("VideoPlayer"));
        players = players.concat(this.getByClassName("Video360Player"));
        players = players.concat(this.getByClassName("PhotoAlbumPlayer"));
        players = players.concat(this.getByClassName("MapPlayer"));
        var i = players.length;
        while (i-- > 0) {
          var player = players[i];
          if (player.get("viewerArea") == viewerArea) {
            var playerClass = player.get("class");
            if (playerClass == "PanoramaPlayer" && (player.get("panorama") != undefined || player.get("video") != undefined)) return player;
            else if ((playerClass == "VideoPlayer" || playerClass == "Video360Player") && player.get("video") != undefined) return player;
            else if (playerClass == "PhotoAlbumPlayer" && player.get("photoAlbum") != undefined) return player;
            else if (playerClass == "MapPlayer" && player.get("map") != undefined) return player;
          }
        }
        return undefined;
      },
      startPanoramaWithCamera: function (media, camera) {
        if (window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1) {
          return;
        }
        var playLists = this.getByClassName("PlayList");
        if (playLists.length == 0) return;
        var restoreItems = [];
        for (var i = 0, count = playLists.length; i < count; ++i) {
          var playList = playLists[i];
          var items = playList.get("items");
          for (var j = 0, countJ = items.length; j < countJ; ++j) {
            var item = items[j];
            if (item.get("media") == media && (item.get("class") == "PanoramaPlayListItem" || item.get("class") == "Video360PlayListItem")) {
              restoreItems.push({ camera: item.get("camera"), item: item });
              item.set("camera", camera);
            }
          }
        }
        if (restoreItems.length > 0) {
          if (window.currentPanoramasWithCameraChanged == undefined) {
            window.currentPanoramasWithCameraChanged = [media];
          } else {
            window.currentPanoramasWithCameraChanged.push(media);
          }
          var restoreCameraOnStop = function () {
            var index = window.currentPanoramasWithCameraChanged.indexOf(media);
            if (index != -1) {
              window.currentPanoramasWithCameraChanged.splice(index, 1);
            }
            for (var i = 0; i < restoreItems.length; i++) {
              restoreItems[i].item.set("camera", restoreItems[i].camera);
              restoreItems[i].item.unbind("stop", restoreCameraOnStop, this);
            }
          };
          for (var i = 0; i < restoreItems.length; i++) {
            restoreItems[i].item.bind("stop", restoreCameraOnStop, this);
          }
        }
      },
      getComponentByName: function (name) {
        var list = this.getByClassName("UIComponent");
        for (var i = 0, count = list.length; i < count; ++i) {
          var component = list[i];
          var data = component.get("data");
          if (data != undefined && data.name == name) {
            return component;
          }
        }
        return undefined;
      },
      showComponentsWhileMouseOver: function (parentComponent, components, durationVisibleWhileOut) {
        var setVisibility = function (visible) {
          for (var i = 0, length = components.length; i < length; i++) {
            var component = components[i];
            if (component.get("class") == "HTMLText" && (component.get("html") == "" || component.get("html") == undefined)) {
              continue;
            }
            component.set("visible", visible);
          }
        };
        if (this.rootPlayer.get("touchDevice") == true) {
          setVisibility(true);
        } else {
          var timeoutID = -1;
          var rollOverFunction = function () {
            setVisibility(true);
            if (timeoutID >= 0) clearTimeout(timeoutID);
            parentComponent.unbind("rollOver", rollOverFunction, this);
            parentComponent.bind("rollOut", rollOutFunction, this);
          };
          var rollOutFunction = function () {
            var timeoutFunction = function () {
              setVisibility(false);
              parentComponent.unbind("rollOver", rollOverFunction, this);
            };
            parentComponent.unbind("rollOut", rollOutFunction, this);
            parentComponent.bind("rollOver", rollOverFunction, this);
            timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);
          };
          parentComponent.bind("rollOver", rollOverFunction, this);
        }
      },
      setMainMediaByIndex: function (index) {
        var item = undefined;
        if (index >= 0 && index < this.mainPlayList.get("items").length) {
          this.mainPlayList.set("selectedIndex", index);
          item = this.mainPlayList.get("items")[index];
        }
        return item;
      },
      getKey: function (key) {
        return window[key];
      },
      getCurrentPlayerWithMedia: function (media) {
        var playerClass = undefined;
        var mediaPropertyName = undefined;
        switch (media.get("class")) {
          case "Panorama":
          case "LivePanorama":
          case "HDRPanorama":
            playerClass = "PanoramaPlayer";
            mediaPropertyName = "panorama";
            break;
          case "Video360":
            playerClass = "PanoramaPlayer";
            mediaPropertyName = "video";
            break;
          case "PhotoAlbum":
            playerClass = "PhotoAlbumPlayer";
            mediaPropertyName = "photoAlbum";
            break;
          case "Map":
            playerClass = "MapPlayer";
            mediaPropertyName = "map";
            break;
          case "Video":
            playerClass = "VideoPlayer";
            mediaPropertyName = "video";
            break;
        }
        if (playerClass != undefined) {
          var players = this.getByClassName(playerClass);
          for (var i = 0; i < players.length; ++i) {
            var player = players[i];
            if (player.get(mediaPropertyName) == media) {
              return player;
            }
          }
        } else {
          return undefined;
        }
      },
      setPanoramaCameraWithSpot: function (playListItem, yaw, pitch) {
        var panorama = playListItem.get("media");
        var newCamera = this.cloneCamera(playListItem.get("camera"));
        var initialPosition = newCamera.get("initialPosition");
        initialPosition.set("yaw", yaw);
        initialPosition.set("pitch", pitch);
        this.startPanoramaWithCamera(panorama, newCamera);
      },
      getGlobalAudio: function (audio) {
        var audios = window.currentGlobalAudios;
        if (audios != undefined && audio.get("id") in audios) {
          audio = audios[audio.get("id")];
        }
        return audio;
      },
      playGlobalAudio: function (audio, endCallback) {
        var endFunction = function () {
          audio.unbind("end", endFunction, this);
          this.stopGlobalAudio(audio);
          if (endCallback) endCallback();
        };
        audio = this.getGlobalAudio(audio);
        var audios = window.currentGlobalAudios;
        if (!audios) {
          audios = window.currentGlobalAudios = {};
        }
        audios[audio.get("id")] = audio;
        if (audio.get("state") == "playing") {
          return audio;
        }
        if (!audio.get("loop")) {
          audio.bind("end", endFunction, this);
        }
        audio.play();
        return audio;
      },
      resumeGlobalAudios: function (caller) {
        if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return;
        var audiosPaused = window.pauseGlobalAudiosState[caller];
        delete window.pauseGlobalAudiosState[caller];
        var values = Object.values(window.pauseGlobalAudiosState);
        for (var i = 0, count = values.length; i < count; ++i) {
          var objAudios = values[i];
          for (var j = audiosPaused.length - 1; j >= 0; --j) {
            var a = audiosPaused[j];
            if (objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1);
          }
        }
        for (var i = 0, count = audiosPaused.length; i < count; ++i) {
          var a = audiosPaused[i];
          if (a.get("state") == "paused") a.play();
        }
      },
      fixTogglePlayPauseButton: function (player) {
        var state = player.get("state");
        var buttons = player.get("buttonPlayPause");
        if (typeof buttons !== "undefined" && player.get("state") == "playing") {
          if (!Array.isArray(buttons)) buttons = [buttons];
          for (var i = 0; i < buttons.length; ++i) buttons[i].set("pressed", true);
        }
      },
      triggerOverlay: function (overlay, eventName) {
        if (overlay.get("areas") != undefined) {
          var areas = overlay.get("areas");
          for (var i = 0; i < areas.length; ++i) {
            areas[i].trigger(eventName);
          }
        } else {
          overlay.trigger(eventName);
        }
      },
      resumePlayers: function (players, onlyResumeCameraIfPanorama) {
        for (var i = 0; i < players.length; ++i) {
          var player = players[i];
          if (onlyResumeCameraIfPanorama && player.get("class") == "PanoramaPlayer" && typeof player.get("video") === "undefined") {
            player.resumeCamera();
          } else {
            player.play();
          }
        }
      },
      showPopupPanoramaOverlay: function (popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio) {
        var self = this;
        this.MainViewer.set("toolTipEnabled", false);
        var cardboardEnabled = this.isCardboardViewMode();
        if (!cardboardEnabled) {
          var zoomImage = this.zoomImagePopupPanorama;
          var showDuration = popupPanoramaOverlay.get("showDuration");
          var hideDuration = popupPanoramaOverlay.get("hideDuration");
          var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);
          var popupMaxWidthBackup = popupPanoramaOverlay.get("popupMaxWidth");
          var popupMaxHeightBackup = popupPanoramaOverlay.get("popupMaxHeight");
          var showEndFunction = function () {
            var loadedFunction = function () {
              if (!self.isCardboardViewMode()) popupPanoramaOverlay.set("visible", false);
            };
            popupPanoramaOverlay.unbind("showEnd", showEndFunction, self);
            popupPanoramaOverlay.set("showDuration", 1);
            popupPanoramaOverlay.set("hideDuration", 1);
            self.showPopupImage(
              imageHD,
              toggleImageHD,
              popupPanoramaOverlay.get("popupMaxWidth"),
              popupPanoramaOverlay.get("popupMaxHeight"),
              null,
              null,
              closeButtonProperties,
              autoCloseMilliSeconds,
              audio,
              stopBackgroundAudio,
              loadedFunction,
              hideFunction
            );
          };
          var hideFunction = function () {
            var restoreShowDurationFunction = function () {
              popupPanoramaOverlay.unbind("showEnd", restoreShowDurationFunction, self);
              popupPanoramaOverlay.set("visible", false);
              popupPanoramaOverlay.set("showDuration", showDuration);
              popupPanoramaOverlay.set("popupMaxWidth", popupMaxWidthBackup);
              popupPanoramaOverlay.set("popupMaxHeight", popupMaxHeightBackup);
            };
            self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio);
            var currentWidth = zoomImage.get("imageWidth");
            var currentHeight = zoomImage.get("imageHeight");
            popupPanoramaOverlay.bind("showEnd", restoreShowDurationFunction, self, true);
            popupPanoramaOverlay.set("showDuration", 1);
            popupPanoramaOverlay.set("hideDuration", hideDuration);
            popupPanoramaOverlay.set("popupMaxWidth", currentWidth);
            popupPanoramaOverlay.set("popupMaxHeight", currentHeight);
            if (popupPanoramaOverlay.get("visible")) restoreShowDurationFunction();
            else popupPanoramaOverlay.set("visible", true);
            self.MainViewer.set("toolTipEnabled", true);
          };
          if (!imageHD) {
            imageHD = popupPanoramaOverlay.get("image");
          }
          if (!toggleImageHD && toggleImage) {
            toggleImageHD = toggleImage;
          }
          popupPanoramaOverlay.bind("showEnd", showEndFunction, this, true);
        } else {
          var hideEndFunction = function () {
            self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);
            if (audio) {
              if (stopBackgroundAudio) {
                self.resumeGlobalAudios();
              }
              self.stopGlobalAudio(audio);
            }
            popupPanoramaOverlay.unbind("hideEnd", hideEndFunction, self);
            self.MainViewer.set("toolTipEnabled", true);
          };
          var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);
          if (audio) {
            if (stopBackgroundAudio) {
              this.pauseGlobalAudios();
            }
            this.playGlobalAudio(audio);
          }
          popupPanoramaOverlay.bind("hideEnd", hideEndFunction, this, true);
        }
        popupPanoramaOverlay.set("visible", true);
      },
      showPopupMedia: function (w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios) {
        var self = this;
        var closeFunction = function () {
          playList.set("selectedIndex", -1);
          self.MainViewer.set("toolTipEnabled", true);
          if (stopAudios) {
            self.resumeGlobalAudios();
          }
          this.resumePlayers(playersPaused, !stopAudios);
          if (isVideo) {
            this.unbind("resize", resizeFunction, this);
          }
          w.unbind("close", closeFunction, this);
        };
        var endFunction = function () {
          w.hide();
        };
        var resizeFunction = function () {
          var getWinValue = function (property) {
            return w.get(property) || 0;
          };
          var parentWidth = self.get("actualWidth");
          var parentHeight = self.get("actualHeight");
          var mediaWidth = self.getMediaWidth(media);
          var mediaHeight = self.getMediaHeight(media);
          var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;
          var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;
          var windowWidth = popupMaxWidthNumber * parentWidth;
          var windowHeight = popupMaxHeightNumber * parentHeight;
          var footerHeight = getWinValue("footerHeight");
          var headerHeight = getWinValue("headerHeight");
          if (!headerHeight) {
            var closeButtonHeight = getWinValue("closeButtonIconHeight") + getWinValue("closeButtonPaddingTop") + getWinValue("closeButtonPaddingBottom");
            var titleHeight = self.getPixels(getWinValue("titleFontSize")) + getWinValue("titlePaddingTop") + getWinValue("titlePaddingBottom");
            headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;
            headerHeight += getWinValue("headerPaddingTop") + getWinValue("headerPaddingBottom");
          }
          var contentWindowWidth = windowWidth - getWinValue("bodyPaddingLeft") - getWinValue("bodyPaddingRight") - getWinValue("paddingLeft") - getWinValue("paddingRight");
          var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue("bodyPaddingTop") - getWinValue("bodyPaddingBottom") - getWinValue("paddingTop") - getWinValue("paddingBottom");
          var parentAspectRatio = contentWindowWidth / contentWindowHeight;
          var mediaAspectRatio = mediaWidth / mediaHeight;
          if (parentAspectRatio > mediaAspectRatio) {
            windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue("bodyPaddingLeft") + getWinValue("bodyPaddingRight") + getWinValue("paddingLeft") + getWinValue("paddingRight");
          } else {
            windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue("bodyPaddingTop") + getWinValue("bodyPaddingBottom") + getWinValue("paddingTop") + getWinValue("paddingBottom");
          }
          if (windowWidth > parentWidth * popupMaxWidthNumber) {
            windowWidth = parentWidth * popupMaxWidthNumber;
          }
          if (windowHeight > parentHeight * popupMaxHeightNumber) {
            windowHeight = parentHeight * popupMaxHeightNumber;
          }
          w.set("width", windowWidth);
          w.set("height", windowHeight);
          w.set("x", (parentWidth - getWinValue("actualWidth")) * 0.5);
          w.set("y", (parentHeight - getWinValue("actualHeight")) * 0.5);
        };
        if (autoCloseWhenFinished) {
          this.executeFunctionWhenChange(playList, 0, endFunction);
        }
        var mediaClass = media.get("class");
        var isVideo = mediaClass == "Video" || mediaClass == "Video360";
        playList.set("selectedIndex", 0);
        if (isVideo) {
          this.bind("resize", resizeFunction, this);
          resizeFunction();
          playList.get("items")[0].get("player").play();
        } else {
          w.set("width", popupMaxWidth);
          w.set("height", popupMaxHeight);
        }
        this.MainViewer.set("toolTipEnabled", false);
        if (stopAudios) {
          this.pauseGlobalAudios();
        }
        var playersPaused = this.pauseCurrentPlayers(!stopAudios);
        w.bind("close", closeFunction, this);
        w.show(this, true);
      },
      showWindow: function (w, autoCloseMilliSeconds, containsAudio) {
        if (w.get("visible") == true) {
          return;
        }
        var closeFunction = function () {
          clearAutoClose();
          this.resumePlayers(playersPaused, !containsAudio);
          w.unbind("close", closeFunction, this);
        };
        var clearAutoClose = function () {
          w.unbind("click", clearAutoClose, this);
          if (timeoutID != undefined) {
            clearTimeout(timeoutID);
          }
        };
        var timeoutID = undefined;
        if (autoCloseMilliSeconds) {
          var autoCloseFunction = function () {
            w.hide();
          };
          w.bind("click", clearAutoClose, this);
          timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);
        }
        var playersPaused = this.pauseCurrentPlayers(!containsAudio);
        w.bind("close", closeFunction, this);
        w.show(this, true);
      },
      getCurrentPlayers: function () {
        var players = this.getByClassName("PanoramaPlayer");
        players = players.concat(this.getByClassName("VideoPlayer"));
        players = players.concat(this.getByClassName("Video360Player"));
        players = players.concat(this.getByClassName("PhotoAlbumPlayer"));
        return players;
      },
      updateMediaLabelFromPlayList: function (playList, htmlText, playListItemStopToDispose) {
        var changeFunction = function () {
          var index = playList.get("selectedIndex");
          if (index >= 0) {
            var beginFunction = function () {
              playListItem.unbind("begin", beginFunction);
              setMediaLabel(index);
            };
            var setMediaLabel = function (index) {
              var media = playListItem.get("media");
              var text = media.get("data");
              if (!text) text = media.get("label");
              setHtml(text);
            };
            var setHtml = function (text) {
              if (text !== undefined) {
                htmlText.set("html", '<div style="text-align:left"><SPAN STYLE="color:#FFFFFF;font-size:12px;font-family:Verdana"><span color="white" font-family="Verdana" font-size="12px">' + text + "</SPAN></div>");
              } else {
                htmlText.set("html", "");
              }
            };
            var playListItem = playList.get("items")[index];
            if (htmlText.get("html")) {
              setHtml("Loading...");
              playListItem.bind("begin", beginFunction);
            } else {
              setMediaLabel(index);
            }
          }
        };
        var disposeFunction = function () {
          htmlText.set("html", undefined);
          playList.unbind("change", changeFunction, this);
          playListItemStopToDispose.unbind("stop", disposeFunction, this);
        };
        if (playListItemStopToDispose) {
          playListItemStopToDispose.bind("stop", disposeFunction, this);
        }
        playList.bind("change", changeFunction, this);
        changeFunction();
      },
      getMediaByName: function (name) {
        var list = this.getByClassName("Media");
        for (var i = 0, count = list.length; i < count; ++i) {
          var media = list[i];
          if ((media.get("class") == "Audio" && media.get("data").label == name) || media.get("label") == name) {
            return media;
          }
        }
        return undefined;
      },
      loopAlbum: function (playList, index) {
        var playListItem = playList.get("items")[index];
        var player = playListItem.get("player");
        var loopFunction = function () {
          player.play();
        };
        this.executeFunctionWhenChange(playList, index, loopFunction);
      },
      setStartTimeVideo: function (video, time) {
        var items = this.getPlayListItems(video);
        var startTimeBackup = [];
        var restoreStartTimeFunc = function () {
          for (var i = 0; i < items.length; ++i) {
            var item = items[i];
            item.set("startTime", startTimeBackup[i]);
            item.unbind("stop", restoreStartTimeFunc, this);
          }
        };
        for (var i = 0; i < items.length; ++i) {
          var item = items[i];
          var player = item.get("player");
          if (player.get("video") == video && player.get("state") == "playing") {
            player.seek(time);
          } else {
            startTimeBackup.push(item.get("startTime"));
            item.set("startTime", time);
            item.bind("stop", restoreStartTimeFunc, this);
          }
        }
      },
      historyGoBack: function (playList) {
        var history = this.get("data")["history"][playList.get("id")];
        if (history != undefined) {
          history.back();
        }
      },
      showPopupPanoramaVideoOverlay: function (popupPanoramaOverlay, closeButtonProperties, stopAudios) {
        var self = this;
        var showEndFunction = function () {
          popupPanoramaOverlay.unbind("showEnd", showEndFunction);
          closeButton.bind("click", hideFunction, this);
          setCloseButtonPosition();
          closeButton.set("visible", true);
        };
        var endFunction = function () {
          if (!popupPanoramaOverlay.get("loop")) hideFunction();
        };
        var hideFunction = function () {
          self.MainViewer.set("toolTipEnabled", true);
          popupPanoramaOverlay.set("visible", false);
          closeButton.set("visible", false);
          closeButton.unbind("click", hideFunction, self);
          popupPanoramaOverlay.unbind("end", endFunction, self);
          popupPanoramaOverlay.unbind("hideEnd", hideFunction, self, true);
          self.resumePlayers(playersPaused, true);
          if (stopAudios) {
            self.resumeGlobalAudios();
          }
        };
        var setCloseButtonPosition = function () {
          var right = 10;
          var top = 10;
          closeButton.set("right", right);
          closeButton.set("top", top);
        };
        this.MainViewer.set("toolTipEnabled", false);
        var closeButton = this.closeButtonPopupPanorama;
        if (closeButtonProperties) {
          for (var key in closeButtonProperties) {
            closeButton.set(key, closeButtonProperties[key]);
          }
        }
        var playersPaused = this.pauseCurrentPlayers(true);
        if (stopAudios) {
          this.pauseGlobalAudios();
        }
        popupPanoramaOverlay.bind("end", endFunction, this, true);
        popupPanoramaOverlay.bind("showEnd", showEndFunction, this, true);
        popupPanoramaOverlay.bind("hideEnd", hideFunction, this, true);
        popupPanoramaOverlay.set("visible", true);
      },
      setMapLocation: function (panoramaPlayListItem, mapPlayer) {
        var resetFunction = function () {
          panoramaPlayListItem.unbind("stop", resetFunction, this);
          player.set("mapPlayer", null);
        };
        panoramaPlayListItem.bind("stop", resetFunction, this);
        var player = panoramaPlayListItem.get("player");
        player.set("mapPlayer", mapPlayer);
      },
      autotriggerAtStart: function (playList, callback, once) {
        var onChange = function (event) {
          callback();
          if (once == true) playList.unbind("change", onChange, this);
        };
        playList.bind("change", onChange, this);
      },
      updateVideoCues: function (playList, index) {
        var playListItem = playList.get("items")[index];
        var video = playListItem.get("media");
        if (video.get("cues").length == 0) return;
        var player = playListItem.get("player");
        var cues = [];
        var changeFunction = function () {
          if (playList.get("selectedIndex") != index) {
            video.unbind("cueChange", cueChangeFunction, this);
            playList.unbind("change", changeFunction, this);
          }
        };
        var cueChangeFunction = function (event) {
          var activeCues = event.data.activeCues;
          for (var i = 0, count = cues.length; i < count; ++i) {
            var cue = cues[i];
            if (activeCues.indexOf(cue) == -1 && (cue.get("startTime") > player.get("currentTime") || cue.get("endTime") < player.get("currentTime") + 0.5)) {
              cue.trigger("end");
            }
          }
          cues = activeCues;
        };
        video.bind("cueChange", cueChangeFunction, this);
        playList.bind("change", changeFunction, this);
      },
      shareWhatsapp: function (url) {
        window.open("https://api.whatsapp.com/send/?text=" + encodeURIComponent(url), "_blank");
      },
      stopGlobalAudio: function (audio) {
        var audios = window.currentGlobalAudios;
        if (audios) {
          audio = audios[audio.get("id")];
          if (audio) {
            delete audios[audio.get("id")];
            if (Object.keys(audios).length == 0) {
              window.currentGlobalAudios = undefined;
            }
          }
        }
        if (audio) audio.stop();
      },
      stopAndGoCamera: function (camera, ms) {
        var sequence = camera.get("initialSequence");
        sequence.pause();
        var timeoutFunction = function () {
          sequence.play();
        };
        setTimeout(timeoutFunction, ms);
      },
      setCameraSameSpotAsMedia: function (camera, media) {
        var player = this.getCurrentPlayerWithMedia(media);
        if (player != undefined) {
          var position = camera.get("initialPosition");
          position.set("yaw", player.get("yaw"));
          position.set("pitch", player.get("pitch"));
          position.set("hfov", player.get("hfov"));
        }
      },
      setStartTimeVideoSync: function (video, player) {
        this.setStartTimeVideo(video, player.get("currentTime"));
      },
    },
    contentOpaque: false,
    mouseWheelEnabled: true,
    horizontalAlign: "left",
    defaultVRPointer: "laser",
    paddingTop: 0,
    paddingLeft: 0,
    scrollBarOpacity: 0.5,
    downloadEnabled: false,
  };

  function HistoryData(playList) {
    this.playList = playList;
    this.list = [];
    this.pointer = -1;
  }

  HistoryData.prototype.add = function (index) {
    if (this.pointer < this.list.length && this.list[this.pointer] == index) {
      return;
    }
    ++this.pointer;
    this.list.splice(this.pointer, this.list.length - this.pointer, index);
  };

  HistoryData.prototype.back = function () {
    if (!this.canBack()) return;
    this.playList.set("selectedIndex", this.list[--this.pointer]);
  };

  HistoryData.prototype.forward = function () {
    if (!this.canForward()) return;
    this.playList.set("selectedIndex", this.list[++this.pointer]);
  };

  HistoryData.prototype.canBack = function () {
    return this.pointer > 0;
  };

  HistoryData.prototype.canForward = function () {
    return this.pointer >= 0 && this.pointer < this.list.length - 1;
  };
  //

  if (script.data == undefined) script.data = {};
  script.data["history"] = {}; //playListID -> HistoryData

  TDV.PlayerAPI.defineScript(script);
})();
