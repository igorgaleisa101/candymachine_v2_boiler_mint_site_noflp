import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
}));

const SectionTeam = () => {
    const classes = useStyles();

    return (
        <section id="team" className="section-black">
            <Container maxWidth="lg">
                <div className="section-title">
                    <h2>Team</h2>
                </div>
                <div className="section-body">
                    <Grid container justifyContent="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="team-member">
                                <div className="pic">
                                    <img src="/img/team/GODKNIGHT.png" className="img-fluid" alt="" />                                  
                                </div>
                                <div className="member-info">
                                    <h4>God Knight</h4>
                                    <span>Co-founder</span>
                                    <p>Co-founder of the project &amp; Project leader</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="team-member">
                                <div className="pic">
                                    <img src="/img/team/DARKNIGHT.png" className="img-fluid" alt="" />                                  
                                </div>
                                <div className="member-info">
                                    <h4>Dark Knight</h4>
                                    <span>Co-founder</span>
                                    <p>Co-founder of the project &amp; Community mananger</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="team-member">
                                <div className="pic">
                                    <img src="/img/team/METAKNIGHT.png" className="img-fluid" alt="" />                                  
                                </div>
                                <div className="member-info">
                                    <h4>Meta Knight</h4>
                                    <span>Developer</span>
                                    <p>Developer of the project</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className="team-member">
                                <div className="pic">
                                    <img src="/img/team/BLACKSMITHKNIGHT.png" className="img-fluid" alt="" />                                  
                                </div>
                                <div className="member-info">
                                    <h4>Blacksmith Knight</h4>
                                    <span>Artist</span>
                                    <p>Artist of the project</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </section>
    )
}

export default SectionTeam;