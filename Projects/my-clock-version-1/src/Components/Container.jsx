import styles from "./Container.module.css"
const Container = ({children})=>{
   return <div class={`${styles.container}`}>{children}</div>
}
export default Container;