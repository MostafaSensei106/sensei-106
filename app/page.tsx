import styles from "./page.module.css";
import SenseiHeader from "@/app/com/header/sensei-header";
import SenseiHome from "@/app/com/home/sensei-home";
import SenseiServicesProjects from "./com/services/sensei-services-projects";
import SenseiEducation from "@/app/com/education/sensei-education";
import SenseiProjects from "@/app/com/services/sensei-projects";
import SenseiArt from "./com/art_gallery/sensei-art";
import SenseiContact from "@/app/com/contact_me/sensei-contact";

export default function Home() {
  return (
      <main className={styles.main}>
          <SenseiHeader></SenseiHeader>
          <SenseiHome></SenseiHome>
          <SenseiServicesProjects></SenseiServicesProjects>
          <SenseiEducation></SenseiEducation>
          <SenseiProjects></SenseiProjects>
          <SenseiArt></SenseiArt>
          <SenseiContact></SenseiContact>
      </main>
  );
}
