import Image from "next/image";
import styles from "./page.module.css";
import dynamic from "next/dynamic";

const ClientApp = dynamic(() => import("../Main"), { ssr: false });

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientApp />
    </main>
  );
}
