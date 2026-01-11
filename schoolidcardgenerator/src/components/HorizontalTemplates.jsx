import IDCard from './IDCard'

export default function HorizontalTemplates({selectedPerson,setSelectedTemplates}){
    const theme = ['theme1','theme2', 'theme3'];//available three themes variants for the horizontal orientation

    return(
        <>
          {theme.map((themenumber,index)=>(
            <IDCard
           key={index} 
           selectedPerson={selectedPerson}
           orientation="horizontal"
           theme={themenumber}
           setSelectedTemplates={setSelectedTemplates}
           isPrintable={true}/** * isPrintable={true} tells the IDCard to render the checkbox unlike in the "Templates to be printed" section.*/
           />))}  
        </>
    )
}