import React from 'react';
import classes from './Navbar.module.scss';
import {Link} from "@mui/material";

const Navbar = () => {
    return (
        <div className={classes.container}>
            <nav>
                <Link
                    className={classes.listItem}
                    sx={{m: 1}}
                    underline={"none"}
                    href="#"
                >
                    главная
                </Link>
                <Link className={classes.listItem}
                      sx={{m: 1}}
                      underline={"none"}
                      href="#"
                >
                    клиенты
                </Link>
                <Link className={classes.listItem}
                      sx={{m: 1}}
                      underline={"none"}
                      href="#"
                >
                    считалка
                </Link>
                <Link className={classes.listItem}
                      sx={{m: 1}}
                      underline={"none"}
                      href="#"
                >
                    модерация
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;