import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RouteIndexBaseComponent } from '../common';

class Link extends RouteIndexBaseComponent<RouteComponentProps> {

  constructor(props: RouteComponentProps) {
    super(props);
    // console.log(props);
  }

  public render() {
    return (
      <h1>Link page</h1>
    );
  }
} 

export default Link;