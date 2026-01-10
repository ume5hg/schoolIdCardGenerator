import HorizontalTemplates from "../components/HorizontalTemplates"
import VerticalTemplates from "../components/VerticalTemplates"
import IDCard from '../components/IDCard'
import {useState,useRef} from 'react'
import html2pdf from 'html2pdf.js'


export default function CardLayouts({selectedPerson}){
    const [selectedTemplates, setSelectedTemplates] = useState([]);
    function handleSelectAll(e){
        const isChecked = e.target.checked;
        setSelectedTemplates(()=>{
            if(isChecked){
                return ["horizontal-theme1","horizontal-theme2","horizontal-theme3","vertical-theme1","vertical-theme2","vertical-theme3"];
            }
            else{
                return [];
            }
            
        })
    }
    const refElement = useRef();
    const handleDownload=()=>{
        const printRef = refElement.current;
        const opt={
            margin:0.5,
            filename:'IDCard.pdf',
            image:{type:'jpeg',quality:0.98},
            html2canvas:{scale:2, useCORS:true, logging:false},
            jsPDF:{unit:'in',format:'letter',orientation:'portrait'},
            pagebreak:{mode:['avoid-all','css','legacy']}
        };
        html2pdf().set(opt).from(printRef).save();
    };
    return(
        <section className="card-layouts-section">
            <h2 className="layouts-heading">Card Layouts</h2>
            <p>Select the checkbox to download your preferred template as a pdf file.</p> 
            <div className="button-container">
                <input type="checkbox" name="Select-all" id="select-all" onChange={handleSelectAll} />
                <label for="select-all">Select all</label>
                <button className="download-button" 
                disabled={selectedTemplates.length===0}
                onClick={handleDownload}>Download</button>
            </div>
            <div className="vertical-layouts">
                <h3 className="layouts-subheading">Vertical Layouts</h3>
                <div className="templates-container">
                    <VerticalTemplates selectedPerson={selectedPerson} setSelectedTemplates={setSelectedTemplates}/>
                </div>
            </div>
            <div className="horizontal-layouts">
                <h3 className="layouts-subheading">Horizontal Layouts</h3>
                <div className="templates-container">
                    <HorizontalTemplates selectedPerson={selectedPerson} setSelectedTemplates={setSelectedTemplates}/>
                </div>    
            </div>  

            <div className="templates-to-print"
                ref={refElement}>
                {selectedTemplates.map((templateId,index)=>{
                    const [orientation,theme] = templateId.split('-')

                    return(
                        <IDCard key={index}
                        selectedPerson={selectedPerson}
                        orientation={orientation}
                        theme={theme}
                        isPrintable={false} />
                    )
                })}
            </div>

        </section>
    )
}