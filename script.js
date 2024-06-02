(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -145.94,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.21,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2038A46A_2FF5_6CDE_41B2_8C9230E07509",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2038A46A_2FF5_6CDE_41B2_8C9230E07509_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2038A46A_2FF5_6CDE_41B2_8C9230E07509_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.2
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -51.34,
  "class": "PanoramaCameraPosition",
  "pitch": -4.94
 },
 "id": "panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 109.55,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.64,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_20F5DF03_2FFD_9C4E_41C1_790554003B95",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_20F5DF03_2FFD_9C4E_41C1_790554003B95_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_20F5DF03_2FFD_9C4E_41C1_790554003B95_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.01
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": -93.62,
  "class": "PanoramaCameraPosition",
  "pitch": -7.96
 },
 "id": "panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_25CB1F06_3014_BC56_4183_677930124862",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -18.39,
  "class": "PanoramaCameraPosition",
  "pitch": -3.02
 },
 "id": "panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 19.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23628F7B_3230_918C_41A9_86ACB3FFA24D",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.42,
   "yaw": -160.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  },
  {
   "backwardYaw": -76.04,
   "yaw": 66.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "2",
 "id": "panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0",
 "thumbnailUrl": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09EA12DA_1B4A_A7AD_419F_0548B6C51529",
  "this.overlay_0899DE46_1B55_7EA5_41B1_C8FC52F57465",
  "this.overlay_0B9FAC87_1C18_64CF_41BB_10DDC696489F",
  "this.overlay_3575E9BC_2120_E1DB_41C0_2C5A9417473F",
  "this.overlay_2FA9EA87_21C5_EC73_41B3_738D1CA5758D",
  "this.overlay_305655CB_224B_A7F3_41AE_D145809A4A36",
  "this.overlay_306D1503_22CA_A46C_41AF_F3EFF19CD151",
  "this.popup_3DBD8742_2F99_9894_41C1_1C4836C70D80",
  "this.popup_2038A46A_2FF5_6CDE_41B2_8C9230E07509",
  "this.popup_257A27B7_3034_EBB6_41C6_2649A0CE47E5",
  "this.popup_2577D63D_301F_6CBA_41B8_C4B67D79FACB",
  "this.popup_26BED1B3_300D_A44E_41C1_00F6E7E0E7F9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -29.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20409003_3230_8F83_41B0_3CAE60046EDA",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23508F97_3230_9083_41AD_1716562399A8",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_325BD834_227B_AC95_41B7_E34C394DB809",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_305A0065_2247_7CB7_41B4_3C35DACA9F15_0_0.png",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/popup_305A0065_2247_7CB7_41B4_3C35DACA9F15_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_305A0065_2247_7CB7_41B4_3C35DACA9F15_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 10.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23991FBA_3230_908D_41BC_A95A9420DCA2",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -169.01,
   "yaw": -101.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  },
  {
   "backwardYaw": -17.18,
   "yaw": 150.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "5",
 "id": "panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883",
 "thumbnailUrl": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0FE894EF_1BB6_E363_41B6_60A5828503CE",
  "this.overlay_08C1890A_1B4E_E2AC_4178_51C51481EBE8",
  "this.overlay_0F1B8BF6_1B5A_A564_418A_8AB659B2684A",
  "this.overlay_33D16BF7_22CA_E394_41A9_AB936B798E8C",
  "this.popup_2577FCD6_300B_BDC9_41B9_C679127C2176"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_20A4E00F_3230_8F83_41AE_37690265F656",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 68.38,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.86,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2526248D_303B_6C5A_41B7_7AE6EB871E07",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2526248D_303B_6C5A_41B7_7AE6EB871E07_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2526248D_303B_6C5A_41B7_7AE6EB871E07_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 9.52
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 139.61,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.53,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_305A0065_2247_7CB7_41B4_3C35DACA9F15",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_305A0065_2247_7CB7_41B4_3C35DACA9F15_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.77
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20117FF0_3230_909C_41BB_C3CC2BFA25E6",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 45.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_202C2FDD_3230_9084_41A1_8B42A554A04D",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 66.28,
   "yaw": -76.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "1",
 "id": "panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8",
 "thumbnailUrl": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_32C1EB8A_2121_A1BC_41B2_D681D2C5F2B3",
  "this.popup_24E3AEC2_301B_7DCE_4153_198A827E8A25",
  "this.overlay_2A650D5A_300C_9CFE_41B7_9B2D047F276F",
  "this.overlay_3C669649_31AC_9A53_41AA_59F12EAAD83C"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -152.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20617FF6_3230_9084_41AD_BBE34ACB1BB2",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -72.82,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.09,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2383C3BD_300C_ABBA_41C3_FDFEAB22142C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2383C3BD_300C_ABBA_41C3_FDFEAB22142C_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2383C3BD_300C_ABBA_41C3_FDFEAB22142C_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 26.48
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 152.71,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2346CD1A_301C_BC7E_41B1_6AD4F22B8FC3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2346CD1A_301C_BC7E_41B1_6AD4F22B8FC3_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2346CD1A_301C_BC7E_41B1_6AD4F22B8FC3_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.64
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -71,
   "yaw": 118.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "4",
 "id": "panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B",
 "thumbnailUrl": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0BD9A807_1BBD_A2A3_41B2_187DE6B2252F",
  "this.overlay_3222FB28_224A_ACBD_41AA_5874DADC6AC0",
  "this.overlay_32A83BB0_2247_E3AD_41A6_2305DB0D0FDC",
  "this.popup_305A0065_2247_7CB7_41B4_3C35DACA9F15",
  "this.overlay_31D4FB72_22C5_6CAC_4184_27A584634873",
  "this.popup_3D820BC9_2F9A_8F94_41B4_D38D4CEC5471",
  "this.popup_23A8D916_3035_A476_41B0_DD7E8A52A571",
  "this.popup_27B8F398_300D_E47A_41B8_C5866FDF9ED9"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 18.31,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.23,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_23CEE48E_300C_EC59_41B0_52766BA7DAFA",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_23CEE48E_300C_EC59_41B0_52766BA7DAFA_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_23CEE48E_300C_EC59_41B0_52766BA7DAFA_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.34
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.88,
  "class": "PanoramaCameraPosition",
  "pitch": -0.82
 },
 "id": "panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 171.04,
  "class": "PanoramaCameraPosition",
  "pitch": -3.57
 },
 "id": "panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  },
  {
   "backwardYaw": 150.78,
   "yaw": -17.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883"
  },
  {
   "backwardYaw": 133.85,
   "yaw": 65.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "6",
 "id": "panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2",
 "thumbnailUrl": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0A9545DD_1B4B_ADA4_41B6_AEC68796224C",
  "this.overlay_09254CE2_1B4D_E39C_41A0_1AC69CB53319",
  "this.overlay_3120526F_22DD_9CB3_41A7_5AF83CB8E2AE",
  "this.overlay_31B4161D_22DB_A497_41A2_2A2451D59441",
  "this.overlay_327B0D2B_22C5_A4BC_41C0_AEFBEB12491E",
  "this.popup_2410B187_3037_A456_41C5_F6F0963642C2",
  "this.popup_25AA233B_303C_A4BE_41C7_DBB9B26243E7",
  "this.popup_210A8C50_31B5_8E71_41C5_23E27BAEC143"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.18,
  "class": "PanoramaCameraPosition",
  "pitch": -1.65
 },
 "id": "panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_23967FB3_3230_9083_41B6_BFF858F89430",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -95.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 44.34,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.95,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_25AA233B_303C_A4BE_41C7_DBB9B26243E7",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_25AA233B_303C_A4BE_41C7_DBB9B26243E7_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_25AA233B_303C_A4BE_41C7_DBB9B26243E7_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.14
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 133.16,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.94
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -61.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23686F82_3230_917C_41B5_26A1F70465C6",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_2FA250C5_230B_4BAE_41AE_8D14013A50B1",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878_0_0.png",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 500,
 "id": "FadeOutEffect_26E312E5_3074_A5CA_41AB_065C2F570948",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -58.78,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.1,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_257A27B7_3034_EBB6_41C6_2649A0CE47E5",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_257A27B7_3034_EBB6_41C6_2649A0CE47E5_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_257A27B7_3034_EBB6_41C6_2649A0CE47E5_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 18.28
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -113.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_200E0FEA_3230_908C_418F_805B17E7455B",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -163.82,
   "yaw": -1.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "backwardYaw": -163.82,
   "yaw": 31.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "backwardYaw": 23.1,
   "yaw": -1.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "9",
 "id": "panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B",
 "thumbnailUrl": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D8E1096_1B75_A3A4_41A6_57305D368C5F",
  "this.overlay_0FA44BC6_1C28_EC41_41AD_D6ACF24026DA",
  "this.overlay_326B31C5_2160_A1B5_41B5_A38D04892438",
  "this.overlay_30457AA9_227D_EDBC_41B8_F26254718FEF",
  "this.overlay_33DDF347_227E_9CF3_41B8_A9F42FECF47B",
  "this.popup_3EF13CAF_2F8A_89EC_419D_816111E4494C",
  "this.popup_3B1079BE_2F8F_8BEC_417B_0B399A4388A0",
  "this.popup_3F03BEF7_301D_9DB6_4148_5D6C58CE7671"
 ]
},
{
 "id": "ImageResource_26E332E5_3074_A5CA_41BD_71E7D8C7A375",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_22926114_307C_A44A_41C6_AFC7CBC5F396_0_0.png",
   "width": 1500,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/zoomImage_22926114_307C_A44A_41C6_AFC7CBC5F396_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 614
  },
  {
   "url": "media/zoomImage_22926114_307C_A44A_41C6_AFC7CBC5F396_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 307
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -29.83,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.21,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_23A8D916_3035_A476_41B0_DD7E8A52A571",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_23A8D916_3035_A476_41B0_DD7E8A52A571_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_23A8D916_3035_A476_41B0_DD7E8A52A571_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 20.51
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 111.35,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.92,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3FF5241B_301C_EC7E_41C7_B6AE74BD1BFB",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3FF5241B_301C_EC7E_41C7_B6AE74BD1BFB_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3FF5241B_301C_EC7E_41C7_B6AE74BD1BFB_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.6
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -132.82,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.78,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_27B8F398_300D_E47A_41B8_C5866FDF9ED9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_27B8F398_300D_E47A_41B8_C5866FDF9ED9_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_27B8F398_300D_E47A_41B8_C5866FDF9ED9_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 13.02
},
{
 "duration": 500,
 "id": "FadeOutEffect_23D8E29C_300F_E47A_41BA_693D8F72E2EA",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 85.69,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2577FCD6_300B_BDC9_41B9_C679127C2176",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2577FCD6_300B_BDC9_41B9_C679127C2176_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2577FCD6_300B_BDC9_41B9_C679127C2176_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.95
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -42.62,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.41,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_26840C5C_301C_9CFA_41C5_2C555F525255",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_26840C5C_301C_9CFA_41C5_2C555F525255_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_26840C5C_301C_9CFA_41C5_2C555F525255_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 14.88
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 112.48,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.89,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_23CD21BB_300D_E7BE_41C5_CBA28E1F0CD6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_23CD21BB_300D_E7BE_41C5_CBA28E1F0CD6_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_23CD21BB_300D_E7BE_41C5_CBA28E1F0CD6_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 11.5
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 169.96,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.96,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2628F249_3014_A4DA_41A9_8B593E8CD2B6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2628F249_3014_A4DA_41A9_8B593E8CD2B6_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2628F249_3014_A4DA_41A9_8B593E8CD2B6_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 20.66
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23F84FC9_3230_908F_41A7_D8A2ACCB6982",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60"
  },
  {
   "backwardYaw": 84.77,
   "yaw": -134.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "16",
 "id": "panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD",
 "thumbnailUrl": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0D1A64CD_1C28_6443_4182_471D9A6BE312",
  "this.overlay_0D19AF3C_1C28_65C2_419A_B0D7C063C937",
  "this.overlay_0E977D10_1C38_25C1_41B2_A7E414498D84",
  "this.overlay_31B5451A_23DA_A49D_41AC_C4203F06BABA",
  "this.popup_2480758A_300B_6C5E_41B8_F4BB23DC1590"
 ]
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_23B40FA5_3230_9084_41C1_EE67C1A5B147",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -138.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 500,
 "id": "FadeInEffect_2C86952E_303C_AC56_41BA_749A67883387",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23DA4FD7_3230_9083_41C0_92384542EE91",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -86.65,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.06,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2410B187_3037_A456_41C5_F6F0963642C2",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2410B187_3037_A456_41C5_F6F0963642C2_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2410B187_3037_A456_41C5_F6F0963642C2_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.32
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 71.35,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.95,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3EF13CAF_2F8A_89EC_419D_816111E4494C",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3EF13CAF_2F8A_89EC_419D_816111E4494C_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3EF13CAF_2F8A_89EC_419D_816111E4494C_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.43
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 162.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23E9BFC1_3230_90FF_41C8_116542E9332C",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_2C86852D_303C_AC5A_41C1_080996FF3D8A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_2A0BD374_300C_A4CA_4185_B496394C5E10_0_0.png",
   "width": 3300,
   "class": "ImageResourceLevel",
   "height": 2550
  },
  {
   "url": "media/zoomImage_2A0BD374_300C_A4CA_4185_B496394C5E10_0_1.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1582
  },
  {
   "url": "media/zoomImage_2A0BD374_300C_A4CA_4185_B496394C5E10_0_2.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 791
  },
  {
   "url": "media/zoomImage_2A0BD374_300C_A4CA_4185_B496394C5E10_0_3.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 395
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 167.4,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.85,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3DBD8742_2F99_9894_41C1_1C4836C70D80",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DBD8742_2F99_9894_41C1_1C4836C70D80_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3DBD8742_2F99_9894_41C1_1C4836C70D80_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.21
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -34.32,
  "class": "PanoramaCameraPosition",
  "pitch": -4.12
 },
 "id": "panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 139.61,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.53,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3D820BC9_2F9A_8F94_41B4_D38D4CEC5471",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3D820BC9_2F9A_8F94_41B4_D38D4CEC5471_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3D820BC9_2F9A_8F94_41B4_D38D4CEC5471_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.77
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -45.2,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.53,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_23232F3B_3233_B18C_41C2_283CE698102D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_23232F3B_3233_B18C_41C2_283CE698102D_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_23232F3B_3233_B18C_41C2_283CE698102D_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.08
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 45.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_203CAFE3_3230_90BC_41B0_3A17C011EE0F",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -172.94,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.58,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_234A4043_3015_64CE_41C1_9982A9337C3D",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_234A4043_3015_64CE_41C1_9982A9337C3D_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_234A4043_3015_64CE_41C1_9982A9337C3D_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 10.76
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -173.34,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.92,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_23374FFF_3230_9083_41B0_3F33761D0752",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_23374FFF_3230_9083_41B0_3F33761D0752_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_23374FFF_3230_9083_41B0_3F33761D0752_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.7
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -16.75,
  "class": "PanoramaCameraPosition",
  "pitch": -3.29
 },
 "id": "panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 132.9,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.76,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2577D63D_301F_6CBA_41B8_C4B67D79FACB",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2577D63D_301F_6CBA_41B8_C4B67D79FACB_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2577D63D_301F_6CBA_41B8_C4B67D79FACB_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 13.77
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  },
  {
   "backwardYaw": -94.6,
   "yaw": -0.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "backwardYaw": -1.32,
   "yaw": 23.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B"
  },
  {
   "backwardYaw": 65.42,
   "yaw": 133.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "7",
 "id": "panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7",
 "thumbnailUrl": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0AB7C0FA_1B5A_A36D_4121_D7D73DA125F8",
  "this.overlay_0FDE504A_1B77_62AD_41B8_FE47FA4C0F84",
  "this.overlay_0EC91E59_1B75_9EAC_41B8_82B9DA4CD3DB",
  "this.overlay_0EDDEE45_1B55_BEA4_4162_35699EF3754B",
  "this.overlay_32B74831_22C6_ACAF_41AD_AE4539F7B8B0",
  "this.overlay_326551B0_22C7_FFAD_41B4_DC584A3B443E",
  "this.overlay_32578ED0_22C5_65ED_4187_9C89C99DE3FA",
  "this.overlay_30EB2BA9_22C6_A3BF_4195_A1287DAE06CF",
  "this.overlay_308CFA6E_22CD_6CB5_41AB_3502FA7FBB1E",
  "this.overlay_35E45630_233B_56E7_41B1_EBC4F57F2312",
  "this.overlay_362E3E81_2338_B7A9_4166_59F6BD669A3B",
  "this.popup_3DC49730_2F97_98F4_41C1_DB2A065BBFBD",
  "this.popup_3D1B33F5_2F97_9F7C_41BB_7E6B43C83699",
  "this.popup_3D03EAB4_2F96_89F3_41C1_45C28C195C44",
  "this.popup_20F5DF03_2FFD_9C4E_41C1_790554003B95",
  "this.popup_256E7281_3014_A44A_41C2_F1EAEEEB5BA1",
  "this.popup_26840C5C_301C_9CFA_41C5_2C555F525255",
  "this.popup_244E2B13_3074_A44E_41C2_45ED82A614EF"
 ]
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_227ED802_322E_5E91_41B8_5B7FB8FCE005.ogg",
  "mp3Url": "media/audio_227ED802_322E_5E91_41B8_5B7FB8FCE005.mp3",
  "class": "AudioResource"
 },
 "id": "audio_227ED802_322E_5E91_41B8_5B7FB8FCE005",
 "class": "MediaAudio",
 "data": {
  "label": "Backsound"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -38.94,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.03,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_210A8C50_31B5_8E71_41C5_23E27BAEC143",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_210A8C50_31B5_8E71_41C5_23E27BAEC143_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_210A8C50_31B5_8E71_41C5_23E27BAEC143_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -3.9
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 113.03,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3B1079BE_2F8F_8BEC_417B_0B399A4388A0",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3B1079BE_2F8F_8BEC_417B_0B399A4388A0_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3B1079BE_2F8F_8BEC_417B_0B399A4388A0_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -0.11
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 164.06,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.54,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3F03BEF7_301D_9DB6_4148_5D6C58CE7671",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3F03BEF7_301D_9DB6_4148_5D6C58CE7671_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3F03BEF7_301D_9DB6_4148_5D6C58CE7671_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -4.47
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -46.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2052D009_3230_8F8F_41B8_E10F646B6782",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_2087D01C_3230_8F85_41C7_4F7EA6D855C6",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "id": "map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4",
 "thumbnailUrl": "media/map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4_t.png",
 "width": 1500,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4.png",
    "width": 1500,
    "class": "ImageResourceLevel",
    "height": 900
   },
   {
    "url": "media/map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4_lq.png",
    "width": 330,
    "class": "ImageResourceLevel",
    "height": 198,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "maps pura desa",
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "height": 900,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -67.48,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.58,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_24E3AEC2_301B_7DCE_4153_198A827E8A25",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_24E3AEC2_301B_7DCE_4153_198A827E8A25_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_24E3AEC2_301B_7DCE_4153_198A827E8A25_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.57
},
{
 "label": "heritage paling bener",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_25CB1F06_3014_BC56_4183_677930124862_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_25CB1F06_3014_BC56_4183_677930124862",
 "class": "Video",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_25CB1F06_3014_BC56_4183_677930124862.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 88.55,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.74,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_28A5FC52_301F_FCCE_4195_AFD24D82E273",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_28A5FC52_301F_FCCE_4195_AFD24D82E273_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_28A5FC52_301F_FCCE_4195_AFD24D82E273_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -4.1
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer",
 "displayPlaybackBar": true
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 120.04,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 1.95,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3D03EAB4_2F96_89F3_41C1_45C28C195C44",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3D03EAB4_2F96_89F3_41C1_45C28C195C44_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3D03EAB4_2F96_89F3_41C1_45C28C195C44_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.14
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -114.24,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.47,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_26794AF7_3014_A5B6_41C2_F7151F599959",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_26794AF7_3014_A5B6_41C2_F7151F599959_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_26794AF7_3014_A5B6_41C2_F7151F599959_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.17
},
{
 "duration": 500,
 "id": "FadeOutEffect_2C86F52E_303C_AC56_41C2_7BD34B688C4D",
 "class": "FadeOutEffect",
 "easing": "cubic_out"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -94.2,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.16,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_25EFF295_303C_E44A_41B1_799E19BCEFDD",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_25EFF295_303C_E44A_41B1_799E19BCEFDD_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_25EFF295_303C_E44A_41B1_799E19BCEFDD_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.4
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 109,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23840FAC_3230_9085_41C3_ABAF36043855",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 160.59,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.92,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0_0_1.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 576
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.39
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 105.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_20708FFC_3230_9085_41BD_C45E7971003B",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "13",
 "id": "panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A",
 "thumbnailUrl": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F915FB6_1C18_24C1_41BC_28577A67C97E",
  "this.overlay_09B426CF_1C18_245F_41B6_CF1DED0996D8",
  "this.overlay_36233AC6_223A_ADF5_41AF_6684128DCC37",
  "this.overlay_36CA52BF_223D_9D93_41B5_65CD05640053",
  "this.popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878",
  "this.overlay_31D317CA_223F_A3FD_41B2_BB6B4E6752C3",
  "this.overlay_3689E13B_223E_FC93_419F_7ECC80A57DCD",
  "this.popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0",
  "this.overlay_2DC8FD58_2318_DAA7_41B7_EC1232F542F0",
  "this.popup_28A5FC52_301F_FCCE_4195_AFD24D82E273",
  "this.popup_24E7782A_300C_A45E_41AE_F3B97E4C1FD3",
  "this.popup_25EFF295_303C_E44A_41B1_799E19BCEFDD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -92.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23166F6C_3230_9184_41BB_D62C3319A090",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_2FA300C6_230B_4BAA_41B2_28CF23E3C4D2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0_0_0.png",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_23D8F29C_300F_E47A_4162_023541F836C3",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 31.92,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.26,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_25409D80_300C_BC4A_41B7_6AA14A1FE8C6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_25409D80_300C_BC4A_41B7_6AA14A1FE8C6_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_25409D80_300C_BC4A_41B7_6AA14A1FE8C6_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.77
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 148.73,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.98,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3D1B33F5_2F97_9F7C_41BB_7E6B43C83699",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3D1B33F5_2F97_9F7C_41BB_7E6B43C83699_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3D1B33F5_2F97_9F7C_41BB_7E6B43C83699_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -2.49
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -25.81,
  "class": "PanoramaCameraPosition",
  "pitch": -4.67
 },
 "id": "panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 40.67,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.29,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2480758A_300B_6C5E_41B8_F4BB23DC1590",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2480758A_300B_6C5E_41B8_F4BB23DC1590_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2480758A_300B_6C5E_41B8_F4BB23DC1590_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.17
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "14",
 "id": "panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9",
 "thumbnailUrl": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_08B1F5DE_1C68_2441_41BB_0CD2427200D2",
  "this.overlay_0BD3311A_1C68_3DC1_41A9_3EAE25126022"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -119.82,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.65,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2400C6EC_3034_ADDA_41BF_12EE1161D179",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2400C6EC_3034_ADDA_41BF_12EE1161D179_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2400C6EC_3034_ADDA_41BF_12EE1161D179_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.36
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -114.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23A57F9F_3230_9084_41C0_A1C2DE3F046B",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -148.37,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.4,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_201FE286_3230_7084_4186_98A84CA6A2CD",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_201FE286_3230_7084_4186_98A84CA6A2CD_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_201FE286_3230_7084_4186_98A84CA6A2CD_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.4
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "15",
 "id": "panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60",
 "thumbnailUrl": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0E4E824A_1C38_1C41_4167_3340A3E367B8",
  "this.overlay_0FA4C37B_1C28_1C47_41AA_ED6565B7A149",
  "this.overlay_0A863649_1C78_2442_41B2_7257B721E4B5",
  "this.overlay_06997963_1C68_2C46_41BA_6868091239E7",
  "this.overlay_324255D8_23C5_E79D_41A7_0E3129238A0A",
  "this.overlay_309A7238_223A_9C9D_419C_9B193C979DCE",
  "this.overlay_33E1D666_223B_E4B5_41B2_161A50C531ED",
  "this.popup_23CEE48E_300C_EC59_41B0_52766BA7DAFA",
  "this.popup_2706061C_3017_AC7A_41AB_F3DAD3AB70CC",
  "this.popup_23232F3B_3233_B18C_41C2_283CE698102D"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 84.29,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.45,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_25F8A525_300C_AC4A_41BB_49C3D90C4119",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_25F8A525_300C_AC4A_41BB_49C3D90C4119_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_25F8A525_300C_AC4A_41BB_49C3D90C4119_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 34.02
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_22FA3F4A_3230_918D_41B4_107BC2297DB7",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_23CA7FD0_3230_909D_41C2_040AD4C924AB",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 117.57,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.04,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2468B3F6_3015_EBB6_41A5_C279B36C590A",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2468B3F6_3015_EBB6_41A5_C279B36C590A_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2468B3F6_3015_EBB6_41A5_C279B36C590A_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -1.97
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.57,
  "class": "PanoramaCameraPosition",
  "pitch": -18.67
 },
 "id": "panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -143.94,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.91,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_244E2B13_3074_A44E_41C2_45ED82A614EF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_244E2B13_3074_A44E_41C2_45ED82A614EF_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_244E2B13_3074_A44E_41C2_45ED82A614EF_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 10.28
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 1.34,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.73,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_27E0DAA1_3077_E44D_41C1_D76FFF850437",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_27E0DAA1_3077_E44D_41C1_D76FFF850437_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_27E0DAA1_3077_E44D_41C1_D76FFF850437_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 19.05
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -2.16,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.71,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_26842325_3017_E455_41A0_08454296D7AE",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_26842325_3017_E455_41A0_08454296D7AE_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_26842325_3017_E455_41A0_08454296D7AE_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 9.75
},
{
 "automaticZoomSpeed": 10,
 "idleSequence": "this.sequence_231C7F74_3230_9184_41AA_C8ADED2B7BAA",
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 103.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_231C6F74_3230_9184_41AB_B05A91FCEDBC",
 "class": "PanoramaCamera",
 "initialSequence": "this.sequence_231C7F74_3230_9184_41AA_C8ADED2B7BAA"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 41.45,
   "yaw": 126.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "10",
 "id": "panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6",
 "thumbnailUrl": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0EF4364F_1B5E_EEA3_419C_26045585628B"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 78.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_237F3F89_3230_908C_41A3_F745BDCCA631",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "panorama_115EED92_1BF7_9DBC_4184_604E375C9708_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 26.91,
  "class": "PanoramaCameraPosition",
  "pitch": 19.22
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_20B7C015_3230_8F87_41C2_7DF9C368FD03",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 89.81,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.25,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_2706061C_3017_AC7A_41AB_F3DAD3AB70CC",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_2706061C_3017_AC7A_41AB_F3DAD3AB70CC_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_2706061C_3017_AC7A_41AB_F3DAD3AB70CC_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.19
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -27.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0.27
 },
 "id": "panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
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
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "id": "camera_23400F90_3230_909C_41C3_D020EA45E6DE",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -74.55,
   "yaw": 27.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "12",
 "id": "panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B",
 "thumbnailUrl": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1346B813_1C18_2BC6_41B1_C21BFF347504",
  "this.overlay_08D140C7_1C18_1C4F_41AB_9A4217E97B49",
  "this.overlay_33D377B7_223A_E394_418B_DF70510EBE75",
  "this.overlay_37F5C369_223A_FCBF_41C0_43D0D45D7CF3",
  "this.overlay_3024C020_223A_BCAC_41C1_4D65B1DA5513",
  "this.overlay_319FD259_2246_BC9F_41A8_F5A7F5F6035C",
  "this.overlay_378A2A70_2247_6CAD_41BF_C88C98790077",
  "this.popup_2400C6EC_3034_ADDA_41BF_12EE1161D179",
  "this.overlay_31AC5329_2245_BCBF_41B1_F6DDE39BC3B7",
  "this.popup_2383C3BD_300C_ABBA_41C3_FDFEAB22142C",
  "this.popup_234A4043_3015_64CE_41C1_9982A9337C3D",
  "this.popup_2346CD1A_301C_BC7E_41B1_6AD4F22B8FC3",
  "this.popup_261072CA_301D_65DE_41BB_D4EFDC6DE3F7",
  "this.popup_2526248D_303B_6C5A_41B7_7AE6EB871E07",
  "this.overlay_23CD1D5D_3015_BCFA_41C1_9C27C14A958C",
  "this.popup_2468B3F6_3015_EBB6_41A5_C279B36C590A"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A"
  },
  {
   "backwardYaw": 27.19,
   "yaw": -74.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B"
  },
  {
   "backwardYaw": 27.19,
   "yaw": 171.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "11",
 "id": "panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783",
 "thumbnailUrl": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09390371_1C18_1C43_4194_8EEB23A25558",
  "this.overlay_0B793203_1C69_FFC7_4173_E0D49B4EB8A7",
  "this.overlay_0A64AD47_1C78_644F_41A7_4843B549C858",
  "this.overlay_30FC8BC3_23CE_A3F3_41C0_2D85FE5E2C87",
  "this.overlay_30EDDAAA_23CF_ADBC_4184_7F375765695C",
  "this.overlay_30A80540_23CA_E4ED_41BB_118521FA1002",
  "this.overlay_3228F8B6_23CB_AD95_41AD_46ECDC3041B9",
  "this.overlay_36574CCF_23C6_A5F3_41BF_8114A8DA1984",
  "this.overlay_3062D882_23F9_5BAB_41C0_755521AC401C",
  "this.popup_23CD21BB_300D_E7BE_41C5_CBA28E1F0CD6",
  "this.popup_26794AF7_3014_A5B6_41C2_F7151F599959",
  "this.popup_27E0DAA1_3077_E44D_41C1_D76FFF850437",
  "this.popup_23374FFF_3230_9083_41B0_3F33761D0752",
  "this.popup_201FE286_3230_7084_4186_98A84CA6A2CD"
 ]
},
{
 "duration": 500,
 "id": "FadeInEffect_26E302E5_3074_A5CA_41C2_FE1682945C4E",
 "class": "FadeInEffect",
 "easing": "cubic_in"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 130.85,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.06,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_261072CA_301D_65DE_41BB_D4EFDC6DE3F7",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_261072CA_301D_65DE_41BB_D4EFDC6DE3F7_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_261072CA_301D_65DE_41BB_D4EFDC6DE3F7_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 0.45
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -119.63,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.85,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_26BED1B3_300D_A44E_41C1_00F6E7E0E7F9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_26BED1B3_300D_A44E_41C1_00F6E7E0E7F9_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_26BED1B3_300D_A44E_41C1_00F6E7E0E7F9_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.76
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883"
  },
  {
   "backwardYaw": -0.33,
   "yaw": -94.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7"
  },
  {
   "backwardYaw": 126.13,
   "yaw": 41.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6"
  },
  {
   "backwardYaw": -1.32,
   "yaw": -163.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B"
  },
  {
   "backwardYaw": -134.68,
   "yaw": 84.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD"
  },
  {
   "backwardYaw": -134.68,
   "yaw": 84.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "8",
 "id": "panorama_115EED92_1BF7_9DBC_4184_604E375C9708",
 "thumbnailUrl": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09B54694_1B5D_EFA4_41BA_264A1E4C0428",
  "this.overlay_0FE385F8_1B76_AD6C_4198_D85C1D2B2124",
  "this.overlay_0F9CDDB3_1B56_9DFC_41B4_35C79317E72B",
  "this.overlay_0F9C0C38_1C39_EBC1_41B0_AA1EF369DB79",
  "this.overlay_32727F7A_22DB_649D_41AF_78BEC89A264C",
  "this.overlay_31C6C16F_23C6_9CB3_41B7_5175E0FB4252",
  "this.overlay_30CCB325_23C5_9CB7_41A9_E1F20BC6CAF5",
  "this.popup_3FF5241B_301C_EC7E_41C7_B6AE74BD1BFB",
  "this.popup_25F8A525_300C_AC4A_41BB_49C3D90C4119",
  "this.popup_26842325_3017_E455_41A0_08454296D7AE",
  "this.overlay_2BCB58F6_3034_A5B6_41C6_FAB10F452378",
  "this.overlay_3FA2F60F_31B4_7DEF_41A9_021425D41E6C"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -88.51,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.03,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_256E7281_3014_A44A_41C2_F1EAEEEB5BA1",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_256E7281_3014_A44A_41C2_F1EAEEEB5BA1_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_256E7281_3014_A44A_41C2_F1EAEEEB5BA1_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.09
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2320E389_2F9E_9F94_41B5_FB6AF55BD6D4",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_22FAEF4A_3230_918D_419E_5BBDFD597DB4",
 "class": "PlayList"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -135.7,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.81,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3DD7CA39_2F8A_88F4_41C7_2CF6759E57E4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DD7CA39_2F8A_88F4_41C7_2CF6759E57E4_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3DD7CA39_2F8A_88F4_41C7_2CF6759E57E4_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -16.6
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -34.74,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.1,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_24E7782A_300C_A45E_41AE_F3B97E4C1FD3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_24E7782A_300C_A45E_41AE_F3B97E4C1FD3_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_24E7782A_300C_A45E_41AE_F3B97E4C1FD3_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 39.68
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 89.95,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.64,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_3DC49730_2F97_98F4_41C1_DB2A065BBFBD",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_3DC49730_2F97_98F4_41C1_DB2A065BBFBD_0_0.png",
    "width": 792,
    "class": "ImageResourceLevel",
    "height": 612
   },
   {
    "url": "media/popup_3DC49730_2F97_98F4_41C1_DB2A065BBFBD_0_1.png",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 395
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.43
},
{
 "id": "ImageResource_23D8C29C_300F_E47A_4180_105FE36985F2",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/zoomImage_23443AD2_300C_A5CE_41C0_43CF5507A0AE_0_0.png",
   "width": 1300,
   "class": "ImageResourceLevel",
   "height": 900
  },
  {
   "url": "media/zoomImage_23443AD2_300C_A5CE_41C0_43CF5507A0AE_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 708
  },
  {
   "url": "media/zoomImage_23443AD2_300C_A5CE_41C0_43CF5507A0AE_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 354
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -160.68,
   "yaw": 87.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0"
  },
  {
   "backwardYaw": 118.66,
   "yaw": -71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B"
  },
  {
   "backwardYaw": -101.46,
   "yaw": -169.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "3",
 "id": "panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE",
 "thumbnailUrl": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_1430CE3C_1BB5_7EE4_4198_85A51B4C6EAF",
  "this.overlay_098647E5_1B57_AD64_41B7_D59F334FB0AB",
  "this.overlay_086D665B_1B7B_AEAC_41AC_54A883DDA279",
  "this.overlay_323A810E_2120_FEB7_41AA_20D736EF84F4",
  "this.overlay_2D67E859_2245_AC9F_4188_EAAD27D58022",
  "this.overlay_372A975E_2339_555B_41B4_59DA9FF2D573",
  "this.popup_3DD7CA39_2F8A_88F4_41C7_2CF6759E57E4",
  "this.popup_2628F249_3014_A4DA_41A9_8B593E8CD2B6",
  "this.popup_25409D80_300C_BC4A_41B7_6AA14A1FE8C6"
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "top": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "maxHeight": 716,
 "maxWidth": 779,
 "id": "Image_204438AD_2FFB_89EC_41B3_FC7A99B8F613",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "18.14%",
 "width": "4.86%",
 "url": "skin/Image_204438AD_2FFB_89EC_41B3_FC7A99B8F613.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "bottom": "0.76%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "10.86%",
 "click": "this.showPopupImage(this.ImageResource_2C86852D_303C_AC5A_41C1_080996FF3D8A, null, '90%', '90%', this.FadeInEffect_2C86952E_303C_AC56_41BA_749A67883387, this.FadeOutEffect_2C86F52E_303C_AC56_41C2_7BD34B688C4D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image5629"
 }
},
{
 "cursor": "hand",
 "maxHeight": 716,
 "maxWidth": 779,
 "id": "Image_3FD13565_2FF6_989D_41BE_D79B830AF76E",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "9.03%",
 "width": "4.86%",
 "url": "skin/Image_3FD13565_2FF6_989D_41BE_D79B830AF76E.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "bottom": "0.62%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "10.86%",
 "click": "this.openLink('https://goo.gl/maps/DHwhGghuo8Tc3wzy9', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image5717"
 }
},
{
 "maxHeight": 716,
 "maxWidth": 779,
 "id": "Image_24EB1E2C_307C_BC5A_41AC_98A8812CFA8A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "22.91%",
 "width": "4.245%",
 "url": "skin/Image_24EB1E2C_307C_BC5A_41AC_98A8812CFA8A.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "bottom": "1.97%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "8.541%",
 "click": "this.showPopupImage(this.ImageResource_26E332E5_3074_A5CA_41BD_71E7D8C7A375, null, '90%', '90%', this.FadeInEffect_26E302E5_3074_A5CA_41C2_FE1682945C4E, this.FadeOutEffect_26E312E5_3074_A5CA_41AB_065C2F570948, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image10747"
 }
},
{
 "maxHeight": 902,
 "maxWidth": 943,
 "id": "Image_232ECB53_300B_64CE_41C1_5802DFEE99AA",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "27.14%",
 "width": "5.082%",
 "url": "skin/Image_232ECB53_300B_64CE_41C1_5802DFEE99AA.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "bottom": "0.79%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "10.629%",
 "click": "this.showPopupImage(this.ImageResource_23D8C29C_300F_E47A_4180_105FE36985F2, null, '90%', '90%', this.FadeInEffect_23D8F29C_300F_E47A_4162_023541F836C3, this.FadeOutEffect_23D8E29C_300F_E47A_41BA_693D8F72E2EA, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image22755"
 }
},
{
 "maxHeight": 1103,
 "maxWidth": 1087,
 "id": "Image_28FB7515_300C_AC4A_41C6_1D09804D8193",
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": "12.14%",
 "width": "7.849%",
 "url": "skin/Image_28FB7515_300C_AC4A_41C6_1D09804D8193.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "borderSize": 0,
 "bottom": "1.71%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "9.146%",
 "click": "this.mainPlayList.set('selectedIndex', 16); this.MainViewerVideoPlayer.play()",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image25434"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 0,
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent5918"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "right": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minHeight": 0,
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage5919"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton5920"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "fontStyle": "normal",
 "paddingLeft": 5,
 "paddingRight": 5,
 "fontSize": "1.29vmin",
 "right": 10,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minHeight": 0,
 "borderColor": "#000000",
 "horizontalAlign": "center",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "layout": "horizontal",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "shadow": false,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE, this.camera_23166F6C_3230_9184_41BB_D62C3319A090); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.78,
   "image": "this.AnimatedImageResource_082255E9_1B5B_AD6C_41B4_840248590F5D",
   "pitch": -25.24,
   "yaw": -160.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09EA12DA_1B4A_A7AD_419F_0548B6C51529",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.78,
   "yaw": -160.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_3_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8, this.camera_231C6F74_3230_9184_41AB_B05A91FCEDBC); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.62,
   "image": "this.AnimatedImageResource_0E5C8B73_1B55_E563_41B3_4989A552739F",
   "pitch": -19.68,
   "yaw": 66.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0899DE46_1B55_7EA5_41B1_C8FC52F57465",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.62,
   "yaw": 66.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2577D63D_301F_6CBA_41B8_C4B67D79FACB, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.76,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_6_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 13.77,
   "yaw": 132.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_0B9FAC87_1C18_64CF_41BB_10DDC696489F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 132.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_26BED1B3_300D_A44E_41C1_00F6E7E0E7F9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_10_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 147
     }
    ]
   },
   "pitch": 2.76,
   "yaw": -119.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3575E9BC_2120_E1DB_41C0_2C5A9417473F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.85,
   "yaw": -119.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3DBD8742_2F99_9894_41C1_1C4836C70D80, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.85,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_1_HS_11_0.png",
      "width": 80,
      "class": "ImageResourceLevel",
      "height": 80
     }
    ]
   },
   "pitch": -2.21,
   "yaw": 167.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2FA9EA87_21C5_EC73_41B3_738D1CA5758D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.85,
   "yaw": 167.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_1_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_257A27B7_3034_EBB6_41C6_2649A0CE47E5, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_1_HS_12_0.png",
      "width": 141,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ]
   },
   "pitch": 18.28,
   "yaw": -58.78,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_305655CB_224B_A7F3_41AE_D145809A4A36",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.1,
   "yaw": -58.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_1_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2038A46A_2FF5_6CDE_41B2_8C9230E07509, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_13_0.png",
      "width": 53,
      "class": "ImageResourceLevel",
      "height": 53
     }
    ]
   },
   "pitch": -2.2,
   "yaw": -145.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_306D1503_22CA_A46C_41AF_F3EFF19CD151",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.21,
   "yaw": -145.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2, this.camera_23E9BFC1_3230_90FF_41C8_116542E9332C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.48,
   "image": "this.AnimatedImageResource_0A675879_1BB7_A36C_41B0_B90DE7BB8B2D",
   "pitch": -35.95,
   "yaw": 150.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0FE894EF_1BB6_E363_41B6_60A5828503CE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.48,
   "yaw": 150.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.78,
   "image": "this.AnimatedImageResource_0955144E_1B4A_A2A4_41B4_95FFBD958F4E",
   "pitch": -36.38,
   "yaw": 11.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_08C1890A_1B4E_E2AC_4178_51C51481EBE8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.78,
   "yaw": 11.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE, this.camera_23991FBA_3230_908D_41BC_A95A9420DCA2); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.29,
   "image": "this.AnimatedImageResource_03C8F0CA_1B5D_A3AC_41B6_7D1254B33B35",
   "pitch": -38.35,
   "yaw": -101.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F1B8BF6_1B5A_A564_418A_8AB659B2684A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.29,
   "yaw": -101.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2577FCD6_300B_BDC9_41B9_C679127C2176, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": -1.95,
   "yaw": 85.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33D16BF7_22CA_E394_41A9_AB936B798E8C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 85.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_24E3AEC2_301B_7DCE_4153_198A827E8A25, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_2_0.png",
      "width": 59,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": 0.57,
   "yaw": -67.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32C1EB8A_2121_A1BC_41B2_D681D2C5F2B3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.58,
   "yaw": -67.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0, this.camera_200E0FEA_3230_908C_418F_805B17E7455B); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.96,
   "image": "this.AnimatedImageResource_2CE2351E_303C_AC76_41C0_159AB1F1967A",
   "pitch": -16.11,
   "yaw": -76.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2A650D5A_300C_9CFE_41B7_9B2D047F276F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.96,
   "yaw": -76.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 11.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_7_0.png",
      "width": 187,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": 14.1,
   "yaw": -84.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3C669649_31AC_9A53_41AA_59F12EAAD83C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.03,
   "yaw": -84.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE, this.camera_23840FAC_3230_9085_41C3_ABAF36043855); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.96,
   "image": "this.AnimatedImageResource_09BE9056_1BBA_A2A4_41BB_BDE48C083F5E",
   "pitch": -19.79,
   "yaw": 118.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BD9A807_1BBD_A2A3_41B2_187DE6B2252F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.96,
   "yaw": 118.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_23A8D916_3035_A476_41B0_DD7E8A52A571, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.21,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_1_HS_1_0.png",
      "width": 144,
      "class": "ImageResourceLevel",
      "height": 146
     }
    ]
   },
   "pitch": 20.51,
   "yaw": -29.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3222FB28_224A_ACBD_41AA_5874DADC6AC0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.21,
   "yaw": -29.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_305A0065_2247_7CB7_41B4_3C35DACA9F15, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_325BD834_227B_AC95_41B7_E34C394DB809, null, null, null, null, false); this.showPopupPanoramaOverlay(this.popup_3D820BC9_2F9A_8F94_41B4_D38D4CEC5471, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_1_HS_2_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 75
     }
    ]
   },
   "pitch": -0.77,
   "yaw": 139.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32A83BB0_2247_E3AD_41A6_2305DB0D0FDC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": 139.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_27B8F398_300D_E47A_41B8_C5866FDF9ED9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.78,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0_HS_4_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 13.02,
   "yaw": -132.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31D4FB72_22C5_6CAC_4184_27A584634873",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.78,
   "yaw": -132.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883, this.camera_20409003_3230_8F83_41B0_3CAE60046EDA); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.91,
   "image": "this.AnimatedImageResource_0954B44E_1B4A_A2A4_41A0_12ECF2D0F423",
   "pitch": -39.79,
   "yaw": -17.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A9545DD_1B4B_ADA4_41B6_AEC68796224C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.91,
   "yaw": -17.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.79
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7, this.camera_2052D009_3230_8F8F_41B8_E10F646B6782); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.67,
   "image": "this.AnimatedImageResource_09E20583_1B4E_ADA3_41AC_BAF94158485C",
   "pitch": -36.96,
   "yaw": 65.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09254CE2_1B4D_E39C_41A0_1AC69CB53319",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.67,
   "yaw": 65.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_210A8C50_31B5_8E71_41C5_23E27BAEC143, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_2_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   },
   "pitch": -3.9,
   "yaw": -38.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3120526F_22DD_9CB3_41A7_5AF83CB8E2AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.03,
   "yaw": -38.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2410B187_3037_A456_41C5_F6F0963642C2, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_3_0.png",
      "width": 116,
      "class": "ImageResourceLevel",
      "height": 117
     }
    ]
   },
   "pitch": 3.32,
   "yaw": -86.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31B4161D_22DB_A497_41A2_2A2451D59441",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.06,
   "yaw": -86.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_25AA233B_303C_A4BE_41C7_DBB9B26243E7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_4_0.png",
      "width": 115,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": -1.14,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_327B0D2B_22C5_A4BC_41C0_AEFBEB12491E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 44.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7, this.camera_2087D01C_3230_8F85_41C7_4F7EA6D855C6); this.mainPlayList.set('selectedIndex', 7); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.84,
   "image": "this.AnimatedImageResource_03486B7E_1B7B_6564_41B0_36C66097082F",
   "pitch": -39.11,
   "yaw": -1.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0D8E1096_1B75_A3A4_41A6_57305D368C5F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.84,
   "yaw": -1.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708, this.camera_20B7C015_3230_8F87_41C2_7DF9C368FD03); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.33,
   "image": "this.AnimatedImageResource_0F3F6651_1C28_2443_4185_FBDFFCBCB4F9",
   "pitch": -36.17,
   "yaw": 31.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FA44BC6_1C28_EC41_41AD_D6ACF24026DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.33,
   "yaw": 31.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3EF13CAF_2F8A_89EC_419D_816111E4494C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_2_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 1.43,
   "yaw": 71.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_326B31C5_2160_A1B5_41B5_A38D04892438",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 71.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3B1079BE_2F8F_8BEC_417B_0B399A4388A0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_1_HS_3_0.png",
      "width": 132,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ]
   },
   "pitch": -0.11,
   "yaw": 113.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30457AA9_227D_EDBC_41B8_F26254718FEF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8,
   "yaw": 113.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3F03BEF7_301D_9DB6_4148_5D6C58CE7671, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_1_HS_4_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": -4.47,
   "yaw": 164.06,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33DDF347_227E_9CF3_41B8_A9F42FECF47B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.54,
   "yaw": 164.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.38,
   "image": "this.AnimatedImageResource_0CEB6A92_1C28_2CC1_41A1_5B62C7D2769A",
   "pitch": -40.68,
   "yaw": -22.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D1A64CD_1C28_6443_4182_471D9A6BE312",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.38,
   "yaw": -22.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.09,
   "image": "this.AnimatedImageResource_09AE69F3_1C38_2C46_41B6_5188C34BE34F",
   "pitch": -37.05,
   "yaw": 98.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0D19AF3C_1C28_65C2_419A_B0D7C063C937",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.09,
   "yaw": 98.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708, this.camera_23967FB3_3230_9083_41B6_BFF858F89430); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.19,
   "image": "this.AnimatedImageResource_09AEC9F4_1C38_2C42_41B6_7E450AE83681",
   "pitch": -62.31,
   "yaw": -134.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E977D10_1C38_25C1_41B2_A7E414498D84",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.19,
   "yaw": -134.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -62.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2480758A_300B_6C5E_41B8_F4BB23DC1590, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.29,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_3_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 2.17,
   "yaw": 40.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31B5451A_23DA_A49D_41AC_C4203F06BABA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.29,
   "yaw": 40.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_115EED92_1BF7_9DBC_4184_604E375C9708, this.camera_23400F90_3230_909C_41C3_D020EA45E6DE); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.53,
   "image": "this.AnimatedImageResource_0974CF57_1C28_644F_41A8_17BB55D9091C",
   "pitch": -27.33,
   "yaw": -0.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AB7C0FA_1B5A_A36D_4121_D7D73DA125F8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.53,
   "yaw": -0.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B, this.camera_23508F97_3230_9083_41AD_1716562399A8); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06c Right-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.56,
   "image": "this.AnimatedImageResource_09746F58_1C28_6441_41B2_44511E005A00",
   "pitch": -17.28,
   "yaw": 23.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0FDE504A_1B77_62AD_41B8_FE47FA4C0F84",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 25.56,
   "yaw": 23.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2, this.camera_23A57F9F_3230_9084_41C0_A1C2DE3F046B); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.9,
   "image": "this.AnimatedImageResource_0C5513FB_1B4A_E563_419F_4FCC5A9DFC4C",
   "pitch": -25.72,
   "yaw": 133.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EC91E59_1B75_9EAC_41B8_82B9DA4CD3DB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.9,
   "yaw": 133.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.72
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.09,
   "image": "this.AnimatedImageResource_0608A368_1CBE_A56C_4192_8BA26ACF94D8",
   "pitch": -20.68,
   "yaw": 176.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EDDEE45_1B55_BEA4_4162_35699EF3754B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.09,
   "yaw": 176.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_3_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_244E2B13_3074_A44E_41C2_45ED82A614EF, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_4_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": 10.28,
   "yaw": -143.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32B74831_22C6_ACAF_41AD_AE4539F7B8B0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.91,
   "yaw": -143.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_256E7281_3014_A44A_41C2_F1EAEEEB5BA1, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_5_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ]
   },
   "pitch": 1.09,
   "yaw": -88.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_326551B0_22C7_FFAD_41B4_DC584A3B443E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.03,
   "yaw": -88.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3DC49730_2F97_98F4_41C1_DB2A065BBFBD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_6_0.png",
      "width": 76,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "pitch": 3.43,
   "yaw": 89.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32578ED0_22C5_65ED_4187_9C89C99DE3FA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.64,
   "yaw": 89.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.43
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3D1B33F5_2F97_9F7C_41BB_7E6B43C83699, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.98,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_7_0.png",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 66
     }
    ]
   },
   "pitch": -2.49,
   "yaw": 148.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30EB2BA9_22C6_A3BF_4195_A1287DAE06CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.98,
   "yaw": 148.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_26840C5C_301C_9CFA_41C5_2C555F525255, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.41,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_8_0.png",
      "width": 109,
      "class": "ImageResourceLevel",
      "height": 110
     }
    ]
   },
   "pitch": 14.88,
   "yaw": -42.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_308CFA6E_22CD_6CB5_41AB_3502FA7FBB1E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.41,
   "yaw": -42.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 14.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_20F5DF03_2FFD_9C4E_41C1_790554003B95, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.64,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_9_0.png",
      "width": 43,
      "class": "ImageResourceLevel",
      "height": 44
     }
    ]
   },
   "pitch": -1.01,
   "yaw": 109.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_35E45630_233B_56E7_41B1_EBC4F57F2312",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 109.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3D03EAB4_2F96_89F3_41C1_45C28C195C44, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_10_0.png",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 32
     }
    ]
   },
   "pitch": -1.14,
   "yaw": 120.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_362E3E81_2338_B7A9_4166_59F6BD669A3B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 1.95,
   "yaw": 120.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.99,
   "image": "this.AnimatedImageResource_0FCFCAC5_1C18_6C43_41B0_04CF95165C12",
   "pitch": -25.04,
   "yaw": -167.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F915FB6_1C18_24C1_41BC_28577A67C97E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.99,
   "yaw": -167.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.44,
   "image": "this.AnimatedImageResource_0FC86AC6_1C18_6C41_419B_AF345A3E1CD3",
   "pitch": -43.98,
   "yaw": -60.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09B426CF_1C18_245F_41B6_CF1DED0996D8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.44,
   "yaw": -60.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_1_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_25EFF295_303C_E44A_41B1_799E19BCEFDD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_2_0.png",
      "width": 102,
      "class": "ImageResourceLevel",
      "height": 103
     }
    ]
   },
   "pitch": 6.4,
   "yaw": -94.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_36233AC6_223A_ADF5_41AF_6684128DCC37",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.16,
   "yaw": -94.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_305BC9EC_223E_AFB5_41A4_3A7E5FA45878, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_2FA250C5_230B_4BAE_41AE_8D14013A50B1, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_3_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": 1.94,
   "yaw": 133.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_36CA52BF_223D_9D93_41B5_65CD05640053",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 133.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_24E7782A_300C_A45E_41AE_F3B97E4C1FD3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_4_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": 39.68,
   "yaw": -34.74,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31D317CA_223F_A3FD_41B2_BB6B4E6752C3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.1,
   "yaw": -34.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 39.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_378C3420_223E_A4AD_41C0_2BCACA3F91C0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_2FA300C6_230B_4BAA_41B2_28CF23E3C4D2, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_5_0.png",
      "width": 130,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ]
   },
   "pitch": 1.39,
   "yaw": 160.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3689E13B_223E_FC93_419F_7ECC80A57DCD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.92,
   "yaw": 160.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.39
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_28A5FC52_301F_FCCE_4195_AFD24D82E273, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_6_0.png",
      "width": 128,
      "class": "ImageResourceLevel",
      "height": 129
     }
    ]
   },
   "pitch": -4.1,
   "yaw": 88.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2DC8FD58_2318_DAA7_41B7_EC1232F542F0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.74,
   "yaw": 88.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.67,
   "image": "this.AnimatedImageResource_085A92ED_1C68_FC43_419E_8352C599C201",
   "pitch": -27.37,
   "yaw": 38.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08B1F5DE_1C68_2441_41BB_0CD2427200D2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.67,
   "yaw": 38.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.65,
   "image": "this.AnimatedImageResource_06F34495_1C28_64C2_418D_778C38B2A8D0",
   "pitch": -35.11,
   "yaw": -115.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BD3311A_1C68_3DC1_41A9_3EAE25126022",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.65,
   "yaw": -115.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.12,
   "image": "this.AnimatedImageResource_0956EC0E_1C28_2BC1_41BA_E200376B7887",
   "pitch": -19.11,
   "yaw": 140,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E4E824A_1C38_1C41_4167_3340A3E367B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.12,
   "yaw": 140,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.61,
   "image": "this.AnimatedImageResource_0B3FC220_1C68_7FC1_41A7_E19F067AD1AC",
   "pitch": -24.52,
   "yaw": -16.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0FA4C37B_1C28_1C47_41AA_ED6565B7A149",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.61,
   "yaw": -16.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.45,
   "image": "this.AnimatedImageResource_07A4B210_1C68_1FC1_4180_E618CCA6636F",
   "pitch": -39.17,
   "yaw": -87.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0A863649_1C78_2442_41B2_7257B721E4B5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.45,
   "yaw": -87.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.92,
   "image": "this.AnimatedImageResource_0B3C9220_1C68_7FC1_4181_112A4B930A58",
   "pitch": -22.41,
   "yaw": -58.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_06997963_1C68_2C46_41BA_6868091239E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.92,
   "yaw": -58.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2706061C_3017_AC7A_41AB_F3DAD3AB70CC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_5_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 5.19,
   "yaw": 89.81,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_324255D8_23C5_E79D_41A7_0E3129238A0A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.25,
   "yaw": 89.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_23CEE48E_300C_EC59_41B0_52766BA7DAFA, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_6_0.png",
      "width": 153,
      "class": "ImageResourceLevel",
      "height": 155
     }
    ]
   },
   "pitch": 7.34,
   "yaw": 18.31,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_309A7238_223A_9C9D_419C_9B193C979DCE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.23,
   "yaw": 18.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_23232F3B_3233_B18C_41C2_283CE698102D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.53,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_7_0.png",
      "width": 75,
      "class": "ImageResourceLevel",
      "height": 76
     }
    ]
   },
   "pitch": 6.08,
   "yaw": -45.2,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33E1D666_223B_E4B5_41B2_161A50C531ED",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -45.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.08
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_231C7F74_3230_9184_41AA_C8ADED2B7BAA",
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
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.62,
   "image": "this.AnimatedImageResource_09558C0D_1C28_2BC3_41B1_B58B03C53217",
   "pitch": -35.47,
   "yaw": 126.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EF4364F_1B5E_EEA3_419C_26045585628B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 24.62,
   "yaw": 126.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.91,
   "image": "this.AnimatedImageResource_0FCF6AC5_1C18_6C43_41B3_6201BB925B6A",
   "pitch": -38.01,
   "yaw": 99.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1346B813_1C18_2BC6_41B1_C21BFF347504",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 99.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783, this.camera_20708FFC_3230_9085_41BD_C45E7971003B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.26,
   "image": "this.AnimatedImageResource_0FCF9AC5_1C18_6C43_41B5_4857D93C8E45",
   "pitch": -30.18,
   "yaw": 27.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_08D140C7_1C18_1C4F_41AB_9A4217E97B49",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.26,
   "yaw": 27.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2346CD1A_301C_BC7E_41B1_6AD4F22B8FC3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_3_0.png",
      "width": 91,
      "class": "ImageResourceLevel",
      "height": 92
     }
    ]
   },
   "pitch": -0.64,
   "yaw": 152.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_33D377B7_223A_E394_418B_DF70510EBE75",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.54,
   "yaw": 152.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_261072CA_301D_65DE_41BB_D4EFDC6DE3F7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_4_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 84
     }
    ]
   },
   "pitch": 0.45,
   "yaw": 130.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_37F5C369_223A_FCBF_41C0_43D0D45D7CF3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.06,
   "yaw": 130.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2526248D_303B_6C5A_41B7_7AE6EB871E07, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.86,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_5_0.png",
      "width": 114,
      "class": "ImageResourceLevel",
      "height": 116
     }
    ]
   },
   "pitch": 9.52,
   "yaw": 68.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3024C020_223A_BCAC_41C1_4D65B1DA5513",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.86,
   "yaw": 68.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2400C6EC_3034_ADDA_41BF_12EE1161D179, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.65,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_7_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": 6.36,
   "yaw": -119.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_319FD259_2246_BC9F_41A8_F5A7F5F6035C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.65,
   "yaw": -119.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_234A4043_3015_64CE_41C1_9982A9337C3D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.58,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_8_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": 10.76,
   "yaw": -172.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_378A2A70_2247_6CAD_41BF_C88C98790077",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.58,
   "yaw": -172.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2383C3BD_300C_ABBA_41C3_FDFEAB22142C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.09,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_6_0.png",
      "width": 93,
      "class": "ImageResourceLevel",
      "height": 94
     }
    ]
   },
   "pitch": 26.48,
   "yaw": -72.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31AC5329_2245_BCBF_41B1_F6DDE39BC3B7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.09,
   "yaw": -72.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 26.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2468B3F6_3015_EBB6_41A5_C279B36C590A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_9_0.png",
      "width": 66,
      "class": "ImageResourceLevel",
      "height": 67
     }
    ]
   },
   "pitch": -1.97,
   "yaw": 117.57,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_23CD1D5D_3015_BCFA_41C1_9C27C14A958C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.04,
   "yaw": 117.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.96,
   "image": "this.AnimatedImageResource_3BCD948E_23F9_CBBA_4194_5FA322C82A64",
   "pitch": -29.73,
   "yaw": 129.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09390371_1C18_1C43_4194_8EEB23A25558",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.96,
   "yaw": 129.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B, this.camera_20117FF0_3230_909C_41BB_C3CC2BFA25E6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_3BCC248E_23F9_CBBA_41C1_0EFA6BF413F0",
   "pitch": -33,
   "yaw": -74.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0B793203_1C69_FFC7_4173_E0D49B4EB8A7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.31,
   "yaw": -74.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_3_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.7,
   "image": "this.AnimatedImageResource_0932376C_1C78_2442_41B3_A242A59BDB87",
   "pitch": -17.04,
   "yaw": -57.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0A64AD47_1C78_644F_41A7_4843B549C858",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.7,
   "yaw": -57.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_4_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_27E0DAA1_3077_E44D_41C1_D76FFF850437, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.73,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_5_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 19.05,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30FC8BC3_23CE_A3F3_41C0_2D85FE5E2C87",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.73,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 19.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_23CD21BB_300D_E7BE_41C5_CBA28E1F0CD6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.89,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_6_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": 11.5,
   "yaw": 112.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30EDDAAA_23CF_ADBC_4184_7F375765695C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.89,
   "yaw": 112.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 11.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_201FE286_3230_7084_4186_98A84CA6A2CD, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.4,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_7_0.png",
      "width": 89,
      "class": "ImageResourceLevel",
      "height": 90
     }
    ]
   },
   "pitch": 3.4,
   "yaw": -148.37,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30A80540_23CA_E4ED_41BB_118521FA1002",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.4,
   "yaw": -148.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_26794AF7_3014_A5B6_41C2_F7151F599959, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.47,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_8_0.png",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 41
     }
    ]
   },
   "pitch": 5.17,
   "yaw": -114.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3228F8B6_23CB_AD95_41AD_46ECDC3041B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 2.47,
   "yaw": -114.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_23374FFF_3230_9083_41B0_3F33761D0752, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_9_0.png",
      "width": 65,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ]
   },
   "pitch": 4.7,
   "yaw": -173.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_36574CCF_23C6_A5F3_41BF_8114A8DA1984",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.92,
   "yaw": -173.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_1_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 31
     }
    ]
   },
   "pitch": 4.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.99,
   "image": "this.AnimatedImageResource_3BCE4494_23F9_CBAF_41BA_7CAC44625D5E",
   "pitch": -26.63,
   "yaw": 171.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3062D882_23F9_5BAB_41C0_755521AC401C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.99,
   "yaw": 171.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_10_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7, this.camera_23F84FC9_3230_908F_41A7_D8A2ACCB6982); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.04,
   "image": "this.AnimatedImageResource_0349AB7E_1B7B_6564_41BB_74B07B2587CD",
   "pitch": -16.87,
   "yaw": -94.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09B54694_1B5D_EFA4_41BA_264A1E4C0428",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.04,
   "yaw": -94.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_0_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B, this.camera_23DA4FD7_3230_9083_41C0_92384542EE91); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a Left"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.49,
   "image": "this.AnimatedImageResource_313FDC75_22CE_A497_41A8_8C41B438A129",
   "pitch": -32.97,
   "yaw": -163.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0FE385F8_1B76_AD6C_4198_D85C1D2B2124",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.49,
   "yaw": -163.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6, this.camera_23CA7FD0_3230_909D_41C2_040AD4C924AB); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.56,
   "image": "this.AnimatedImageResource_0C1D0001_1B56_A29F_41B9_F016FC5DBCC4",
   "pitch": -25.45,
   "yaw": 41.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F9CDDB3_1B56_9DFC_41B4_35C79317E72B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.56,
   "yaw": 41.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD, this.camera_202C2FDD_3230_9084_41A1_8B42A554A04D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.92,
   "image": "this.AnimatedImageResource_09ACF9F2_1C38_2C46_41B1_15057C64C51F",
   "pitch": -27.98,
   "yaw": 84.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F9C0C38_1C39_EBC1_41B0_AA1EF369DB79",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.92,
   "yaw": 84.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_26842325_3017_E455_41A0_08454296D7AE, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_4_0.png",
      "width": 95,
      "class": "ImageResourceLevel",
      "height": 96
     }
    ]
   },
   "pitch": 9.75,
   "yaw": -2.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_32727F7A_22DB_649D_41AF_78BEC89A264C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.71,
   "yaw": -2.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3FF5241B_301C_EC7E_41C7_B6AE74BD1BFB, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.92,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_6_0.png",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 82
     }
    ]
   },
   "pitch": -0.6,
   "yaw": 111.35,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_31C6C16F_23C6_9CB3_41B7_5175E0FB4252",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.92,
   "yaw": 111.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -0.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_25F8A525_300C_AC4A_41BB_49C3D90C4119, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.45,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_7_0.png",
      "width": 68,
      "class": "ImageResourceLevel",
      "height": 69
     }
    ]
   },
   "pitch": 34.02,
   "yaw": 84.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_30CCB325_23C5_9CB7_41A9_E1F20BC6CAF5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.45,
   "yaw": 84.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 34.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD, this.camera_203CAFE3_3230_90BC_41B0_3A17C011EE0F); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.23,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_10_0.png",
      "width": 71,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": 10.73,
   "yaw": 84.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2BCB58F6_3034_A5B6_41C6_FAB10F452378",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.23,
   "yaw": 84.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 10.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "items": [
  {
   "hfov": 9.51,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_11_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ]
   },
   "pitch": 20.12,
   "yaw": 50.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "id": "overlay_3FA2F60F_31B4_7DEF_41A9_021425D41E6C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.51,
   "yaw": 50.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_11_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883, this.camera_237F3F89_3230_908C_41A3_F745BDCCA631); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.81,
   "image": "this.AnimatedImageResource_0DFB9CE7_1B7A_E363_41B8_4D555687C3DF",
   "pitch": -22.37,
   "yaw": -169.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1430CE3C_1BB5_7EE4_4198_85A51B4C6EAF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.81,
   "yaw": -169.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0, this.camera_23628F7B_3230_918C_41A9_86ACB3FFA24D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.01,
   "image": "this.AnimatedImageResource_0E5DFB73_1B55_E563_41B0_E798EEFE8FB6",
   "pitch": -32.24,
   "yaw": 87.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_098647E5_1B57_AD64_41B7_D59F334FB0AB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 23.01,
   "yaw": 87.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_2_0_0_map.gif",
      "width": 42,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B, this.camera_23686F82_3230_917C_41B5_26A1F70465C6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.17,
   "image": "this.AnimatedImageResource_0DFB2CE7_1B7A_E363_41B8_B7D719478ADC",
   "pitch": -36.3,
   "yaw": -71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_086D665B_1B7B_AEAC_41AC_54A883DDA279",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.17,
   "yaw": -71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_25409D80_300C_BC4A_41B7_6AA14A1FE8C6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.26,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_4_0.png",
      "width": 170,
      "class": "ImageResourceLevel",
      "height": 171
     }
    ]
   },
   "pitch": 4.77,
   "yaw": 31.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_323A810E_2120_FEB7_41AA_20D736EF84F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.26,
   "yaw": 31.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_2628F249_3014_A4DA_41A9_8B593E8CD2B6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.96,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_5_0.png",
      "width": 158,
      "class": "ImageResourceLevel",
      "height": 159
     }
    ]
   },
   "pitch": 20.66,
   "yaw": 169.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_2D67E859_2245_AC9F_4188_EAAD27D58022",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.96,
   "yaw": 169.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 20.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_3DD7CA39_2F8A_88F4_41C7_2CF6759E57E4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'rollOverIconWidth':20,'paddingLeft':5,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.81,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_6_0.png",
      "width": 83,
      "class": "ImageResourceLevel",
      "height": 83
     }
    ]
   },
   "pitch": -16.6,
   "yaw": -135.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_372A975E_2339_555B_41B4_59DA9FF2D573",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.81,
   "yaw": -135.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.6
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_3_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_082255E9_1B5B_AD6C_41B4_840248590F5D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_1150AE91_1BF6_BFBF_415C_1FCB17C1E0E0_0_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0E5C8B73_1B55_E563_41B3_4989A552739F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0A675879_1BB7_A36C_41B0_B90DE7BB8B2D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0955144E_1B4A_A2A4_41B4_95FFBD958F4E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_10BC45E7_1BF7_6D63_4197_C1CCBE91D883_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_03C8F0CA_1B5D_A3AC_41B6_7D1254B33B35",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10FBB0A4_1BF6_A3E4_4198_DD086C7A39A8_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_2CE2351E_303C_AC76_41C0_159AB1F1967A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_115EF82F_1BF7_62E4_41B2_D26028095A7B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09BE9056_1BBA_A2A4_41BB_BDE48C083F5E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0954B44E_1B4A_A2A4_41A0_12ECF2D0F423",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_11520282_1BF7_A79C_41A8_CD6C7C475ED2_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09E20583_1B4E_ADA3_41AC_BAF94158485C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03486B7E_1B7B_6564_41B0_36C66097082F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BD1B3A_1BF7_E6ED_41AE_285EBCC7979B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0F3F6651_1C28_2443_4185_FBDFFCBCB4F9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0CEB6A92_1C28_2CC1_41A1_5B62C7D2769A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09AE69F3_1C38_2C46_41B6_5188C34BE34F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_0A24C63C_1CBD_EEE4_4193_B5C4A52D07AD_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_09AEC9F4_1C38_2C42_41B6_7E450AE83681",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0974CF57_1C28_644F_41A8_17BB55D9091C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09746F58_1C28_6441_41B2_44511E005A00",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0C5513FB_1B4A_E563_419F_4FCC5A9DFC4C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_10BD2013_1BF7_A2BC_41B1_A5ED76E7EED7_0_HS_3_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0608A368_1CBE_A56C_4192_8BA26ACF94D8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0FCFCAC5_1C18_6C43_41B0_04CF95165C12",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_0A3AB206_1CBD_E6A4_4173_05E88F1B422A_0_HS_1_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0FC86AC6_1C18_6C41_419B_AF345A3E1CD3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_085A92ED_1C68_FC43_419E_8352C599C201",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_0A24F8BF_1CBD_E3E3_41A1_F3C6EA46CAE9_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_06F34495_1C28_64C2_418D_778C38B2A8D0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0956EC0E_1C28_2BC1_41BA_E200376B7887",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0B3FC220_1C68_7FC1_41A7_E19F067AD1AC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_07A4B210_1C68_1FC1_4180_E618CCA6636F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A3AFF6F_1CBD_FD63_41A2_101C4D554A60_0_HS_4_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0B3C9220_1C68_7FC1_4181_112A4B930A58",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_115EA8C6_1BF7_E3A4_41B0_644DCD4FFFD6_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_09558C0D_1C28_2BC3_41B1_B58B03C53217",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0FCF6AC5_1C18_6C43_41B3_6201BB925B6A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0A268B57_1CBD_A6A4_41B2_5823154A295B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0FCF9AC5_1C18_6C43_41B5_4857D93C8E45",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3BCD948E_23F9_CBBA_4194_5FA322C82A64",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_3_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3BCC248E_23F9_CBBA_41C1_0EFA6BF413F0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_4_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0932376C_1C78_2442_41B3_A242A59BDB87",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0B56B468_1CBD_A36C_41BB_3F6C37A77783_0_HS_10_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_3BCE4494_23F9_CBAF_41BA_7CAC44625D5E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_0_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0349AB7E_1B7B_6564_41BB_74B07B2587CD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_313FDC75_22CE_A497_41A8_8C41B438A129",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0C1D0001_1B56_A29F_41B9_F016FC5DBCC4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_115EED92_1BF7_9DBC_4184_604E375C9708_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_09ACF9F2_1C38_2C46_41B1_15057C64C51F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0DFB9CE7_1B7A_E363_41B8_4D555687C3DF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 30,
 "levels": [
  {
   "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_2_0.png",
   "width": 925,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 5,
 "id": "AnimatedImageResource_0E5DFB73_1B55_E563_41B0_E798EEFE8FB6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_10A7AB83_1BF6_A59C_41A4_4C11382663DE_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0DFB2CE7_1B7A_E363_41B8_B7D719478ADC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.playAudioList([this.audio_227ED802_322E_5E91_41B8_5B7FB8FCE005]); this.init()",
 "data": {
  "name": "Player2507"
 },
 "children": [
  "this.MainViewer",
  "this.Image_204438AD_2FFB_89EC_41B3_FC7A99B8F613",
  "this.Image_3FD13565_2FF6_989D_41BE_D79B830AF76E",
  "this.Image_24EB1E2C_307C_BC5A_41AC_98A8812CFA8A",
  "this.Image_232ECB53_300B_64CE_41C1_5802DFEE99AA",
  "this.Image_28FB7515_300C_AC4A_41C6_1D09804D8193",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "minHeight": 20,
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "layout": "absolute",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
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
