import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    animationload: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: '#fff',
        zIndex: 99999
    },
    loader: {
        width: '200px',
        height: '200px',
        fontSize: '0',
        position: 'absolute',
        left: '50%',
        top: '50%',
        backgroundImage: 'url("/img/loader.gif")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: '-100px 0 0 -100px'
    },
}));

const Loader = () => {
    const classes = useStyles();

    return (
        <div className={classes.animationload}>
            <div className={classes.loader}>
                Loading...
            </div>
        </div> 
    )
}

export default Loader;