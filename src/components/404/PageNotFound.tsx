import React from 'react';
import "./PageNotFound.css"

type PageNotFoundProps = {};

type PageNotFoundState = {};

export class PageNotFound extends React.Component<PageNotFoundProps, PageNotFoundState> {
    state: PageNotFoundState = {};

    render() {
        return <div className="page-not-found-body">
            <h1 className="page-not-found-text-404">404</h1>
            <h2 className="page-not-found-text-description">Sorry, we couldn't find that page.</h2>
        </div>
    }
}