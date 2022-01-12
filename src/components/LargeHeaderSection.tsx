import { makeStyles } from "@material-ui/core";
import useWindowDimensions from "../hooks/useWindowDimensions";

const useStyles = makeStyles(() => ({
    largeHeader: {
        position: 'relative',
        backgroundImage: 'url("/img/pattern.png"), url("/img/main-bg.jpg")',
        backgroundPosition: 'center'
    }
}));

const LargeHeaderSection = ({children}: {children: any}) => {
    const classes = useStyles();

    const { height } = useWindowDimensions();

    const fitHeaderStyle = {
        height: `${height}px`,
    }

    return (
        <div id="home" className={classes.largeHeader} style={fitHeaderStyle}>
            {children}
        </div>
    )
}

export default LargeHeaderSection;