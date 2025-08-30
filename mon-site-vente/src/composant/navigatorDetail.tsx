import CustomNavLink from "./customnavLink"
export default function NavigatorDetail() {
    return <div>
        <nav>
            <CustomNavLink to="." end >Detail</CustomNavLink>
            <CustomNavLink to="price" >Price</CustomNavLink>
            <CustomNavLink to="photo" >Photo</CustomNavLink>
            
            
        </nav>
    </div>
    
}