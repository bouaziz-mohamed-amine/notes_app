import './style.css'
const MainContent = (props) => {
    return ( 
        <main className="container mt-3">
        {
         props.children 
        }
        </main>
     );
}
 
export default MainContent;