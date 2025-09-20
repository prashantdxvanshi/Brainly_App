import { useParams } from "react-router-dom"


const SharedView = () => {
  const { hash } = useParams();
  return (
    <div>
      this is shared view of the brain of the id ${hash}
    </div>
  )
}

export default SharedView
