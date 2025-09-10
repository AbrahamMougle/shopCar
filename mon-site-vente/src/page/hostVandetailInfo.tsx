import { useOutletContext } from "react-router-dom";
import type { Van } from "../../type/van";
export default function HostDetailInfo() {
  const van = useOutletContext<Van>()
  return (
    <div>
      <h2><strong>Name:</strong>{van.name}</h2>
      <p><strong>Description:</strong>{van.description}</p>
      <p><strong>Price:</strong> ${van.price}</p>
      <p><strong>Type:</strong> {van.type}</p>
    </div>
  )
}