import HorizontalTemplates from "../components/HorizontalTemplates"
import VerticalTemplates from "../components/VerticalTemplates"
export default function CardLayouts({selectedPerson}){

    return(
        <section className="card-layouts-section">
            <h2 className="layouts-heading">Card Layouts</h2> 
            <div className="vertical-layouts">
                <h3 className="layouts-subheading">Vertical Layouts</h3>
                <div className="templates-container">
                    <VerticalTemplates selectedPerson={selectedPerson}/>
                </div>
            </div>
            <div className="horizontal-layouts">
                <h3 className="layouts-subheading">Horizontal Layouts</h3>
                <div className="templates-container">
                    <HorizontalTemplates selectedPerson={selectedPerson}/>
                </div>    
            </div>   
        </section>
    )
}