import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function NavBarButton(props) {
    return (
        <Link to='/gallery'>
            <Button color="black" >{props.children}</Button>
        </Link>
    );
}