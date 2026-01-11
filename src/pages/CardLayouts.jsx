import HorizontalTemplates from "../components/HorizontalTemplates"
import VerticalTemplates from "../components/VerticalTemplates"
import IDCard from '../components/IDCard'
import {useState,useRef} from 'react'
import html2pdf from 'html2pdf.js'


export default function CardLayouts({selectedPerson}){
    const [selectedTemplates, setSelectedTemplates] = useState([]);//state to track the templates checkmarked by user
    function handleSelectAll(e){
        const isChecked = e.target.checked;
        //if select-all is checkmarked then the selectedTemplates will store templateIDs of all templates
        //if unchecked it will return empty array 
        setSelectedTemplates(()=>{
            if(isChecked){
                return ["horizontal-theme1","horizontal-theme2","horizontal-theme3","vertical-theme1","vertical-theme2","vertical-theme3"];
            }
            else{
                return [];
            }
            
        })
    }
    const refElement = useRef();//It targets the parent DOM elements of the element we want to convert to pdf
    const handleDownload=()=>{
        const printRef = refElement.current;
        //configurations of the html2pdf library
        const opt={
            margin:0.5,
            filename:'IDCard.pdf',
            image:{type:'jpeg',quality:0.98},
            html2canvas:{scale:2, useCORS:true, logging:false},
            jsPDF:{unit:'in',format:'letter',orientation:'portrait'},
            pagebreak:{mode:['avoid-all','css','legacy']}
        };
        html2pdf().set(opt).from(printRef).save();//converts the content of printref Element into Pdf and saves to the local device
    };
    return(
        <section className="card-layouts-section">
            <h2 className="layouts-heading">Card Layouts</h2>
            <p className="layouts-p">Select the checkbox of your preferred template to download as a pdf file.</p> 
            <div className="button-container">
                <input type="checkbox" name="Select-all" id="select-all" onChange={handleSelectAll} />{/* select-all checkbox */}
                <label for="select-all">Select all</label>
                <button className="download-button" 
                disabled={selectedTemplates.length===0}
                onClick={handleDownload}>Download</button>{/* Download button */}
            </div>


            <div className="vertical-layouts">{/* contains vertical templates*/}
                <h3 className="layouts-subheading">Vertical Layouts</h3>
                <div className="templates-container">
                    <VerticalTemplates selectedPerson={selectedPerson} setSelectedTemplates={setSelectedTemplates}/>
                </div>
            </div>



            <div className="horizontal-layouts">{/* contains horizontal templates */}
                <h3 className="layouts-subheading">Horizontal Layouts</h3>
                <div className="templates-container">
                    <HorizontalTemplates selectedPerson={selectedPerson} setSelectedTemplates={setSelectedTemplates}/>
                </div>    
            </div>  

            
            {/* Only renders the heading if the user has selected any template */}
            {selectedTemplates.length>0 && <h3 className="layouts-subheading" >Templates to be printed</h3>}

            {/* contains the templates that the user has selected to print */}
            <div className="templates-to-print"
                ref={refElement}>{/* sets the div as a target element */}
                
                {/* splits the templateIDs stored in selectedTemplates array and stores them as 'orientation' and 'theme'
                maps each templateID to an IDCard while passing the previously splitted 'orientation' and 'theme' as props */}
                {selectedTemplates.map((templateId,index)=>{
                    const [orientation,theme] = templateId.split('-')

                    return(
                        <IDCard key={index}
                        selectedPerson={selectedPerson}
                        orientation={orientation}
                        theme={theme}
                        isPrintable={false}/>
                    )
                })}
            </div>

        </section>
    )
}