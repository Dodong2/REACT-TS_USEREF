
interface TitleHolder {
    title: string;
}

const Title:React.FC<TitleHolder> = ({ title }) => {
  return (
    <>
    <h1>{title}</h1>
    </>
  )
}

export default Title