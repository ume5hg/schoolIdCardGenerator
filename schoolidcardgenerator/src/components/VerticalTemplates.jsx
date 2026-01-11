
import IDCard from './IDCard.jsx'
export default function VerticalTemplates({selectedPerson,setSelectedTemplates}){
    const theme =['theme1','theme2', 'theme3'];
    return(
        <>
           {theme.map((themenumber,index)=>(
            <IDCard key={index} selectedPerson={selectedPerson} orientation="vertical" theme={themenumber} setSelectedTemplates={setSelectedTemplates} isPrintable={true}
            /** * isPrintable={true} tells the IDCard to render the checkbox unlike in the "Templates to be printed" section.*/ />
           ))}
        </>
    )
}