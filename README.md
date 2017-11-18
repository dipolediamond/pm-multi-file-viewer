# Image and PDF Viewer for Processmaker Multiple File Control

This adds a view button for image and PDF files uploaded to ProcessMaker using the multiple file control.

The image viewer uses [Viewer.js](https://fengyuanchen.github.io/viewerjs/) by [Chen Fengyuan](https://github.com/fengyuanchen)

The PDF viewer uses [ViewerJS](http://viewerjs.org/) by [KO GmbH](http://kogmbh.com/)

## How to use

1. Download the repo as a zip file and copy the **Viewers** folder to the ProcessMaker public folder e.g. `/opt/processmaker/workflow/public_html`
2. In the dynaform with the multiple file control, add the path to the Viewers.js file (`/Viewers/viewers.js`) to the external lib property of the dynaform.
3. Edit the JavaScript of the dynaform and invoke the `addViewers` function

```
ImageAndPDFViewer.addViewers();
```

