import React, { useState } from 'react';
import static_links from "../static_links.json"
import { Document, Page } from 'react-pdf';
import Header from "../Components/Header";

export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={{url: static_links.Resume}}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={console.error}
                    >
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <p>Page {pageNumber} of {numPages}</p>
        </div>

    )

}