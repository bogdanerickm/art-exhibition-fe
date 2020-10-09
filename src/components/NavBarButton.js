import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


export default function NavBarButton(props) {
    return (
        <Button color="black">{props.children}</Button>
    );
  }