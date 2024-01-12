import styles from "./index.module.scss";
import Container from "../../../components/Container";
import DecorLine from "../../../components/DecorLine";

const AboutText = () => {
  return (
    <section className={styles.aboutText}>
      <Container>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Balance in the simple through an informed marriage of design,
            functional and craft
          </h3>
          <div className={styles.descriptionBlock}>
            <DecorLine />
            <p className={styles.description}>
              {" "}
              <span className={styles.first}>
                Vexillologist vape microdosing freegan pork belly deep v direct
                trade cray single-origin coffee street art. Viral shaman
                mustache master cleanse, pour-over affogato poutine copper mug
                marfa fanny pack normcore. Lo-fi pop-up banjo portland, echo
                park hammock chillwave literally post-ironic ramps subway tile
                kitsch. Shaman tumblr fixie echo park street art. Enamel pin
                vaporware wayfarers, organic succulents hella sustainable
                cardigan.{" "}
              </span>{" "}
              <span>
                Sustainable hot chicken skateboard, dreamcatcher meggings
                actually squid. Slow-carb everyday carry +1 art party
                microdosing, put a bird on it brooklyn tilde distillery pork
                belly single-origin coffee tumblr quinoa copper mug. Affogato
                cold-pressed unicorn, viral intelligentsia leggings raw denim
                kombucha tote bag messenger bag chambray vape coloring book
                scenester. Activated charcoal wayfarers church-key tote bag
                synth brunch. Retro cornhole
              </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutText;
