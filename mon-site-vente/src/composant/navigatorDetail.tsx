import CustomNavLink from "./customnavLink"
export default function NavigatorDetail() {
    return <div>
        <nav>
            <CustomNavLink to="." end >Dashboard</CustomNavLink>
            <CustomNavLink to="host" >Price</CustomNavLink>
            <CustomNavLink to="photo" >Photo</CustomNavLink>
            
            
        </nav>
    </div>
    
}