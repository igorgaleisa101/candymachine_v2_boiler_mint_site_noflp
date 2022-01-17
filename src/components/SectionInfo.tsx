import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ImageSlider from "./ImageSlider";

const useStyles = makeStyles(() => ({
}));

const SectionInfo = () => {
    const classes = useStyles();

    return (
        <section id="info" className="section-white">
            <Container maxWidth="lg">
                <div className="section-title">
                    <h2>Info</h2>
                </div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="history-title">
                            <h3>
                                ABOUT OUR COLLECTION
                            </h3>                            
                        </div>
                        <div className="history-info">
                            Royal Knights takes place in Krigsland, a metaverse where 3 magical factions fight to see who is the most powerful among them.
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        {/* <div className="info-img">
                            <img className="info-promo" src="/img/promo.gif" alt="" />
                        </div> */}
                        <ImageSlider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="history-title">
                            <h3>HISTORY</h3>
                        </div>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} sm={12} md={6}>
                                <div className="history-info">                        
                                    Krigsland .... a magical land full of life and natural resources where ancient elemental factions have fought for years to conquer territories, despite how hostile the factions may be, it is not the only threat that they have to take care of outside as there are unknown magical BOSSES and each exploration can end with the encounter of one of these.
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <div className="history-info">                        
                                If little is known of the 3 existing Factions it is that each one of them has or had GODS that led the Faction, but so much time has passed that it is only a myth. 
                            One of the factions that has dominated most of the known territory are the Royal knights, a very old faction of powerful elemental knights that not everyone was worthy to become one. 
                            This faction claims to have one of the strongest GODs in history, today there are only 1600 Royal knights remaining.
                                </div>
                            </Grid>
                        </Grid>                        
                    </Grid>                    
                </Grid>
            </Container>
        </section>
    )
}

export default SectionInfo;