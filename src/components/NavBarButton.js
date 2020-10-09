import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


export default function NavBarButton({name}) {
    return (
        <Button color="black">{name}</Button>
    );
  }