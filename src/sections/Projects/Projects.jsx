import styles from "./ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import ProjectCard from "../../assets/common/ProjectCard";
import hipsster from "../../assets/hipster.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"></h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.linkedin.com/posts/sujal-thakur-317257287_mobileappdevelopment-hospitalitytech-innovation-activity-7201116030214004736-xZwU?utm_source=share&utm_medium=member_desktop"
          h3="Figma"
          p="UI/UX Design"
        />
        <ProjectCard
          src={freshBurger}
          link="https://lnkd.in/gYP-4vfz"
          h3="Instantly"
          p="Effortless info at your fingertips"
        />
        <ProjectCard
          src={hipsster}
          link="https://lnkd.in/gYP-4vfz"
          h3="PlantMedix"
          p="AI-powered plant care"
        />
      </div>
    </section>
  );
}

export default Projects;
