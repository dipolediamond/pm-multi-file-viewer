(function () {
    function getFileRows(selector) {
        return $(".multiplefile-row .fa." + selector)
        .parent()
        .parent()
        .parent()
        .find("div.multiplefile-buttons");
    }

    function addViewers() {
        var imageAttachmentRows = getFileRows("fa-file-image-o");
        var pdfAttachmentRows = getFileRows("fa-file-pdf-o");

        if (imageAttachmentRows) {
            addViewerToRow(imageAttachmentRows, 'ImageViewer');
        }

        if (pdfAttachmentRows) {
            addViewerToRow(pdfAttachmentRows, 'PDFViewer');
        }
        $(".multiplefile-buttons > div.col-xs-5").removeClass("col-xs-5").addClass("col-xs-3");
        if($(".pm-multiplefile-download").hasClass("col-xs-10")){
            $(".pm-multiplefile-download").removeClass("col-xs-10").addClass("col-xs-8");
            $(".multiplefile-buttons").removeClass("col-xs-1").addClass("col-xs-3");
            $(".multiplefile-buttons > div.col-xs-11").removeClass("col-xs-11").addClass("col-xs-3");
        }
        
    }

    function addViewerToRow(rowCollection, viewerType) {
        var host = PMDynaform.getHostName();

        rowCollection.each(function (index, element) {
            var viewElement = $(element).children('div.multiplefile-button-download')
                .clone()
                .appendTo(element);

            var link = $(viewElement).children('a:first-of-type');
            var newHref = host + '/Viewers/' + viewerType + '/index.html#' + $(link).attr('href');

            $(link).attr('href', newHref)
                .attr('target', '_blank')
                .click(function (e) {
                    e.preventDefault();
                    window.open(newHref, '', 'outerWidth=600');
                    return false;
                });

            $(link).children('i').removeClass('fa-download').addClass('fa-eye');
        });
    }
    window.ImageAndPDFViewer = {
        addViewers: addViewers
    }
})();