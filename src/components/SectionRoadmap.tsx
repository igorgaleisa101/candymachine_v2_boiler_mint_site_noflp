import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(() => ({
}));

const SectionRoadmap = () => {
    const classes = useStyles();

    return (
        <section id="roadmap" className="section-black roadmap">
            <Container maxWidth="lg">
                <div className="section-title">
                    <h2>Roadmap</h2>
                </div>
                <div className="section-sub-title">
                    <h2>𝐏𝐇𝐀𝐒𝐄 𝟏 – 𝐑𝐎𝐘𝐀𝐋 𝐊𝐍𝐈𝐆𝐇𝐓𝐒⁣ ⁣🗡️</h2>
                </div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟎% - 𝐒𝐭𝐞𝐚𝐥𝐭𝐡 𝐦𝐢𝐧𝐭</h4>
                            <p className="rd-text">Release 1600 Royal knights into the Metaverse.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟓𝟎% - 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭</h4>
                            <p className="rd-text">We will start uploading the work of the next collection so that our                                                                                                           ⁣⁣⁣
                  community can see the next phase as well as Airdrops and Giveaways.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟏𝟎𝟎% - 𝐒𝐞𝐜𝐨𝐧𝐝 𝐌𝐚𝐫𝐤𝐞𝐭𝐩𝐥𝐚𝐜𝐞</h4>
                            <p className="rd-text">The supply is gone, time to get us known into secondary market.⁣⁣⁣⁣
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <div className="section-sub-title">
                    <h2>𝐏𝐇𝐀𝐒𝐄 𝟐-  𝐒𝐀𝐌𝐔𝐑𝐀𝐈 𝐅𝐀𝐂𝐓𝐈𝐎𝐍 ⁣⁣⛩️</h2>
                </div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟎% - 𝐃𝐀𝐑𝐊 𝐒𝐀𝐌𝐔𝐑𝐀𝐈𝐒</h4>
                            <p className="rd-text">An ancient faction from the land of Krigsland wants to fight and dominate territory. DARK SAMURAIS will be deployed into the Metaverse.</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟏𝟎𝟎% - 𝐒𝐔𝐏𝐏𝐋𝐘 𝐆𝐎𝐍𝐄</h4>
                            <p className="rd-text">Time to incorporate DARK SAMURAIS into secondary markets.⁣⁣⁣⁣
                            </p>
                        </div>
                    </Grid>
                </Grid>
                <div className="section-sub-title">
                    <h2>𝐏𝐇𝐀𝐒𝐄 𝟑 - 𝐕𝐈𝐊𝐈𝐍𝐆𝐒 𝐅𝐀𝐂𝐓𝐈𝐎𝐍⁣⁣ ⚒️</h2>
                </div>
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟎% - 𝐕𝐈𝐁𝐄𝐊𝐈𝐍𝐆𝐒</h4>
                            <p className="rd-text">The last of the 3 Krigsland factions, a powerful race of vikings ready to fight to ⁣⁣⁣⁣
               the death for their territory. VIBEKINGS will be deployed into the Metaverse.⁣⁣⁣⁣</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <div className="icon-box">
                            <h4 className="rd-title">𝟏𝟎𝟎% - 𝐒𝐔𝐏𝐏𝐋𝐘 𝐆𝐎𝐍𝐄</h4>
                            <p className="rd-text">Time to incorporate VIBEKINGS into secondary market⁣.⁣⁣⁣</p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default SectionRoadmap;