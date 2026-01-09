
import IDCard from './IDCard.jsx'
export default function VerticalTemplates({selectedPerson}){
    const theme =['theme1','theme2', 'theme3'];
    return(
        <>
           {theme.map((themenumber,index)=>(
            <IDCard key={index} selectedPerson={selectedPerson} orientation="vertical" theme={themenumber} />
           ))}
        </>
    )
}