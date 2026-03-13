import {Routes,Route,Link} from "react-router-dom"

function Page({title}){
return(
<div style={{padding:40,fontFamily:"Arial"}}>
<h1>{title}</h1>
<p>Site oficial do sistema Cálculo Light.</p>
</div>
)}

export default function App(){
return(
<div>
<nav style={{padding:20,background:"#000",color:"#fff",display:"flex",gap:20}}>
<Link to="/" style={{color:"#fff"}}>Home</Link>
<Link to="/recursos" style={{color:"#fff"}}>Recursos</Link>
<Link to="/planos" style={{color:"#fff"}}>Planos</Link>
<Link to="/login" style={{color:"#fff"}}>Login</Link>
</nav>

<Routes>
<Route path="/" element={<Page title="Cálculo Light"/>}/>
<Route path="/recursos" element={<Page title="Recursos"/>}/>
<Route path="/planos" element={<Page title="Planos SaaS"/>}/>
<Route path="/login" element={<Page title="Login do Sistema"/>}/>
</Routes>

</div>
)}
