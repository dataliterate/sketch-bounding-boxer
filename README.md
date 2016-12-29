# Sketch Bounding Boxer

![sketch-bounding-boxer](https://raw.githubusercontent.com/preciousforever/sketch-bounding-boxer/master/toggle-layer-visibility.gif)

## Why Sketch Bounding Boxer

In our Sketch documents, we often use "boundingBox" layers in eg. icon layer groups to see (and use) their actual dimension and bounds. Since we don't want to see these "boundingBoxes" permanently, we created this little plugin to toggle their visibility with a keyboard shortcut (we use "cmd + l").

By default, the plugin toggles all layers with their name starting with "boundingBox", so for example "boundingBox 2" will be toggled as well (this is pretty nifty if you duplicate layers and get an automatic number at the end of the name). You can easily change the affected layer name with the "Settings" command.

## Installation
1. Download the ZIP file (or clone repository)
2. Move the file ```Sketch Bounding Boxer.sketchplugin``` into your Sketch Plugins folder. In Sketch 3, choose **Plugins › Reveal Plugins Folder…** to open it.

Please report bugs, observations, ideas & feature requests as [issues](https://github.com/preciousforever/sketch-bounding-boxer/issues).

## Available Commands

#### Toggle
automatically determines if the (majority of) matching layers are currently visible or hidden and toggles their visibility accordingly.

#### Show
makes all matching layers visible.

#### Hide
makes all matching layers hidden.

#### Settings
allows for the layer name to be changed as desired. ```*``` can be used as a wildcard meaning that ```box*``` will match ```box```, ```box1```, ```box-something```, etc. ```*``` can be used anywhere within the layer name string.
