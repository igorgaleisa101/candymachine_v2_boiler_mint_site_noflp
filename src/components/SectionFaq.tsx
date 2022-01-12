import { makeStyles } from "@material-ui/core";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
}));

const SectionFaq = () => {
    const classes = useStyles();

    return (
        <section id="faq" className="section-white faq">
            <Container maxWidth="lg">
                <div className="section-title">
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <div className="section-body">
                    <div className="faq-item">
                        <h2>What is the minting cost?</h2>
                        <p>The minting cost is 0.16 SOL.</p>
                        <hr />
                    </div>
                    <div className="faq-item">
                        <h2>When can I mint Royal Knights?</h2>
                        <p>You can mint your Knight 10/01/22 - 12am GMT.</p>
                        <hr />
                    </div>       
                    <div className="faq-item">
                        <h2>What is the benefit of owning a Royal Knight?</h2>
                        <p>Early access to upcoming collections, be part of the development ideas as well as periodical airdrops for our community.
(Owning a royal knight is one of the requirements for earning future rewards.)</p>
                        <hr />
                    </div>     
                    <div className="faq-item">
                        <h2>What is the total Royal Knights supply?</h2>
                        <p>The total supply is 1600 Royal Knights.</p>
                        <hr />
                    </div> 
                    <div className="faq-item">
                        <h2>What is the benefit of owning a Royal Knight, Dark Samurai and Vibeking?</h2>
                        <p>Whoever owns 1 NFT of the 3 collections will stand out from the rest, will have access to see secret projects in development and will have the chance to win one of the exclusive BOSSES out there at Krigsland.</p>
                        <hr />
                    </div>     
                    <div className="faq-item">
                        <h2>Which wallet can I use?</h2>
                        <p>Phantom Wallet</p>
                        <hr />
                    </div>          
                </div>
            </Container>
        </section>
    )
}

export default SectionFaq;