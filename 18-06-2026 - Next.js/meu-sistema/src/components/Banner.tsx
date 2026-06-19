import styles from './Banner.module.css';

export default function Banner() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Sabor & Arte</h1>
      <p className="text-white/90 font-medium">Experiências gastronômicas inesquecíveis.</p>
    </section>
  );
}